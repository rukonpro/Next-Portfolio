import React, {Suspense} from 'react';
import  Navigation from "@/app/components/navigation/navigation"
import Skills from "@/app/components/skills/skills";
import Footer from "@/app/components/footer/footer";

export const metadata = {
    title: 'MERN stack dev - Skills',
    description: 'I am a dynamic MERN stack developer passionate about transforming ideas into powerful and user-friendly web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I specialize in building seamless, responsive, and scalable solutions.',
}
const SkillsAll = ({params}) => {
    return (
      <section>
          <Navigation/>
          <div className="pt-16">
              <Suspense fallback={"<h1>Loading...</h1>"}>
                  <Skills/>
              </Suspense>
          </div>

          <Footer/>
      </section>
    );
};

export default SkillsAll;