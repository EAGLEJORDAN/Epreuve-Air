function gestionErreurArgt()
{
    let argt=process.argv.slice(2,-1);
    let nextArgt=process.argv.slice(2);
    let pstLastArgt = nextArgt.length-1;
    let concat = nextArgt[pstLastArgt];
    let resultat;
    if (argt.length < 2) // 1 2 3
    {
        console.log(/*"erreur il faut minimum 3 arguments!\nLe dernier doit être l'assembleur!"*/"error");
    }
    else
    {
        //console.log(argt); // 1 2
        //console.log(concat);// 3
        function concatStringDunTab(parametre, parametre2) 
        {
            let tabString="";
            tabString = parametre.join(parametre2);
            return tabString;
        }
        resultat=concatStringDunTab(argt,concat);
        console.log(resultat);
    }
}
gestionErreurArgt();