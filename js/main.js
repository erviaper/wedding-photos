// Vuetify settings
const vuetify = new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    themes: {
      light: {
        primary: '#03363D',
        secondary: '#424242'
      }
    }
  }
});
// General functions
///////////////////////////////////////////////////////////////////////////////
// Sleep for a few milisseconds (useful for fake loading effect)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
