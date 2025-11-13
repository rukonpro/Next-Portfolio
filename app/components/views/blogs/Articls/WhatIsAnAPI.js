import React from 'react';
import BlogUser from "../BlogUserView";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import WhatIsAnAPIBanner1 from "@/public/BlogsImage/WhatIsAnAPIBanner1.png";
import WhatIsAnAPIBanner2 from "@/public/BlogsImage/WhatIsAnAPI2.png";
import WhatIsAnAPIBanner3 from "@/public/BlogsImage/WhatIsAnAPIBanner3.png";
import WhatIsAnAPIBanner4 from "@/public/BlogsImage/WhatIsAnAPIBanner4.png";
const WhatIsAnApi = () => {
    return (
        <div>
            <h1 className="lg:text-5xl text-2xl  font-extrabold">What is an API, the purpose of API, GET,
                POST?</h1>
            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="December 21, 2021"/>
            <br/>
            <div>
                <Image src={WhatIsAnAPIBanner1}
                       alt={"What is an API, the purpose of API, GET, POST?"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>
            <br/>
            <br/>
            <h1 className="text-3xl">What is an API?</h1>
            <br/>
            <br/>
            <p className="text-xl">API is the acronym for Application Programming Interface. It is a means of exchanging data. When we use
                an application on a mobile phone or computer, the application is connected to the Internet, and data is
                sent or a request is sent to a server. And the way that work is done is API.</p>
            <br/>
            <br/>
            <br/>
            <div>
                <Image src={WhatIsAnAPIBanner2}
                       alt={"What is an API?"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>
            <br/>
            <br/>
            <br/>
            <h1 className="text-2xl">What is the purpose of API?</h1>
            <br/>
            <br/>
            <p className="text-xl">The purpose of the API is to transfer data from the client site to the server-side, and this is done via
                HTTP.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-2xl">How an API works?</h1>
            <br/>
            <br/>
            <p className="text-xl">API work by sharing data and information between applications, systems, and devices making it possible to
                communicate with each other. Sometimes the easiest way to think about APIs is to think of a metaphor,
                and a common scenario that many people use is the customer, a waiter, and the kitchen of a restaurant: a
                customer talks to the waiter and tells the waiter what he wants. </p>
            <br/>
            <br/>
            <div>
                <Image src={WhatIsAnAPIBanner3}
                       alt={"How an API works?"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>
            <br/>
            <br/>
            <p className="text-xl">The waiter dropped the order and contacted the kitchen. The kitchen does their work, prepares the food
                and then the waiter returns the order to the customer. In this metaphor, a customer is like a user who
                tells the waiter what he wants. </p>
            <br/>
            <br/>
            <br/>
            <p className="text-xl">{`The waiter, like an API, accepts the customer's order and translates the order into easy-to-follow
                instructions that the kitchen uses to fulfill that order often following a specific code or input that
                the kitchen can easily recognize. The kitchen is like a server that works to create order in the way the
                customer wants it, hopefully! When the meal is ready, the waiter picks up the order and undefined
                Delivers to the customer. undefined`}</p>
            <br/>
            <br/>
            <div>
                <Image src={WhatIsAnAPIBanner4}
                       alt={"Purpose of GET:"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>
            <br/>
            <br/>
            <br/>
            <h1 className="text-2xl">Purpose of GET:</h1>
            <br/>
            <br/>
            <p className="text-xl">And GET is the method of bringing data from the server-side to the client site. Get is what I want so he
                will give.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-2xl">Purpose of POST:</h1>
            <br/>
            <br/>
            <p className="text-xl">The purpose of the POST Method is to take requests from client sites to store data on server sites.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-2xl">Purpose of PUT:</h1>
            <br/>
            <br/>
            <p className="text-xl">The purpose of PUT is to request that any data stored on the server site be updated. If we need to update
                any data stored on a server site later, we update the data on the server site via a PUT request.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-2xl">Purpose of DELETE:</h1>
            <br/>
            <br/>
            <p className="text-xl">The purpose of the Delete method is to take a request from the clean site to delete any data from the
                server site.</p>
        </div>
    );
};

export default WhatIsAnApi;