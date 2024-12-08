<template lang="pug">
  q-page
    div.text-center(style="max-width: 600px; margin: 0 auto;")
      h1.text-h4 Welcome to the Autocomplete Challenge
      p.text-subtitle1(style="margin: 16px 0;")
        | Select one of the options below to start:
      q-btn-group(spread style="margin: 24px 0;")
        q-btn(label="Search Cities" color="primary" size="lg" icon="location_city" @click="$router.push('/cities')")
        q-btn(label="Search Books" color="secondary" size="lg" icon="menu_book" @click="$router.push('/books')")
      
      q-separator
  
      div(style="margin-top: 32px;")
        h2.text-h6 About the Project
        p.text-body2
          | This is a Vue.js project built to demonstrate the use of autocompletes with 
          strong Vuex, Pug, Quasar
          | . Explore how to search for cities and books efficiently.
        
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    methods: {},
  };
  </script>
  
  <style scoped>
  </style>
  