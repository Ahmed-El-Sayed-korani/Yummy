


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



let resingred = [];

async function getingred() {
    const dataingred = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const resingred = await dataingred.json();
    ingredItems(resingred.meals.splice(0,20));

}

getingred()


function ingredItems(resingred) {
    
    let cartonaigred = ``;

    for (let i = 0; i < resingred.length; i++) {
        cartonaigred += `
        <div class="col-md-3 my-3">
        <div class="card-igred bg-transparent text-center text-white">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h5 class="card-title ">${resingred[i].strIngredient}</h5>
            <p>${resingred[i].strDescription}</P>
        </div>
    </div>`
    }

    document.getElementById('ingreddata').innerHTML = cartonaigred
    
}