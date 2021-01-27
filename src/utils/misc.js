export function rand (n) {
  return Math.floor(Math.random() * n)
}

export function sample (array) {
  return array[rand(array.length)]
}
