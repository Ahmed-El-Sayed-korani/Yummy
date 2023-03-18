
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





function checkinputs() {

    if (  emailValdation() == false  ) {
        $('#nameAlert').show(0)
} else { return true}
}





function checkemail() {
    if (  emailValdation() == false  ) {
        $('#emailAlert').show(0)
} else { return true}
}

function checknumber() {
    if (  emailValdation() == false  ) {
        $('#numberAlert').show(0)
} else { return true}
}

function checkage() {
    if (  emailValdation() == false  ) {
        $('#ageAlert').show(0)
} else { return true}
}

function checkpass() {
    if (  emailValdation() == false  ) {
        $('#passwordAlert').show(0)
} else { return true}
}

function checkrepass() {
    if (  emailValdation() == false  ) {
        $('#repasswordAlert').show(0)
} else { return true}
}





function nameValdation() {
    let regex = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (regex.test(SName.value)) {
        return true
    } else {
        return false
    }
}

function emailValdation() {
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    if (regex.test(StEmail.value)) {
        return true
    } else {
        return false
    }
}


function pnumberValdation() {
    let regex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g;
    if (regex.test(Spnumber.value)) {
        return true
    } else {
        return false
    }
}



function ageValdation() {
    let regex = /^((100)|(\d{0,2}))$/g;
    if (regex.test(SAge.value)) {
        return true
    } else {
        return false
    }
}



function passwordValdation() {
    let regex = /^([a-zA-Z0-9@*#]{8,15})$/g;
    if (regex.test(SPassword.value)) {
        return true
    } else {
        return false
    }
}