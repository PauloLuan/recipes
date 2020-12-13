<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Title</h3>
      <md-button><router-link to="/">Home</router-link></md-button>
      <md-button class="md-primary"><router-link to="/about">About</router-link></md-button>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>

<script>
export default {
  name: 'ContentActions'
}
</script>
