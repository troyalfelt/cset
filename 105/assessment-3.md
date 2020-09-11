1. How do you feel about the pace of the program so far? Is it too slow? Too fast? Or just right?

The pace of this program is admittedly quite fast, but I would much rather have to work hard to keep up with a fast and difficult program than spend weeks going
the same concepts. 

2. Why do you think functions are a useful tool to organize large programs?

Functions are another level of abstraction and allow us to express complex ideas succinctly. Calling a function takes up far fewer lines than copying and pasting
the same code every time you need to repeat a task. If you need to make a change to a function, you need only change it once. If you have been retyping the same
code, you would have to edit every instance of that code. Functions keep large programs from becoming unmanageable.

3. In class, we've been using the analogy of a zoo to explain scope. Describe the different types of scope using this analogy and provide examples using real 
JavaScript code.

Scope can be broken into two basic categories: global scope and local scope. A variable that is declared at a global level is outside any blocks of code and can be 
utilized anywhere in the program.

`let x = "zookeeper"`

is a global variable. Local scopes are created within blocks of code such as functions or `if` statements. Most variables created within these blocks can only be
recognized within said blocks. 

```
const zoo = function() {
  let y = 'tiger'
  }
console.log(y)  
```

y is a trapped within the scope of the function `zoo`. When it is called at a global level for the `console.log`, it will return an error as it has not been defined
globally. 

Local scopes can be further broken down into two categories, lexical and block scope. `var` declarations follow lexical scope - they can only be contained within functions. In the previous
example, if `y` was a `var` it would still not be able to escape.

```
if (true) {
  var z = "snake"
  }
```  
In this example, `z` is able to escape because it is within and `if, while, do` or `for` block. It can be called anywhere in the prorgram.
In lexical scope, only functions create scopes. 

`const` and `let` declarations follow block scope. Any time `{ }` is used, such as `if` blocks or functions, they will be confined to that block and will return
an error if called elsewhere. 
