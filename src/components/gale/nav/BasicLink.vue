<template>
  <router-link :to="url">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ['url']
}
</script>