// Initialise Vue instance
const vm = new Vue({
  el: '#app',
  vuetify: vuetify,
  /////////////////////////////////////////////////////////////////////////////
  // Data
  /////////////////////////////////////////////////////////////////////////////
  data: {
    currTemplate: {},
    myName: 'Fred'
  },
  /////////////////////////////////////////////////////////////////////////////
  // Computed
  /////////////////////////////////////////////////////////////////////////////
  computed: {
    getOrders: function () {
      const orders = this.sharedData.orders.reduce((acc, curr) => {
        curr.date = dateToString(curr.date, { dateObj: true }).toISOString().split('T')[0]
        acc.push(curr)
        return acc
      }, [])
      const sortBy = this.sortOrderBy ? this.sortOrderBy : 'id'
      const sortOrder = this.sortOrderOrder ? this.sortOrderOrder : 'asc'
      const search = this.searchOrder
      const filtered = search
        ? orders.filter(
            (obj) =>
              obj.id.toUpperCase().includes(search.toUpperCase()) ||
              (isValidDate(obj.date) &&
                isValidDate(search) &&
                new Date(obj.date).toISOString().split('T')[0] === new Date(search).toISOString().split('T')[0])
          )
        : orders
      return filtered.sort((a, b) => ((sortOrder === 'asc' ? a[sortBy] > b[sortBy] : a[sortBy] < b[sortBy]) ? 1 : -1))
    }
  },
  /////////////////////////////////////////////////////////////////////////////
  // Methods
  /////////////////////////////////////////////////////////////////////////////
  methods: {
    // Return user field value
    // Expected input: getUserFieldValue({ id: 'field-name' })
    getUserFieldValue: function (params) {
      const fieldId = params && params.id
      const fieldDetails = this.sharedData.userFields.find((obj) => obj.key === fieldId)
      if (fieldDetails) {
        const fieldValue = this.sharedData.requester.user_fields[fieldId]
        const isDate = /^([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])/.test(fieldValue)
        const isDropDown = fieldDetails.type === 'dropdown'
        return isDate
          ? dateToString(this.sharedData.requester.user_fields[fieldId])
          : isDropDown
          ? fieldDetails.custom_field_options.find((obj) => obj.value === fieldValue) &&
            fieldDetails.custom_field_options.find((obj) => obj.value === fieldValue).name
          : fieldValue
      }
    },
    updateMyName: function() {
      this.myName = 'Tom';
    }
  },
  /////////////////////////////////////////////////////////////////////////////
  // Mounted
  /////////////////////////////////////////////////////////////////////////////
  mounted: function () {
    //stuff
  },
  /////////////////////////////////////////////////////////////////////////////
  // Created
  /////////////////////////////////////////////////////////////////////////////
  created: function () {
    //stuff
  }
})
