import React, {Suspense} from 'react';
import Image from "next/image";
import Link from "next/link";

import AvatarRukon from "/public/images/rukon.jpg";
import MongooseConnectionImage from "/public/BlogsImage/how_to_mongoose_Connection.webp";
import CodeBlog from "@/app/components/blogs/CodeBlog";
import {BREAK} from "graphql/language";
import BlogUser from "@/app/components/blogs/BlogUser";
const HowToConnectionOfMongooseInNodeJs = () => {
    return (
        <div>
            <h1 className="lg:text-5xl text-2xl  font-extrabold">How to Connection of Mongoose in Node
                Js.</h1>

            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="2 min read · Mar 4, 2022"/>
            <br/>
            <div>
                <Image src={MongooseConnectionImage}
                       alt={"How to Connection of Mongoose in Node Js."}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />

                <p className="pt-5 text-xl">First, make sure you have MongoDB and Node.js installed.</p>
                <p className="pt-5 text-xl">Next install Mongoose from the command line using npm:</p>

                <br/>
               <Suspense fallback={<h1>Loading...</h1>}>
                   <CodeBlog
                       language="javascript"
                   >
                       {`$ npm install mongoose - save`}
                   </CodeBlog>
               </Suspense>
                <p className="pt-5 text-xl">Now let’s say we like obscure kittens and want to record every kitten we see
                    on MongoDB. The first thing we need to do is to include Mongoose in our project and open a link to
                    the test database in the locally running example of MongoDB.</p>
                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {`
    // getting-started.js
    
    const mongoose = require('mongoose');
    main().catch(err => console.log(err));
    
    async function main() {
        await mongoose.connect('mongodb://localhost:27017/test');}
    }
                        `}
                    </CodeBlog>
                </Suspense>
                <br/>

                <p className="pt-5 text-xl">For brevity, let’s assume that all of the following code is in the main ()
                    function. With mangoes, everything originates from a schema. Let’s get a reference and define our
                    kitten.</p>
                <br/>

                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {`    const kittySchema = new mongoose.Schema({
                            name: String
                           });`}
                    </CodeBlog>
                </Suspense>
                <br/>

                <p className="pt-5 text-xl">So far so good. We’ve got a schema with a property, name, which would be a
                    string. The next step is compiling our schema into a model..</p>
                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {` const Kitten = mongoose.model('Kitten', kittySchema);`}
                    </CodeBlog>
                </Suspense>
                <br/>
                <p className="pt-5 text-xl">A model is a class with which we create documents. In this case, each
                    document will be a kitten with features and behaviors declared as our schema. Let’s make a kitten
                    document that the little guy we just met on the sidewalk outside:</p>
                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {`    const silence = new Kitten({ name: 'Silence' });
                    console.log(silence.name); 
                    
                    // 'Silence' Kittens can do magic too, so let's take a at how to add "Speak" 
                    functionality to our document:
                    
                    kittySchema.methods.speak = function speak() {
                    
                    const greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
                    
                   console.log(greeting);
                };`}
                    </CodeBlog>
                </Suspense>
                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {` const Kitten = mongoose.model('Kitten', kittySchema);`}
                    </CodeBlog>
                </Suspense>
                <br/>

                <p className="pt-5 text-xl">Functions added to a schema method property are compiled into model
                    prototypes and expressed in examples of each document:</p>

                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {`const fluffy = new Kitten({ name: 'fluffy' });
                   fluffy.speak()`}
                    </CodeBlog>
                </Suspense>
                <br/>

                <p className="pt-5 text-xl">We’re talking kittens! But we still can’t save anything on MongoDB. Each
                    document can be saved in the database by calling the save method. The first argument of callback
                    would be an error if anything happened.</p>

                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {`
await fluffy.save();
fluffy.speak();`}
                    </CodeBlog>
                </Suspense>
       <br/>

                <p className="pt-5 text-xl">Say time goes by and we want to show all the kittens we see. We can access
                    all kitten documents through our Kitten model.</p>

                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {`const kittens = await Kitten.find();
                    console.log(kittens);`}
                    </CodeBlog>
                </Suspense>

                <br/>

                <p className="pt-5 text-xl">We’ve just logged the kittens into our DB console. If we want to filter the
                    names of our kittens, Mongoose MongoDBs support rich query syntax.</p>

                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {` await Kitten.find({ name: /^fluff/ });`}
                    </CodeBlog>
                </Suspense>
                <br/>
                <p className="pt-5 text-xl">It does a search for all documents, including the property of a name
                    beginning with “Fluff” and returns the result as an array of kittens in the callback.</p>
                <br/>
                <br/>
                <p>Thank you read for my block !</p>
            </div>

        </div>
    );
};

export default HowToConnectionOfMongooseInNodeJs;