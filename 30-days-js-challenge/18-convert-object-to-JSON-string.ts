function jsonStringify(object: any): string {
  if (typeof object === 'string') return `"${object.toString()}"`
  if (typeof object !== 'object') return object.toString()
  if (object === null) return 'null'
  if (Array.isArray(object)) {
    return `[${object.map((el) => jsonStringify(el)).toString()}]`
  }
  const keys = Object.keys(object)
  let res = ''
  for (let i = 0; i < keys.length; i++) {
    res += `"${keys[i]}":${jsonStringify(object[keys[i]])}`
    if (i !== keys.length - 1) res += ','
  }
  return `{${res}}`
}
console.log(jsonStringify({"a":"str","b":-12,"c":true,"d":null}))