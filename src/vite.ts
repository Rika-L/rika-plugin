import type { Plugin } from 'vite'
import con from './main/console'

function Rika(): Plugin {
  return {
    name: 'plugin-rika',
    buildStart() {
      con()
    },
  }
}

export default Rika
