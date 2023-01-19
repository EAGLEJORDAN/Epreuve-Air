let argt=process.argv[2];
let nextArgt= process.argv.slice(3);
if (argt === undefined || nextArgt[0] != undefined )
{
    console.log(/*"erreur c'est vide ou il faut maximum un argument!"*/"error");
}
else
{
    let nothing;
    function separeString(parametre) //"bonjour les gars"
    {
        //console.log(parametre); //"bonjour les gars"
            let diviserEspace;
            let diviserTab;
            let diviserRetourLigne; 
            for (let i=0; i<=parametre.length-1; i++) //vérifie si espace
            {   
                if (parametre[i] === " ")
                {                 
                   diviserEspace="oui"; 
                   break;
                }
            }
            for (let i=0; i<=parametre.length-1; i++) //vérifie si \t
            {
                if (parametre[i] === "\\" && parametre[i+1]==="t")
                {
                   diviserTab="oui"; 
                   break;
                }
            }
            for (let i=0; i<=parametre.length-1; i++) //vérifie si \n
            {
                if (parametre[i] === "\\" && parametre[i+1] === "n")
                {
                   diviserRetourLigne="oui";
                   break;
                }
            }
            if (diviserTab === "oui") 
            {
                let reg = /\\t/gi; 
                parametre=parametre.replace(reg," ");
                //console.log(parametre);
                if( diviserRetourLigne  === "oui" )
                {
                    let reg = /\\n/gi;
                    parametre=parametre.replace(reg, " ");
                    //console.log(parametre);
                    if ( diviserEspace ==="oui")
                    {
                        parametre=parametre.split(" ");
                        for (let i=0; i<=parametre.length-1; i++)
                        {
                            console.log(parametre[i]);
                        }
                    }
                    else
                    {
                        parametre=parametre.split(" ");
                        for (let i=0; i<=parametre.length-1; i++)
                        {
                            console.log(parametre[i]);
                        }
                    }
                }
                else if ( diviserEspace ==="oui")
                {
                    parametre=parametre.split(" ");
                    for (let i=0; i<=parametre.length-1; i++)
                    {
                        console.log(parametre[i]);
                    }
                }
                else
                {
                    parametre=parametre.split(" ");
                    for (let i=0; i<=parametre.length-1; i++)
                    {
                        console.log(parametre[i]);
                    }
                }
            }
            else if (diviserRetourLigne === "oui" )
            {
                    let reg = /\\n/gi; 
                    parametre=parametre.replace(reg, " ");
                    //console.log(parametre);
                    if ( diviserEspace ==="oui")
                    {
                        parametre=parametre.split(" ");
                        for (let i=0; i<=parametre.length-1; i++)
                        {
                            console.log(parametre[i]);
                        }
                    }
                    else
                    {
                        parametre=parametre.split(" ");
                        for (let i=0; i<=parametre.length-1; i++)
                        {
                            console.log(parametre[i]);
                        }
                    }
            }
            else if (diviserEspace ==="oui")
            {
                parametre=parametre.split(" ");
                for (let i=0; i<=parametre.length-1; i++)
                {
                    console.log(parametre[i]); 
                }
            }
            else
            {
                console.log("il n'y a ni tabulation ni espace et ni de retour à la ligne");
            }
    }
       nothing=separeString(argt);
       //console.log(nothing);
}
