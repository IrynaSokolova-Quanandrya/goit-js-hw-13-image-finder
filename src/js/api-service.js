const url = 'https://pixabay.com/api/';
const MY_KEY = '23478733-19045e71a96dc7e272282171b';


export default
class ApiService {
    constructor(){
        this.query = '';
        this.page = 1;
    }
async fetchImg(){         
     try{
       let response = await fetch(`${url}/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${MY_KEY}`);
        let data = await response.json();
        let hits = await data.hits 
        this.incrementPage();   
        return hits;
     }
     catch(error){
         console.log(error)}          
            




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
    this.page = 1;
}
}
 