// friedLiver //
let friedLiverlepes = 0
function friedLiverVissza(){
    friedLiverlepes -= 1
}
function friedLiverTovabb(){
    friedLiverlepes += 1
}
function friedLiverMegny(){
    if (friedLiverlepes < 0){
        friedLiverlepes = 0
    }
    if (friedLiverlepes == 0){
        document.querySelector('#friedLiver #e2').src = fehergyalog;    
        document.querySelector('#friedLiver #e4').src = feksemmi;
    }
    if (friedLiverlepes == 1){
        document.querySelector('#friedLiver #e4').src = fehergyalog;    
        document.querySelector('#friedLiver #e2').src = feksemmi;
        document.querySelector('#friedLiver #e7').src = feketegyalog;    
        document.querySelector('#friedLiver #e5').src = fehsemmi;
    }
    if (friedLiverlepes == 2){
        document.querySelector('#friedLiver #e5').src = feketegyalog;    
        document.querySelector('#friedLiver #e7').src = fehsemmi;
        document.querySelector('#friedLiver #f3').src = feksemmi;    
        document.querySelector('#friedLiver #g1').src = feherhuszar;
    }
    if (friedLiverlepes == 3){
        document.querySelector('#friedLiver #f3').src = feherhuszar;    
        document.querySelector('#friedLiver #g1').src = fehsemmi;
        document.querySelector('#friedLiver #c6').src = feksemmi;    
        document.querySelector('#friedLiver #b8').src = feketehuszar;
    }
    if (friedLiverlepes == 4){
        document.querySelector('#friedLiver #c6').src = feketehuszar;    
        document.querySelector('#friedLiver #b8').src = fehsemmi;
        document.querySelector('#friedLiver #c4').src = feksemmi;    
        document.querySelector('#friedLiver #f1').src = feherfuto;
    }
    if (friedLiverlepes == 5){
        document.querySelector('#friedLiver #c4').src = feherfuto;    
        document.querySelector('#friedLiver #f1').src = feksemmi;
        document.querySelector('#friedLiver #f6').src = fehsemmi;    
        document.querySelector('#friedLiver #g8').src = feketehuszar;
    }
    if (friedLiverlepes == 6){
        document.querySelector('#friedLiver #f6').src = feketehuszar;    
        document.querySelector('#friedLiver #g8').src = feksemmi;
        document.querySelector('#friedLiver #f3').src = feherhuszar;    
        document.querySelector('#friedLiver #g5').src = fehsemmi;
    }
    if (friedLiverlepes == 7){
        document.querySelector('#friedLiver #g5').src = feherhuszar;    
        document.querySelector('#friedLiver #f3').src = feksemmi;
    }
    if (document.getElementById('friedLiverlinekulonvalaszto').value = 'eloreAKiralyt'){
        if(friedLiverlepes == 7){
            document.querySelector('#friedLiver #d7').src = feketegyalog;    
            document.querySelector('#friedLiver #d5').src = feksemmi;
        }
        if(friedLiverlepes == 8){
            document.querySelector('#friedLiver #d5').src = feketegyalog;    
            document.querySelector('#friedLiver #d7').src = feksemmi;
            document.querySelector('#friedLiver #e4 ').src = fehergyalog;
        }
        if(friedLiverlepes == 9){
            document.querySelector('#friedLiver #d5').src = fehergyalog;    
            document.querySelector('#friedLiver #e4').src = feksemmi;
            document.querySelector('#friedLiver #f6').src = feketehuszar;    
            document.querySelector('#friedLiver #d5').src = fehergyalog;
        }
        if(friedLiverlepes == 10){
            document.querySelector('#friedLiver #d5').src = feketehuszar;    
            document.querySelector('#friedLiver #f6').src = fehsemmi;
            document.querySelector('#friedLiver #g5').src = feherhuszar;  
            document.querySelector('#friedLiver #f7').src = feketegyalog;

        }
        if(friedLiverlepes == 11){
            document.querySelector('#friedLiver #f7').src = feherhuszar;
            document.querySelector('#friedLiver #g5').src = fehsemmi;  
            document.querySelector('#friedLiver #e8').src = feketekiraly;

        }
        if(friedLiverlepes == 12){
            document.querySelector('#friedLiver #f7').src = feketekiraly;
            document.querySelector('#friedLiver #e8').src = feksemmi;    
            document.querySelector('#friedLiver #d1').src = feherkiralyno;
            document.querySelector('#friedLiver #f3').src = feksemmi; 
        }
        if(friedLiverlepes == 13){
            document.querySelector('#friedLiver #f3').src = feherkiralyno;
            document.querySelector('#friedLiver #d1').src = feksemmi;    
            document.querySelector('#friedLiver #e6').src = feksemmi;
            document.querySelector('#friedLiver #f7').src = feketekiraly; 
        }
        if(friedLiverlepes == 14){
            document.querySelector('#friedLiver #e6').src = feketekiraly;
            document.querySelector('#friedLiver #f7').src = feksemmi;    
            document.querySelector('#friedLiver #c3').src = feksemmi;
            document.querySelector('#friedLiver #b1').src = feherhuszar;  
        }
        if(friedLiverlepes == 15){
            document.querySelector('#friedLiver #c3').src = feherhuszar;
            document.querySelector('#friedLiver #b1').src = feksemmi; 
            document.querySelector('#friedLiver #b4').src = fehsemmi;
            document.querySelector('#friedLiver #c6').src = feketehuszar;   
        }
        if(friedLiverlepes == 16){
            document.querySelector('#friedLiver #b4').src = feketehuszar;
            document.querySelector('#friedLiver #c6').src = feksemmi;    

            document.querySelector('#friedLiver #g1').src = fehsemmi;
            document.querySelector('#friedLiver #e1').src = feherkiraly;  
            document.querySelector('#friedLiver #f1').src = feksemmi;
            document.querySelector('#friedLiver #h1').src = feherbastya;  
        }
        if(friedLiverlepes == 17){
            document.querySelector('#friedLiver #g1').src = feherkiraly;
            document.querySelector('#friedLiver #e1').src = fehsemmi;    
            document.querySelector('#friedLiver #h1').src = feksemmi;
            document.querySelector('#friedLiver #f1').src = feherbastya; 
        }
    }
}
function friedLiverValt(){
    document.getElementById('friedLiverszam').innerHTML = friedLiverlepes
}