const fs = require('fs')
const _path = require('path')

const toJson = data => JSON.stringify(
  data,
  null,
  '',
)

const readDir = (path, processFile) => {
  const files = fs.readdirSync(_path.join(__dirname, path))
  files.forEach(processFile)
}

const read = path => fs.readFileSync(
  _path.join(__dirname, path),
  'utf8',
)

const write = (path, data) => fs.writeFileSync(
  _path.join(__dirname, path),
  data,
)

exports.toJson = toJson
exports.readDir = readDir
exports.read = read
exports.write = write
