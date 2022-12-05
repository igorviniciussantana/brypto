const withPWA = require('next-pwa')({
  dest: 'public',
 fallbacks:{
  image: '/img/eye.svg'
 }
})

module.exports = withPWA({
  // next.js config
})