


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



let resarea = [];

async function getarea() {
    const datarea = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const resarea = await datarea.json();
    areaItems(resarea.meals);
}

getarea()


function areaItems(resarea) {
    
    let cartona = ``;

    for (let i = 0; i < resarea.length; i++) {
        cartona += `
        <div class="col-md-3 my-3">
        <div class="card bg-transparent text-center text-white">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h5 class="card-title ">${resarea[i].strArea}</h5>
        </div>
    </div>`
    }

    document.getElementById('areadata').innerHTML = cartona
    
}