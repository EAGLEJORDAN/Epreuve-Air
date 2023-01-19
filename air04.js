let argt=process.argv[2];
let nombreArgt=process.argv.length;
if (nombreArgt >3)
{
    console.log(/*"il faut qu'un seul argument! Cet argument doit être une chaîne de caractère!"*/"error")
}
else if (argt === undefined)
{
    console.log(/*"il faut une chaine de caractere!"*/"error")
}
else 
{   
    //console.log(argt); //azerttt
    //je transforme en tableau pour utiliser la méthode splice()
    let argt2=argt.split("");
    let argt3="";
    //console.log(argt2);
    for (let i=0; i<argt2.length-1; i++)
    {
        if(argt2[i] === argt2[i+1])
        {
            argt2.splice(i,1); //[t]
            --i;
        }
        else if(argt2[i] === argt2[i-1])
        {
            argt2.splice(i,1);
        }
    }
    //je transforme mon tableau en une chaine de caractere
    for (let i=0; i<=argt2.length-1; i++)
    {
        argt3+=argt2[i];
    }
    console.log(argt3);
}