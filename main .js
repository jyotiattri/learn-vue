new Vue({
    el: '#app',
    data: {
        greeting: '',
        user: 'Jyoti Attri',
        city: 'Mandi',
        items: [
            { message: 'foo' },
            { message: 'bar' }
        ]
    },
    methods: {
        addgreeting() {
            // greeting is not initialized
            this.greeting = 'Hello World!';
        },
        changeGreeting() {
            this.greeting = this.greeting === 'Hello World!'?
            'What is up!':
            'Hello World!';
        },
        add() {
            this.items.push({message: 'hello'})
        }
        

    },
});

// vanilla Js Implementation
// let greetingTag = document.getElementsByTagName("h2")[0];

// changeGreeting = () => {
//     if (greetingTag.textContent === 'Hello World!') {
//         greetingTag.textContent = 'What is up!';    
//     } else {
//         greetingTag.textContent = 'Hello World!';
//     }
// }