<template>
  <div>
    <p>{{ title }}</p>
    <label v-if="subtitle">{{ subtitle }}</label>
    <label v-if="generate" :class="[{ generate: generate }]">
      File saved as <span>220704 Smith, John #MMRC90018855.pdf</span> in the specified Google Drive folder.
    </label>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      default: '',
      type: String,
    },
    subtitle: {
      default: '',
      type: String,
    },
    generate: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
<style lang="scss" scoped>
div {
  margin-bottom: 15px;

  p,
  label {
    font-weight: bold;

    span {
      color: $link-blue;
    }
  }

  label {
    font-size: 13px;

    &:not(.generate) {
      color: $gray-header-text-color;
    }
  }
}
</style>
