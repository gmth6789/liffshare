export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [{ src: 'https://static.line-scdn.net/liff/edge/2/sdk.js', charset: 'utf-8' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    meta: [{name: "viewport", content:"width=device-width, initial-scale=1.0"}],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    linkActiveClass: 'is-active',
    mode: 'history',
    routes: [],
    base: '/public-contents/',
    extendRoutes (routes, resolve) {
      routes.push( 
        {
        name: 'home',
        path: '/index.html',
        component: resolve(__dirname, 'pages/index.vue')
        },
      )
    },
  },
  build: {
    publicPath: '',
  },

  generate: {
    dir: 'public',
    subFolders: false,
  },
}

