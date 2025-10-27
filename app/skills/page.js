import React, {Suspense} from 'react';
import  Navigation from "@/app/components/layout/navigation/navigation"
import Skills from "@/app/components/views/skills/skills";
import Footer from "@/app/components/layout/footer/footer";


const SkillsAll = () => {
    return (
      <section>
          <Navigation/>
              <Suspense fallback={"<h1>loading...</h1>"}>
                  <Skills/>
              </Suspense>
          <Footer/>
      </section>
    );
};

export default SkillsAll;

export const metadata = {
    title: 'Full Stack Dev. - Skills',
    description: 'I am a dynamic Full stack developer passionate about transforming ideas into powerful and user-friendly web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I specialize in building seamless, responsive, and scalable solutions.',
}