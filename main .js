// new Vue({
//     el: '#app',
//     data: {
//         greeting: 'Hello World',
//         user: 'Jyoti Attri',
//         city: 'Mandi',
//     },
//     methods: {
//         addgreeting() {
//             // greeting is not initialized
//             this.greeting = 'Hello World!';
//         }
        

//     },
// });
// vanilla Js Implementation
let greetingTag = document.getElementsByTagName("h2")[0];

changeGreeting = () => {
    if (greetingTag.textContent === 'Hello World!') {
        greetingTag.textContent = 'What is up!';    
    } else {
        greetingTag.textContent = 'Hello World!';
    }
}