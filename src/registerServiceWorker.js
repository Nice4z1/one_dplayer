/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB')
    },
    registered() {},
    cached() {},
    updatefound() {},
    updated() {},
    offline() {},
    error(error) {}
  })
}
