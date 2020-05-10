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
            numbers: [ 
                {id: 1, value: 1}, 
                {id: 2, value: 10}, 
                {id: 3, value: 100}, 
                {id: 4, value: 1000}, 
                {id: 5, value: 10000} ], 
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
        },
        shuffle() { 
            this.data.numbers = _.shuffle(this.data.numbers) }


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