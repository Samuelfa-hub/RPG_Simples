//IDs
  const PopBtn =  document.getElementById("start-btn"); 
  const StartPop = document.getElementById("start-popup"); 
  const HeroData = document.getElementById("hero-select");
  const AttackBtn = document.getElementById("attack-btn");
  const BattleLog = document.getElementById("battle-log");
  const ItensBtn = document.getElementById("use-item-btn");
  //Display IDs
    const DisplayHeroName = document.getElementById("hero-name");
    const DisplayHeroHP = document.getElementById("hero-hp"); 
    const DisplayHeroStrenght = document.getElementById("hero-attack");
    const DisplayHeroInventory = document.getElementById("inventory-list");
    const DisplayMonsterName = document.getElementById("monster-name");
    const DisplayMonsterHp = document.getElementById("monster-hp");
    const DisplayMonsterStrenght = document.getElementById("monster-attack");
    const DisplayWin = document.getElementById("win-popup");
    const DisplayGO = document.getElementById("game-over-popup");

  //Arrays 
const Heros = [
  {Name:"Aragorn",HP: 100, Forca: 15},
  {Name:"Legolas",HP: 80, Forca: 20}, 
  {Name:"Gimli",HP: 120, Forca: 12}
]
const Monstros = [    
    { nome: "Goblin de Moria", hp: 40, forcaAtaque: 8 },
    { nome: "Uruk-hai", hp: 80, forcaAtaque: 16 },
    { nome: "Orc de Gundabad", hp: 90, forcaAtaque: 18 },
    { nome: "Warg", hp: 70, forcaAtaque: 22 },
    { nome: "Troll das Cavernas", hp: 150, forcaAtaque: 20 },
    { nome: "Espectro do Anel", hp: 110, forcaAtaque: 25 },
    { nome: "Balrog de Moria", hp: 200, forcaAtaque: 35 },
    { nome: "Aranha Gigante", hp: 130, forcaAtaque: 28 },
    { nome: "Capitão Uruk-hai", hp: 120, forcaAtaque: 24 },
    { nome: "Smaug (Filhote)", hp: 250, forcaAtaque: 40 }
]

//Data
let Hero = ""; 
let Monster ="";
let SelectedItem = null; 
//Event listeners 
PopBtn.addEventListener("click",Start);//initial function for getting data and clossing the popup
AttackBtn.addEventListener("click",Attacklogic);
ItensBtn.addEventListener("click",ItensLogic);

