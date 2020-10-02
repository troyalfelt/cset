1. Pick your favorite CSS property so far. Explain what it's used for and all the potential values or units it can take. Why do you like it?
  
   My favorite property so far is `border` family. It creates a border around elements on page. The different variants include `border-width`, 
   `border-color`, `border-radius` and `border-style`. `border-width` can use pixels on a screent, as well as `ems`, real-world measurements like inches and cm,
   or a percentage of the parent container. 'border-color` uses the hexadecimal system to set the color of the border. It can also accept keywords like
   'blue'. 'border-syle` determines what the border looks like. It can take a list of keywords, including dotted, dash, and solid. `border-radius` governs
   how rounded a border is, and can accept a number of pixels or a percentage. I like these properties because they can be applied to almost any element
   and they are infinitely flexible in what they can do. 


2.  Imagine you are making a website for a restaurant and you need to style the menu options to show that some are spicy or vegetarian or gluten-free. 
    If all the menu options are using the same HTML elements, what CSS selector(s) could you use and why? Show an example.
    
    To designate if a menu item is vegeterian, you could create an class for them. The following code block sets a class for a hypothetical item.
    
      ```
      <p class= "vegetarian"> General Tso's Tofu</p>
      ```
      
    Then, in the style sheet, I could alter all elements of the "vegetarian" class at the same time. The following code block would change the text of 
    vegetartian items to a green color.
    
       ```
       .vegetarian {
         color: green;
         }
       ```
         
     You could repeat this process by creating classes for spicy and gluten-free items. You could even make something have multiple classes, like an 
     item that is both spicy and vegetarian.
     
  3. Style rules sometimes conflict with each other, especially in large projects. Explain the difference between cascade, inheritance, and 
     specificity and how you can use these concepts to organize your CSS.
     
     CSS uses three rulesets to resolve conflicts. The first is cascading. The browser starts reading the style sheet at the top, and applies effects 
     when it encounters them. As it goes down, if a new rule is reached, it will replace the previous rule. This means that properties that are the lowest
     on the page take priority. It also means you can set back-ups by first applying a universal tool, such as a sans-serif font, and then later try to use
     a fancier font. If a browser does not support the fancier font, it will keep the sans-serif from higher in the style sheet. The next organizational
     tool CSS uses is specificity. The more specific a rule, the higher its priority. A rule declared in the style sheet is the lowest specificity. 
     For example 
     
       ```
       p {
         color: red;
         }
       ```   
    
    would make all paragraphs in the document red. But then if a paragraph was a member of a class, and that class was a different color, the class color
    is more specific and would therefore take precedence. An even more specific label is an id, which can only be used on one element. An id is even more
    specific than a class, and will supercede its rules. The final piece of CSS is inheritence. Inheritence governs relationships between parent and child
    tags. If an aspect of a child element has not been specified, but it has been specified in the parent, the child will also have that property. Not all
    properties are inheritable. 
