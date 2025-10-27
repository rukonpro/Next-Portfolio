import React, {Suspense} from 'react';
import Image from "next/image";
import AvatarRukon from "/public/images/rukon.jpg";
import MongooseConnectionImage from "/public/BlogsImage/how_to_mongoose_Connection.webp";
import CodeBlog from "../CodeBlog";
import BlogUser from "../BlogUser";
import {H1, P} from "../BlogComponents/BlogComponents";

const HowToConnectionOfMongooseInNodeJs = () => {
    return (
        <div>
            <H1>How to Connection of Mongoose in Node Js.</H1>

            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="2 min read · Mar 4, 2022"/>
            <br/>
            <div>
                <Image src={MongooseConnectionImage}
                       alt="How to Connection of Mongoose in Node Js."
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />

                <P>First, make sure you have MongoDB and Node.js installed.</P>
                <P>Next install Mongoose from the command line using npm:</P>

                <br/>
               <Suspense fallback={<h1>Loading...</h1>}>
                   <CodeBlog
                       language="javascript"
                   >
                       {`$ npm install mongoose - save`}
                   </CodeBlog>
               </Suspense>
                <P>Now let’s say we like obscure kittens and want to record every kitten we see
                    on MongoDB. The first thing we need to do is to include Mongoose in our project and open a link to
                    the test database in the locally running example of MongoDB.</P>
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

                <P>For brevity, let’s assume that all of the following code is in the main ()
                    function. With mangoes, everything originates from a schema. Let’s get a reference and define our
                    kitten.</P>
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

                <P>So far so good. We’ve got a schema with a property, name, which would be a
                    string. The next step is compiling our schema into a model..</P>
                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {` const Kitten = mongoose.model('Kitten', kittySchema);`}
                    </CodeBlog>
                </Suspense>
                <br/>
                <P>A model is a class with which we create documents. In this case, each
                    document will be a kitten with features and behaviors declared as our schema. Let’s make a kitten
                    document that the little guy we just met on the sidewalk outside:</P>
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

                <P>Functions added to a schema method property are compiled into model
                    prototypes and expressed in examples of each document:</P>

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

                <P>We’re talking kittens! But we still can’t save anything on MongoDB. Each
                    document can be saved in the database by calling the save method. The first argument of callback
                    would be an error if anything happened.</P>

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

                <P>Say time goes by and we want to show all the kittens we see. We can access
                    all kitten documents through our Kitten model.</P>

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

                <P>We’ve just logged the kittens into our DB console. If we want to filter the
                    names of our kittens, Mongoose MongoDBs support rich query syntax.</P>

                <br/>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CodeBlog
                        language="javascript"
                    >
                        {` await Kitten.find({ name: /^fluff/ });`}
                    </CodeBlog>
                </Suspense>
                <br/>
                <P>It does a search for all documents, including the property of a name
                    beginning with “Fluff” and returns the result as an array of kittens in the callback.</P>
                <br/>
                <br/>
                <P>Thank you  for read my Blog !</P>
            </div>

        </div>
    );
};

export default HowToConnectionOfMongooseInNodeJs;