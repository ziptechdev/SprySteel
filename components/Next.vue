<template>
  <div class="next-container">
    <div>
      <FormHeader title="Customer Information" />

      <div>
        <p>{{ data.firstName }} {{ data.lastName }}</p>
      </div>

      <div>
        <p>{{ data.address1 }} {{ data.address2 }}</p>
      </div>

      <div>
        <p>{{ data.phone }}</p>
      </div>

      <div>
        <p>{{ data.email }}</p>
      </div>
    </div>

    <div class="text-blue">
      <FormHeader title="Quote Information" />

      <table>
        <tr>
          <td><p>Quote Number:</p></td>
          <td>
            <p>{{ data.quoteNumber }}</p>
          </td>
        </tr>

        <tr>
          <td><p>Date:</p></td>
          <td>
            <p>{{ data.date }}</p>
          </td>
        </tr>

        <tr>
          <td><p>Dead Money:</p></td>
          <td>
            <p>{{ data.deadMoney }}</p>
          </td>
        </tr>

        <tr>
          <td><p>Spry Profit:</p></td>
          <td>
            <p>{{ data.spryProfit }}</p>
          </td>
        </tr>

        <tr>
          <td><p>Act Building Systems Fees:</p></td>
          <td>
            <p>{{ data.systemFee }}</p>
          </td>
        </tr>
      </table>
    </div>

    <div class="upload-image">
      <img src="~/assets/images/upload.svg" alt="" />
    </div>

    <div class="options">
      <button @click="setIsNext(false)"><v-icon color="#5c6489" size="20">mdi-chevron-left</v-icon> Back</button>

      <button class="withBackground" @click="nextClickHandler">Generate</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    data() {
      return this.$store.getters['form/data']
    },
  },
  created() {
    console.log(this.data)
  },
  methods: {
    nextClickHandler() {
      this.setIsGenerate(true)
      this.setIsNext(false)
    },
    ...mapMutations({
      setIsNext: 'form/setIsNext',
      setIsGenerate: 'form/setIsGenerate',
    }),
  },
}
</script>
<style lang="scss" scoped>
.next-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;

  > div {
    &.text-blue {
      p {
        color: $text-blue;
        margin-bottom: 10px;
      }
    }

    p {
      font-size: 13px;
      font-weight: bold;
    }

    table {
      tr {
        td {
          vertical-align: bottom;

          &:first-child {
            max-width: 100px;
          }

          &:not(:first-child) {
            padding-left: 20px;
          }
        }
      }
    }

    &.upload-image {
      max-width: 130px;
    }
  }
}
</style>
