const a1 = document.getElementById('a1');
const b1 = document.getElementById('b1');
const c1 = document.getElementById('c1');
const d1 = document.getElementById('d1');
const e1 = document.getElementById('e1');
const f1 = document.getElementById('f1');
const g1 = document.getElementById('g1');
const h1 = document.getElementById('h1');
const a2 = document.getElementById('a2');
const b2 = document.getElementById('b2');
const c2 = document.getElementById('c2');
const d2 = document.getElementById('d2');
const e2 = document.getElementById('e2');
const f2 = document.getElementById('f2');
const g2 = document.getElementById('g2');
const h2 = document.getElementById('h2');
const a3 = document.getElementById('a3');
const b3 = document.getElementById('b3');
const c3 = document.getElementById('c3');
const d3 = document.getElementById('d3');
const e3 = document.getElementById('e3');
const f3 = document.getElementById('f3');
const g3 = document.getElementById('g3');
const h3 = document.getElementById('h3');
const a4 = document.getElementById('a4');
const b4 = document.getElementById('b4');
const c4 = document.getElementById('c4');
const d4 = document.getElementById('d4');
const e4 = document.getElementById('e4');
const f4 = document.getElementById('f4');
const g4 = document.getElementById('g4');
const h4 = document.getElementById('h4');
const a5 = document.getElementById('a5');
const b5 = document.getElementById('b5');
const c5 = document.getElementById('c5');
const d5 = document.getElementById('d5');
const e5 = document.getElementById('e5');
const f5 = document.getElementById('f5');
const g5 = document.getElementById('g5');
const h5 = document.getElementById('h5');
const a6 = document.getElementById('a6');
const b6 = document.getElementById('b6');
const c6 = document.getElementById('c6');
const d6 = document.getElementById('d6');
const e6 = document.getElementById('e6');
const f6 = document.getElementById('f6');
const g6 = document.getElementById('g6');
const h6 = document.getElementById('h6');
const a7 = document.getElementById('a7');
const b7 = document.getElementById('b7');
const c7 = document.getElementById('c7');
const d7 = document.getElementById('d7');
const e7 = document.getElementById('e7');
const f7 = document.getElementById('f7');
const g7 = document.getElementById('g7');
const h7 = document.getElementById('h7');
const a8 = document.getElementById('a8');
const b8 = document.getElementById('b8');
const c8 = document.getElementById('c8');
const d8 = document.getElementById('d8');
const e8 = document.getElementById('e8');
const f8 = document.getElementById('f8');
const g8 = document.getElementById('g8');
const h8 = document.getElementById('h8');
const feketehuszar = "figurák/feketehuszar.png";
const feketebastya = "figurák/feketebastya.png";
const feketefuto = "figurák/feketefuto.png";
const feketegyalog = "figurák/feketegyalog.png";
const feketekiraly = "figurák/feketekiraly.png";
const feketekiralyno = "figurák/feketekiralyno.png";
const feherhuszar = "figurák/feherhuszar.png";
const feherbastya = "figurák/feherbastya.png";
const feherfuto = "figurák/feherfuto.png";
const fehergyalog = "figurák/fehergyalog.png";
const feherkiraly = "figurák/feherkiraly.png";
const feherkiralyno = "figurák/feherkiralyno.png";
const fehsemmi = "figurák/fehersemmi.png"
const feksemmi = "figurák/feketesemmi.png"


function click(){
    alert("vejbh")
};
// Jelszó //
console.log('GyereGaborSakkozniVPingpong.03');


