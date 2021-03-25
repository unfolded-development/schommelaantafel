export class ProgramService {
  constructor({ $axios, $config }) {
    this.axios = $axios
    this.config = $config
  }
  async fetchAll() {
    const response = await this.axios.get(this.config.media.apiUri)
    return response.data.media
  }
  async fetchLivestreamStatus(streamId) {
    const response = await this.axios.get(
      `https://cdn.jwplayer.com/live/channels/${streamId}.json`
    )
    return response.data
  }
}
