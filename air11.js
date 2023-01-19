let argt = process.argv[2];
let argt2 = process.argv[3];
let argt3 = process.argv.slice(4);
function afficherUnePyramide(symbole, etage)
{
    if (symbole === undefined || isNaN(symbole)===false)
    {
        console.log(/*"erreur il faut un caractere qui n'est pas un chiffre!"*/"error");
    }
    else if (etage===undefined || isNaN(etage)=== true)
    {
        console.log(/*"rajouter un chiffre!"*/"error");
    }
    else if (argt3[0]!= undefined)
    {
        console.log(/*"erreur il faut deux arguments!"*/"error"); 
    }
    else
    {
        let tabPyramide =[];
        let varPyramide;
        let couleur=require("colors");
        for (let i=0; i<etage; i++)
        {
            if(i===0)
            {
                tabPyramide[etage-1 ]=symbole;
                //console.log(tabPyramide);
                for (let i=0; i<etage-1; i++)
                {
                    tabPyramide[i]=" ";
                }
                //console.log(tabPyramide);
                for (let i=etage*2-2; i>etage-1; i-- )
                {
                    tabPyramide[i]=" ";
                }
                //console.log(tabPyramide);
                varPyramide=tabPyramide.join();
                //console.log(varPyramide);
                let reg=/,/gi;
                varPyramide=varPyramide.replace(reg,"");
                console.log(varPyramide.rainbow);
            }
            else
            {
                //console.log(varPyramide);
                tabPyramide[etage-1-i]=symbole;
                tabPyramide[etage-1+i]=symbole;
                //console.log(tabPyramide);
                varPyramide=tabPyramide.join();
                //console.log(varPyramide);
                let reg2=/,/gi;
                varPyramide=varPyramide.replace(reg2,"");
                console.log(varPyramide.rainbow);
            }
        }
    }
}
afficherUnePyramide(argt, argt2);