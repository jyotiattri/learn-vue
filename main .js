new Vue({
    el: '#app',
    data: {
       message: 'Greetings!'
    },
//    methods: {
//        reverseString(string) {
//            return string.split('').reverse().join('');
//        },
computed: {
    reverseMessage() {
        return this.message.split('').reverse().join('');
},
   }
});
