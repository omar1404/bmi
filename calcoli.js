/* Calcoli per la app sul BMI */
function calcola() {
    /*  dichiarazione variabile del form */
        var  peso=document.forms.BMI.peso.valueAsNumber;
        var  altezza=document.forms.BMI.altezza.valueAsNumber;
         var  sesso=document.forms.BMI.sesso.value;
    /* i dati non posso essere vuoti - - > required */
        if(sesso  =  "m") {
           var totale = peso/ (altezza*altezza);
               document.getEllementByld( ' calcola ' ).innerHTML= "BMI ="+totale;
             }
       else if({sesso="f") {
                 var totale = peso/(altezza*altezza))*0.9;
                    document.getEllementByld('calcola').innerHTML="BMI ="+totale;
   }


function cancella(){
     document.getEllementByld('calcola').innerHTML= "   ";

  }

