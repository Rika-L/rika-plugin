import type { RsbuildPlugin } from '@rsbuild/core'
import con from './main/console'

function Rika(): RsbuildPlugin {
  return {
    name: 'plugin-rika',
    setup(api) {
      api.onAfterStartDevServer(() => {
        con()
      })
    },
  }
}

export default Rika
