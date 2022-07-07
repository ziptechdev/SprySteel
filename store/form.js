export const state = () => {
  return {
    showForm: false,
    isNext: false,
    isGenerate: false,
    data: {
      date: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      quoteNumber: '',
      deadMoney: '',
      spryProfit: '',
      systemFee: '',
    },
  }
}

export const mutations = {
  setShowForm(state, showForm) {
    state.showForm = showForm
  },
  setFormData(state, data) {
    state.data = data
  },
  setIsNext(state, isNext) {
    state.isNext = isNext
  },
  setIsGenerate(state, isGenerate) {
    state.isGenerate = isGenerate
  },
}

export const getters = {
  showForm: (state) => {
    return state.showForm
  },
  data: (state) => {
    return state.data
  },
  isNext: (state) => {
    return state.isNext
  },
  isGenerate: (state) => {
    return state.isGenerate
  },
}
