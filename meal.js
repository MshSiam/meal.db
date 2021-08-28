const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searcText = searchField.value
    console.log(searcText)
    searchField.value = ''


    // // //  api // // //

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searcText}`
    fetch(url) 
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))  

}


const displaySearchResult = (meals) => {
    const searchresult = document.getElementById('search-result')

    meals.forEach(meal => {

        console.log(meal)
        
        const div = document.createElement('div')
        div.classList.add('col')


        div.innerHTML = `
        <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top p-1" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `

        searchresult.appendChild(div)
        
    })
}