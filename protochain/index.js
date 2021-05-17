import { o3 } from 'goss_proto'
import isNill from 'ramda/src/isNil' 

let names = []
let current = o3

while (!isNill(current)) {
  const { name } = current
  names = [...names, name]
  current = Object.getPrototypeOf(current)
}

export { names }