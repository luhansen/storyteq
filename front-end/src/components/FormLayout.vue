<template lang="pug">
div
  q-card(flat)
    q-card-section.q-pa-none
      h4.q-ma-md {{ title }}
      span {{ description }}
    q-card-section.q-pa-none.input-component
      div.column.input-width
        q-input(
          outlined
          v-model="input"
          :placeholder="placeholder"
          :loading="loading"
          autofocus
        ).flex-1
        div.suggestion-dropdown(v-if="results.length > 0")
          q-list
            q-item(
              v-for="(result, index) in results"
              :key="index"
              clickable
              @click="selecionarSugestao(suggestion)"
            )
              q-item-section {{ result }}
        div.suggestion-dropdown(v-else-if="input.length >= 3")
          q-list
            q-item
              q-item-section.no-results-message No results found for the search.
</template>

<script>
export default {
  name: "FormLayout",
  components: { },
  props: {
    title: String,
    description: String,
    placeholder: String,
    results: Array,
    searchFunction: Function,
  },
  data() {
    return {
      input: "",
      loading: false,
    };
  },
  computed: {},
  methods: {
    selecionarSugestao() {
    },
    handleSearch() {
      this.searchFunction(this.input);
    }
  },
  watch:{
    input(newValue) {
      this.loading = true
      this.handleSearch(newValue)
      this.loading = false
    }
  }
}
</script>

<style lang="sass" scoped>
.input-width
  width: 100%
  max-width: 300px
  justify-self: center
.suggestion-dropdown
  width: 100%
  top: 100%
  background-color: white
  border: 1px solid #ccc
  z-index: 1000
  max-height: 200px
  overflow-y: auto
</style>
