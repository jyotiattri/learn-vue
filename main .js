let inlineTemp ={
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    // 'single-line-template': singleLineTemplate
    'inline-temp' : inlineTemp
  }
});

