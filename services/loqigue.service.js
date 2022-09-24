import ApiService from './api.service'

export const LoqigueService = {
  async fetchSearchByParam(param) {
    return await ApiService.v1().get(`search`, param)
  },
}
