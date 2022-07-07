<template>
  <div class="apps-container">
    <Header text="Apps" />

    <div class="apps-content">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :style="[{ background: item.color }]"
        @click="clickHandler(item.title)"
      >
        <div class="c-title">{{ item.title }}</div>

        <div class="image">
          <img :src="item.image" />
        </div>

        <div class="c-subtitle">
          {{ item.subtitle }}
        </div>
      </div>
    </div>

    <Form v-if="showForm" :title="clickedTitle" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Header from '~/components/Header'
import Form from '~/components/Form'

export default {
  components: {
    Header,
    Form,
  },
  data() {
    return {
      clickedTitle: '',
      items: [
        {
          title: 'Cold Formed',
          subtitle: 'Cold-Formed Automation',
          image: require('~/assets/images/cold.png'),
          color: '#FFDA9F',
        },
        {
          title: 'Red Iron',
          subtitle: 'Red Iron Automation',
          image: require('~/assets/images/red.png'),
          color: '#7FC382',
        },
      ],
    }
  },
  computed: {
    showForm() {
      return this.$store.getters['form/showForm']
    },
  },
  methods: {
    clickHandler(title) {
      this.clickedTitle = title
      this.setShowForm(true)
    },
    ...mapMutations({
      setShowForm: 'form/setShowForm',
    }),
  },
}
</script>
<style lang="scss" scoped>
.apps-container {
  .apps-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 20px;
    gap: 20px;

    .item {
      width: 290px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 9px;
      border: 1px solid #c6c6c6;
      overflow: hidden;
      cursor: pointer;

      .c-title {
        font-size: 17px;
        font-weight: 500;
        color: white;
        padding: 10px 0 15px;
      }

      .image {
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 50px;

        img {
          height: 100%;
          object-fit: cover;
        }
      }

      .c-subtitle {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 500;
        padding: 10px;
        background: white;
      }
    }
  }
}
</style>
