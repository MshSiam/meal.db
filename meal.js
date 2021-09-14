// enter button search //

const search = document.getElementById('button-search')
const field = document.getElementById('search-field')

field.addEventListener('keypress', function(event){
    // event.preventDefault()
    if(event.keyCode == 13){
        search.click()
    }
})



const toggleSpinner = displayStyle => {document.getElementById('spinner').style.display = displayStyle
}

const searchFood = () => {
    const searchField = document.getElementById('search-field')
    
    toggleSpinner('block')
    const searcText = searchField.value
    console.log(searcText)

    // Clear data
    searchField.value = ''


    // // //  api load data // // //

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searcText}`
    fetch(url) 
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))  

}




const displaySearchResult = (meals) => {
    const searchresult = document.getElementById('search-result')

    searchresult.textContent =''


    meals?.forEach(meal => {

        // console.log(meal)
        
        const div = document.createElement('div')
        div.classList.add('col')


        div.innerHTML = `
        <div onclick = "loadMealDetail(${meal.idMeal})"  class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top p-1" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `

        searchresult.appendChild(div)

    })
toggleSpinner('none')

}

// Meal Details

const loadMealDetail = async mealId => {

    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    
    `
    // // // // fetching data // // // //
    const res = await fetch(url)
    const data = await res.json()
    displayMealDetails(data.meals[0])

    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetails(data.meals[0]))

}

// display meal details

const displayMealDetails = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details')
    // clearing previous search result
    mealDetails.textContent = ''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
              <a href="${meal.strYoutube}" class="btn btn-primary">Watch Tutorial</a>
            </div>

    `
    mealDetails.appendChild(div)
    console.log(44)

}
