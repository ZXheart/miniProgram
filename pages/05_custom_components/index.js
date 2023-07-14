// pages/05_custom_components/index.js
Page({
  data: {
    books: [{
        id: 555,
        name: 'emerald',
        price: 99
      },
      {
        id: 666,
        name: 'peral',
        price: 88
      },
      {
        id: 777,
        name: 'ruby',
        price: 89
      }
    ],
    animals: [{
        id: 1,
        name: 'rooster/cock'
      }, {
        id: 2,
        name: "goose"
      },
      {
        id: 3,
        name: 'donkey'
      },
      {
        id: 4,
        name: 'peacock'
      },
      {
        id: 5,
        name: 'goat'
      },
    ]
  },
  headerTaped(event) {
    // console.log('taped in pages', event);
  },
  tabItemTap(event) {
    // console.log(event.detail);
  }
})