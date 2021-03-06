// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// import '~/src/main.css';
import './main.css';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS,Halo,Halofest,Halo Masterchief,Halo masterchief collection,bungie'
  })

//   head.meta.push({
//     name: 'title',
//     content: 'Woodinville Halofest 😇🎮🕹'
//   })

  head.meta.push({
    name: 'description',
    content: 'A halofest club of sorts where the 2000s Halofest LAN Party lives on in full dew-filled glory 😇🎮🕹'
  })

  head.meta.push({
    name: 'author',
    content: 'David Lindahl'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700,900&display=swap'
  })

}

