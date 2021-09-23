
import './sass/main.scss';
import refs from './js/refs';
import ApiService from './js/api-service';
import LoadMoreBtn from './js/load-more-btn';
import galleryTpl from './templates/gallery.hbs';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
defaultModules.set(PNotifyMobile, {});



const {galleryList, searchForm} = refs;

const apiService = new ApiService();
const loadMoreButton = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});


searchForm.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', onLoadMore);

function onSearch(e){
    e.preventDefault();
    apiService.query = e.currentTarget.elements.query.value.trim();
    if(!apiService.query)
    return alert({
            text: 'Opps! No request! Try again!',
            type: 'error',
            delay: 1000,
            hide: true,
          });
    apiService.fetchImg().then(hits =>{
    if(hits.length === 0)
    return alert({
            text: 'Opps! Invalid request! Try again!',
            type: 'error',
            delay: 1000,
            hide: true,
          });
        });
    loadMoreButton.show();
    apiService.clearPage();
    clearGalleryList();
    fetchHits();
    
    }
    
function onLoadMore(){
  fetchHits();
  galleryList.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

    }

function fetchHits(){
  loadMoreButton.disable();
     apiService.fetchImg().then(hits => {
      createGalleryList(hits);
      loadMoreButton.enable();
     });
}

function createGalleryList(hits){
  galleryList.insertAdjacentHTML('beforeend', galleryTpl(hits));
}

function clearGalleryList(){
  galleryList.innerHTML = '';
}

 