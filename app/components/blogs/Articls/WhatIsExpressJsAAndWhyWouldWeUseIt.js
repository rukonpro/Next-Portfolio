import React from 'react';
import BlogUser from "@/app/components/blogs/BlogUser";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import WhatIsExpressJsAAndWhyWouldWeUseItBanner from "@/public/BlogsImage/WhatIsExpressJsAAndWhyWouldWeUseItBanner.png";
import CodeBlog from "@/app/components/blogs/CodeBlog";

const WhatIsExpressJsAAndWhyWouldWeUseIt = () => {
    return (
        <div>
            <h1 className="lg:text-5xl text-2xl  font-extrabold">What is Express.js and Why would we use
                it?</h1>
            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="Dec 15, 2023"/>
            <br/>
            <div>
                <Image src={WhatIsExpressJsAAndWhyWouldWeUseItBanner}
                       alt={"How to Duplicating a repository?"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>
            <br/>
            <p className="text-lg "><span className="text-2xl underline underline-offset-4">Express.js </span> is a free
                open-source Node.js web application framework. It is used to quickly and easily design and build web
                applications.Express.js requires only JavaScript, so it is easy for programmers and developers to create
                web applications and APIs without much effort.</p>
            <br/>
            <br/>
            <p className="text-lg">which means that most of the code is written for the work of developers. You can
                create a single-page, multi-page or hybrid website using Express.js. Express.js helps organize
                lightweight and server-side web applications into more organized MVC architectures. Learning JavaScript
                and HTML is very important to be able to use Express.js.</p>
            <br/>
            <br/>
            <p className="text-lg">{`Express.js makes it easy to manage web applications It is a part of JavaScript-based
                technology which is MEAN software undefined Known as Stack which stands for MongoDB, ExpressJS,
                AngularJS, and Node.js.Express.js is part of MEAN's backend and handles routing, sessions, HTTP
                requests, errors. Express.js's JavaScript library helps programmers build web apps faster. Express.js
                doubles the functionality of node.js. In fact, if you do not use Express.`}</p>
            <br/>
            <br/>
            <p className="text-lg">js, then you had to do a lot of complex programming to create an efficient and good
                quality API. This makes programming in node.js effortless and adds many extra features. undefined</p>
            <br/>
            <br/>
            <h3 className="text-2xl">How does Express.js Work?</h3>
            <br/>
            <br/>
            <p className="text-lg">Below is a block image of how Express.js works with Node.js and MongoDB.</p>
            <br/>
            <br/>
            <p className="text-lg">Node.js is an event-driven server with a single thread, to manage all connections to
                the server. It processes as many callback requests as possible without delay.</p>
            <br/>
            <br/>
            <p className="text-lg">As you can see from the image above, as soon as the request enters the server,
                Express processes the callback immediately without blocking the main stack.</p>
            <br/>
            <br/>
            <p className="text-lg">The server accepts requests and registers event data processing. The event then sends
                a request to the remote Mongo server. Once this is done, it takes some time for the data to return. At
                the same time, the server is processing other requests. When the data arrives, the Mongo driver calls
                the user request handler. The user request handler returns the data to the client.</p>
            <br/>
            <br/>
            <br/>
            <h3 className="text-2xl">What is REST API?</h3>
            <br/>
            <br/>
            <p className="text-lg">REST is the representation state transfer. Where HTTP clients can request information from the server via
                the HTTP protocol.</p>
            <br/>
            <br/>
            <p className="text-lg">REST is the representation state transfer. Where HTTP clients can request information from the server via
                the HTTP protocol.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-2xl">HTTP Request Types:</h1>
            <br/>
            <br/>
            <p className="text-lg">There are several types of HTTP methods we need to know before creating a REST API. These methods are
                compatible with CRUD functions:</p>
            <br/>
            <br/>
            <p className="text-lg"><span className="text-2xl underline underline-offset-4">Post:</span> Used to submit data, usually used to create new entities or edit existing entities.
            </p>
            <br/>
            <br/>
            <p className="text-lg"><span className="text-2xl underline underline-offset-4">GET:</span> Used to request data from the server usually used to read data</p>
            <br/>
            <br/>
            <p className="text-lg"><span className="text-2xl underline underline-offset-4">PUT:</span> Used to completely replace resources with submitted resources Used to update data.</p>
            <br/>
            <br/>
            <p className="text-lg"><span className="text-2xl underline underline-offset-4">DELETE:</span> Used to delete an entity from the server.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-2xl">Here is a brief overview on how to create API in Node.js with Express.js;</h1>
            <br/>
            <br/>
            <CodeBlog language="javascript">
                {
`import 'dotenv/config';

...

import express from 'express';




const app = express();

...

app.get('/', (req, res) => {

 return res.send('Received a GET HTTP method');

});

app.post('/', (req, res) => {

 return res.send('Received a POST HTTP method');

});

app.put('/', (req, res) => {

 return res.send('Received a PUT HTTP method');

});

app.delete('/', (req, res) => {

 return res.send('Received a DELETE HTTP method');

});

app.listen(process.env.PORT, () =>

 console.log(\`Example app listening on port ${process.env.PORT}!\`),

); `
                }
            </CodeBlog>
        </div>
    );
};

export default WhatIsExpressJsAAndWhyWouldWeUseIt;