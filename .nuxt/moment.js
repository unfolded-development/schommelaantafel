import moment from 'moment'

import 'moment-timezone'

moment.tz.setDefault('Europe/Amsterdam')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
