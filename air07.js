let $argt=process.argv.slice(2);
if ($argt[0]===undefined || $argt[1]=== undefined)
{
    console.log(/*"il doit y avoir deux arguments minimum!"*/"error")
}
else
{//vérifez qu'il y a que des nombre dans argt
    let $nombre =[];
    let $dernierElement;
    for (let i=0; i<=$argt.length-1; i++)
    {
        $argt[i]=Number($argt[i]);
    }
    //console.log($argt);
    for (let i=0; i<=$argt.length-1; i++)
    {
        if(isNaN($argt[i]) === true)
        {
            console.log(/*`erreur il faut que des nombres! $argt[i]`*/"error")
            break;
        }
        else
        {
            $nombre[i]=$argt[i];
        }
    }
    //console.log($nombre);
    if ($nombre.length===$argt.length) //signifie qu'il n'y a pas d'élément qui était une chaine de caractere
    {
        let $nombreTrié2="";
        $dernierElement=$nombre[$nombre.length-1];
        $nombre.pop();
        //console.log(`dernier élément est ${$dernierElement} et dans nombre il y a: ${$nombre}`);
        //verifiez si dans $nombre les éléments sont croissants
        function triezOrdreCroissant(parametre)
        {
            let compare = [];
            let stock2;//3
            for (let i=0; i<parametre.length-1; i++)
            {
               compare[i] = parametre[i];
               for (let x=compare.length; x<=parametre.length-1; x++)
               {
                    if (compare[i]<parametre[x])
                    {
                        parametre[i] = compare[i];
                    }
                    else  
                    {
                        stock2 = parametre[x];
                        //échange
                        parametre[x]= compare[i]; // 2 4 3 5
                        parametre[i] = stock2;
                        compare[i]= stock2;
                    }
               }
            }
            return parametre;
        }
        let $nombreTrié=triezOrdreCroissant($nombre);
        //console.log($nombreTrié);
        function ajouterValeurNumerTableauCroiss(tableauCroiss,valeurAjoute)
        {
            for (let i=0; i<=tableauCroiss.length-1; i++)
            {
                if(valeurAjoute <=tableauCroiss[i])
                {
                    tableauCroiss.splice(i,0,valeurAjoute);
                    break;
                }
            }
            for (let i=0; i<=tableauCroiss.length-1; i++)
            {
                if(i===tableauCroiss.length-1)
                {
                    $nombreTrié2+=tableauCroiss[i];                
                }
                else
                {
                    $nombreTrié2+=tableauCroiss[i] + " ";
                }
            }
            return $nombreTrié2;
        }
        let reslutat=ajouterValeurNumerTableauCroiss($nombreTrié,$dernierElement);
        console.log(reslutat);
    }
}