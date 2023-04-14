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
      return "hello";
    }
  },
  /////////////////////////////////////////////////////////////////////////////
  // Methods
  /////////////////////////////////////////////////////////////////////////////
  methods: {
    // Return user field value
    // Expected input: getUserFieldValue({ id: 'field-name' })
    getUserFieldValue: function (params) {
      return "hello";
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
