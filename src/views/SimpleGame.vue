<template>
  <div class="simple-game">
    <div>Balance:</div>
    <div>${{ balance_except_bet.toLocaleString() }}.00</div>

    <div>Bet:</div>
    <AmountInput prepend="$" append=".00" v-model="bet" />

    <Button v-on:click="play">Play</Button>
    <Button v-on:click="charge">Give me more cash!</Button>
    <Button v-on:click="tokuseirei">Reset my fault</Button>

    <WinLoseAlert v-bind:win="win" />
  </div>
</template>

<script>
export default {
  name: 'SimpleGame',
  data: function () {
    return {
      balance: 100,
      bet: 10,
      win: null
    }
  },
  computed: {
    balance_except_bet: function () {
      return this.balance - this.bet
    }
  },
  methods: {
    play: function () {
      this.balance -= this.bet

      var r = Math.floor(Math.random() * 2)

      if (r === 1) {
        this.win = true
        this.balance += this.bet * 2
      } else {
        this.win = false
      }

      this.bet = 0
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
