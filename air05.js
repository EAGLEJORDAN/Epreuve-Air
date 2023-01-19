let argt=process.argv.slice(2);
let argt2=[];
let dernierElement;
let resultat="";
//gestion erreur argt
if (argt[0] === undefined || argt[1]=== undefined)
{
    console.log(/*"il faut mnimum deux nombres!"*/"error")
}
else
{
    for (let i=0; i<=argt.length-1; i++)
    {
       argt[i]=Number(argt[i]);
    }
    //console.log(argt); //[ 1, 2, NaN, 5 ]
    for (let i=0; i<=argt.length-1; i++)
    {
        if (isNaN(argt[i]) === true)
        {
            console.log(/*"vous devez insérer que des nombres!"*/"error");
            break;
        }
        else
        {
            argt2[i]=argt[i];
        }
    }
    // fin gestion erreur 
    if (argt2.length===argt.length)
    {
        //console.log(argt2);
        dernierElement=argt2[argt2.length-1]; //je stock le dernier element dans une variable
        //console.log(dernierElement);
        argt2.pop(); // suppression du dernier element du tableau de travail argt2
        //console.log(argt2);
        if (dernierElement < 0)
        { //soustractionne
            //dernierElement=dernierElement*-1 ou comme la ligne 42
            for (let i=0; i<=argt2.length-1; i++)
            {
                if (i===argt2.length-1)
                {
                    resultat+=argt2[i]  + dernierElement;
                }
                else
                {
                    resultat+=argt2[i]  + dernierElement + " ";
                }
            }
            console.log(resultat);
        }
        else if(Math.sign(dernierElement) === 1)
        {//additionne
            for (let i=0; i<=argt2.length-1; i++)
            {
                if (i===argt2.length-1)
                {
                    resultat+=argt2[i] + dernierElement;
                }
                else
                {
                    resultat+=argt2[i] + dernierElement + " ";
                }
            }
            console.log(resultat);
        }
    }
}