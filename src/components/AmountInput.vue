<template>
  <b-input-group v-bind:prepend="prepend" v-bind:append="append">
    <b-form-input
      v-bind:value="value"
      v-on:input="$emit('input', parseInt($event))"
    />
  </b-input-group>
</template>

<script>
export default {
  props: {
    prepend: {
      type: String,
      default: ''
    },
    append: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
