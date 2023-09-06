const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // ketetapan time out 4 detik
  defaultCommandTimeout: 4000,

  // halaman ketetapan time out 5 detik
  pageLoadTimeout: 5000,

  // ukuran lebar dan tinggi website
  viewportWidth: 900,
  viewportHeight: 700,

  // record video
  video: true,

  // url tiap tiap menu
  env: {
    login_url: '/profile.php#login',
    dashboard_url: '/#appointment',
    history_url: '/history.php#history',
    profile_url: '/profile.php#profile',

    nikname: 'John Doe',
    katasandi: 'ThisIsNotAPassword',

    nikname_salah: 'Kris John',
    katasandiSalah: 'ThisIsMyPassword'
  },

  e2e: {
    // Untuk URL Website
    baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
