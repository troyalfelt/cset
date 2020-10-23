1. Now that you've spent a few weeks working on longer projects, how do you
   think you'll adapt to working in the professional world?


   I am quite optimistic about joining the programming workforce. In other jobs
   I have held, I have had difficulty staying focused on the work at had.
   However, with these large projects I find myself able to stay engaged and
   never feel like they are a chore. I really enjoy the problem-solving aspects
   of this work.



2. Imagine you are building your Choose-Your-Own-Adventure project in JavaScript
   for the browser. The user has clicked a button to select which room to enter,
   walk through how you would manipulate the page to show the next room's
   description. Explain the DOM methods you would use and why.


   When the user presses the button, it would trigger an event that would
   execute a function within the `script` tag of the HTML document. The current
   room description would be in a textless paragraph with the an id
   like `#currentRoom`. Somewhere in the script would be variables, such as
   `room1Desc`, that holds the description for each room. The function would
   check which room the user was entering and choose the correct variable
   accordingly and return the result of
   `document.querySelector("#currentRoom").textContent = room1Desc`  This uses
   the `querySelector` to find the element with the class `currentRoom` and
   then changes the text within it to display the prewritten description. 


3. Why are different data structures useful? Use the Document Object Model as an
   example. Would it work as any structure other than a tree?


   Different data structures have different applications in programming. For
   example, a set is a subtype of array which doesn't allow for duplicates,
   which can be useful for things like holding a list of usernames so another
   user can't take an already established one. The Document Object Model uses
   a tree data structure. This is because the idea of hierarchy is so important
   to the DOM. Web sites rely on elements nested within other elements, and the
   tree structure lets you easily manipulate all the children of an element or
   select the siblings of a particular node. This wouldn't be possible with
   another data structure, such as a flat array.
