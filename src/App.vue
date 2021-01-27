<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand
        ><img src="./assets/logo.png" width="220pm"
      /></b-navbar-brand>
    </b-navbar>

    <Home />
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  components: {
    Home: Home
  }
}
</script>

<style>
</style>
