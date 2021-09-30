const exec = require('./callFromCommandline.js')

async function addOZPackage() {
  await exec.commandlineCall(
    `yarn add openzeppelin/${process.argv[2]}/contracts@npm:@openzeppelin/contracts@${process.argv[3]}`,
  )
}
addOZPackage()
