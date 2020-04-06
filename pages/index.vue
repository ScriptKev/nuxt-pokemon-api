<template>
  <div class="container">
    <h1 class="title is-1">Lista de pokemones</h1>
    <!-- <card-pokemon :data="results"/> -->
  </div>
</template>

<script>
/**
*
* Index Component
*
* @author efrenmartinez
* @copyright 2019.
*/
// import CardPokemon from '~/components/CardPokemon.vue'
import axios from 'axios'
export default {
  name: "index",
  components: {
    // CardPokemon
  },
  computed: {
    items () {
      return this.$store.getters['pokemon/items']
    },
    count () {
      return this.$store.getters['pokemon/count']
    },
    next () {
      return this.$store.getters['pokemon/next']
    },
    previous () {
      return this.$store.getters['pokemon/previous']
    }
  },
  mounted () {
    this.$store.dispatch('pokemon/query')
  }
}
</script>

<style scoped>
</style>
