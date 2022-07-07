<template>
  <div class="form-container">
    <Header :text="title" />

    <div class="form-content"></div>

    <div v-if="!isNext && !isGenerate" class="main-form">
      <FormHeader title="Location Address" subtitle="Enter the location address for the new customer." />

      <div class="form-content">
        <div class="form-structure">
          <div class="form-input">
            <p>Address 1 <span>*</span></p>

            <v-text-field v-model="address1" placeholder="560 State Street" outlined dense></v-text-field>
          </div>

          <div class="form-input">
            <p>Address 2</p>

            <v-text-field v-model="address2" placeholder="Suite 12" outlined dense></v-text-field>
          </div>

          <div class="form-input">
            <p>City <span>*</span></p>

            <v-text-field v-model="city" placeholder="Miami" outlined dense></v-text-field>
          </div>

          <div class="input-two">
            <div class="form-input max-80-full">
              <p>State <span>*</span></p>

              <v-select v-model="state" outlined dense :items="states"></v-select>
            </div>

            <div class="form-input max-220-full">
              <p>Zip Code <span>*</span></p>

              <v-text-field v-model="zipcode" placeholder="32073" outlined dense></v-text-field>
            </div>
          </div>
        </div>

        <FormHeader title="Point of Contact" />

        <div class="form-structure">
          <div class="form-input">
            <p>First Name <span>*</span></p>

            <v-text-field v-model="firstName" placeholder="John" outlined dense></v-text-field>
          </div>

          <div class="form-input">
            <p>Last Name <span>*</span></p>

            <v-text-field v-model="lastName" placeholder="Smith" outlined dense></v-text-field>
          </div>

          <div class="form-input">
            <p>Contact Email <span>*</span></p>

            <v-text-field v-model="email" placeholder="name@email.com" outlined dense></v-text-field>
          </div>

          <div class="form-input">
            <p>Phone Number <span>*</span></p>

            <v-text-field v-model="phone" placeholder="212-262-5555" outlined dense></v-text-field>
          </div>
        </div>

        <FormHeader title="Quote Information" subtitle="Enter the quote information for the new customer." />

        <div class="form-structure">
          <div class="form-input">
            <p>Quote Number <span>*</span></p>

            <v-text-field v-model="quoteNumber" placeholder="#99999999" outlined dense></v-text-field>
          </div>

          <div class="form-input">
            <p>Date <span>*</span></p>

            <v-menu v-model="menu" :close-on-content-click="false" max-width="290">
              <template #activator="{ on, attrs }">
                <v-text-field
                  :value="computedDateFormattedMomentjs"
                  readonly
                  v-bind="attrs"
                  outlined
                  dense
                  append-icon="mdi-calendar"
                  class="calendar-width"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @change="menu = false"></v-date-picker>
            </v-menu>
          </div>

          <div class="input-two">
            <div class="form-input max-150">
              <p>Dead Money <span>*</span></p>

              <v-text-field v-model="deadMoney" placeholder="$28,439.77" outlined dense></v-text-field>
            </div>

            <div class="form-input max-150">
              <p>Spry Profit <span>*</span></p>

              <v-text-field v-model="spryProfit" placeholder="$6,000.00" outlined dense></v-text-field>
            </div>
          </div>

          <div class="form-input max-150">
            <p>Act Building Systems Fees <span>*</span></p>

            <v-text-field v-model="systemFee" placeholder="$1,360.00" outlined dense></v-text-field>
          </div>
        </div>

        <div class="options">
          <button @click="setShowForm(false)"><v-icon color="#5c6489" size="20">mdi-chevron-left</v-icon> Back</button>

          <button class="withBackground" @click="nextClickHandler">Next</button>
        </div>
      </div>
    </div>

    <Next v-if="isNext" />

    <Generate v-if="isGenerate" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Header from '~/components/Header'
import FormHeader from '~/components/FormHeader'

export default {
  components: {
    Header,
    FormHeader,
  },
  props: {
    title: {
      default: 'Write here',
      type: String,
    },
  },
  data() {
    return {
      address1: '',
      address2: '',
      city: '',
      state: 'FL',
      zipcode: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      quoteNumber: '',
      deadMoney: '',
      spryProfit: '',
      systemFee: '',
      menu: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      states: [
        'AL',
        'AK',
        'AZ',
        'AR',
        'CA',
        'CZ',
        'CO',
        'CT',
        'DE',
        'DC',
        'FL',
        'GA',
        'GU',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NJ',
        'NM',
        'NY',
        'NC',
        'ND',
        'OH',
        'OK',
        'OR',
        'PA',
        'PR',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VT',
        'VI',
        'VA',
        'WA',
        'WV',
        'WI',
        'WY',
      ],
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? this.$moment(this.date).format('DD/MM/YYYY') : ''
    },
    isNext() {
      return this.$store.getters['form/isNext']
    },
    isGenerate() {
      return this.$store.getters['form/isGenerate']
    },
  },
  methods: {
    nextClickHandler() {
      this.setIsNext(true)
      this.setFormData({
        address1: this.address1,
        address2: this.address2,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        quoteNumber: this.quoteNumber,
        deadMoney: this.deadMoney,
        spryProfit: this.spryProfit,
        systemFee: this.systemFee,
        date: this.computedDateFormattedMomentjs,
      })
    },
    ...mapMutations({
      setShowForm: 'form/setShowForm',
      setFormData: 'form/setFormData',
      setIsNext: 'form/setIsNext',
      setIsGenerate: 'form/setIsGenerate',
    }),
  },
}
</script>
<style lang="scss" scoped>
.input-two {
  display: flex;
  gap: 100px;
}

.calendar-width {
  max-width: 120px;
}

.form-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: calc(100% - 60px);
  background: white;

  .main-form {
    padding: 20px;
    background: white;

    .form-content {
      .form-structure {
        max-width: 1000px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 100px;

        .form-input {
          max-width: 400px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 15px;

          > div,
          p {
            font-size: 13px;
          }

          p {
            font-weight: bold;

            span {
              color: red;
            }
          }

          &.max {
            &-220 {
              &-full {
                max-width: 220px;

                > div {
                  max-width: 220px;
                }
              }
            }
            &-150 {
              > div {
                max-width: 150px;
              }
            }

            &-80 {
              &-full {
                max-width: 80px;

                > div {
                  max-width: 80px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
