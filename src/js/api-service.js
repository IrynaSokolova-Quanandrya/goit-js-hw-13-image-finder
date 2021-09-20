// export default
//  apiService = {

// }
// Есть файл apiService.js с дефолтным экспортом объекта 
// отвечающего за логику HTTP-запросов к API

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '23478733-19045e71a96dc7e272282171b';
let query = '';
let pageNamber = 1;

function searchImg(query, pageNamber){
   
   return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNamber}&per_page=12&key=${MY_KEY}`)
    .then(r=>r.json()
    .then(console.log))
    

}

