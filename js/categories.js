
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



let rescat = [];

async function getcatagories() {
    const datacat = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const rescat = await datacat.json();
    displaycats(rescat.categories);

}

getcatagories()


function displaycats(rescat) {
    
    let cartonacat = ``;
for (let i = 0; i < rescat.length; i++) {
    cartonacat += `
    <div class="col-md-3 my-3">
        <div class="card bg-transparent">
            <img src="${rescat[i].strCategoryThumb}" class="card-img" alt="...">
            <div class="card-img-overlay text-center">
                <h5 class="card-title">${rescat[i].strCategory}</h5>
                <p>${rescat[i].strCategoryDescription.split(" ", 20 )}</P>
            </div>
        </div>
    </div>`
}

document.getElementById('catdata').innerHTML = cartonacat

}



