<template lang="pug">
  q-page(class="flex flex-center")
    div(class="text-center")
      h1.text-h3.text-bold Oops! Page Not Found
      p.text-h6 The page you are looking for doesn't exist or has been moved.
      q-btn(to="/" label="Back to Home" color="primary" class="q-mt-md")
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="sass"  scoped>
.q-page
  min-height: 100vh

h1
  color: $primary

p
  color: #555
</style>
