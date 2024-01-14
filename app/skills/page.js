import React, {Suspense} from 'react';
import  Navigation from "@/app/components/navigation/navigation"
import Skills from "@/app/components/skills/skills";
import Footer from "@/app/components/footer/footer";
const SkillsAll = ({params}) => {
    return (
      <section>
          <Navigation/>
          <Suspense fallback={"<h1>Loading...</h1>"}>
              <Skills/>
          </Suspense>
          <Footer/>
      </section>
    );
};

export default SkillsAll;