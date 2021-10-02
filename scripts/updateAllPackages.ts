import { commandlineCall } from './callFromCommandline'
import { dependencies, devDependencies } from '../package.json'

export async function updateAllPackages(): Promise<void> {
  for (const dependency of Object.keys(devDependencies)) {
    await commandlineCall(`yarn upgrade ${dependency}`)
  }
  if (process.argv[2] == '+prod') {
    for (const dependency of Object.keys(dependencies)) {
      await commandlineCall(`yarn upgrade ${dependency}`)
    }
  }
}
updateAllPackages()
