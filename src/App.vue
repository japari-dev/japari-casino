<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand><img src="./assets/logo.png" /></b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="#/SimpleGame">Simple Game</b-nav-item>
        <b-nav-item href="#/HighLow">High Low</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
</script>

<style>
</style>
