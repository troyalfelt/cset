//I'm sorry this is so big, it spiralled out of control really fast. I learned some valuable and painful lessons about planning and organization by painting myself into a corner numerous times.



//empty variable to track what is in the bag
let bag = []
//global variables to track certain events
let water = false;
let goblin = true;
let fire = true;
let keyFloor = false;
let darkness = true;
let wallMask = false;
let wearingMask = false;
//item descriptions
let bread = {name : "bread", description : "A piece of stale bread, not very appetizing."};
let jug = {name : "jug", description : "An empty jug that smells of must."}
let sword = {name : "sword", description : "A finely crafted shortsword with a jewel-encrusted hilt."}
let mask = {name : "mask", description : "An eerie mask with demonic features."}
let torch = {name : "torch", description : "A crudely-made unlit torch"};
let flint = {name : "flint", description : "A small chunk of flint, good for lighting fires."}
let key = {name : "key", description : "A small key with a rusty veneer."};

//help message
let help = "I like you to structure your inputs as verb/noun. Here are the verbs I know.\nTake\nAttack\nWear\nLight\nDouse\nIf you want a description of the room again,\n type 'look around'. If you want to see your items,\ntype 'open bag'. If you want to inspect\nan item in your bag, type 'inspect *item name*.\nIf you want to go somewhere, type\n'go east/west/north/south'.";

//descriptions of rooms. I made these global variables because some events will change them.
let startRoomDesc = "You are in a barren room with some old hay piled\nup in a corner to make an uncomfortable bed. The only furniture present is a table in the center of\nthe room with some bread and an empty jug sitting\non it. Doors are set in the wall in\nevery cardinal direction.";

let fireRoomDesc = "You stand in a cluttered study. Piles of books\nand papers written in language unknown to you are\npiled from the posh carpet to the stone ceiling.\nAlong one wall, a fire roars in a hearth. You can barely make out the shape of a sword that protrudes\nfrom the bellowing flames. Above the fire a box of\nflint rests on the mantle below a bizaare painting.\nA single door leads back to the west.";

let sphinxRoomDesc = "You feel sand under your feet as you walk in this\ndimly lit room. A rusty metal door leads to the \nnorth. A pile of unlit torches sits on the eastern\nwall.Light shines from a pair of red eyes peering out of the darkness. As your eyes adjust to the\ngloom, you make can make out the body of a crude\nmachine, built to resemble a sphinx. It opens its\nrusty jaws and a crackling voice emerges.\n\nANSWER MY RIDDLE TRAVELER.\nWHAT IS A BOX WITHOUT HINGES KEY OR LID\nYET GOLDEN TREASURE INSIDE IS HID?\nA.) A locked treasure chest!\nB.) An egg\nC.) A skull\nD.) A bottle of beer\n\n(answer with the letter)";

let darkRoomDesc = "This room is pitch black, perhaps unnaturally so.\nAs you strain your eyes to see anything, you \nsense something else in the room with you.\nMuted light glows from a hallway to the east.";

let fountainRoomDesc = "You blink furiously as you step out into sunlight.\nYou are in a beautiful, if ill-maintained, courtyard.\nBirds chirp down at you from the eaves. At the center of the\ncourtyard, a fountain bubbles merrily despite the many\ncracks running down its side. The remains of what appears to have been a stone bench sit nearby,\nin no shape to be sat on.";

let goblinRoomDesc = "Water drips from the cobble ceiling of this\nmusty room and drains down a rusty grate. A long hallway extends to the south.\n To the east stands an ornate archway.\nA door sits at the far west of the room. Guarding it\nis a hunched goblin, holding a scimitar far more resplendant than its wielder. \nHe makes a rude gesture at you.";

let finalRoomDesc = "The walls in this room are an almost blinding white,\nand are strikingly clean compared to other rooms\nyou've been in. A thick iron door with no discernible handle blocks your\nway to the east. A polished bronze placard is bolted to the wall\nnext to it that reads \nTHE MAN WHO LEAVES HERE \nMUST NOT BE THE MAN WHO ENTERED.";

let leverRoomDesc = "A cramped wooden room stands with a door leading eastward.\nIt is barren save for engravings on the wall.\nWISE ADVENTURER\nSOLVE MY WORD JUMBLE\nN I Y R B A";

//a function that handles when the player dies
const death = function(cause) {
  console.log(cause + "\n");
  console.log("Better luck next time!");
}
//a function that handles when the player wins (unlikely)
const victory = function() {
  console.log("As you approach the door while wearing the mask,\n it silently slides open and sunlight streams in.\n\nCongratulations! You've escaped your\nbizaare and pointless prison and may reintegrate into society.");
}

