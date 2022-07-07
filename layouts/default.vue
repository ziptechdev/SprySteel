<template>
  <v-app dark>
    <!-- <div class="simple-container"> -->
    <Menu />

    <!-- <v-main> -->
    <div class="v-main">
      <nuxt />
    </div>
    <!-- </v-main> -->
    <!-- </div> -->
  </v-app>
</template>
<script>
import Menu from '~/components/Menu'

export default {
  components: {
    Menu,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
// .simple-container {
//   display: flex;
//   .v-main {
//     margin-left: $menu-width;
//   }
// }
</style>
