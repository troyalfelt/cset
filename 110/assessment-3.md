1. The tools and techniques for web development have changed a lot over the years. How will you personally try to keep up with those changes and where can you 
   look to find them?

  I will keep up with the ever-changing web development industry by continuing to build small personal projects whenever possible and utilize new 
  techniques in them. One good way to keep up with changes is to follow people involved in the industry on social media and see what updates they post. Another place to find changes is with the organizations that create the specs for languages. For example, W3
  maintains the global standards for how CSS should be interpreted by web browsers.

2. The lecture and readings discussed the limitations of using floats for layout. What are some of these limitations? Provide an example.

   Floats disrupt the normal top-down flow of a web page. This means they provide more design possibilities, but working with them can make 
   the overall design more complicated to work with. In addition, floats can only align elements horizontally. They cannot be used to adjust content vertically.

3. Flexbox is built to be language agnostic, so it uses generic terminology like the "Main" or "Cross" axis. Choose a flex property that affects one of these 
   axes on a flex container and explain how it is used. Show how the result can change based on different flex directions and different writing modes.

   The property `flex-direction` governs which direction of the flexbox is the main axis. By default, it is set to `row` and content flows from left-to-right. 
   But if you set it to `flex-direction: column`, the main axis becomes vertical, with content flowing top-to-bottom. The properties `justify-content` and 
   `align-content` control how elements are arranged along the main axis and cross axis, respectively. When the value of `flex-direction` is `row`, 
   `justify-content` will change the position of elements horizontally, since this is the main axis. However, if the web page was in a language that was read 
   vertically, the `flex-direction` would be changed to `column` so `justify-content` would arrange things vertically and `align-content` would then change 
   things horizontally, since that is now the cross axis.
