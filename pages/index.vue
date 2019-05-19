<template>
  <div class="container">
    <h1 class="title is-1">List of pokemons</h1>
    <card-pokemon :data="results"/>
  </div>
</template>

<script>
/**
*
* index Component
*
* @author efrenmartinez
* @copyright 2019.
*/
import CardPokemon from '~/components/CardPokemon.vue'
import axios from 'axios'
export default {
  name: "index",
  components: {
    CardPokemon
  },
  data() {
    return {
      API: process.env.API_URL,
      results: []
    }
  },
  mounted() {
    this.getPokemons()
  },
  methods: {
    getPokemons(){
      axios.get(`${this.API}`)
        .then(response => {
          this.results = response.data
        })
        .catch(e => {
          console.log(e)
        })
        .finally(()=>{})
    }
  }
}
</script>

<style scoped>
</style>
