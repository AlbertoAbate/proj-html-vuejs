var app = new Vue({
    el: '#app',
    data: {
        // barra-navigazione linkList
      linkList: [
          {
            item: 'Home'
          },
          {
            item: 'About'
          },
          {
            item: 'Courses'
          },
          {
            item: 'Events'
          },
          {
            item: 'Facilities'
          },
          {
            item: 'News'
          },
          {
            item: 'Admissions'
          },
      ],

      socialList : [
          {
            icon: 'fa-facebook-f',
          },
          {
            icon: 'fa-twitter',
          },
          {
            icon: 'fa-youtube',
          },
          {
            icon: 'fa-instagram',
          }
      ]



    } //end Data
   }) // end Vue 