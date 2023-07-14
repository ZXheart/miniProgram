// components/tab-control/tab-control.js
Component({
  properties: {
    books: {
      type: Array,
      value: []
    }
  },
  data: {
    currentItem: 0
  },
  methods: {
    onItemTap(event) {
      const index = event.currentTarget.dataset.index
      this.setData({
        currentItem: index
      })
      this.triggerEvent('OnItemTap', index)
    }
  }
})