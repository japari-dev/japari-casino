<template>
  <div class="high-low">
    <div>Current Number:</div>
    <div>{{ currentNumber }}</div>

    <Button v-on:click="high">High</Button>
    <Button v-on:click="low">Low</Button>
  </div>
</template>

<script>
import { rand } from '../../utils/misc'

function getNumber () {
  return rand(13) + 1
}

export default {
  name: 'HighLow',
  props: {
    bet: {
      type: Number
    }
  },
  data: function () {
    return {
      currentNumber: getNumber()
    }
  },
  methods: {
    high: function () {
      this.play((nw, prv) => nw > prv)
    },
    low: function () {
      this.play((nw, prv) => nw < prv)
    },
    play: function (prediction) {
      var win = null
      var bonus = -this.bet

      var prevNumber = this.currentNumber
      this.currentNumber = getNumber()

      if (prediction(this.currentNumber, prevNumber)) {
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
