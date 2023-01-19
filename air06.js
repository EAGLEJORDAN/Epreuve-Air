let argt=process.argv.slice(2);
let dernierElement;
let variable;
let $absent = "";
let resultat;
if (argt.length < 2)
{
    console.log(/*"erreur il faut minimum deux arguments!"*/"error")
}
else
{
    dernierElement=argt[argt.length-1];
    //console.log(dernierElement);
    argt.pop();
    //console.log(argt);
    function verifieSiUneSousChaineEstPresente (parametre, parametre2)
    {
        for (let i=0; i<=parametre.length-1; i++)
        {
            variable=parametre[i].toUpperCase();
            //console.log(variable);
            parametre2=parametre2.toUpperCase();
            //console.log(parametre2);
            variable.indexOf(parametre2);
            if( variable.indexOf(parametre2) === -1)
            {
                if (i===parametre.length-1)
                {
                    $absent+=parametre[i];
                }
                else
                {
                    $absent+=parametre[i] + " ";
                }
            }
        }
        return $absent;
    }
    resultat = verifieSiUneSousChaineEstPresente(argt,dernierElement);
    console.log(resultat);
}