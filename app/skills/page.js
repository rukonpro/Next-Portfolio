import React, {Suspense} from 'react';
import BackButton from "@/components/backButton/backButton";
import  Navigation from "@/components/navigation/navigation"
import Skills from "@/components/skills/skills";
import Footer from "@/components/footer/footer";
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