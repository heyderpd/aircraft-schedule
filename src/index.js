const { readDir, read, write } = require('./files')

const origin = '../static/'
const destiny = '../public/'

const copyFile = filename => {
  write(
    destiny + filename,
    read(origin + filename),
  )
}

const copy = () => readDir(origin, copyFile)

copy()
