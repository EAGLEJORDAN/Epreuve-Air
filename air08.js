let argt=process.argv.slice(2,5);
if (argt[0]===undefined || argt[1]=== undefined || argt[2]===undefined)
{
    console.log(/*"erreur il faut 3 arguments!"*/"error")
}
else
{  //verifiez si l'élément 1 et 3 de argt contient des nombres puis que l'élement 2 de argt contient le mot fusion
//extraction et isolation des éléments de argt
   let $element1=argt[0];
   //console.log($element1);
   let $element2=argt[1];
   //console.log($element2);
   let $element3=argt[2];
   //console.log($element3);
   // séparation d'une chaine en plusieurs élément
   let tableau1=$element1.split(" ")
   let tableau2=$element3.split(" ")
   //console.log(tableau1 +" est séparé"); 
   //console.log(tableau2 +" est séparé");
   let tab1Final=[], tab2Final=[], separateurFusion, resultatFinal;
   //verifiez que tableau1 et tableau2 ne contienent que des chiffres
   for (let i=0; i<=tableau1.length-1; i++)
   {
        if(isNaN(tableau1[i])===true)
        {
            console.log(/*"erreur il faut que des chiffres dans le premier argument"*/"error");
            break;
        }
        else if (tableau1[i]==="")
        {
            console.log(/*"erreur il y a un espace en trop dans le premier argument"*/"error");
            break;
        }
        else if (isNaN(tableau1[i])===false)
        {
            tab1Final[i]=tableau1[i];
        }
    
   }
   for (let i=0; i<=tableau2.length-1; i++)
   {
        if(isNaN(tableau2[i])===true)
        {
            console.log(/*"erreur il faut que des chiffres dans le troisieme argument"*/"error");
            break;
        }
        else if (isNaN(tableau2[i])===false)
        {
            tab2Final[i]=tableau2[i];
        }
   }
   separateurFusion=$element2.toUpperCase();
   //console.log(separateurFusion);   
   if (separateurFusion!="FUSION")
   {
        console.log(/*"erreur: l'argument 2 doit etre égale à fusion!"*/"error")
   }
   //console.log(tab1Final +" "+ separateurFusion +" "+  tab2Final); //2, 8, 789, 1000 FUSION 5, 10
   //maincode
   //si il n'y a que des nombres et qu'il ya le mot fusion 
   function ajouteDesChifrDansList2ChifrOrdrCrois(parametre1,parametre2)
   {  
       if (parametre1.length===tableau1.length && parametre2.length===tableau2.length && separateurFusion=== "FUSION")
       {
            //console.log("tout est ok");
            let resultat="";
            for (let i=0; i<=parametre1.length-1; i++)
            {
                parametre1[i]=Number(parametre1[i]);
            }
            //console.log(parametre1);
            for (let i=0; i<=parametre2.length-1; i++)
            {
                parametre2[i]=Number(parametre2[i]);
            }
            //console.log(parametre2);        
            //insérer les éléments du parametre2 dans parametre1
            for (let x=parametre2.length-1; x>=0; x--)
            {
                for (let i=0; i<=parametre1.length-1; i++)
                {
                    if (parametre2[x]>parametre1[i] && parametre2[x]<parametre1[i+1])
                    {
                        //jinsere et supprime l'émément de parametre2
                        parametre1.splice(i+1,0,parametre2[x]);
                        //console.log(parametre1);
                        parametre2.splice(x,1);
                        //console.log(parametre2);
                        break;
                    }
                    else if(i===parametre1.length-1 && parametre2[x]>parametre1[i])
                    {
                        //jinsere et supprime l'émément de parametre2
                        parametre1.splice(i+1,0,parametre2[x]);
                        //console.log(parametre1);
                        parametre2.splice(x,1);
                        //console.log(parametre2);
                        break;
                    }
                    else if (parametre2[x] < parametre1[i])
                    {
                       //jinsere et supprime l'émément de parametre2
                       parametre1.splice(i,0,parametre2[x]);
                       //console.log(parametre1);
                       parametre2.splice(x,1);
                       //console.log(parametre2);
                       break; 
                    }
                    else
                    {
                        continue;
                    }
                }
            }
            //console.log(parametre1);
            for (let i=0; i<=parametre1.length-1; i++)
            {
                if (i=== parametre1.length-1)
                {
                    resultat+=parametre1[i];
                }
                else
                {
                    resultat+=parametre1[i] + " ";
                }
            }
            return resultat;
       }
    }
    resultatFinal=ajouteDesChifrDansList2ChifrOrdrCrois(tab1Final,tab2Final);
    console.log(resultatFinal);
}
