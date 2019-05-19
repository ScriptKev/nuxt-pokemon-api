<template>
  <div class="columns is-multiline">
    <div class="column is-3" v-for="(item, index) in data" :key="index">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="item.ThumbnailImage" :alt="item.ThumbnailAltText">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p class="subtitle is-5">#{{ item.number }}</p>
            <p class="subtitle is-6">{{ item.name }}</p>
            <p class="subtitle is-5">Tipo:</p>
            <div class="tags" v-for="(tag, index) in item.type" :key="index">
              <span class="tag has-text-link">{{ tag }}</span>
            </div>
          </div>
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
