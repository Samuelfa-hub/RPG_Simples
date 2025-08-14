//IDs
  const PopBtn =  document.getElementById("start-btn"); 
  const StartPop = document.getElementById("start-popup"); 
  const HeroData = document.getElementById("hero-select");
  //Display IDs
    const DisplayHeroName = document.getElementById("hero-name");
    const DisplayHeroHP = document.getElementById("hero-hp"); 
    const DisplayHeroStrenght = document.getElementById("hero-attack");
    const DisplayMonsterName = document.getElementById("monster-name");
    const DisplayMonsterHp = document.getElementById("monster-hp");
    const DisplayMonsterStrenght = document.getElementById("monster-attack");
//Arrays personagens 
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
const Itens =[
    {
        Name:"Poção de Cura",
        Effect:"Cura 50 pontos de vida do heroi",   
        Points: 50 ,  
    },
    {
        Name:"Poção de Agilidade",
        Effect:"Aumenta sua chance de esquivar de um Ataque por 5 turnos",
        Points:25 ,//percentage 
    }
    ,{
        Name: "Espada do Poder",
        Effect: "Aumenta a força de ataque do herói em 10 pontos.",
        Points: 10,
    },
    {
        Name: "Escudo do Guardião",
        Effect: "Reduz o dano recebido do próximo ataque em 30%.",
        Points: 30,
    },
    {
        Name: "Anel da Sorte",
        Effect: "Aumenta sua chance de acerto crítico em 10%.",
        Points: 10,
    },
    {
        Name: "Poção de Força",
        Effect: "Aumenta a força de ataque do herói em 5 pontos por 2 turnos.",
        Points: 5,
    },
    {
        Name: "Armadura de Couro",
        Effect: "Adiciona 20 pontos de defesa.",
        Points: 20,
    },
    {
        Name: "Cajado Mágico",
        Effect: "Causa um dano mágico de 20 pontos ao monstro.",
        Points: 20,
    },
] 
//Data
let Hero = ""; 
let Monster ="";
PopBtn.addEventListener("click",Start);//funcção inicial do popup 
//classes  
class HEROClass
{
  constructor(Name,HP,Forca) 
  {
    this.Name = Name,
    this.HP = HP,
    this.Forca = Forca;
    this.inventario = "";  
  }
}
class MONSTERClass {
  constructor(Name,HP,Forca)
  {
    this.Name = Name,
    this.HP = HP, 
    this.Forca = Forca;  
  }

}
class ITENSClass { 
    constructor(Name,Effect,Points)
    {
        this.Name = Name, 
        this.Effect = Effect,
        this.Points = Points;  
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
  //removing the popup 
  StartPop.style.display = "none";
};
