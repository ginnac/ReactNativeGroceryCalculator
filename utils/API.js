
const API_URL = "https://api.spoonacular.com/recipes/" ;


class Api {

    async getSuggestion(q){
        const query = await fetch(`)
        const data = await query.json(); 
       // console.log(data.results);
        return data.results
    }


}

export default new Api();
