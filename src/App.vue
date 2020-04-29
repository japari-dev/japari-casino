<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand>Japari Casino</b-navbar-brand>
    </b-navbar>

    <SimpleGame />
  </div>
</template>

<script>
import SimpleGame from './components/SimpleGame.vue'

export default {
  name: 'App',
  components: {
    SimpleGame
  }
}
</script>

<style>
</style>
