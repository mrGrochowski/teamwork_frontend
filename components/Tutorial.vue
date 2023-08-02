<!-- Please remove this file from your project -->
<template>
  <header class="heading">
    See challenges before they arise

    {{ $store.getters.getAccordeonData }}
  </header>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
<style lang="scss">
  .heading {
    font-family: $text-name;
    font-size: $text-size-heading;
    line-height: $text-height-heading;
    font-weight: $text-weight-heading;
  }
</style>
