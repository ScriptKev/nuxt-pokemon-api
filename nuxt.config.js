export default {
  head: {
    title: 'Lista de pokemon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  env: {
    API_URL: 'https://pokeapi.co/api/v2/'
  },
  css: ['bulma/css/bulma.css']
}