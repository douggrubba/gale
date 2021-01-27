<template>
  <base-layout>
    <h1>hello gale</h1>
    <BasicLink url="/">home</BasicLink>
    <BasicLink url="/buttons">buttons</BasicLink>
    <router-view />
  </base-layout>
</template>

<script>
import BasicLink from './components/gale/nav/BasicLink.vue'
import BaseLayout from './components/gale/layouts/Base.vue'

export default {
  components: { BaseLayout, BasicLink }
}
</script>