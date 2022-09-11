const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '7knr7anb',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skvGXTjvHhRISxIu4BDnEY05w7k0onZ8GqvRwBiRAFYg0KUjNjGGdaXluU8WtDvfqi3WKw05FQXm9FfZDRuRn0AKhtQNmNW6v1QLbQOUXz55y6Z4Nji2MLYPuaXUZOxl77fC3d8PPCCxQ7sN61ggGZZ8h3264M3JaehgjjgR3gjcCdfcj8bo', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;