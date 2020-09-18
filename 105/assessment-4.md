1. After completing the first course, how would you rate yourself? Is there anything you want to do differently to start the next course?

  I am very happy with how this first course has gone for me. In the future, I intend to spend more time on the extra reading and resources that are 
  provided. Initially, I felt confident I could understand the concepts just from listening in class and reading the book, but in the last week or two I 
  found myself having to spend more time with the other reference material.

2. The Weresquirrel program showed many uses for JavaScript Objects and Arrays.
   Using variables and values from this example, explain the difference between the two data structures.
   
   The two data structures used in the program are objects and arrays. The following block of 
   code utilizes both.
   
   ```
     let day1 = {
      squirrel: false,
      events: ["work", "touched tree", "pizza", "running"]
     };
  
  The variable day1 represents an object, indicated by the use of { }. An object contains attributes, called keys, which are on the left-hand side
  of the colons. Attached to each key is a value called a property, on the other side of the colon. Properties can only be checked by using the 
  object's key. To print if he turned into a squirrel that day, you would use `console.log(day1.squirrel)`. The property attached to the key 'events' 
  is an array, held with the [ ]. An array is a special kind of object; all arrays are objects but not all objects are arrays. An array is simply a 
  list of values, and these values can be accessed by using their index. Arrays act much like a string, with the index starting at 0. 
  To access 'pizza', the third value in the array, you would use `day1.events[2]`. The dot notation accesses the 'events' key in the 'day1' 
  object, while the bracket notation retrieves the third item in the associated array. 
   
   
3. Now explain why the author chose to use one structure over the other for each example you chose. 
   Follow the same reasoning and explain how you could have used objects and arrays in your adventure game from last week.
   
   The author chose to make day1 an object becuase it has to hold multiple types of values that might not be accessed at the same time.
   The order of the values doesn't matter here. Since he will have multiple days, he wants to easily be able to check for if `dayx.squirrel == true.`
   He used an array for the 'events' property so he can easily search through it for a specific event. An array can be searched easily
   by using a a loop to iterate through each value in the array, starting at index[0] and increasing it until the end is reached. These data structures
   would have made creating the adventure game much easier and more flexible. I had a 'bag' that was an empty string, and when the player 
   picked up an item I concantenated the item to the string. If I had known to use an array, instances where I checked the player's bag for a certain 
   item would be much cleaner. I could have also used objects to create things like rooms and items. A room could have several properties that can change.
   If a player were to take an item out of a room, I could make the property of that item's key become `false`, rather than have all the possible changes
   be in a jumble of global variables at the start of the program. 
