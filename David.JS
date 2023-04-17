// let knofeherbastya = document.querySelector('.knofeherbastya').value 
// let knofeherhuszar = document.querySelector('.knofeherhuszar').value
// let knofeherfuto = document.querySelector('.knofeherfuto').value
// let kfeherbastya = document.querySelector('.kfeherbastya').value
// let kfeherhuszar = document.querySelector('.kfeherhuszar').value
// let kfeherfuto = document.querySelector('.kfeherfuto').value
// let feherkiralyno = document.querySelector('.feherkiralyno').value
// let feherkiraly = document.querySelector('.feherkiraly').value
// let knofeketebastya = document.querySelector('.knofeketebastya').value
// let knofeketehuszar = document.querySelector('.knofeketehuszar').value
// let knofeketefuto = document.querySelector('.knofeketefuto').value
// let kfeketebastya = document.querySelector('.kfeketebastya').value
// let kfeketehuszar = document.querySelector('.kfeketehuszar').value
// let kfeketefuto = document.querySelector('.kfeketefuto').value
// let feketekiralyno = document.querySelector('.feketekiralyno').value
// let feketekiraly = document.querySelector('.feketekiraly').value
console.log(password);

function click(){
    alert(feketekiralyno)
};
function RejtettOldalonBtn(){
    alert('Eljutottál az első lépéshez a pénthez jutás felé.')
};
function passwordBeolvasas(){
    var password = document.getElementById('jelszo').value;
    if (password === 'GaborGyereSakk.02'){
        document.getElementById('tartalom').style.visibility = 'visible';
        document.getElementById('nav-itemek').style.pointerEvents = 'fill';
    }
    else{
        alert('Ne próbálkozz, nem fog menni')
    }
}
