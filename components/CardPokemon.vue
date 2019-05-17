<template>
  <div class="CardPokemon">
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="(item, key) in data" :key="key">
        <div class="box" @click="getIdPokemon(item.url)">
          <h3 class="subtitle is-3">{{ item.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
*
* CardPokemon Component
*
* @author efrenmartinez
* @copyright 2019.
*/
export default {
  name: "CardPokemon",
  props: {
    data: {
      type: Array,
      default: Array
    }
  }
};
</script>
