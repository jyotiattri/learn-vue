new Vue({
  el: "#app",
  data: { 
    // ...
    }
   },
   created()
 {
   axios.get(
     'https://jsonplaceholder.typicode.com/users'
   ) .then((response) => {
     const data = response.data;
     const randomUser = response.data[
       Math.floor(Math.random() * data.length)
     ];
     this.name = randomUser.name;
     this.email = randomUser.email;
     this.company = randomUser.company;
     this.company.catchPhrase = randomUser.company.catchPhrase;
   });
 },
});
