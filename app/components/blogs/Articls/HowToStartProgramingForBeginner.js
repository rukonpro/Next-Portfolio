import React from 'react';
import BlogUser from "@/app/components/blogs/BlogUser";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import HowToStartProgramingForBeginnerBanner from "@/public/BlogsImage/How-to-Start-Coding-for-Beginners.jpg";
import CodeBlog from "@/app/components/blogs/CodeBlog";

const HowToStartProgramingForBeginner = () => {
    return (
        <div>
            <h1 className="lg:text-5xl text-2xl font-extrabold">How to Programing start for beginners?</h1>
            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="Dec 15, 2023"/>
            <br/>
            <div>
                <Image src={HowToStartProgramingForBeginnerBanner}
                       alt={"How to Programing start for beginners"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>
            <br/>
            <p className="text-xl">Programming is a term familiar to most of us. However, it has been ingrained in our
                minds in such a difficult way that we often perceive programming as the creation of complex software and
                keep ourselves distant from it. Actually, programming is not that difficult. Just like we use our
                intellect to solve any problem, programming is similar; we can easily solve various computer problems
                through programming.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-3xl">What is Programming?</h1>
            <br/>
            <br/>
            <p className="text-xl">Programming, in simple terms, is the process of giving instructions to a computer.
                Another way to put it is that programming encompasses the entire set of directives needed to solve any
                problem using a computer.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-3xl">What is a Programming Language?</h1>
            <br/>
            <br/>
            <p className="text-xl">A programming language is a language used for communicating with computers or for
                programming purposes. It refers to the systematic arrangement of words, characters, and symbols used to
                create programs to solve various problems through a computer. Examples include C Programming, C++,
                JavaScript, Python, etc.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-3xl">Which Programming Language Should You Learn?</h1>
            <br/>
            <br/>
            <p className="text-xl">You have surely seen the list below. There is no end to languages. Learning so many
                is not possible for one person, so I will lightly discuss popular languages. Continuously,</p>
            <br/>
            <br/>
            <CodeBlog language="javascript">
                {
`Python
C Programming
JavaScript
`
                }
            </CodeBlog>
            <br/>
            <br/>

            <p className="text-xl"><span className="font-extrabold">Python: </span> A powerful high-level and
                object-oriented programming language widely used for various tasks nowadays. If you are considering
                learning programming, then start with Python because compared to other programming languages, learning
                Python is relatively easier. Moreover, almost everything can be done through this programming language
                alone, including app development, web development, game development, machine learning, data science, and
                more, making it the most popular programming language currently.</p>
            <br/>
            <br/>
            <br/>
            <p className="text-xl"><span className="font-extrabold">C Programming: </span> If you are new to
                programming, then starting your journey with C will be a great choice for you.</p>
            <br/>
            <br/>
            <br/>
            <p className="text-xl">C is the most widely used programming language for operating system writing. All
                Microsoft Windows, Mac OS, and GNU/Linux are written in the C programming language. Not only is C the
                language of operating systems, but it is also currently the preferred choice for almost all programming
                languages.</p>
            <br/>
            <br/>
            <br/>
            <p className="text-xl"><span className="font-extrabold">JavaScript: </span> Choosing a programming language
                from among all programming languages is a daunting task. Learning a programming language is a lot of
                hard work, so you will definitely want your learned programming language to work in the future.</p>
            <br/>
            <br/>
            <br/>
            <p className="text-xl">If you want to work on web development in the future, then you can start with
                JavaScript because with this one language, you can design websites, develop databases, and everything
                else. You might have heard of the popular web stack MERN; this is also done only through JavaScript. So,
                it can be said that if you want to work on the web, this language will be sufficient.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-3xl">Which Programming Language to Start With?</h1>
            <br/>
            <br/>
            <p className="text-xl">Choosing a programming language is the most difficult part of learning programming!
                What to learn, which one is easier, which one is more in demand; in one case, there are suggestions from
                any good programmer, you choose one according to your choice; learn one, the rest will be the same.
                Almost all programmers around the world start learning one of these two languages - C or Python. So, you
                can choose any one language between them to start programming.</p>
            <br/>
            <br/>
            <br/>
            <h1 className="text-3xl">Now, the question is where to start learning programming.</h1>
            <br/>
            <br/>
            <p className="text-xl">Usually, you have to try to learn programming yourself for a minimum of six months.
                Especially from free tutorials on YouTube or free online courses. If you can learn on your own, that's
                the best. And if, for some reason, you can't even after giving six months, then you can start learning
                by buying a paid course.</p>
        </div>
    );
};

export default HowToStartProgramingForBeginner;