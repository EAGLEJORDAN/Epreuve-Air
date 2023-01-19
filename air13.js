// verifiez si les exos sont présents dans le dossier
let fs = require ('fs');
let nombreFile;
const checkFilePresent = () =>
{
  for (let i=0; i<13; i++)
  {
    if (i>=10)
    {
      let path= "./air"+i+".js";
      if (fs.existsSync(path) === true)
      {
        nombreFile=i;
        //console.log("fichier présent air"+i+".js");
      }
      else
      {
        console.log("fichier absent air"+i+".js");
      }    
    }
    else if(i<10)
    {
      let path= "./air0"+i+".js";
      if (fs.existsSync(path) === true)
      {
        nombreFile=i;
        //console.log("fichier présent air0"+i+".js");
      }
      else
      {
        console.log("fichier absent air0"+i+".js");
      }
    }
  }
  //console.log(nombreFile);
}
checkFilePresent();
if (nombreFile===12) // si tout mes fichiers sont présents
{
  //console.log("tout les fichiers sont presents maintenant faut les exécuter avec des arguments différents");
  function testDesExos()
  {
    const {spawnSync}=require('child_process'); 
    //lancer les processus enfant avec les differents arguments
    for(let i=0; i<=12; i++)
    {
      if (i<10)
      {
        switch("air0"+i)
        {
          case "air00":// méthode spawnSync
          //let {spawnSync}=require('child_process');
          let node0 = spawnSync('node',[`air0${i}.js`,"bonjour les gars"],{cwd:undefined, encoding:'utf-8'});
          if(node0.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node.stdout);
          }
          else if(node0.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          let node1 = spawnSync('node',[`air0${i}.js`,"bonjour les gars"],{cwd:undefined, encoding:'utf-8'});
          if(node1.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node1.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air01":// méthode spawnSync
          //let {spawnSync}=require('child_process');
          let node2 = spawnSync('node',[`air0${i}.js`,"Crevette magique dans la mer des etoiles","la"],{cwd:undefined, encoding:'utf-8'});
          if(node2.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node.stdout);
          }
          else if(node2.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          let node3 = spawnSync('node',[`air0${i}.js`,"Crevette magique dans la mer des etoiles","la"],{cwd:undefined, encoding:'utf-8'});
          if(node3.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node3.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air02":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node4 = spawnSync('node',[`air0${i}.js`,"je","test","des","trucs"," "],{cwd:undefined, encoding:'utf-8'});
          if(node4.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node.stdout);
          }
          else if(node4.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          const node5 = spawnSync('node',[`air0${i}.js`,"je","test","des","trucs"," "],{cwd:undefined, encoding:'utf-8'});
          if(node5.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node5.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air03":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node6 = spawnSync('node',[`air0${i}.js`,1,2,3,4,5,4,3,2,1],{cwd:undefined, encoding:'utf-8'});
          if(node6.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node6.stdout);
          }
          else if(node6.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          const node7 = spawnSync('node',[`air0${i}.js`,1,2,3,4,5,4,3,2,1],{cwd:undefined, encoding:'utf-8'});
          if(node7.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node7.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air04":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node8 = spawnSync('node',[`air0${i}.js`,"hello milady,  bien ou quoi??"],{cwd:undefined, encoding:'utf-8'});
          if(node8.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node8.stdout);
          }
          else if(node8.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          const node9 = spawnSync('node',[`air0${i}.js`,"hello milady,  bien ou quoi??"],{cwd:undefined, encoding:'utf-8'});
          if(node9.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node9.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air05":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node10 = spawnSync('node',[`air0${i}.js`,1,2,3,4,5,"2"],{cwd:undefined, encoding:'utf-8'});
          if(node10.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node10.stdout);
          }
          else if(node10.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          const node11 = spawnSync('node',[`air0${i}.js`,1,2,3,4,5,"2"],{cwd:undefined, encoding:'utf-8'});
          if(node11.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node11.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air06":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node12 = spawnSync('node',[`air0${i}.js`,"Michel","Albert","Therese","Benoit","t"],{cwd:undefined, encoding:'utf-8'});
          if(node12.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node.stdout);
          }
          else if(node12.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          const node13 = spawnSync('node',[`air0${i}.js`,"Michel","Albert","Therese","Benoit","t"],{cwd:undefined, encoding:'utf-8'});
          if(node13.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node13.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air07":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node14 = spawnSync('node',[`air0${i}.js`,1,3,4,2],{cwd:undefined, encoding:'utf-8'});
          if(node14.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node14.stdout);
          }
          else if(node14.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          const node15 = spawnSync('node',[`air0${i}.js`,1,3,4,2],{cwd:undefined, encoding:'utf-8'});
          if(node15.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node15.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air08":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node16 = spawnSync('node',[`air0${i}.js`,10,20,30,"fusion",15,25,35],{cwd:undefined, encoding:'utf-8'});
          if(node16.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node16.stdout);
          }
          else if(node16.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          const node17 = spawnSync('node',[`air0${i}.js`,10, 20, 30, "fusion", 15, 25, 35],{cwd:undefined, encoding:'utf-8'});
          if(node17.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node17.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
          case "air09":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node18 = spawnSync('node',[`air0${i}.js`,"Michel","Albert","Therese","Benoit"],{cwd:undefined, encoding:'utf-8'});
          if(node18.stdout)
          {
            console.log(`air0${i} 1/2 : Success`); //console.log(node18.stdout);
          }
          else if(node18.stderr)
          {
            console.log(`air0${i} 1/2 : Failure`);
          }
          const node19 = spawnSync('node',[`air0${i}.js`,"Michel","Albert","Therese","Benoit"],{cwd:undefined, encoding:'utf-8'});
          if(node19.stdout)
          {
            console.log(`air0${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node19.stderr)
          {
            console.log(`air0${i} 2/2 : Failure`);
          }break;
        }
      }
      if (i>=10)
      {
        switch ("air"+i)
        {
        case "air10":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node20 = spawnSync('node',[`air${i}.js`,"air00.js"],{cwd:undefined, encoding:'utf-8'});
          if(node20.stdout)
          {
            console.log(`air${i} 1/2 : Success`); //console.log(node.stdout);
          }
          else if(node20.stderr)
          {
            console.log(`air${i} 1/2 : Failure`);
          }
          const node21 = spawnSync('node',[`air${i}.js`,"air00.js"],{cwd:undefined, encoding:'utf-8'});
          if(node21.stdout)
          {
            console.log(`air${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node21.stderr)
          {
            console.log(`air${i} 2/2 : Failure`);
          }break;
        case "air11":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node22 = spawnSync('node',[`air${i}.js`,"O",5],{cwd:undefined, encoding:'utf-8'});
          if(node22.stdout)
          {
            console.log(`air${i} 1/2 : Success`); //console.log(node22.stdout);
          }
          else if(node22.stderr)
          {
            console.log(`air${i} 1/2 : Failure`);
          }
          const node23 = spawnSync('node',[`air${i}.js`,"O",5],{cwd:undefined, encoding:'utf-8'});
          if(node23.stdout)
          {
            console.log(`air${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node23.stderr)
          {
            console.log(`air${i} 2/2 : Failure`);
          }break;
        case "air12":// méthode spawnSync
          //const {spawnSync}=require('child_process');
          const node24= spawnSync('node',[`air${i}.js`,6,5,4,3,2,1],{cwd:undefined, encoding:'utf-8'});
          if(node24.stdout)
          {
            console.log(`air${i} 1/2 : Success`); //console.log(node.stdout);
          }
          else if(node24.stderr)
          {
            console.log(`air${i} 1/2 : Failure`);
          }
          const node25 = spawnSync('node',[`air${i}.js`,6,5,4,3,2,1],{cwd:undefined, encoding:'utf-8'});
          if(node25.stdout)
          {
            console.log(`air${i} 2/2 : Success`); //console.log(node.stdout);
          }
          else if(node25.stderr)
          {
            console.log(`air${i} 2/2 : Failure`);
          }break;
        }
      }
    }
  }
  testDesExos();
}