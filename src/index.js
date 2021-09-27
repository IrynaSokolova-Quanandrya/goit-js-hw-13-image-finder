
// import regeneratorRuntime from "regenerator-runtime";
import * as basicLightbox from 'basiclightbox'
import './css/styles.css';
import refs from './js/refs';
// import './js/basic-lightbox';
import ApiService from './js/api-service';
import LoadMoreBtn from './js/load-more-btn';
import galleryTpl from './templates/gallery.hbs';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
defaultModules.set(PNotifyMobile, {});



const {galleryList, searchForm} = refs;
console.log(refs);
// const apiService = ApiService;
// console.log(apiService);



const apiService = new ApiService();
// console.log(apiService);
const loadMoreButton = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
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
      

searchForm.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', onFetch);

function onSearch(e){
 e.preventDefault();

  apiService.query = e.currentTarget.elements.query.value.trim();
  
if(!apiService.query){
      return alert({
        text: 'Opps! No request! Try again!',
        type: 'error',
        delay: 1000,
        hide: true,
      })
    }; 
    loadMoreButton.show();
    apiService.clearPage();
    clearGalleryList();
    onFetch();
//     console.log(apiService.fetchImg())
 
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
}
  
function onFetch(){
  loadMoreButton.disable();
     apiService.fetchImg()
     .then(hits => {
      createGalleryList(hits);
      smoothScroll();
      loadMoreButton.enable();
      if(hits.length === 0){
        
              return alert({
                text: 'Opps! Invalid request! Try again!',
                type: 'error',
                delay: 1000,
                hide: true,
              });
      
     }
    })
     .catch(error=>{
       console.log(error);
     })
  }

function smoothScroll(){
  galleryList.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function createGalleryList(hits){
  galleryList.insertAdjacentHTML('beforeend', galleryTpl(hits));
   
}

function clearGalleryList(){
  galleryList.innerHTML = '';
}

// Большое изображение

galleryList.addEventListener('click', (e)=>{
  console.log(e);
if(e.target.img){
  basicLightbox.create(`
		<img src=${e.target.dataset['source']} width="1400" height="900">
	`).show()
}
})
