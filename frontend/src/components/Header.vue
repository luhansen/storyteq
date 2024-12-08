<template lang="pug">
q-header(elevated)
  q-toolbar.bg-primary.row.justify-between
    div(@click="navigateToHome").clickable
      img(src="../assets/storyteq-logo.png" height="40").q-mt-md
    div.row.web
      q-btn(label="Cities" outline color="white" @click="navigateToCities").q-mr-md
      q-btn(label="Books" outline color="white" @click="navigateToBooks")
    div.mobile
      q-btn(dense flat round icon="menu" @click="menu = true" color="white")
      q-drawer(
        v-model="menu"
        side="right"
        overlay
        behavior="mobile"
        elevated
      )
        div.column.q-py-xl
          q-btn(label="Cities" flat color="primary" @click="navigateToCities").q-mb-md
          q-btn(label="Books" flat color="primary" @click="navigateToBooks")
</template>

<script>

export default {
  name: 'HeaderComponent',
  components: { },
  data() {
    return {
      menu: false,
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    navigateToCities() {
      this.$router.push('/cities');
    },
    navigateToBooks() {
      this.$router.push('/books');
    },
  }
}
</script>

<style lang="sass" scoped>
.clickable
  cursor: pointer
span
  color: $primary
.web
  @media (max-width: 767px)
    display: none

.mobile
  display: none
  @media (max-width: 767px)
    display: inline

</style>
