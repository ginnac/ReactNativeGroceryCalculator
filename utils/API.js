
const API_URL = "https://api.spoonacular.com/recipes/" ;


class Api {

    async getSuggestion(q){
        const query = await fetch(`${API_URL}search?number=6&apiKey=&query=${q}`);
        const data = await query.json(); 
       // console.log(data.results);
        return data.results
    }
    catch (error) {
        console.error(error);
      }


    async getDetails(recipeId){
        const query = await fetch(`${API_URL}${recipeId}/information?includeNutrition=true&apiKey=`)
        const data = await query.json(); 
       // console.log(data.results);
        return data
    }
    catch (error) {
        console.error(error);
      }

      async getBulkDetails(recipeId){
        const query = await fetch(`${API_URL}/informationBulk?apiKey=&ids=${recipeId}`)
        const data = await query.json(); 
       // console.log(data.results);
        return data
    }
    catch (error) {
        console.error(error);
      }

 

}

export default new Api();
