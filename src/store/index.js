import { createStore } from 'vuex'

import user from './modules/home'

export default createStore({
  modules: {
    user
  }
})
