import { commandlineCall } from './callFromCommandline'
import * as versionsImport from './resources/package_versions.json'

export async function addPackage(): Promise<void> {
  // eslint-disable-next-line
  const versions: any = versionsImport
  const packageName: string = process.argv[2]
  const versionIdentifier: string = versions[packageName][process.argv[3]]
  await commandlineCall(`yarn add ${packageName}${versionIdentifier}`)
}
addPackage()
