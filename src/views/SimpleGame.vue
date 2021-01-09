<template>
  <div class="simple-game">
    <div>Total:</div>
    <div>${{ total_except_bet.toLocaleString() }}.00</div>

    <div>Your bet:</div>
    <b-input-group prepend="$" append=".00">
      <b-form-input v-model.number="bet" />
    </b-input-group>

    <b-button v-on:click="play" variant="primary">Play</b-button>
    <b-button v-on:click="charge" variant="primary"
      >Give me more cash!</b-button
    >
    <b-button v-on:click="tokuseirei" variant="primary"
      >Reset my fault</b-button
    >

    <div v-if="win != null">
      <b-alert v-if="win" variant="success" show>You win!</b-alert>
      <b-alert v-else variant="danger" show>You lose..</b-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleGame',
  data: function () {
    return {
      total: 100,
      bet: 10,
      win: null
    }
  },
  computed: {
    total_except_bet: function () {
      return this.total - this.bet
    }
  },
  methods: {
    play: function () {
      this.total -= this.bet

      var r = Math.floor(Math.random() * 2)

      if (r === 1) {
        this.win = true
        this.total += this.bet * 2
      } else {
        this.win = false
      }

      this.bet = 0
    },
    charge: function () {
      this.total += 1000000
    },
    tokuseirei: function () {
      this.total = 100
    }
  }

}
</script>

<style scoped>
</style>