function RejtettOldalonBtn(){
    alert('Eljutottál az első lépéshez a pénthez jutás felé.')
};
function passwordBeolvasas(){
    var password = document.getElementById('jelszo').value;
    if (password === 'GyereGaborSakkozniVPingpong.03'){
        document.getElementById('tartalom').style.visibility = 'visible';
        document.getElementById('nav-itemek').style.pointerEvents = 'all';
    }
    else{
        document.getElementById('tartalom').style.visibility = 'hidden';
        document.getElementById('nav-itemek').style.pointerEvents = 'none';
        alert('Ne próbálkozz, nem fog menni')
    }
}
// London //
let Londonlepes = 0
function londonVissza(){
    Londonlepes -= 1
}
function londonTovabb(){
    Londonlepes += 1
}
function londonMegny(){
    if (Londonlepes == 0){
        document.getElementById('d4').src = fehsemmi
        document.getElementById('d2').src = fehergyalog
    }
    if (Londonlepes == 1){
        document.getElementById('d4').src = fehergyalog
        document.getElementById('d2').src = fehsemmi
        document.getElementById('d5').src = feksemmi
        document.getElementById('d7').src = feketegyalog 
    } 
    if (Londonlepes == 2){
        document.getElementById('d5').src = feketegyalog
        document.getElementById('d7').src = feksemmi
        document.getElementById('f4').src = fehsemmi
        document.getElementById('c1').src = feherfuto
    } 
    if (Londonlepes == 3){
        document.getElementById('f4').src = feherfuto
        document.getElementById('c1').src = fehsemmi
        document.getElementById('f6').src = fehsemmi
        document.getElementById('g8').src = feketehuszar
    } 
    if (Londonlepes == 4){
        document.getElementById('f6').src = feketehuszar
        document.getElementById('g8').src = feksemmi
        document.getElementById('e3').src = fehsemmi
        document.getElementById('e2').src = fehergyalog
    } 
    if (Londonlepes == 5){
        document.getElementById('e3').src = fehergyalog
        document.getElementById('e2').src = feksemmi
        document.getElementById('c5').src = fehsemmi
        document.getElementById('c7').src = feketegyalog
    } 
    if (Londonlepes == 6){
        document.getElementById('c5').src = feketegyalog
        document.getElementById('c7').src = fehsemmi
        document.getElementById('f3').src = feksemmi
        document.getElementById('g1').src = feherhuszar
    } 
    if (Londonlepes == 7){
        document.getElementById('f3').src = feherhuszar
        document.getElementById('g1').src = fehsemmi
        document.getElementById('b8').src = feketehuszar
        document.getElementById('c6').src = feksemmi
    } 
    if (Londonlepes == 8){
        document.getElementById('b8').src = fehsemmi
        document.getElementById('c6').src = feketehuszar   
        document.getElementById('d2').src = fehsemmi
        document.getElementById('b1').src = feherhuszar
    } 
    if (Londonlepes == 9){
        document.getElementById('d2').src = feherhuszar
        document.getElementById('b1').src = feksemmi
        document.getElementById('e6').src = feksemmi
        document.getElementById('e7').src = feketegyalog 
    } 
    if (Londonlepes == 10){
        document.getElementById('e6').src = feketegyalog
        document.getElementById('e7').src = fehsemmi
        document.getElementById('c2').src = fehergyalog
        document.getElementById('c3').src = feksemmi
    }    
    if (Londonlepes == 11){
        document.getElementById('c3').src = fehergyalog
        document.getElementById('c2').src = feksemmi
        document.getElementById('e7').src = fehsemmi
        document.getElementById('f8').src = feketefuto 
    }    
    if (Londonlepes == 12){
        document.getElementById('e7').src = feketefuto
        document.getElementById('f8').src = fehsemmi
        document.getElementById('d3').src = feksemmi
        document.getElementById('f1').src = feherfuto 
    }    
    if (Londonlepes == 13){
        document.getElementById('d3').src = feherfuto
        document.getElementById('f1').src = feksemmi

        document.getElementById('g8').src = feksemmi
        document.getElementById('e8').src = feketekiraly
        document.getElementById('h8').src = feketebastya
        document.getElementById('f8').src = fehsemmi
    }    
    if (Londonlepes == 14){
        document.getElementById('e8').src = feksemmi
        document.getElementById('g8').src = feketekiraly
        document.getElementById('f8').src = feketebastya
        document.getElementById('h8').src = fehsemmi
    }    
        if (Londonlepes == 15){
            document.getElementById('e6').src = feketegyalog
            document.getElementById('e5').src = feksemmi
        }    
    if (Londonlepes == xxxxxxxx){
        document.getElementById('e6').src = feketegyalog
        document.getElementById('e5').src = feksemmi
    }    
    if (Londonlepes == xxxxxxxx){
        document.getElementById('e6').src = feketegyalog
        document.getElementById('e5').src = feksemmi
    }   

}
function LondonValt(){
    document.getElementById('londonszam').innerHTML = Londonlepes
}