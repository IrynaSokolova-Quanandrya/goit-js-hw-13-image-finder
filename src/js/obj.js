// const apiService = ApiService;
// console.log(apiService);
// searchForm.addEventListener('submit', onSearch);
// function onSearch(e){
//     console.log(e);
//     e.preventDefault();
//     apiService.query = e.currentTarget.elements.query.value.trim();
//     console.log(apiService.query);
//     if(!apiService.query){
//             return alert({
//             text: 'Opps! No request! Try again!',
//             type: 'error',
//             delay: 1000,
//             hide: true,
//             })
//             }; 
//       apiService.fetchImg();
//       loadMoreButton.disable();
// }

// loadMoreButton.refs.button.addEventListener('click', onLoadMore);
// function onLoadMore(){
//       loadMoreButton.disable();
//          apiService.fetchImg();
//         loadMoreButton.enable();
          
// }
//   apiService.fetchImg() 
//   .then(hits =>{
//   console.log(hits);
//     if(hits.length === 0){
//       return alert({
//         text: 'Opps! Invalid request! Try again!',
//         type: 'error',
//         delay: 1000,
//         hide: true,
//       });
//     }
// loadMoreButton.disable();
//     if (hits.length >=1 ){
//       createGalleryList(hits);
//       smoothScroll();
//       loadMoreButton.enable();
      
      
//     }})
    
      
      
     
//       loadMoreButton.show();
//     // loadMoreButton.disable();
//     apiService.clearPage();
//     // console.log(apiService.clearPage());
//     clearGalleryList();
//     searchForm.reset();  
// }

// / export default 
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
