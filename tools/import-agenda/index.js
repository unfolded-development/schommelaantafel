require('dotenv').config()

const xlsxFile = require('read-excel-file/node');
const fetch = require('node-fetch');
const fs = require('fs')

const cExcelFileName = './20210316 - Agenda Invoer KD21.xlsx';
const cPlaceholderVideo = 'https://content.jwplatform.com/videos/r6bqP0J7-BMKdJiSc.mp4';
const cJWPlayerApiURL = `https://api.jwplayer.com/v2/sites/${process.env.SITE_ID}/`;

const cMaxImportItems = 100;

// prevent 429 - too many requests
const cThrottleDelayMs = 2500;

const log = (message, agendaitem=undefined,level='info') => {
  try {
    let ts = (new Date()).toISOString();
    let line = `${message}`;
    if(undefined!==agendaitem) { line+=`;${agendaitem.id};${agendaitem.titel}`}
    if(level==='error') {
      console.log(line);
    } else {
      console.error(line);
    }
    fs.appendFileSync('log.txt', `${ts};${line};` + JSON.stringify(agendaitem) + "\n");
  } catch(ex) {
    console.error('log - error %s', ex.message);
  }
}

// validate items: return result: false + meaningful comment when test fails.
// errors are reported to the user
const validate = (existingagendaitems, item, index, lastrecord) => {
  if(item.id in existingagendaitems) {
    return { result: false, message: `dubbele id ${item.id} gevonden voor item #${index}`, item}
  }
  
  let tracks = ['Orange Room','Oranjefans','Feestvierders','Verkenners','Designers','TechLovers'];
  if(false===tracks.includes(item.track)) {
    return { result: false, message: `ongeldige track ${item.track} ingevoerd voor item #${index}`, item}
  }
  if(false===['video','live', 'anders'].includes(item.type)) {
    return { result: false, message: `ongeldig type ${item.type} ingevoerd voor item #${index}`, item}
  }
  if(false===['Ja','Nee'].includes(item.public)) {
    return { result: false, message: `ongeldige public waarde ${item.public} ingevoerd voor item #${index}`, item}
  }
  
  if(false!==lastrecord&&item.track===lastrecord.track) {
    // items mogen overlappen
    // if(item.agendastart<lastrecord.agendaend) {
    //   return { result: false, message: `starttijd van item #${index} ligt voor eindtijd vorige item`, item}
    // }
  }
  
  return { result: true, message: '', item: undefined}
}

// if item exists (checked by external id) -> return { result: true, media id: <id> / false }
agendaItemExists = async (agendaid) => {
  let data = { result: false, jwid: false };
  try {
    // qs via options does not work for me
    const options = {
      method: 'GET',
      // code below does not work: possible reason: qs not implemented in node-fetch?
      // qs: {
      //     page: '1',
      //     page_length: '2',
      //     q: 'custom_params.name:agendaid+AND+custom_params.value:'+agendaid.toString()
      // },
      headers: {
        Accept: 'application/json',
        Authorization: process.env.API_KEY
      },
    };
    
    let q = 'custom_params.name:agendaid+AND+custom_params.value:' + agendaid.toString()
    let res = await fetch(cJWPlayerApiURL + 'media?page_length=5&page:1&q=' + q, options);
    if(res.status===200) {
      data.result=true;
      
      let result = await res.json();
      if(result.media.length>0) {
        data.jwid=result.media[0].id;
      } else {
        log('item niet gevonden %s',agendaid, result.media)
      }
    } else {
      log(`fout bij zoeken naar agendaitem ${agendaid} (statuscode ${res.status})`);
    }
  } catch(ex) {
    log(`fout bij zoeken naar agendaitem ${agendaid} (error ${ex.message})`);
  }
  
  return data;
}

upsertAgendaItem = async (agendaitem, jwid=false) => {
  let update = (jwid!==false)
  
  const body = {
    metadata: {
      title: agendaitem.titel,
      description: agendaitem.beschrijving===null?"":agendaitem.beschrijving,
      tags: [],
      publish_start_date:new Date(agendaitem.agendastart).toISOString(),
      custom_params: {
        'track': agendaitem.track,
        'type': agendaitem.type,
        'agendaid': agendaitem.id.toString(),
        'agendastart': new Date(agendaitem.agendastart).toISOString(),
        'agendaend': new Date(agendaitem.agendaend).toISOString(),
        'allow_import_delete': "Yes" // prevents deleting of items that were not auto inserted during import
      }
    }
  }
  
  if(true===agendaitem.public) { body.metadata.tags.push('public') }
  if("live"===agendaitem.type) {
    body.metadata.custom_params.livestream_channel_id=agendaitem.livestream_channel_id
  }
  if(false===update) {
    body.upload = {
      download_url: cPlaceholderVideo,
      method: 'fetch'
    }
  }
  
  let options = {
    method: false===update ? 'POST': 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: process.env.API_KEY,
    },
    body: JSON.stringify(body)
  };
  
  try {
    let url = cJWPlayerApiURL;
    if(false===update) {
      url += 'media' // insert
    } else {
      url += `media/${jwid}/`; // needed for update
    }
    
    let res = await fetch(url,options);
    if(201===res.status||200===res.status) {
      return true;
    } else {
      log(`api fout bij het verwerken een agenda item (statuscode ${res.status})`, agendaitem);
      return false;
    }
  } catch(ex) {
    log(`fout bij het verwerken een agenda item (error ${ex.message})`, agendaitem);
    return false;
  }
}

