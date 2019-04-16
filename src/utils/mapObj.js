export default function mapObj(obj, mapFn) {
  return Object.keys(obj).reduce(
    (finalObj, key) =>
      Object.assign({}, finalObj, {[key]: mapFn(obj[key], key)}),
    {}
  )
}
