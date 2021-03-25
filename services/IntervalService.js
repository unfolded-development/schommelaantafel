export class IntervalService {
  runningActions = {}

  constructor({ store }) {
    this.store = store
  }
  start(name, time = 60000) {
    // Only run on the client
    if (!process.client) return

    // Stop the interval if the action is already running
    this.stop(name)

    // Instantly run the action
    this.store.dispatch(name)

    this.runningActions[name] = setInterval(() => {
      this.store.dispatch(name)
    }, time)
  }
  stop(name) {
    if (!this.runningActions[name]) return
    clearInterval(this.runningActions[name])
    delete this.runningActions[name]
  }
}
