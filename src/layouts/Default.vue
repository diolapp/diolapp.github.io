<template>
  <FullWidthLayout>
    <div class="content pa-5 default-layout">
      <slot />
    </div>
  </FullWidthLayout>
</template>

<script>
export default {
  name: 'default-layout',
};
</script>

<style lang="scss">
.default-layout {
  margin-top: 4rem !important;
}
</style>

