
const ecran=document.querySelector('input');
const bouton = document.querySelectorAll("button");


for(let x=0;x<bouton.length;x++){
    bouton[x].addEventListener('click',()=> {
        // if(bouton[2] && ecran.value[ecran.value.length-1] == bouton[2].textContent){
        //     ecran.value=ecran.value}else
        if(bouton[x]==bouton[0]){
            ecran.value=''
        }else if(bouton[x]===bouton[2] && ecran.value==''){
            ecran.value=''
        }else if(bouton[x]===bouton[6] && ecran.value==''){
                ecran.value=''
        }else if(bouton[x]===bouton[10] && ecran.value==''){
                    ecran.value=''
                }else if(bouton[x]===bouton[14] && ecran.value==''){
                        ecran.value=''
                    }else if(bouton[x]===bouton[16] && ecran.value==''){
                            ecran.value=''
        }else if(bouton[x] ==bouton[1]){
        ecran.value=ecran.value.slice(0,-1)
    }else if(bouton[x]==bouton[16]){
        if(ecran.value.includes("÷")){
                ecran.value = ecran.value.replaceAll("÷", "/")
            }
            if(ecran.value.includes('x')){
                ecran.value = ecran.value.replaceAll('x', '*')
            }
         ecran.value=eval(ecran.value)
        } else {
        ecran.value+=bouton[x].innerText}
    });
}





