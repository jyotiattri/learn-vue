new Vue({
    el: '#app',
    data: {
        greeting: 'Hello World!',
        user: 'Jyoti Attri',
        city: 'Toronto',
        alertMessage: '',
        items: [
            { message: 'foo' },
            { message: 'bar' }
        ],
        cityImage: './images/toronto.jpg',
        data: {    
            numbers: [1, 10, 100, 1000, 10000],
         },
    },
    methods: {
        // addgreeting() {
        //     // greeting is not initialized
        //     this.greeting = 'Hello World!';
        // },
        // changeGreeting() {
        //     this.greeting = this.greeting === 'Hello World!'?
        //     'What is up!':
        //     'Hello World!';
        // },
        // add() {
        //     this.items.push({message: 'hello'})
        // },
        // alertMessageGreeting() {
        //     this.alertMessage = 'You typed Something';
        // },
        // alertEnterGreeting() {
        //     this.alertMessage ='You typed and press Enter!';
        // },
        changeCity() {
            this.cityImage = this.cityImage === './images/toronto.jpg'?
            './images/lagos.jpg':
            './images/toronto.jpg';
            this.city = this.city === 'Toronto'?
            'Lagos':
            'Toronto';
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