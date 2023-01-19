/*unction afficheLeContenuD1Fichier()
{
    let argt = process.argv[2];
    if (process.argv[3] != undefined)
    {
        console.log("erreur: il faut qu'un seul nom de fichier");
    }
    else if(process.argv[2]===undefined)
    {
        console.log("erreur il manque un nom de fichier!");
    }
    else
    {
        const fs = require('fs');
        fs.readFile(argt, 'utf8', function(err, data) {   const content = data;   console.log(content); });
        console.log(`lecture du fichier ${argt}`);
    }
}
afficheLeContenuD1Fichier();
*/
function afficheLeContenuD1Fichier()
{
    let argt = process.argv[2];
    if (process.argv[3] != undefined)
    {
        console.log(/*"erreur: il faut qu'un seul nom de fichier"*/"error");
    }
    else if(process.argv[2]===undefined)
    {
        console.log(/*"erreur il manque un nom de fichier!"*/"error");
    }
    else
    {
        const {readFile} = require('fs/promises');
        const colors=require('colors');
        async function read1File(fileName)
        {
          try
          {
            let data = await readFile(fileName);
            console.log(data.toString().rainbow); // convertir en chaine sinon la sortie sera traduit bizarement
          }
          catch
          {    
            console.error(/*`Got an error trying to read the file: {error.message}`*/"error");
          }
        }
        read1File(argt);
    }
}
afficheLeContenuD1Fichier();
