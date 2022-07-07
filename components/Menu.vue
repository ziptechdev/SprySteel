<template>
  <div class="menu-container">
    <div v-for="(section, index) in items" :key="index" class="items">
      <component
        :is="item.url ? 'nuxt-link' : 'div'"
        v-for="item in section"
        :key="item.url"
        :class="[{ bigger: item.bigger }, 'item']"
        :to="item.url"
      >
        <img :src="item.icon" />
      </component>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        [
          {
            icon: require('~/assets/images/logo.svg'),
          },
        ],
        [
          {
            icon: require('~/assets/images/puzzle.svg'),
            url: '/',
          },
          {
            icon: require('~/assets/images/settings.svg'),
          },
          {
            icon: require('~/assets/images/profile.svg'),
            bigger: true,
          },
        ],
      ],

      topIcons: [
        {
          icon: require('~/assets/images/logo.svg'),
          url: '/apps',
        },
      ],
      bottomIcons: [
        {
          icon: require('~/assets/images/puzzle.svg'),
          url: '/apps',
        },
        {
          icon: require('~/assets/images/settings.svg'),
          url: '/settings',
        },
        {
          icon: require('~/assets/images/profile.svg'),
          url: '/profile',
          bigger: true,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.menu-container {
  width: $menu-width;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: $default-blue;
  padding: 20px 10px 40px;

  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7px;
      border-radius: 7px;
      cursor: pointer;

      &:hover:not(.bigger),
      &.nuxt-link-exact-active {
        background: $hover-blue-color;
      }

      &.bigger {
        padding: 0;
      }
    }
  }
}
</style>
