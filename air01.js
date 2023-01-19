function gestionErreurArgt()
{
    let argt=process.argv[2];
    let separateur=process.argv[3];
    let nextArgt= process.argv.slice(4);
    if (argt === undefined || separateur === undefined || nextArgt[0] != undefined)
    {
        console.log(/*"erreur il faut maximum deux arguments le deuxième doit etre une sous chaine du premier argument!"*/"error");
    }
    else
    {
        //console.log(argt + " "+separateur);
        function separateurStringEnFonction(parametre, parametre2) 
        {
            let tabString=[];
            tabString = parametre.split(parametre2);
            //console.log(tabString);
            for (let i=0; i<=tabString.length-1; i++)
            {
                console.log(tabString[i]);
            }
        }
        separateurStringEnFonction(argt,separateur);
    }
}
gestionErreurArgt();