import React from 'react';
import BlogUser from "@/app/components/blogs/BlogUser";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import JsxAndStatePropsBanner1 from "@/public/BlogsImage/JsxAndStatePropsBanner1.png";
import JsxAndStatePropsBanner2 from "@/public/BlogsImage/JsxAndStatePropsBanner2.png";
import JsxAndStatePropsBanner3 from "@/public/BlogsImage/JsxAndStatePropsBanner3.png";
import JsxAndStatePropsBanner4 from "@/public/BlogsImage/JsxAndStatePropsBanner4.png";
import CodeBlog from "@/app/components/blogs/CodeBlog";

const JsxAndStateProps = () => {
    return (
        <div>
            <h1 className="lg:text-5xl text-2xl  font-extrabold">JSX and State/Props</h1>
            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="December 22, 2021"/>
            <br/>
            <div>
                <Image src={JsxAndStatePropsBanner1}
                       alt={"JSX and State/Props"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>
            <br/>
            <br/>
            <h1 className="text-4xl">JSX</h1>
            <br/>
            <br/>
            <h3 className="text-2xl">What is JSX?</h3>
            <br/>
            <br/>
            <Image src={JsxAndStatePropsBanner2}
                   alt={"What is JSX?"}
                   className="w-full"
                   placeholder="blur"
                   loading="lazy"
            />
            <br/>
            <br/>
            <p className="text-xl">JSX stands for JavaScript XML.JSX is an HTML or not it's a fun tag syntax. Looks
                like an HTML tag, it is converted to JavaScript.</p>
            <br/>
            <br/>
            <p className="text-xl">Many might think it might be HTML, but it's actually JSX. This is a syntax
                extension of JavaScript. It comes from the full power of JavaScript.This allows us to write HTML
                in React.</p>
            <br/>
            <br/>
            <p className="text-xl">One of the requirements, when you start learning React, is to learn JSX. The
                first time you look at the syntax when you are new to it, you will see that it is a mixture of
                JavaScript and HTML. Here I show an example;</p>
            <br/>
            <br/>
            <CodeBlog language="javascript">
                {
                    `const heading = <h1>Hello World</h1>
      console.log(heading)
`
                }
            </CodeBlog>
            <br/>
            <br/>
            <p className="text-xl">JSX is popularly used in React, i.e. between JSX and HTML syntax, I will try to
                show some differences.</p>
            <br/>
            <br/>
            <h1 className="text-2xl">Use className instead of just class attributes:</h1>
            <br/>
            <br/>
            <p className="text-xl">As you can see in JSX we use the className attribute, but in HTML we only use the
                class attribute. This is because JSX is converted to JavaScript and the class is a saved word in
                JavaScript.</p>
            <br/>
            <br/>
            <h1 className="text-2xl">Example: JSX</h1>
            <br/>
            <br/>
            <CodeBlog language="javascript">
                {
                    `<div className="container">
     <h1 className="heading">Hello World</h1>
<div`}
            </CodeBlog>
            <br/>
            <br/>
            <h1>Example: HTML</h1>
            <br/>
            <br/>
            <CodeBlog language="javascript">
                {
                    `<div className="container">
     <h1 class="heading">Hello World</h1>
<div`}
            </CodeBlog>
            <br/>
            <br/>

            <h1 className="text-2xl">Self-closing tags:</h1>
            <br/>
            <br/>
            <p className="text-xl">JSX must have a forward slash on self-closing tags whereas a forward slash is
                optional on HTML self-closing tags.</p>
            <br/>
            <br/>
            <h1 className="text-2xl">Example: JSX</h1>
            <br/>
            <br/>
            <CodeBlog language="javascript">
                {
                    `<div className="container">
   <img src="#" alt="" />
   <br/>
<div`}
            </CodeBlog>
            <br/>
            <br/>
            <h1 className="text-2xl">Example: HTML</h1>
            <br/>
            <br/>
            <CodeBlog language="javascript">
                {
                    `<div className="container">
   <img src="#" alt="" >
   <br>
<div`}
            </CodeBlog>
            <br/>
            <br/>

            <h1 className="text-2xl">Event listeners:</h1>
            <br/>
            <br/>
            <p className="text-xl">In JSX, event listeners have to type in camelcase, such as onClick, on the other
                hand, in HTML, in lowercase letters, for example, onclick.</p>
            <br/>
            <br/>
            <p className="text-xl">If you want to know more about JSX in a more detailed way, I recommend you You
                can follow the documentation of React.</p>
            <br/>
            <br/>
            <h1 className="text-2xl">Why JSX is popular with developers?</h1>
            <br/>
            <br/>
            <p className="text-xl">JSX is one of the best features that not only make ReactJS easier, it also makes
                it a lot more fun. Developers can easily create a new UI feature and display it in real-time. It
                can bring HTML directly to your JS. A component is given to developers to break the complex
                UI.So JSX is very popular with all developers today.</p>
            <br/>
            <br/>
            <h1 className="text-2xl">What are the props in React?</h1>
            <br/>
            <br/>
            <p className="text-xl">Props mean "property". They are reading components only. It is an object that
                stores the value of the tag attribute and acts as an HTML attribute. It provides a way to
                transmit data from one component to another.</p>
            <br/>
            <br/>
            <Image src={JsxAndStatePropsBanner3}
                   alt={"What are the props in React?"}
                   className="w-full"
                   placeholder="blur"
                   loading="lazy"
            />
            <br/>
            <br/>
            <p className="text-xl">Props work that way</p>
            <br/>
            <br/>
            <h1 className="text-2xl">What is the state in React?</h1>
            <br/>
            <br/>
            <p className="text-xl">The State is a JavaScript object that is capable of storing the component's
                dynamic data. It can keep track of changes in a component's render. Since the state dynamically
                reserves it only for interactivity, you should not use it for static react projects.</p>
            <br/>
            <br/>
            <Image src={JsxAndStatePropsBanner4}
                   alt={"What are the props in React?"}
                   className="w-full"
                   placeholder="blur"
                   loading="lazy"
            />
        </div>
    );
};

export default JsxAndStateProps;