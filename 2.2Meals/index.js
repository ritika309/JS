$.ajax({

    type: 'get',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success: function(resp){
        for(var i = 0 ; i<resp.meals.length ; i++)
        {//create dynamic div 
 
         var newitem = `<div class="col-md-3 m-2 shadow p-3 mb-5 bg-white rounded"> 
             <p>${resp.meals[i].strMeal}<p/>
             <img src="${resp.meals[i].strMealThumb}" class="img-fluid" />
             <p>${resp.meals[i].idMeal}</p>
         </div>`
 
         $('#myitems').append(newitem)
 
        }
    },
    error: function(error)
    {
        console.log(error)
    }
})