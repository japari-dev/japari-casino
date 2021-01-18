<template>
  <div v-if="win != null">
    <b-alert v-if="win" variant="success" show>You win!</b-alert>
    <b-alert v-else variant="danger" show>You lose..</b-alert>
  </div>
</template>

<script>
export default {
  props: {
    win: {
      type: Boolean,
      default: null
    }
  }
}
</script>
