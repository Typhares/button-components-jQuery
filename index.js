'use strict'

/***************************************************
  @ create an Obj literal that is a collection of kinds of animal species
  @keys store values are in parenthesis

 */
var family = [
  { 
    "name": "Cetacean",
    "advantages": [ "echolocation", "endothermic", "spade-shaped teeth"], 
    "character": [ "shy", "intelligent", "fast", "social"]
  },
  
  { 
    "name": "Hominoidea", 
    "advantages": ["mimetic learning", "bipedalism", "large heads" ],
    "character": ["tool users", "empathy", "cooperation"]
  },
  
  { 
    "name": "Insecta", "advantages": ["exoskeleton", "compounded eyes", "jointed-legs" ], 
    "character": ["regarded as pests", "can be crushed", "small"]
  
  },
  
  { 
    "name": "Filidae", "advantages": ["Protractile claws", "hyoid apparatus", "precise killing bite" ], 
    "character": ["adaptable", "Social carnivore", "ultimate solo hunter" ]
  },

  ];
  
  //find the first array entry that matches
  //
  function findHeroIndex(currentHero) {
    return (this == currentHero.name);
  }
  
  //fadeOut and hide abilities div
  function emptyAbilities() {
    $('#abilities').fadeOut();
    $('#abilities').hide();
  }
  
  //display abilities div
  function showAbilities() {
    $('#abilities').fadeIn();
  }
  
  //find the array entry for the selected character
  //generate html string
  //update abilities div
  function renderAbilities(hero) {
    let htmlString = '';
    let species = family[family.findIndex(findHeroIndex, hero)];
  
    htmlString += `<h1>advantages</h1><ul>`;
    
    species.advantages.forEach(advantages => {
      htmlString += `<li>${advantages}</li>`;
    });
   
    htmlString += `</ul><h1>character</h1><ul>`;
    
    species.character.forEach(character => {
      htmlString += `<li>${character}</li>`;
    });
    
    htmlString +=`</ul>`;
   
  
   $('#abilities').html(htmlString);
  }
  
  // use the characters array to render button
  //for each character
  function renderHeroButtons() { 
    var htmlString = '';
    family.forEach(hero => {
        htmlString += `<button id="${hero.name}">${hero.name}</button>`;
    })
    
    $('#family').html(htmlString);
  }
  
  //each button is the same so there is only one
  //event listener and innerHTML is used to get 
  //the character name since it is the same as the id
  function handleClick() {
    $('button').click(function(event){
      emptyAbilities();
       renderAbilities(event.currentTarget.innerHTML);
      showAbilities();
    });
  }
  
  //make sure abilities div is empty and hidden
  //render buttons
  //register event listener
  function init() {
    emptyAbilities();
    renderHeroButtons();
    handleClick();
  }
  
  //document on ready function
  $(init);