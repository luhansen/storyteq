<template lang="pug">
  FormLayout(
    title="Books Search"
    description="Search for your favorite book"
    placeholder="Book"
    :results="searchResults"
    :searchFunction="searchBooks"
  )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FormLayout from '@/components/FormLayout.vue';

export default {
  name: "BooksPage",
  components: { FormLayout },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('books', ['searchResults']),
  },
  methods: {
    ...mapActions('books', ['searchBooks']),
  },
};
</script>

<style lang="sass" scoped>
</style>
