import { ProgramService } from '@/services/ProgramService'
import { IntervalService } from '~/services/IntervalService'

export default (context, inject) => {
  inject('services', {
    interval: new IntervalService(context),
    program: new ProgramService(context),
  })
}