//classes  
class HEROClass
{
  constructor(Name,HP,Forca) 
  {
    this.Name = Name,
    this.HP = HP,
    this.Forca = Forca;
    this.inventory = [];
    this.AgilitiEffect = 0;
    this.Escudo = false;  
    this.Defesa = 0; 
  }
Attack(target)
  { 
    let atacar = false;
    let damage = Number(Hero.Forca);
    BattleLog.innerHTML = `${Hero.Name} attacou o ${Monster.Name}`
    if (Hero.StgEffect > 0 )
    { 
      damage += 5; 
      BattleLog += `${Hero.name} se sente mais forte`
      Hero.StgEffect -= 1 ; 
    }
    atacar = true; 
    if(atacar == true)
    {
      Monster.HP -= damage; 
    }
  }
}
class MONSTERClass {
  constructor(Name,HP,Forca)
  {
    this.Name = Name,
    this.HP = HP, 
    this.Forca = Forca;
    //Itens condition activiti 
    this.AgilitiPTN = 0;  
  }
  AttackBack(target)
  { 
    let damage = Number(Monster.Forca) - Hero.Defesa;
    BattleLog.innerHTML = BattleLog.innerHTML + `,${Monster.Name} revidou o ataque contra ${Hero.Name}`;
    if (damage < 0 )//in case damage is negative
    {
      damage = 0; 
    }
    if (Hero.Escudo == true)
    {
      damage -= damage * 0.3;
      BattleLog.innerHTML += `O escudo bloqueou parcialmente o dano`;
      Hero.Escudo = false;  
    }
    Hero.HP -= damage; 
    console.log(Hero.HP);
}
}
class ITENS{ 
  static All_Itens = [
    {Name:"Poção de Cura ",
      Effect:"Cura 50 pontos de vida do heroi ",
      Points: 50 ,
      ID:"pocao_de_cura",
      Action:() => {Hero.HP += 50;}
    },
    {Name:"Poção de Agilidade ",
      Effect:`Aumenta sua chance de esquivar de um Ataque por 5 turnos `,
      Points:4,//25%
      ID:"pocao_de_agilidade",
      Action:() => {
        Hero.AgilitiEffect = 5; 
        BattleLog.innerHTML += `você consumiu uma ${this.name} ` 
      }
    }
    ,
    {Name: "Espada do Poder ",
      Effect: "Aumenta a força de ataque do herói em 10 pontos. ",
      Points: 10,
      ID:"espada_do_poder",
      Action:() => {Hero.Forca += 10}
    },
    {Name: "Escudo do Guardião",
      Effect: "Reduz o dano recebido do próximo ataque em 30%. ",
      Points: 30,
      ID:"escudo_do_guardiao",
      Action:() => {
        BattleLog.innerHTML += `${Hero.name} ergueu o ${this.name} `
        Hero.Escudo = true;
      } 

    }
    ,
    {Name: "Armadura de Couro",
      Effect: "Adiciona 20 pontos de defesa.",
      Points: 5,
      ID:"armadura_de_couro",
      Action: () => {
        Hero.Defesa += 5; 
        BattleLog.innerHTML += `${Hero.name} tem menos forca contra você agora `  
      }
    }, 
    {Name: "Cajado Mágico",
      Effect: "Causa um dano mágico de 20 pontos ao monstro.",
      Points: 20,
      ID:"cajado_magico",
      Action: () => {
        Monster.HP -= 20; 
        BattleLog.innerHTML += `${Monster.name}recebeu uma rajada de misseis magicos `;
        UpdateUI (DisplayMonsterHp,Monster.HP,false);
      }
    }
]
}
function UpdateUI (CurrentUpdate,NewValue,Repeat) { 
if(Repeat === true)
  {
    CurrentUpdate.innerHTML = CurrentUpdate.innerHTML + NewValue; 
  }
else
{
  CurrentUpdate.innerHTML = NewValue; 
}
}
function Start() 
{
  //Getting Hero dat and getting a monster; 
  let ExtractedData = HeroData.value; 
  console.log(ExtractedData);//flag
  let OBJhero = Heros.find(Heros => Heros.Name === ExtractedData);
  Hero = new HEROClass(OBJhero.Name,OBJhero.HP,OBJhero.Forca);
  console.log(Hero)
  //replacing hero display data 
  DisplayHeroName.innerHTML =  Hero.Name; 
  DisplayHeroHP.innerHTML = Hero.HP; 
  DisplayHeroStrenght.innerHTML = Hero.Forca;
  //Randomizing monster and replacing data 
   let OBJmonster = Monstros[(Math.floor((Math.random() * Monstros.length)))];
   Monster = new MONSTERClass(OBJmonster.nome,OBJmonster.hp,OBJmonster.forcaAtaque)
  DisplayMonsterName.innerHTML = Monster.Name;
  DisplayMonsterHp.innerHTML = Monster.HP; 
  DisplayMonsterStrenght.innerHTML = Monster.Forca;
  //sorting itens 
  RandomizingItens()
  RenderInventory()
  console.log(Hero.inventory);
  //removing the popup 
  StartPop.style.display = "none";
};
function Attacklogic()
{
AttackBtn.disabled = true; 
Hero.Attack(Monster)
console.log(Monster.HP);//Flag 
if (Monster.HP <= 0 )
  { 
    ENDGAME()
    return;
}
UpdateUI(DisplayMonsterHp,Monster.HP,false);
//Monster attacking player lógic 
let ExecutarAtaque = false;
setTimeout(() => 
  {
    if(Hero.AgilitiEffect > 0)
    {
      if(Math.floor(Math.random()*4) == 1) 
      { 
        BattleLog.innerHTML += `${Hero.Name} desviou do ataque `
        Hero.AgilitiEffect -= 1;  
        return;
      }
      else 
      {
        ExecutarAtaque = true
        Hero.AgilitiEffect -= 1; 
        BattleLog.innerHTML += `${Hero.Name} não conseguiu desviar `
      }
    }
    else  
    {
      ExecutarAtaque = true; 
    };
    if (ExecutarAtaque == true)
    { 
      Monster.AttackBack(Hero)
    }
    UpdateUI(DisplayHeroHP,Hero.HP,false)
    if(Hero.HP <= 0 )
  {
    GAMEOVER();
    return; 
  }
    else 
    {
       AttackBtn.disabled = false;
    }
  },
  1050) 
}
function ItensLogic()
{
  if (SelectedItem == null)
  {
    BattleLog.innerHTML += "nenhum item foi selecionado "
  }
  else
  {
    SelectedItem.Action();
    BattleLog.innerHTML += ` Você utilizou o item ${SelectedItem.Name} `;
    const indextoremove = Hero.inventory.indexOf(SelectedItem);
    Hero.inventory.splice(indextoremove,1);
    RenderInventory()
    //updating UIs 
    UpdateUI(DisplayMonsterHp,Monster.HP,false);//MonsterHP
    UpdateUI(DisplayHeroStrenght,Hero.Forca,false);
    UpdateUI(DisplayHeroHP,Hero.HP,false);


  }  
}
function ENDGAME() { 
// fazer a funcão de vitoria do jogo aqui 
DisplayWin.style.display = "block";
}
function GAMEOVER() 
{ 
  DisplayGO.style.display = "block";//to be continued logic 
}
function RandomizingItens() 
{
  for( i = 0; i < 2 ; i ++)//sort 2 itens every loop 
    {
      console.log(Hero.inventory.push(ITENS.All_Itens[Math.floor(Math.random() * ITENS.All_Itens.length)]))
    }
  
    
}
function RenderInventory() 
  {
    let inventoryHTML = ` ` ;
    Hero.inventory.forEach((item, index)=> 
      {
      
    inventoryHTML += `
      <button
      class="inventory-item-btn"
      title="${item.Effect}"
      onclick="SelectItem('${item.ID}')"
      name="${item.Name}"
      >
      ${item.Name}
      </button>
      `
      
    });
  DisplayHeroInventory.innerHTML = inventoryHTML; 
  }
function SelectItem(index)//selecting the iten to be able to do the use iten logic 
{ 
  const SelectedItemObject = Hero.inventory.find(item => item.ID === index);
  if (SelectedItemObject)
    {
      SelectedItem = SelectedItemObject;
      console.log("Item Selecionado", SelectedItem.Name)
      BattleLog.innerHTML += `Item selecionado ${SelectedItem.Name} `;
    } 
  console.log(SelectedItem); //flag 
}