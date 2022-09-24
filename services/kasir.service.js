import ApiService from './api.service'

export const KasirPintarService = {
  async fetchDetailById({ id }) {
    return await ApiService.v1().get(`kasir-pintar/custom-kasir-pintar/${id}`)
  },

  async fetchDetailBySubId({ id }, param) {
    return await ApiService.v1().get(
      `kasir-pintar/custom-kasir-pintar/${id}`,
      param
    )
  },
}
