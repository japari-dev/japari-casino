<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-tabs fill justified>
            <b-tab title="Simple Game">
              <SimpleGame v-bind:bet="bet" v-on:played="applyResult($event)" />
            </b-tab>
            <b-tab title="High Low">
              <HighLow v-bind:bet="bet" v-on:played="applyResult($event)" />
            </b-tab>
            <b-tab title="Slot Machine">
              <SlotMachine v-bind:bet="bet" v-on:played="applyResult($event)" />
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div>Balance:</div>
          <div>${{ balanceExceptBet.toLocaleString() }}.00</div>
        </b-col>
        <b-col>
          <div>Bet:</div>
          <AmountInput prepend="$" append=".00" v-model="bet" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Button v-on:click="double">Double</Button>
          <Button v-on:click="charge">Give me more cash!</Button>
          <Button v-on:click="tokuseirei">Reset my fault</Button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <WinLoseAlert v-bind:win="win" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SimpleGame from '../components/games/SimpleGame'
import HighLow from '../components/games/HighLow'
import SlotMachine from '../components/games/SlotMachine'

export default {
  name: 'Home',
  components: {
    SimpleGame: SimpleGame,
    HighLow: HighLow,
    SlotMachine: SlotMachine
  },
  data: function () {
    return {
      balance: 100,
      bet: 10,
      win: null
    }
  },
  computed: {
    balanceExceptBet: function () {
      return this.balance - this.bet
    }
  },
  methods: {
    applyResult: function (event) {
      this.win = event.win
      this.balance += event.bonus
    },
    double: function () {
      this.bet *= 2
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
