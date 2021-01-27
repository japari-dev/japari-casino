<template>
  <div class="slot-machine">
    <b-container>
      <b-row>
        <b-col><b-form-input :value="symbol1" /></b-col>
        <b-col><b-form-input :value="symbol2" /></b-col>
        <b-col><b-form-input :value="symbol3" /></b-col>
      </b-row>
    </b-container>

    <Button v-on:click="play">Play</Button>
  </div>
</template>

<script>
import { sample } from '../../utils/misc'

const SYMBOLS = ['😺', '🐶', '🐼']

function getSymbol () {
  return sample(SYMBOLS)
}

export default {
  name: 'SlotMachine',
  props: {
    bet: {
      type: Number
    }
  },
  data: function () {
    return {
      symbol1: null,
      symbol2: null,
      symbol3: null
    }
  },
  methods: {
    play: function () {
      var win = null
      var bonus = -this.bet

      this.symbol1 = getSymbol()
      this.symbol2 = getSymbol()
      this.symbol3 = getSymbol()

      if (this.symbol1 === this.symbol2 && this.symbol2 === this.symbol3) {
        win = true
        bonus += this.bet * (SYMBOLS.length ** 2)
      } else {
        win = false
      }

      this.$emit('played', { win: win, bonus: bonus })
    }
  }
}
</script>
