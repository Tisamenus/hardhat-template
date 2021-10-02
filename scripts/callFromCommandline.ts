import * as util from 'util'
import { exec } from 'child_process'
const pexec = util.promisify(exec)
// eslint-disable-next-line
export async function commandlineCall(strarg: string): Promise<any> {
  return await pexec(strarg)
}
