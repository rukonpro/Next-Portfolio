import React from 'react';
import Image from "next/image";
import AvatarRukon from "/public/images/rukon.jpg";
import WhatsIsFeatureInJavasriptES6 from "@/public/BlogsImage/javascript_ES6.png";
import CodeBlog from "@/app/components/blogs/CodeBlog";
import BlogUser from "@/app/components/blogs/BlogUser";
const Whats_Is_Features_In_Javascript_EE6 = () => {
    return (
        <div>
            <h1 className="lg:text-5xl md:text-2xl text-xl font-extrabold">javascript ES6</h1>

            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="3 min read, Dec 20, 2021"/>
            <br/>
            <div>
                <Image src={WhatsIsFeatureInJavasriptES6} alt="Whats Is Features In Javascript EE6"
                       className="w-full"
                />

                <p className="pt-5 text-xl">ES6 refers to version 6 of the ECMA script programming language. … is a
                    major extension of the JavaScript language, and adds many more features aimed at simplifying
                    large-scale software development. ECMAScript, or ES6, was published in June 2015. It was later
                    renamed ECMAScript 2015.</p>
                <h3 className="pt-5 text-2xl">Variable:</h3>

                <p className="pt-5 text-xl">1. Here are 3 ways to declare a JavaScript variable:</p>

                <ul className="list-disc list-inside">
                    <li>Var</li>
                    <li>Let</li>
                    <li>Const</li>
                </ul>
                <p className="pt-5 text-xl">A variable is a container for storing data</p>
                <p className="pt-5 text-xl">Below is how to declare a variable:</p>
                <p className="pt-5 text-xl">Example:</p>

                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        <span className="font-extrabold">var:</span> var keyword is a global
                        scope variable declared.
                    </li>
                </ul>
                <br/>
                <CodeBlog
                    code={`
    Var year=20;
    console.log(name,year);
    console.log(name,year);
                    `}
                    language="VBScript"
                    showLineNumbers={true}
                />


                <br/>

                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        <span className="font-extrabold">var:</span> Let: The keyword let declare a block scope
                        variable. It is confined within the scope. The variable cannot be re-declared with let, but its
                        value can be changed.
                    </li>
                </ul>

                <br/>

                <p className="pt-5 text-xl">Example:1</p>
                <br/>
                <CodeBlog
                    code={`
    let name = "Rukon";
    let name= "Delwar";
    // SyntaxError: 'x' has already been declared
   `}
                    language="VBScript"
                    showLineNumbers={true}
                />
                <p className="pt-5 text-xl">Example:2</p>
                <br/>
                <CodeBlog
                    code={`
    {
    let number = 2;
    }
    console.log(number)
    // x can NOT be used here
   `}
                    language="VBScript"
                    showLineNumbers={true}
                />

                <p className="pt-5 text-xl">Example:3</p>
                <br/>
                <CodeBlog
                    code={`
   Let number=100;
       number=200;
       console.log(number); // number is 200
   `}
                    language="VBScript"
                    showLineNumbers={true}
                />
                <br/>

                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        <span className="font-extrabold">Const:</span> The const keyword declares a JavaScript variable
                        with a constant value. Constants are like let variables, values ​​cannot be changed. With const
                        Declared variable blocks have scope.
                    </li>
                </ul>
                <br/>

                <p className="pt-5 text-xl">Example: 1</p>
                <br/>

                <CodeBlog
                    code={`
   var a = 10;
    
    {
    const a = 2;
    }
    
    console.log(a) // output= 10
    `}
                    language="VBScript"
                    showLineNumbers={true}
                />
                <br/>


                <p className="pt-5 text-xl">Example: 2</p>
                <br/>

                <CodeBlog
                    code={`
    const number = 1000;
          number = 122; // This will give an error
          number = number + 10; // This will also give an error
    `}
                    language="VBScript"
                    showLineNumbers={true}
                />
                <br/>

                <h1 className="text-2xl font-extrabold">Default parameters:</h1>

                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        The default function allows the parameters named parameters to start with the default value if
                        there is no value or unspecified pass.
                    </li>
                </ul>
                <br/>

                <p className="pt-5 text-xl">Example:</p>
                <br/>

                <CodeBlog
                    code={`
   function multiply(a, b = 1) {
                return a * b;
              }
   console.log(multiply(5, 2));
   // expected output: 10
   console.log(multiply(5));
   // expected output: 5
    `}
                    language="VBScript"
                    showLineNumbers={true}
                />
                <br/>
                <h1 className="text-2xl font-extrabold">Template string:</h1>
                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        {`Template use back-tick () instead of quotes ("") to define a string.`}
                    </li>
                </ul>
                <br/>

                <p className="pt-5 text-xl">Example: 1</p>
                <br/>
                <CodeBlog
                    code={`
   let template = \`Template string\`;
    `}
                    language="VBScript"
                    showLineNumbers={true}
                />

                <br/>

                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        In Template Literal, both single and double quotes can be used inside a string.
                    </li>
                </ul>
                <p className="pt-5 text-xl">Example: 2</p>
                <br/>
                <CodeBlog
                    code={`
   let text = \`I am "rukon"\`;
    `}
                    language="VBScript"
                    showLineNumbers={true}
                />
                <br/>
                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        The template allows literally multi line strings
                    </li>
                </ul>
                <br/>
                <p className="pt-5 text-xl">Example: 3</p>
                <br/>
                <CodeBlog
                    code={`
   let text = \`The template allows literally multiline strings\`;
    `}
                    language="VBScript"
                    showLineNumbers={true}
                />

                <br/>
                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        Template literals provide an easy way to expand variable expressions into strings. This method
                        is called string interpolation.
                    </li>
                </ul>
                <br/>
                <p className="pt-5 text-xl">Example: 4</p>
                <br/>
                <CodeBlog
                    code={"let name= \"Rukon\";\n" +
                        "let year= 20;\n" +
                        "let person= `my name is ${name}.I am ${year}!years old`;\n" +
                        "console.log(person)"
                    }
                    language="VBScript"
                    showLineNumbers={true}
                />
                <br/>
                <p className="pt-5 text-xl">Spread Operator:</p>
                <br/>
                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        The JavaScript spread operator (…) can copy all data from an existing array or object to another
                        array or object.
                    </li>
                </ul>
                <br/>
                <p className="pt-5 text-xl">Example:</p>
                <br/>
                <CodeBlog
                    code={`
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = […numbersOne, …numbersTwo];
console.log(numbersCombined) // outpot 1, 2, 3,4, 5, 6
                    `}
                    language="VBScript"
                    showLineNumbers={true}
                />

                <br/>
                <h1 className="text-2xl font-extrabold">Arrow Functions:</h1>
                <br/>
                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        The arrow function allows us to write the short function syntax:
                    </li>
                </ul>
                <br/>
                <p className="pt-5 text-xl">We used to write functions like this:</p>
                <br/>
                <p className="pt-5 text-xl">Example:1</p>
                <br/>
                <CodeBlog
                    code={`
Function before() {
    return "Before Function!";
}
console.log(before)
                    `}
                    language="VBScript"
                    showLineNumbers={true}
                />
                <br/>
                <p className="pt-5 text-xl">Arrow Function:</p>
                <p className="pt-5 text-xl">Example:2</p>
                <br/>
                <CodeBlog
                    code={`
Const arrow = () => {
    return "Arrow Function!";
}
console.log(arrow())
                    `}
                    language="VBScript"
                    showLineNumbers={true}
                />

                <br/>
                <ul className="list-inside list-disc">
                    <li className="pt-5 text-xl">
                        If the function does not need to be a parameter and returns a single value, then the direct
                        function can be written without a cursor. Then the function becomes smaller.
                    </li>
                </ul>

                <p className="pt-5 text-xl">Example:3</p>

                <br/>
                <CodeBlog
                    code={`
Const arrow = () => "Arrow Function";
                    `}
                    language="VBScript"
                    showLineNumbers={true}
                />
                <br/>
                <p>Thank you read for my block !</p>
            </div>

        </div>
    );
};

export default Whats_Is_Features_In_Javascript_EE6;