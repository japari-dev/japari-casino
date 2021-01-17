<template>
  <b-button variant="primary" v-on:click="$emit('click')">
    <slot />
  </b-button>
</template>
