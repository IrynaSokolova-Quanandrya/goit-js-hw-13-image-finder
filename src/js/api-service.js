import { async } from 'regenerator-runtime';
// import refs from './refs';
// const {galleryList, searchForm, input} = refs;
// console.log(input);
const url = 'https://pixabay.com/api/';
const MY_KEY = '23478733-19045e71a96dc7e272282171b';
// console.dir(searchForm);
// console.log(searchForm.nodeValue);

// export default 
//  apiService = {
    
//     query : '',
//     page : 1,
//     key : '23478733-19045e71a96dc7e272282171b',
//     url :'https://pixabay.com/api/',
//     incrementPage(){
//         this.page +=1;
//         console.log(this);
//     },
//     clearPage(){
//         this.page = 1;
//     },

//     async fetchImg (){
//         // console.log(e);
//         // e.preventDefault();
//         // query = e.currentTarget.elements.query.value.trim();
//         // console.log(query);
//         // if(!query){
//         //         return alert({
//         //         text: 'Opps! No request! Try again!',
//         //         type: 'error',
//         //         delay: 1000,
//         //         hide: true,
//         //         })
//         //         }; 
//         let response = await fetch(`${this.url}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`);
//         if (response.status === 404){
//                 return alert({
//                 text: 'Not found!',
//                 type: 'error',
//                 delay: 1000,
//                 hide: true,
//                 })
//             }
//         let hits = await response.json();
//         if (hits.length === 0){
//                 return alert({
//                 text: 'Opps! Invalid request! Try again!',
//                 type: 'error',
//                 delay: 1000,
//                 hide: true,
//                 });
//         }
        
//         this.incrementPage()
//         console.log(hits);
//         if (hits.length >= 1 ){
//             galleryList.insertAdjacentHTML('beforeend', galleryTpl(hits));
//             galleryList.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'end',
//                   });
//                 // loadMoreButton.enable();
//                 // loadMoreButton.show();
//             }
//         this.clearPage(),
//         galleryList.innerHTML = '';
//         searchForm.reset();


//     }
// }
//  console.log(apiService);
 


        
//         // this.incrementPage();
//         // return hits;
//         //      }
//         //      catch(error){
//         //          console.log(error)},

  
export default
class ApiService {
    constructor(){
        this.query = '';
        this.page = 1;
    }
async fetchImg(){         
    let response = await fetch(`${url}/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${MY_KEY}`);
    let data = await response.json();
    let hits = await data.hits
    this.incrementPage();
    // console.log(hits.length);
    
    return hits;
    
            
            




    // return fetch(`${url}/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${MY_KEY}`)
//     .then(r=>r.json())
//     .then(({hits}) => {
//         this.incrementPage();
//         return hits;
//     })
}

incrementPage(){
    this.page +=1
    
}
 
clearPage(){
    return this.page = 1;
}
}
 