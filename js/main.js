


let tabcontentwidth = $('#tabcontent').width()
let left=true
$('#tab').click(()=>{
    if(left){
        $('#tabs').animate({left: 0},500)
        $('#tab').remove('#close')
        $('#tab').html('<i id="close" class="fa-solid fa-xmark fs-2"></i>')
        left=false
    } else {
        $('#tabs').animate({left: "-258px" },500)
        $('#tab').remove('#close')
        $('#tab').html('<i id="close" class="fa-solid open-close-icon fa-2x fa-align-justify"></i>')
        left=true
    }
    
})




let res = [];

async function getrecip() {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const res = await data.json();
    displayItems(res.meals);
}

getrecip()



function displayItems(res) {
    
    let cartona = ``;

    for (let i = 0; i < res.length; i++) {
        cartona += `
        <div class="col-md-3 my-3">
            <div class="card">
                <img src="${res[i].strMealThumb}" class="card-img" alt="...">
                <div class="card-img-overlay d-flex align-items-center">
                    <h5 class="card-title ">${res[i].strMeal}</h5>
                </div>
            </div>
        </div>`
    }

    document.getElementById('mealdata').innerHTML = cartona
    
}


















