/* eslint-disable no-console */

import axios from 'axios'
import _ from 'lodash'

export default async function ({ store, $auth, next, $config }) {
  const Authorization = await $auth.strategy.token.get()
  if (_.isEmpty(store.state.user.role)) {
    try {
      const response = await axios.get(
        `${$config.API_URL}/custom-roles/${$auth.user.custom_role}`,
        {
          headers: {
            Authorization,
          },
        }
      )
      store.dispatch('user/setRole', { role: response.data })
    } catch (error) {
      console.log(error)
    }
  }
  try {
    const resLockedDate = await axios.get(
      `${$config.API_URL}/locked-dates?isActived=true`,
      {
        headers: {
          Authorization,
        },
      }
    )

    console.debug('middle', resLockedDate.data[0].lockedDate)
    store.dispatch('user/setLockedDate', {
      lockedDate: resLockedDate.data[0].lockedDate,
    })
  } catch (error) {
    console.log(error)
  }
  // // login with strapi

  //
}
