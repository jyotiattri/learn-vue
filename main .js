new Vue({
    el: '#app',
    data: {
        greeting: 'Hello World',
        user: 'Jyoti Attri',
        city: 'Mandi',
    },
    methods: {
        // instance methods
        changeGreeting() { 
            this.greeting = this.greeting === 'Hello World!' ? 
            'What is up!' : 
            'Hello World!'; 
        }
    },
});