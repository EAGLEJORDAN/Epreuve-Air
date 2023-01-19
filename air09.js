/*quantité illimité de donnée, et type chiffre et lettre*/ 
const argt=process.argv.slice(2);
if (argt[0]===undefined || argt[1]===undefined)
{
    console.log(/*"erreur il faut mimnimum deux arguments!"*/"error")
}
else //maincode Michel albert therese benoit
{
    //console.log("ok");
    //console.log(argt);
    //copier la ligne de commande
    let copieArgt=[];
    let index=argt.length-1;
    let rotation="";
    let resultat;
    for (let i=0; i<=argt.length-1; i++)
    {
        copieArgt[i]=argt[i];
    }
    //console.log(`${copieArgt} ok`) ;
    function rotationVersLaGauche (parametre1,parametre2)
    {
        for (let i=parametre2.length-1;i>=0; i--)
        {
            for (let x=index; x>=0; x--)
            {
                if (i === 0)
                {
                    parametre1[parametre1.length-1]=parametre2[i];
                }
                else
                {
                    parametre1[x-1]=parametre2[i]; 
                    //console.log(parametre1);
                    index=index-1;
                    break;
                }
            }
        }
        //console.log(parametre1);
        for (let i=0; i<=parametre1.length-1; i++)
        {
            if (i === parametre1.length-1)
            {
                rotation+=parametre1[i];    
            }
            else
            {
                rotation+=parametre1[i] +" ,";
            }
        }
        return rotation;
    }
    resultat=rotationVersLaGauche(argt,copieArgt);
    console.log(resultat);
}