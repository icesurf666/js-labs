import { o3 } from 'goss_proto'
import isNill from 'ramda/src/isNil' 

let names = []
let current = o3

while (!isNill(current)) {
  const { name } = current
  names = [...names, name]
  current = Object.getPrototypeOf(current)
}

// names.forEach(item => {
//   const list = document.createElement('ul')
//   const node = document.createElement('li')
//   node.innerText = item
//   list.appendChild(node)
// })
// const root = document.getElementById('root')
// root.append(list)

export { names }