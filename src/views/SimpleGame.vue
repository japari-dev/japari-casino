<template>
  <div class="simple-game">
    <div>Total:</div>
    <div>${{ total_except_bet.toLocaleString() }}.00</div>

    <div>Your bet:</div>
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
