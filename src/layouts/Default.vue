<template>
  <full-width-layout>
    <div class="grow pa-3 margin-top">
      <slot />
    </div>
  </full-width-layout>
</template>

<script>
export default {
  name: 'default-layout',
};
</script>

<style lang="scss">
.margin-top {
  margin-top: 4rem !important;
}
</style>