//global variables that track the players location, set up like a grid
let x = 0
let y = 0
//function that governs what room you are in
const location = function() {
  if (x === 0) {
    if (y === 0) {
      return startRoom();
    } else if (y === -1) {
      return sphinxRoom();
    } else if (y === 1) {
      return goblinRoom();
    }
  }
  if (x === 1) {
    if (y === 0) {
      return fireRoom();
    } else if (y === 1) {
      return finalRoom();
    }
  }
  if (x === -1) {
    if (y === 0) {
      return darkRoom();
    } else if (y == -1) {
      return fountainRoom();
    } else if (y == 1) {
      return leverRoom();
    }
  }
}
//funcions that returns the current room description
const startRoom = function() {
  console.log(startRoomDesc);
  return start();
  }
const fireRoom = function() {
  console.log(fireRoomDesc);
  return start();
  }
const sphinxRoom = function() {
  console.log(sphinxRoomDesc);
  return start();
  }
const darkRoom = function() {
  console.log(darkRoomDesc);
  return start();
}
const fountainRoom = function() {
  console.log(fountainRoomDesc);
  return start();
}
const leverRoom = function() {
  console.log(leverRoomDesc);
  return start();
}
const goblinRoom = function() {
  console.log(goblinRoomDesc);
  return start();
}
const finalRoom = function() {
  console.log(finalRoomDesc);
  return start();
}
//the big honkin' function that asks player for input and tries to interpert it
const start = function() {
  console.log("\n");
  //ask for input & convert to lower case for ease of interpertation
  let input = (prompt("*")).toLowerCase();
  //this block makes it so if room (-1, 0) is dark, the only valid input is to leave
  if (x === -1 && y === 0 && darkness == true){
    if (input != "go east") {
      console.log("You can't see anything in the darkness. Something is coming closer.\nConsider leaving.");
    } else {
      x += 1;
      return location(x, y);
    }
    return start();

  //a block that prints out commands the program recognizes
   } else if (input == "help") {
    console.log(help);
    return start();

    //the next section handles movement
    //this block handles if you travel east
    } else if (input == "go east") {
      //these handle exceptions, i.e. if there is a wall or obstacle blocking your way
      if (x === 0) {
        if (y === -1) {
          console.log("You can't go that way");
          return start();
        } else if (x === 1) {
          if (y === 0) {
            console.log("You can't go that way");
            return start();
          }
        }

      } else if (x === 1 && y === 1){
        if (wallMask == false){
          console.log("The door won't budge.");
          return start();
        } else {
          return victory();
        }
      }

    //if there is no obstacle, your x position increases and it returns the description of the new room
    x += 1;
    return location(x, y);
  //handles if you want to go west
  } else if (input == "go west") {
    //obstacles and walls
    if (x === -1) {
      console.log("You can't go that way");
      return start();
    } else if (x === 0) {
      if (y === -1) {
       console.log("You can't go that way.");
        return start();
      } else if (y == 1) {
        //check if goblin is still there
        if (goblin == true) {
          console.log("The goblin lazily brandishes his\nsword at you and growls.");
          return start();
        } else {
          x -=1;
          return location(x,y);
        }
      }
    }
    //decrease x, return new room
    x -= 1;
    return location(x, y);
  //go south command
  } else if (input == "go south") {
    //obstacles and walls
    if (x === 1) {
      if (y === 0) {
        console.log("You can't go that way");
        return start();
      } else if (y === 1) {
        console.log("You can't go that way");
        return start();
      }
    } else if (x === 0) {
      if (y === -1) {
        console.log("You can't go that way");
        return start();
    }
    } else if (x === -1) {
      if (y === 1) {
        console.log("You can't go that way")
        return start();
      } else if (y === -1) {
        console.log("You can't go that way")
        return start();
      } else if (y === 0) {
        //check if you have key
        if (bag.includes(key) == true) {
          y -= 1;
          return location (x,y);
        } else {
          console.log("The door is locked.");
          return start();
        }
      }
    }
    //go down 1 and return new room
    y -= 1;
    return location(x, y);
  //handles go north
  } else if (input == "go north") {
    //obstacles and walls
    if (y === 1) {
      console.log("You can't go that way");
        return start();
    } else if (x === 1) {
      if (y === 0) {
        console.log("You can't go that way");
        return start();
      }
    }
    //y increases by 1, return new room
    y += 1;
    return location(x, y);

  //this block handles your inventory
  } else if (input == "open bag") {
    if (bag.length > 0) {
    console.log("In your bag, you have ")
    for (let items of bag) {
      console.log(items.name);
    }
    return start();
    } else {
      console.log("Your bag is empty.")
      return start();
    }

  //"take" blocks add the item as a string to your bag string
  } else if (input == "take bread") {
    //makes sure your are in the room with bread
    if (x === 0 && y === 0) {
      console.log("You put some bread in your bag.");
      //add to bag
      bag.push(bread);
      return start();
    //I realize now these "that's not here" blocks aren't needed but I'm scared to take them out and break everything
    } else {
      console.log("That's not here.");
      return start();
    }
  //another take block, handles the jug
  } else if (input == "take jug") {
    //check location
    if (x === 0 && y === 0) {
      console.log("You put the jug in your bag");
      //add to bag
      bag.push(jug);

      }
      //update description of room sans jug
      startRoomDesc = "You are in a barren room with some old hay piled\nup in a corner to make an uncomfortable bed. The only furniture present is a table in the center of\nthe room with some bread sitting\non it. Doors are set in the wall in\nevery cardinal direction.";
      return start();

  //this 'take' block is slightly different, need to check if you have the jug so you can carry the water
  } else if (input == "take water") {
    //check location
    if (x === -1 && y === -1) {
      //this checks the string 'bag' for the jug
      if (bag.includes(jug) == true) {
        //if you have jug, water is added to the bag
        console.log("You scoop water out of the fountain\nwith the jug.");
        jug.description = "A an old clay jug filled with water.";
        water = true;
        return start();
      } else {
        //if not, you get a message
        console.log("You have nothing to hold it with!");
        return start();
      }
    } else {
        console.log("That's not here.");
        return start();
      }
    //a block to handle attacking the goblin
    } else if (input == "attack goblin") {
      //make sure room is right and goblin is there
      if (x === 0 && y === 1 && goblin == true) {
        //check if sword is in bag
        if (bag.includes(sword) == true) {
          console.log("You raise your sword and charge toward the\noafish goblin. His eyes grow wide with alarm and he shrieks,\npulling the grate open and scurrying into the depths below.\nHe locks the grate behind him.");
          //change room description as goblin is no longer there
          goblinRoomDesc = "Water drips from the cobble ceiling of\nthis musty room and drains down a rusty grate. A door\nsits at the far west of the room. An ornate archway leads to the east.\n A long hallway leads south.";
          //set global variable to false, letting you move west through the door
          goblin = false;
          return start();
        } else {
          //if you attack without a sword, you die
          console.log("The goblin snickers as you raise\nyour fists at him. You quickly find yourself impaled on his scimitar.");
          return death("You lay dying on the floor as\nthe goblin says mean things about your mother.");
            }

      } else {
        console.log("That's not in here.");
        return start();
      }
    //this block checks for 'douse fire'
    } else if (input == "douse fire") {
        //check location
        if (x === 1 && y === 0) {
          //check if you have water
          if (water == true) {
            console.log("You pour water from the jug\non to the hot logs. The fire goes out with a hiss.");
            //change global variable so you can take the sword
            fire = false;
            //change desc because fire is out
            fireRoomDesc = "You stand in a cluttered study. Piles of books and papers\nwritten in language unknown to you are piled from the posh carpet to the stone ceiling.\nAlong one wall, a hearth sits empty. A sword juts out from\nthe smoldering logs. Above the fire a box of flint rests on the mantle.\nA single door leads back to the west.";
            return start();
          } else {
            //message for if no water
            console.log("You have nothing to put it out with.");
            return start();
          }
        } else {
          console.log("That's not in here.");
          return start()
        }
      //another 'take' block
      } else if (input == "take sword") {
        //check location
        if (x === 1 && y === 0) {
          //if the fire is still going, you can't take the sword
          if (fire == true) {
            console.log("As you reach for the hilt of the sword,\nthe red flames seem to lash out at you unnaturally.\nYou pull your hand back.");
            return start();
          } else {
            //if fire is out, take block executes
            console.log("You pull the sword from smoldering logs.");
            //put in bag
            bag.push(sword);
            //change desc of room
            fireRoomDesc = "You stand in a cluttered study. Piles of books and papers\nwritten in language unknown to you are piled from the posh carpet to the stone\nceiling. Along one wall, a hearth sits empty. Above the\nfire a box of flint rests on the mantle below a bizaare painting.\nA single door leads back to the west.";
            return start();
          }
        } else {
          console.log("That's not here.");
          return start()
        }
    //basic take block
      } else if (input == "take flint") {
        //check location
        if (x === 1 && y === 0) {
          console.log("You take a piece of flint out of\nthe box.");
          //add to bag
          bag.push(flint);
          return start();
        } else {
          console.log("That's not here.");
          return start();
        }

      //this section handles the sphinx riddle
      //incorrect inputs
      } else if (input === "a" || input === "c" || input === "d") {
        //check to see if you're in sphinx room
        if (x === 0 && y === -1) {
          //whoops
          return death("The sphinx raise off its corroded\nhaunches with suprising speed and sinks its\nrusted claws into you.");
        } else {
          console.log("I don't know what that means.");
          return start;
        }
      //this handles correct input
      } else if (input === "b") {
        //check location
        if (x === 0 && y === -1) {
          console.log("The sphinx mechanical head spins around\ndisturbingly as a raspy buzzer sound emanates from\nits maw. It stops abruptly, then spits out a red\nkey and returns to its rest.");
          //make key true and be able to be picked up
          keyFloor = true;
          //update desc
          sphinxRoomDesc = "You feel sand under your feet as you\nwalk in this dimly lit room. A rusty metal door leads to the north.\nLight shines from a pair of red eyes peering out of the darkness.\nAs your eyes adjust to the darkness, you make can make out the body of a crude machine,\nbuilt to resemble a sphinx. A red key rests on the floor in front of\nit. A pile of torches sits against a wall.";
          return start();
        }
      //'take' block for key
      } else if (input == "take key") {
        //check location
        if (x === 0 && y === -1) {
          //check if riddle has been solved
          if (keyFloor == true) {
            console.log("You put the key in your bag.");
            //add to bag
            bag.push(key);
            //update desc
            sphinxRoomDesc = "You feel sand under your feet\nas you walk in this dimly lit room. A rusty metal door leads to the\nnorth. Light shines from a pair of red eyes peering out of\nthe darkness. As your eyes adjust to the darkness, you make can make\nout the body of a crude machine, built to resemble a sphinx. A pile\nof torches sits against a wall.";
            return start();
          }
        } else {
          console.log("That's not in here.");
          return start()
        }
      //basic take block
      } else if (input == "take torch") {
        //check room
        if (x === 0 && y === -1) {
          console.log("You put the torch in your bag.");
          //add to bag
          bag.push(torch);
          return start();
        } else {
          console.log("That's not in here.");
        }

      //handles the action of lighting torch
      } else if (input == "light torch") {
        //check if you have torch
        if (bag.includes(torch) == true) {
          //check if you have flint to light with
          if (bag.includes(flint) == true) {
            console.log("You use the flint to light\nthe torch.");
            torch.description = "The rough torch crackles with bright flames."
            //change global variable so you can traverse dark room
            darkness = false;
            //update desc of dark room so you can see
            darkRoomDesc = "The stone cell is now lit by your\ntorch. Bizarre claw marks cover the walls and ceiling,\nleading to a hole too small for a person to squeeze through.\nTo the south lies a large red door. To the\neast is a hallway filled with torchlight.";
            return start();
          } else {
            console.log("You have nothing to light it with!");
            return start();
          }
        } else {
          console.log("You don't have a torch!");
          return start()
        }

      //this handles the word jumble, checks location
      } else if (input == "binary" && x === -1 && y === 1) {
        console.log("You hear a distinctive grinding sound\nas the panel in the southern wall reveals an ornate mask.");
        //change global variable to allow mask to be picked up
        wallMask = true;
        //update room desc
        leverRoomDesc = "A cramped wooden room stands with a door\nleading eastward. An ornate masks rests in an alcove along the southern\nwall. The western wall reads\nWISE ADVENTURER\nSOLVE MY WORD JUMBLE\nN I Y R B A";
        return start();
      //take block for mask
      //check location and if jumble was solved
      } else if (input == "take mask" && wallMask == true && x === -1 && y === 1){
        console.log("You put the mask in your bag.");
        //add to bag
        bag.push(mask);
        //revert description
        leverRoomDesc = "A cramped wooden room stands with a\ndoor leading eastward. It is barren save for engravings on the wall.\nWISE ADVENTURER\nSOLVE MY WORD JUMBLE\nN I Y R B A";
        return start();
      //handles putting on mask, checks if its in bag
      } else if (input == "wear mask" && bag.includes(mask) == true) {
        console.log("You slide the mask onto your face.\nYou feel slightly ridiculous.");
        //change global variable to let you go through final door
        wearingMask = true;
        return start();
      //this block returns the description of the room if you look around
      } else if (input == "look around") {
        return location(x, y);
      } else if (input.split(" ")[0] == "inspect") {
          for (items in bag) {
            if (bag[items].name == input.split(" ")[1]) {
              console.log(bag[items].description);
              return start();
            }
          }
          console.log("That's not in your bag.");
          return start();



      } else {


    //handles unknown inputs
    console.log("I don't know what that means.\nTo view words I know, type `help`.")
    return start();
      }
  }

//let the user know about 'help' at start of game
console.log("Type 'help' for a list of commands I recognize\n\n")
//print the first room
console.log(startRoomDesc)
//finally start this thing!
start()
