import React from 'react';
import BlogUser from "@/app/components/blogs/BlogUser";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import TheDifferentWaysToDefineAFunctionInJavaScriptBanner from "@/public/BlogsImage/The_different_ways_to_define_a_function_in_JavaScript.webp";
import CodeBlog from "@/app/components/blogs/CodeBlog";

const TheDifferentWaysToDefineAFunctionInJavaScript = () => {
    return (
        <div>
            <h1 className="lg:text-5xl md:text-2xl text-xl font-extrabold">The different ways to define a function in
                JavaScript</h1>
            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="3 min read·May 26, 2021"/>
            <br/>
            <div>
                <Image src={TheDifferentWaysToDefineAFunctionInJavaScriptBanner}
                       alt={"The different ways to define a function in JavaScript"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>
            <br/>
            <p>So you want to create a function in JavaScript?</p>
            <br/>
            <p>You. Have. Options:</p>
            <h1 className="text-2xl font-extrabold">1 — Declaration Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `function sum(a, b) { return a + b; }`
                }
            </CodeBlog>

            <br/>
            <h1 className="text-2xl font-extrabold">2 — Expression Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `// Can be named:
(function sum(a, b) { 
    return a + b;
}); 

// Or anonymous (AVOID):
(function(a, b) { 
     return a + b; 
 });
 // Or assigned to a variable
const sum = function sum(a, b) { 
     return a + b; 
  })`
                }
            </CodeBlog>

            <br/>

            <h1 className="text-2xl font-extrabold">3 — Arrow Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `
// Single argument, one line return:
    name => name.split(' ');

// Multi arguments, one line return:
    (a, b) => a + b; 

// Single argument, full body:
name => { 
    return name.split(' '); 
}

// Regular:
    (a, b) => { return a + b };
                    `
                }
            </CodeBlog>
            <br/>

            <h1 className="text-2xl font-extrabold">4 — Generator Function</h1>
            <br/>

            <CodeBlog language="javascript">
                {`function *sum(a, b) { yield a + b; };`}
            </CodeBlog>
            <br/>
            <h1 className="text-2xl font-extrabold">5 — Async Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `async function sum(a, b) { 
    return await a + b; 
};`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-2xl font-extrabold">6 — Constructor Function (AVOID)</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `new Function(‘a’, ‘b’, ‘return a + b;’);`
                }
            </CodeBlog>
            <h1 className="text-2xl font-extrabold">7 — Exported Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `// Default exports
export default function(a, b) { 
    return a + b; 
};

// Named exports
export function sum(a, b) { 
    return a + b; 
};`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-2xl font-extrabold">8 — Object Property Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `// Regular:
const object = {
  sum: function(a, b) { 
      return a + b; 
  },
};

// Shorthand:
const object = {
  sum(a, b) { 
      return a + b; 
  },
};`
                }
            </CodeBlog>

            <br/>
            <h1 className="text-2xl font-extrabold">9 — Object Dynamic Property Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `const functionName = "sum";

const object = {
  [functionName]: function(a, b) { 
      return a + b; 
  },
};`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-2xl font-extrabold">10 — Object Property Getter/Setter Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `// Regular:
const object = {
  get answer { 
      return 42; 
  },
  set answer(value) { /* do something with value */ },
};

// With defineProperty
const obj = {};

Object.defineProperty(obj, "answer", {
  get() { 
      return 42; 
  },
  set(value) { /* do something with value */ },
});`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-2xl font-extrabold">11 — Object Dynamic Property Getter/Setter Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `const functionName = "answer";

const object = {
  get [functionName]() { 
      return 42; 
  },
  
  set [functionName](value) { /* do something with value */ },
};`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-2xl font-extrabold">12 — Class Method Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `class Compute {
  // Regular:
  sum(a, b) { 
      return a + b; 
  };
};

class Compute {
  // Static:
  static sum(a, b) { 
      return a + b; 
  };
}`
                }
            </CodeBlog>

            <br/>
            <h1 className="text-2xl font-extrabold">13 — Class Property Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `class Compute {
  // Regular:
  sum = function (a, b) { 
      return a + b; 
  };
};

class Compute {
  // Static:
  static sum = function(a, b) { 
  return a + b; 
  };
}`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-2xl font-extrabold">14 — Class Private Function</h1>
            <br/>
            <CodeBlog language="javascript">
                {
`class Compute {
  // Regular:
  #sum(a, b) {
    return a + b;
  }  
  
  // Static:
  static #sum(a, b) {
    return a + b;
  }
}`
                }
            </CodeBlog>
            <br/>

            <article className="text-lg  border-l-4 border-l-gray-600 pl-3">
                I tried to keep the list to only the uniquely different ways to create a function. If you start thinking about combining some of these ways there would be a lot more options.
            </article>
            <br/>
            <h4 className="text-xl font-extrabold">Did I miss anything? Let me know.</h4>
        </div>
    );
};

export default TheDifferentWaysToDefineAFunctionInJavaScript;