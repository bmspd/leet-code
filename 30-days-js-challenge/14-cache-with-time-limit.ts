class TimeLimitedCache {
  cache: Map<number, {value: number, tId: NodeJS.Timeout}>
  constructor() {
    this.cache = new Map()
  }

  set(key: number, value: number, duration: number): boolean {
    const res = !!this.cache.get(key);
    if (res) clearTimeout(this.cache.get(key).tId)
    const tId = setTimeout(() => {
      this.cache.delete(key)
    }, duration)
    this.cache.set(key, {value, tId})
    return res
  }

  get(key: number): number {
    return this.cache.get(key)?.value ?? -1
  }

  count(): number {
    return this.cache.size
  }
}


const obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)) // 42
console.log(obj.count()) // 1
