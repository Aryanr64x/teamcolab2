const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '7knr7anb',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skDZnZLPaDAn0pEjFCTU3lkIucZ6PpUbgOfrcKgBI3vczgSjn5stF79mbZSNLBlio7gBuxJn4NOoXAkokTmfYsLotl8H4ZFaWTF789QxNhW9gUjxvcA0PNE5qChcHY9rAF0DYyb1PGfkaIZAtSrEJiZGVhm3zZJ0nO0ZMqyIYF8PNO2L3kDI', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;