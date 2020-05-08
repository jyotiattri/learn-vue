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
        cityImage: 'https://bit.ly/2SKJPqJ',
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
            this.cityImage = this.cityImage === 'https://bit.ly/2SKJPqJ'?
            'https://bit.ly/2Rd4gQ3':
            'https://bit.ly/2SKJPqJ';
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