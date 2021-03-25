export const compareObjects = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export const getNuxtOnClient = () => {
  return typeof window == 'object' && window ? window.$nuxt : null
}
