export default function omit(obj, propName) {
  const objClone = {...obj}
  delete objClone[propName]
  return objClone
}
