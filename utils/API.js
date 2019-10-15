const API_URL = 'https://api.spoonacular.com/recipes/';

class Api {
  async getSuggestion(q) {
    const query = await fetch(
      `https://chef-app-backend.herokuapp.com/recipesCall/${q}`,
    );
    const data = await query.json();
    // console.log(data.results);
    return data.results;
  }
  catch(error) {
    console.error(error);
  }

  // async getDetails(recipeId) {
  //   const query = await fetch(
  //     `${API_URL}${recipeId}/information?includeNutrition=true&apiKey=`,
  //   );
  //   const data = await query.json();
  //   // console.log(data.results);
  //   return data;
  // }
  // catch(error) {
  //   console.error(error);
  // }


  async getBulkDetails(recipeId) {
    const query = await fetch(
      `https://chef-app-backend.herokuapp.com/recipesCallBulk/${recipeId}`,
    );
    const data = await query.json();
    // console.log(data.results);
    return data;
  }
  catch(error) {
    console.error(error);
  }
}

export default new Api();
