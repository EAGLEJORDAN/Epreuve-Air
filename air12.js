let argt = process.argv.slice(2);
let argtFinal = [];
if (argt[0] === undefined || argt[1] === undefined) 
{
    console.log(/*"erreur il faut au moins deux chiffres!"*/"error")
}
else 
{
    for (let i = 0; i <= argt.length - 1; i++) //transforme en number
    {
        argt[i] = Number(argt[i]);
    }
    //console.log(argt);
    for (let i = 0; i <= argt.length - 1; i++)// verifie si il ya que des chiffres
    {
        if (isNaN(argt[i]) === true) 
        {
            console.log(/*"erreur il faut que des chiffres!"*/"error")
            break;
        }
        else if (argt[i] < 0)
        {
            console.log(/*"erreur il faut que des chiffres positif!"*/"error");
        }
        else
        {
            argtFinal[i] = argt[i];
        }
    }
    if (argtFinal.length === argt.length) //maincode
    {
        //console.log(`voici mon tableau de chiffre à trier: ${argtFinal}`); 
        let resultat=[];
        let resultatFinal = [];
        function myQuickSort(arrayMain) 
        {
            const arrLeft = [];
            const arrRight = [];
            let pivot = "";
            if (arrayMain.length < 1) //condition fin de fonction Quicksort
            {
                for ( let i=0; i<=resultat.length-1; i++)
                {
                    if(isNaN(resultat[i]) === false)
                    {
                        resultatFinal.push(resultat[i]);
                    }
                } 
                resultatFinal=resultatFinal.join(", "); return;
            } 
            else 
            {
                pivot = arrayMain[arrayMain.length - 1]; //console.log(pivot+" est mon pivot");// extraction du pivot
    
                for(let i=0; i<arrayMain.length-1; i++) //ajout des valeur dans arrleft ou arrright  ou complement en fonction du pivot
                {      
                    if (arrayMain[i]<= pivot)
                    {
                        arrLeft.push(arrayMain[i]);
                    }
                    else if (arrayMain[i] >= pivot)
                    {
                        arrRight.push(arrayMain[i]); 
                    }
                } //console.log("tableau gauche "+arrLeft +" et tableau droit " + arrRight);
    
                //placer pivot dans sa place définitive
                if (resultat[pivot]===undefined)
                {
                    resultat[pivot]=pivot;
                }
                else if (resultat[pivot]===pivot)
                {
                    resultat.splice(pivot,0,pivot);
                }//console.log("place définitive du pivot: "+ pivot +" dans le tableau resultat: "+resultat);
    
                //rassembler les deux tableaux
                for (let i=0; i<=arrRight.length-1; i++)
                {
                    arrLeft.push(arrRight[i]);
                }//console.log("tableau rassemblé: "+arrLeft );
                //fonction recursive
                myQuickSort(arrLeft);
            }
        }
        myQuickSort(argtFinal);//fin fontion
        console.log(resultatFinal);
    }
}