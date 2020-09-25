1. Why do you think it's important that HTML is an open standard controlled by a specification rather than being owned by one person or company?

    Without HTML as an open standard, the internet as we know it would not exist. Since HTML is open source, any one can create something with it and 
    anybody can use it. If a single company controlled it, they could charge fees to use it. Other companies would create their own standards, and the web
    would become much more inaccessible. HTML being a a free universal standard means that any machine or browser can interpert the data from any web site.
  
2. Describe the difference between an element and a tag. Use examples.

    In HTML, elements are the raw content that is going to be displayed on a web page. Tags are used to designate what purpose that element is going to
    serve. In the following example, 
  
    ```
    <h1>Hello World</h1>
    ```
  
    the text "Hello World" is the element. The `<h1>` and `</h1>` pieces surrounding the element are the tags. These tags let the browser know that the 
    element contained within will be a heading on the page.
  
3. In the lecture, I used two quotes from Yoda and Noam Chomsky to explain syntax and semantics. Explain these quotes and how they relate to the HTML 
   you write.
   
   The quote from Yoda was an example of poor syntax in a language. His statement was understandable, but did not follow the rules of the language. The
   quote from Chomsky was an example of poor semantics. His sentence followed all the rules of English, but failed to actually convey any meaning. Both
   good syntax and good semantics are needed to write HTML. If we follow Yoda's example and have poor syntax, HTML won't throw any error codes. However, 
   it will try to interpert what we have given it, often with unexpected and unwanted results. Following syntax also makes our code more readable for
   other people working on it. If we write with poor semantics, we fail to use the purpose of HTML. HTML assigns meaning to raw content, and if browsers 
   aren't given the right descriptors, they will not properly display the information we are trying to convey. 
