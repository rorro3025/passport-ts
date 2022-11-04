import fs from 'fs'

let PATH = __dirname

const removeExtencion = (item: string) => {
  return item.split('.').shift()
}

console.log('routes in the directory')
fs.readdirSync(PATH).map((item, index) => {
  let name = removeExtencion(item)
  if (name !== 'list') console.log(index, item)
})


