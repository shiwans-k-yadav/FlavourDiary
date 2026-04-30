const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeCont = document.querySelector(".recipe-container"); 

// Function to get recipes: 
const fetchRecipe = async (inp)=>{    //for await async is important

     recipeCont.innerHTML = "<h2>fetching recipes...</h2>"


      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`);   //await compiler ko rok ke rakhega jab tak pura data nhin aa jata
      const response = await data.json();    //apne data ko json mein convert kar liya


      recipeCont.innerHTML="";

      response.meals.forEach(meal => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML=`
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <p><span> ${meal.strArea}</span> Dish</p>
            <p>Belongs to <span>${meal.strCategory}</span> category</p>
            `
        recipeCont.appendChild(recipeDiv); 



        //  console.log(meal);
      })


    //   console.log(response.meals[0]);
}



searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    // console.log("button clicked");
    fetchRecipe(searchInput);
})