cleanupItems = async () => {
  let success=true;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: process.env.API_KEY
      },
    };
    
    let q = 'custom_params.name:allow_import_delete+AND+custom_params.value:Yes'
    let res = await fetch(cJWPlayerApiURL + 'media?page_length=1000&page:1&q=' + q, options);
    if(res.status===200) {
      let result = await res.json();
      if(result.media.length>0) {
        for(let mediaitem of result.media) {
          try {
            const url = cJWPlayerApiURL + `media/${mediaitem.id}/`;
            const options2 = {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                Authorization: process.env.API_KEY
              }
            };
            let res2 = await fetch(url, options2);
            log(`verwijder mediaitem ${mediaitem.id} [agendaid ${mediaitem.metadata.custom_params.agendaid}] (statuscode ${res2.status})`);
            
            await new Promise(r => setTimeout(r, cThrottleDelayMs));
          } catch(ex) {
            success=false;
            log(`fout bij het verwijderen van een mediaitem ${mediaitem.id} [agendaid ${mediaitem.metadata.custom_params.agendaid}] (error ${ex.message})`);
          }
        }
      }
    } else {
      success=false;
      log(`zoekfout bij het verwijderen van agendaitems (statuscode ${res.status})`);
    }
  } catch(ex) {
    success=false;
    log(`fout bij het verwijderen van agendaitems (error ${ex.message})`);
  }
  
  return success;
}

const convert2json = async (uitzenddatum) => {
  try {
    let sheets = await xlsxFile(cExcelFileName, { getSheets: true });
    if(-1===sheets.findIndex(sheet=>sheet.name==='programma')) {
      log('agenda sheet ontbreekt. Verwerking afgebroken')
      return false;
    }
    
    log('start uitvoer agenda update',undefined, 'info')
    
    let agendaitems = {};
    let validation = [];
    let lastrecord = false;
    let rows = await xlsxFile(cExcelFileName, { sheet: 'programma' });
    rows.forEach((item, index)=>{
      if(0===index) return; // skip headers
      
      let agendaitem = {
        track: item[0],
        agendastart: item[1],
        agendaend: item[2],
        titel: item[3],
        beschrijving: item[4],
        type: item[5],
        videofile: item[6],
        public: item[7],
        id: item[8],
        livestream_channel_id: item[9]
      }
      
      // validatie
      let result = validate(agendaitems, agendaitem, index, lastrecord);
      lastrecord = Object.assign({}, agendaitem);
  
      if(true!==result.result) {
        validation.push(result)
      } else {
        // omzetten / afgeleide velden berekenen
        agendaitem.agendastart = uitzenddatum + agendaitem.agendastart * 24*3600*1000;
        agendaitem.agendaend = uitzenddatum + agendaitem.agendaend * 24*3600*1000;
        agendaitem.videofile = agendaitem.videofile!==null ? agendaitem.videofile : "";
        agendaitem.public = agendaitem.public==='Ja'
        
        agendaitem.publishstart = agendaitem.agendastart;
        
        agendaitems[agendaitem.id]=Object.assign({}, agendaitem);
      }
    })

    if(validation.length>0) {
      log("validatiefouten gevonden. De agenda is niet doorgezet");
      console.log(validation);
      return;
    }
    
    for(let itemid in agendaitems) {
      let agendaitem = agendaitems[itemid]
      let existsresult = await agendaItemExists(agendaitem.id);
      if(existsresult.result===true) {
        if(existsresult.jwid===false) {
          log("Invoegen van nieuw agenda item", agendaitem, 'info')
          if(false===await upsertAgendaItem(agendaitem, existsresult.jwid)) {
            log('fout bij het verwerken van een agenda item', agendaitem);
          }
        } else {
          log("Bijwerken van bestaand agenda item", agendaitem, 'info')
          if(false===await upsertAgendaItem(agendaitem, existsresult.jwid)) {
            log('fout bij het bijwerken van een agenda item', agendaitem);
          }
        }
      } else {
        log('fout bij het controleren van een agenda item', agendaitem);
      }
      
      if(Number(itemid)>=cMaxImportItems) {
        log(`maximaal aantal items bereikt: verwerking afgebroken na ${cMaxImportItems} items`, agendaitem, 'info');
        break;
      }
      
      await new Promise(r => setTimeout(r, cThrottleDelayMs));
    }
  } catch(ex) {
    log(`importfout ${ex.message}`);
  }
}

const go = async () => {
  let uitzenddatum = Date.parse('27 Apr 2021 00:00:00 GMT+2')
  
  // await cleanupItems();
  
  // testcode!
  if(false) {
    uitzenddatum = Date.parse('18 Mar 2021 00:00:00 GMT+2')
    console.log("*********************************************************************")
    console.log("*********************************************************************")
    console.log("*********************************************************************")
    console.log("LET OP - LET OP - LET OP - LET OP - LET OP - LET OP - LET OP - LET OP")
    console.log("DE UITZENDDATUM IS HANDMATIG AANGEPAST NAAR %s",uitzenddatum);
    console.log("LET OP - LET OP - LET OP - LET OP - LET OP - LET OP - LET OP - LET OP")
    console.log("*********************************************************************")
    console.log("*********************************************************************")
    console.log("*********************************************************************")
    
    log("Run met aangepaste uitzenddatum");
  }
  
  await convert2json(uitzenddatum);
}

go();