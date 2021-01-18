<template>
  <div class="high-low">
    <div>Balance:</div>
    <div>${{ balance_except_bet.toLocaleString() }}.00</div>

    <div>Current Number:</div>
    <div>{{ currentNumber }}</div>

    <div>Bet:</div>
    <AmountInput prepend="$" append=".00" v-model="bet" />

    <div>
      <Button v-on:click="high">High</Button>
      <Button v-on:click="low">Low</Button>
      <Button v-on:click="charge">Give me more cash!</Button>
      <Button v-on:click="tokuseirei">Reset my fault</Button>
    </div>

    <div>
      <Button v-on:click="high_double">High (double)</Button>
      <Button v-on:click="low_double">Low (double)</Button>
    </div>

    <WinLoseAlert v-bind:win="win" />
  </div>
</template>

<script>
export default {
  name: 'HighLow',
  data: function () {
    return {
      balance: 100,
      bet: 10,
      win: null,
      currentNumber: Math.floor(Math.random() * 13) + 1
    }
  },
  computed: {
    balance_except_bet: function () {
      return this.balance - this.bet
    }
  },
  methods: {
    high: function () {
      this.balance -= this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = Math.floor(Math.random() * 13) + 1

      if (this.currentNumber > prevNumber) {
        this.win = true
        this.balance += this.bet * 2
      } else {
        this.win = false
      }
    },
    low: function () {
      this.balance -= this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = Math.floor(Math.random() * 13) + 1

      if (this.currentNumber < prevNumber) {
        this.win = true
        this.balance += this.bet * 2
      } else {
        this.win = false
      }
    },
    high_double: function () {
      this.bet *= 2
      this.balance -= this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = Math.floor(Math.random() * 13) + 1

      if (this.currentNumber > prevNumber) {
        this.win = true
        this.balance += this.bet * 2
      } else {
        this.win = false
      }
    },
    low_double: function () {
      this.bet *= 2
      this.balance -= this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = Math.floor(Math.random() * 13) + 1

      if (this.currentNumber < prevNumber) {
        this.win = true
        this.balance += this.bet * 2
      } else {
        this.win = false
      }
    },
    charge: function () {
      this.balance += 1000000
    },
    tokuseirei: function () {
      this.balance = 100
    }
  }
}
</script>

<style scoped>
</style>
