const tweets = [
  {
    id: 1,
    name: "James",
    handle: "@jokerjames",
    img: "./images/photo.jpg",
    tweet: "If you don't succed, dust yourself off...",
    likes: 10,
  },
  {
    id: 2,
    name: "Fatima",
    handle: "@fantasticfatima",
    img: "./images/photo.jpg",
    tweet: "Better late than never but never late...",
    likes: 12,
  },
  {
    id: 3,
    name: "Xin",
    handle: "@xeroxin",
    img: "./images/photo.jpg",
    tweet: "Beauty in the struggle...",
    likes: 18,
  },
];
vue.component("tweet-content", {
  template: `
  <div class="media-content">
  <div class="content">
  <p>
  <strong>{{ tweet.name }}</strong>
  <small>{{ tweet.handle }}</small>
  <br>
  {{tweet.tweet}}
  </p>
  </div>
  <div class="level-left">
  <a class="level-item">
  <span class="icon is-small">
  <i class="fas fa-heart"></i>
  </span>
  <span class="likes">{{ tweet.likes }}</span>
  </a>
  </div>
  </div>
  `,
  props: ["tweet"],
});
Vue.component("tweet-component", {
  template: `      
   <div class="tweet">      
   <div class="box">        
   <article class="media">         
    <div class="media-left">          
      <figure class="image is-64x64">      
              <img :src="./images/photo.jpg">       
                   </figure>         
                    </div>  
                    <tweet-content :tweet="tweet"></tweet-content>       
                 
                                  </article>     
                                      </div>     
                  <div class="control has-icons-left">
             <input class="input is-small"        
               placeholder="Tweet your reply..." /> 
                      <span class="icon is-small is-left"> 
                               <i class="fas fa-envelope"></i>        
                               </span>      
                               </div>    
                               </div>  `,
  props: ["tweet"],
});
new Vue({
  el: "#app",
  data: {
    tweets,
  },
});
