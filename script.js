const searchBox=document.querySelector('.searchBox');
const searchBtn=document.querySelector('.searchBtn'); 
const mainContent=document.querySelector('.mainContent');
const cards=document.querySelector(".cards");
const fetchData=async (query)=>{ 

    const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response=await data.json();
    cards.innerHTML=""
    console.log(response)
    if(response.meals==null)
    {
//         cards.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>`
        cards.innerHTML=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Warning!</strong>Please choose a valid recipe.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
        return
    }
    else{
    response.meals.forEach(element => {
        const card=document.createElement('div');
        card.className="card m-2";
        card.style.width="18rem";
        card.innerHTML=`<div class="card m-2">
                <img src=${element.strMealThumb} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.strMeal}</h5>
                  <p class="card-text text-justify">${element.strInstructions.substring(0,50)}...</p>
                  <a href=${element.strYoutube} target="_blank" class="btn btn-danger text-light">Watch On Youtube</a>
                </div>
              </div>`
        cards.appendChild(card);
    }); 
}

}
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput=searchBox.value.trim();
    fetchData(searchInput);
})