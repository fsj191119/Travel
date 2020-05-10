import Vue from 'vue'

import 'quasar/dist/quasar.css'
import iconSet from 'quasar/icon-set/mdi-v4.js'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
  },
  iconSet: iconSet
 })