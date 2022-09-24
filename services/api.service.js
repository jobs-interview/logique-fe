/* eslint-disable no-console */

// let $axios, $store, $config
let $axios, $config

export function setAPIServiceConfigs(axios, store, config) {
  $axios = axios
  // $store = store
  console.debug(config)
  $config = config
}

const ApiService = {
  apiUrl: $config ? $config.API_URL : null,
  header: true,

  v1() {
    this.apiUrl = $config ? `${$config.API_URL}` : null
    return this
  },

  v2() {
    this.apiUrl = $config ? $config.API2_URL : null
    return this
  },

  external() {
    this.header = false
    return this
  },

  internal() {
    this.header = true
    return this
  },

  setHeaderToken(headers) {
    if (this.header) {
      // headers.Authorization = $store.$auth.strategy.token.get()
      // headers.Authorization = $config.API_TOKEN
    }
    return headers
  },

  async get(resource, params = {}) {
    // headers = this.setHeaderToken(headers)
    let p = { params }
    p = { ...p }

    // let res = null
    // try {
    //   res = await $axios.get(`${this.apiUrl}/${resource}`, p)
    // } catch (e) {
    //   console.log('-- Error: api.service.js → get()')
    //   console.log(e)
    //   this.handleError(e, () => {
    //     this.get(resource, params, headers)
    //   })
    // }
    // return res

    return await $axios.get(`${this.apiUrl}/${resource}`, p)
  },

  async post(resource, params, headers = {}, config = {}) {
    headers = this.setHeaderToken(headers)
    config.headers = headers

    // let res = null
    // try {
    //   res = await $axios.post(`${this.apiUrl}/${resource}`, params, config)
    // } catch (e) {
    //   console.log('-- Error: api.service.js → post()')
    //   console.log(e)
    //   this.handleError(e, () => {
    //     this.post(resource, params, headers, config)
    //   })
    // }
    // return res

    return await $axios.post(`${this.apiUrl}/${resource}`, params, config)
  },

  async postWithoutAuthorization(resource, params) {
    return await $axios.post(`${this.apiUrl}/${resource}`, params)
  },

  async put(resource, params, headers = {}, config = {}) {
    headers = this.setHeaderToken(headers)
    config.headers = headers

    // let res = null
    // try {
    //   res = await $axios.put(`${this.apiUrl}/${resource}`, params, config)
    // } catch (e) {
    //   console.log('-- Error: api.service.js → put()')
    //   console.log(e)
    //   this.handleError(e, () => {
    //     this.put(resource, params, headers, config)
    //   })
    // }
    // return res

    return await $axios.put(`${this.apiUrl}/${resource}`, params, config)
  },

  async patch(resource, params, headers = {}, config = {}) {
    headers = this.setHeaderToken(headers)
    config.headers = headers

    // let res = null
    // try {
    //   res = await $axios.patch(`${this.apiUrl}/${resource}`, params, config)
    // } catch (e) {
    //   console.log('-- Error: api.service.js → patch()')
    //   console.log(e)
    //   this.handleError(e, () => {
    //     this.patch(resource, params, headers, config)
    //   })
    // }
    // return res

    return await $axios.patch(`${this.apiUrl}/${resource}`, params, config)
  },

  async delete(resource, params, headers = {}, config = {}) {
    headers = this.setHeaderToken(headers)
    config.headers = headers

    // let res = null
    // try {
    //   res = await $axios.delete(`${this.apiUrl}/${resource}`, params, config)
    // } catch (e) {
    //   console.log('-- Error: api.service.js → delete()')
    //   console.log(e)
    //   this.handleError(e, () => {
    //     this.delete(resource, params, headers, config)
    //   })
    // }
    // return res

    return await $axios.delete(`${this.apiUrl}/${resource}`, params, config)
  },

  handleError(e, cb) {
    console.log(e.response.status)
    if (e.response.status === 401) {
      setTimeout(() => {
        cb()
      }, 300)
    }
  },
}

export default ApiService
