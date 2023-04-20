// London //
let Londonlepes = 0
function londonVissza(){
    Londonlepes -= 1
}
function londonTovabb(){
    Londonlepes += 1
}
function londonMegny(){
    if (Londonlepes < 0){
        Londonlepes = 0
        

    }
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
        document.getElementById('c3').src = fehsemmi
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
        document.getElementById('f3').src = feherhuszar
        document.getElementById('e5').src = fehsemmi
    }    
    if (Londonlepes == 15){
        document.getElementById('e5').src = feherhuszar
        document.getElementById('f3').src = feksemmi
        document.getElementById('c6').src = feketehuszar
    }    
    if (Londonlepes == 16){
        document.getElementById('c6').src = feksemmi
        document.getElementById('e5').src = fehsemmi
        document.getElementById('e5').src = feketehuszar
        document.getElementById('d4').src = fehergyalog
    }    
    if (Londonlepes == 17){
        document.getElementById('e5').src = fehergyalog
        document.getElementById('d4').src = fehsemmi
        document.getElementById('d7').src = feksemmi
        document.getElementById('f6').src = feketehuszar
    }
    if (Londonlepes == 18){
        document.getElementById('d7').src = feketehuszar
        document.getElementById('f6').src = fehsemmi
        document.getElementById('c2').src = feksemmi
        document.getElementById('d1').src = feherkiralyno
    }
    if (Londonlepes == 19){
        document.getElementById('c2').src = feherkiralyno
        document.getElementById('d1').src = feksemmi
        document.getElementById('h7').src = feketegyalog
        document.getElementById('h6').src = feksemmi
    }
    if (Londonlepes == 20){
        document.getElementById('h7').src = feksemmi
        document.getElementById('h6').src = feketegyalog

        document.getElementById('e1').src = feherkiraly
        document.getElementById('c1').src = fehsemmi
        document.getElementById('a1').src = feherbastya
        document.getElementById('d1').src = feksemmi
        document.getElementById('londonTovabb').innerHTML = "Tovább"
    }
    if (Londonlepes == 21){
        document.getElementById('e1').src = fehsemmi
        document.getElementById('c1').src = feherkiraly
        document.getElementById('a1').src = fehsemmi
        document.getElementById('d1').src = feherbastya
        document.getElementById('londonTovabb').innerHTML = "Vissza az elejére"

    }
    if (Londonlepes == 22){
        document.getElementById('londonTovabb').innerHTML = "Tovább"
        document.getElementById('a1').src = feherbastya
        document.getElementById('b1').src = feherhuszar
        document.getElementById('c1').src = feherfuto
        document.getElementById('d1').src = feherkiralyno
        document.getElementById('e1').src = feherkiraly
        document.getElementById('f1').src = feherfuto
        document.getElementById('g1').src = feherhuszar
        document.getElementById('c2').src = fehergyalog
        document.getElementById('d2').src = fehergyalog     
        document.getElementById('e2').src = fehergyalog

        document.getElementById('b8').src = feketehuszar
        document.getElementById('c8').src = feketefuto
        document.getElementById('d8').src = feketekiralyno
        document.getElementById('e8').src = feketekiraly
        document.getElementById('f8').src = feketefuto
        document.getElementById('g8').src = feketehuszar
        document.getElementById('h8').src = feketebastya
        document.getElementById('c7').src = feketegyalog
        document.getElementById('d7').src = feketegyalog     
        document.getElementById('e7').src = feketegyalog
        document.getElementById('c3').src = fehsemmi
        document.getElementById('e3').src = fehsemmi
        document.getElementById('f4').src = fehsemmi
        document.getElementById('e5').src = fehsemmi
        document.getElementById('c5').src = fehsemmi
        document.getElementById('d3').src = feksemmi
        document.getElementById('d5').src = feksemmi
        document.getElementById('e6').src = feksemmi
        document.getElementById('h7').src = feketegyalog
        document.getElementById('h6').src = feksemmi

        Londonlepes = 0
    }
}