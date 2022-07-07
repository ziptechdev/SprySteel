<template>
  <div class="apps-header">
    <div>{{ text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      default: 'Write here',
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
$border-height: 3px;
$padding-bottom: 5px;

.apps-header {
  margin: 20px 20px 0;
  border-bottom: $border-height solid lightgray;

  > div {
    position: relative;
    bottom: -$border-height;
    width: fit-content;
    border-bottom: $border-height solid orange;
    padding-bottom: $padding-bottom;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
