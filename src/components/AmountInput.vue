<template>
  <b-input-group prepend="$" append=".00">
    <b-form-input
      v-bind:value="value"
      v-on:input="$emit('input', parseInt($event))"
    />
  </b-input-group>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
