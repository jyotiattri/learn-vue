
new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
});


let renderComponent = {
  render(h) {
    return h(
      'div', {
        'attrs': {
          class: 'render-card'
        },
      },
      [
        h('header', {
          'attrs': {
            class: 'card-header card-header-title'
          }
        }, this.message)
      ]
    );
  },
  props: ['message']
}