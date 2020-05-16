   const tweets = [
         {
           id: 1,
           name: 'James',
           handle: '@jokerjames',
           img: './images/photo.jpg',
           tweet: "If you don't succed, dust yourself off...",
           likes: 10,
         },
        {     
          id: 2,   
          name: 'Fatima',
          handle: '@fantasticfatima',    
          img: './images/photo.jpg',   
          tweet: 'Better late than never but never late...',    
          likes: 12, 
        }, 
        {    
          id: 3,    
          name: 'Xin',    
          handle: '@xeroxin',    
          img: './images/photo.jpg',    
          tweet: 'Beauty in the struggle...',    
          likes: 18, 
        }
       ];
       new Vue({
        el: '#app',
          data: {
             tweets
             }
             });