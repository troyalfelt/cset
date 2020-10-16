1. We learned Web Development because it is a standard way to create user
   interfaces across platforms, but then we learned all of the non-standard
   aspects that we have to look out for. What does that tell you about building
   other platform specific user interfaces?

   The number of platforms and devices that people may use to interact with
   your program is innumerable. Beyond that, the people behind those devices
   may speak another language or be blind. The list of contingencies goes on and
   on, and you can't be prepared for all of them. You have to set up your
   program to be as flexible as possible to make it as accessible as you can.

2. Show two examples of CSS Media Queries that use different Media Features.
   Explain how the user agent will decide to use those rulesets or not.

   `@media only screen` indicates that the style sheet should be used when user
   is viewing the site on a screen. This differentiates between viewing a site
   and printing a copy of it with `@media print` or a person having it dictated
   by a reader with `@media speech`. The browser sends information
   to the site, indicating what medium and device the user is visiting on. If
   the conditions on the stylesheet are met by the browser, the site will
   display the manner listed in that section of the CSS. 

3. Do you think it is better to define Breakpoints using standard device sizes
   or using the specific content on your site? Why?

   You should structure the content of your site around standard device sizes
   rather than make the content and use it as breakpoints. The goal of web
   design is to make your site as accessible as possible, and that means
   catering to users rather than building something you find easier.
