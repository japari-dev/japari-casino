<template>
  <div class="simple-game">
    <Button v-on:click="play">Play</Button>
  </div>
</template>

<script>
import { rand } from '../../utils/misc'

export default {
  name: 'SimpleGame',
  props: {
    bet: {
      type: Number
    }
  },
  methods: {
    play: function () {
      var win = null
      var bonus = -this.bet

      var r = rand(2)

      if (r === 1) {
        win = true
        bonus += this.bet * 2
      } else {
        win = false
      }

      this.$emit('played', { win: win, bonus: bonus })
    }
  }
}
</script>
