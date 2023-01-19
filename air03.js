let argt = process.argv.slice(2);
if (argt[0] === undefined)
{
    console.log(/*"erreur c'est vide!"*/"error");
}
else
{
    //verifier si un élément est double dans le tableau argt
    let double =""; //
    let pasDouble=""; //1
    //let pst ="a"; // aaa
    //console.log(argt);//[ //9 5 6 9 6 5 2 [ '5', '6', '6', '5', '2' ] [ '6', '6', '2' ] [ '2' ]
    // faire une boucle pour vérifier un élément et une deuxiéme boucle pour comparer cet élément avec le reste
    for (let i=0; i<argt.length-1; )
    {//1 
        for (let x=1; x<=argt.length-1/*6*/; x++ ) //
        {
            if(argt[i] === argt[x]) //l'élément est égal
            {
                //console.log(argt[i] +" est égale  à "+argt[x]);
                argt.splice(i,1);
                argt.splice(x-1,1);
                //console.log(argt);
                break;
            }
            else
            {
                if (x===argt.length-1)
                {
                    pasDouble+=argt[i]+ " ";
                    argt.splice(i,1);
                    //console.log(argt);
                    //console.log("il y a "+ pasDouble+ " dans pasdouble");
                }
            }
        }
    }
    if (pasDouble[0] === undefined)
    {
        console.log("tout les éléments ont un double!")
    }
    else
    {
        for (let i=0; i<=argt.length-1; i++)
        {
            pasDouble+=argt[i] + " ";
        }
        console.log(pasDouble);
    }
}