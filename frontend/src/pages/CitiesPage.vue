<template lang="pug">
  FormLayout(
    title="Cities Search"
    description="Search for your favorite city"
    placeholder="City"
    :results="searchResults"
    :searchFunction="searchCities"
  )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FormLayout from '@/components/FormLayout.vue';

export default {
  name: "CitiesPage",
  components: { FormLayout },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('cities', ['searchResults']),
  },
  methods: {
    ...mapActions('cities', ['searchCities']),
  },
};
</script>

<style lang="sass" scoped>
</style>
