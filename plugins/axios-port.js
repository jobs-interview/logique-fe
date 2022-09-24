import { setAPIServiceConfigs } from '~/services/api.service'

export default ({ app, store, $config }) => {
  setAPIServiceConfigs(app.$axios, store, $config)
}
