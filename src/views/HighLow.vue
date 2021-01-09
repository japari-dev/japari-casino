<template>
  <div class="high-low">
    <div>Total:</div>
    <div>${{ total_except_bet.toLocaleString() }}.00</div>

    <div>Current Number:</div>
    <div>{{ currentNumber }}</div>

    <div>Your bet:</div>
    <b-input-group prepend="$" append=".00">
      <b-form-input v-model.number="bet" />
    </b-input-group>

    <div>
      <b-button v-on:click="high" variant="primary">High</b-button>
      <b-button v-on:click="low" variant="primary">Low</b-button>
      <b-button v-on:click="charge" variant="primary"
        >Give me more cash!</b-button
      >
    </div>

    <div>
      <b-button v-on:click="high_double" variant="primary"
        >High (double)</b-button
      >
      <b-button v-on:click="low_double" variant="primary"
        >Low (double)</b-button
      >
    </div>

    <div v-if="win != null">
      <b-alert v-if="win" variant="success" show>You win!</b-alert>
      <b-alert v-else variant="danger" show>You lose..</b-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HighLow',
  data: function () {
    return {
      total: 100,
      bet: 0,
      win: null,
      currentNumber: Math.floor(Math.random() * 13) + 1
    }
  },
  computed: {
    total_except_bet: function () {
      return this.total - this.bet
    }
  },
  methods: {
    high: function () {
      this.total -= this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = Math.floor(Math.random() * 13) + 1

      if (this.currentNumber > prevNumber) {
        this.win = true
        this.total += this.bet * 2
      } else {
        this.win = false
      }
    },
    low: function () {
      this.total -= this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = Math.floor(Math.random() * 13) + 1

      if (this.currentNumber < prevNumber) {
        this.win = true
        this.total += this.bet * 2
      } else {
        this.win = false
      }
    },
    high_double: function () {
      this.bet *= 2
      this.total -= this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = Math.floor(Math.random() * 13) + 1

      if (this.currentNumber > prevNumber) {
        this.win = true
        this.total += this.bet * 2
      } else {
        this.win = false
      }
    },
    low_double: function () {
      this.bet *= 2
      this.total -= this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = Math.floor(Math.random() * 13) + 1

      if (this.currentNumber < prevNumber) {
        this.win = true
        this.total += this.bet * 2
      } else {
        this.win = false
      }
    },
    charge: function () {
      this.total += 1000000
    }
  }
}
</script>

<style scoped>
</style>
