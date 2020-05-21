let xTemp = {
  template: '#x-template-component',
  props: ['message']
}
new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    'x-temp': xTemp
  }
});


let renderComponent = {
  render(createElement) {
    return createElement(
      'div', {
        'attrs': {
          class: 'render-card'
        },
      },
      [
        createElement('header')
      ]
    );
  },
  props: ['message']
}