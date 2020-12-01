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
            item: 'Courses',
            new: true
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
            item: 'Admissions',
            adApply: true
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
      ],
      // footer
      coursesList : [
          {
              item : 'Arts & Humanities'
          },
          {
            item : 'Business & Management'
        },
        {
            item : 'Engineering & Tecnology'
        },
        {
            item : 'Life Sciences & Medicine'
        },
        {
            item : 'Natural Sciences'
        },
      ],
      admissionsList : [
          {
              item : 'Elegibily'
          },
          {
            item : 'Application'
        },
        {
            item : 'Review Process'
        },
        {
            item : 'How to Apply'
        },
      ],
      resourcesList : [
          {
              item : 'Campus Directory'
          },
          {
            item : 'Academic Calendar'
        },
        {
            item : 'Sport Clubs'
        },
        {
            item : 'Graduate Programs'
        },
        {
            item : 'Faculty & Staff'
        },
      ],
      quicklinksList : [
          {
              item : 'University Library'
          },
          {
            item : 'Campus Services'
          },
          {
            item : 'Careers'
          },
      ],



    } //end Data
   }) // end Vue 