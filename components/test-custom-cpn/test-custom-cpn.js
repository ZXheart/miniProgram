// components/test-custom-cpn/test-custom-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    header: {
      type: String,
      value: 'default header!'
    },
    content: {
      type: String,
      value: "default content!"
    },
    footer: {
      type: String,
      value: "dafault footer!"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // header: 'header',
    // content: 'content',
    // footer: 'footer'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onHeaderTap(event) {
      // console.log('header clicked!', event);
      this.triggerEvent('CpnsOntap', event)
    }
  }
})