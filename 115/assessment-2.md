
1. In the next few weeks, we'll be learning how professional developers work on 
   larger projects. What are you most looking forward to in this section?


   I am excited about the prospect of more collaboration. One of my favorite
   parts of class is doing code reviews and seeing how my classmates solved 
   a problem in a totally different way. There have been many instances where
   I have banged my head against a problem repeatedly but could find no solution. 
   However, as soon as I got another pair of eyes to look at the code, they 
   were immediately able to point out what was wrong. 


2. Briefly explain event propogation and bubbling using an example of two 
   nested HTML elements.


   In the context of web design, an event is something that happens on the page,
   often a click or a keypress. Events propagate outward from the node the event 
   occurred in. By default, the event propagates upward through its parent node
   and on to its other ancestors. This is known as bubbling. For example,

   `<div><input type="button"><div>`

    if there were an event listener attached to the parent element (the div) 
    and not the button itself and the button was clicked, the event would 
    propagate to the div and the function would still be executed. 


3. You learned to use addEventListener on a DOM node to listen for a type of 
   event and create a function to handle that event. When the event happens, that 
   function is called with an Event Object that gives you more information about 
   the event. Choose two different event types and explain two properties of each 
   that are unique to that event. Use your MDN reference for help.

   When a key is released on a keyboard, it can trigger a `"keyup"` event.
   The event object created by this event has the property `keycode`, which 
   returns the Unicode number related to that key. This event also has the `key`
   property, which returns which key was pressed as a string. Another type of 
   event is a `"click"` event. Its properties include `detail`, which returns how 
   many times the element was clicked, and `innerHTML`, which can return or change
   the HTML markup of the clicked node.
