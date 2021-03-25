require('dotenv').config()
const fetch = require('node-fetch')

const sha1 = require('js-sha1') // https://github.com/emn178/js-sha1

// https://developer.jwplayer.com/jwplayer/docs/authentication
// https://developer.jwplayer.com/jwplayer/docs/upload-files

//
const createVideo = async () => {
  const params = {
    api_format: 'json',
    api_key: process.env.V1_API_KEY,
    api_nonce: Math.random().toString().substr(-8),
    api_timestamp: Math.floor(new Date().getTime() / 1000),
  }
  const paramKeys = Object.keys(params).sort()

  let paramsString = ''
  for (const paramKey of paramKeys) {
    if (paramsString) paramsString += '&'
    paramsString += `${paramKey}=${params[paramKey]}` // encode?
  }
  // console.log(paramsString)

  const paramsStringIncludingSecret = paramsString + process.env.V1_API_SECRET
  // console.log(paramsStringIncludingSecret)

  const api_signature = sha1(paramsStringIncludingSecret)
  // console.log(api_signature)

  const url = `https://api.jwplatform.com/v1/videos/create?${paramsString}&api_signature=${api_signature}`
  // console.log(url)

  const body = {
    sourcetype: 'file',
    description: 'My description',
    // custom_params: { upload_for_media_id: 'ABC' },
    // 'custom.params': { upload_for_media_id: 'DEF' },
    'custom.upload_for_media_id': 'GHI',
  }

  const options = {
    method: 'POST',
    body,
  }
  // console.log(options)

  const videosCreate = await fetch(url, options)
  // console.log(videosCreate)

  const json = await videosCreate.json()
  const { link } = json
  const { query } = link

  const uploadUrl = `https://${link.address}${link.path}?api_format=json&key=${query.key}&token=${query.token}`
  return uploadUrl
}

//
createVideo().then(console.log).catch(console.error)
