import portfolioData from "@/app/assite/portfollioData/portfollioData";
import Navigation from "@/app/components/navigation/navigation";
import BackButton from "@/app/components/backButton/backButton";
import SkillsCard from "@/app/components/skills/SkillsCard";
import Footer from "@/app/components/footer/footer";




const Page = ({ params }) => {

    const skills = portfolioData?.skills?.find(data => data?.id === params?.id);

    return (
        <div className="skills-bg">
            <Navigation />


            <div className="max-w-[1200px] relative  z-10 mx-auto px-5 py-28">
                <div className="flex gap-1 items-center py-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                >
                    <BackButton />
                    <h1 className={`text-white text-xl  font-bold  pt-15 `}>{skills?.title}</h1>

                </div>
                <div>

                    <ol className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-5">
                        {
                            skills?.data?.map((data) => {
                                return (
                                    <li key={data?.id}
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-duration="1000"
                                    >
                                        <SkillsCard data={data} />
                                    </li>
                                )
                            })
                        }
                    </ol>

                    <div className="flex justify-center py-3">
                        <BackButton />
                    </div>
                </div>

            </div>
            <div
                className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[1000px] sm:max-w-md md:max-w-lg"
                style={{background: "linear-gradient(106.89deg, rgba(141, 76, 206, 0.11) 15.73%, rgb(165, 14, 233) 15.74%, rgba(255, 0, 0, 0.26) 56.49%, rgba(234, 51, 214, 0.4) 115.91%)"}}/>
            <Footer />
        </div>
    );
};

export default Page;



export async function generateMetadata({ params }) {
    // Assuming portfolioData is available in this scope
    const skills = portfolioData?.skills?.find(data => data?.title === params?.id);
    // Check if skills data is found
    if (!skills) {
        // Return default metadata or handle the error appropriately
        return {
            title: "Skills Not Found",
            description: "The requested skills information could not be found."
        };
    }

    return {
        title: `MERN Stack Dev. - ${skills.title}`,
        description: 'Explore the portfolio of Your Name, a skilled MERN stack developer with expertise in building robust web applications.',
        // Optionally, you can add more metadata fields here
        keywords: "MERN, web development, portfolio, skills, developer",
        openGraph: {
            title: `MERN Stack Dev. - ${skills.title}`,
            description: 'Explore the portfolio of Your Name, a skilled MERN stack developer.',
            url: `https://rukonpro.vercel.app/skills/${params.id}`,
            images: skills?.data?.map(skill => ({
                url: skill.logo.src,
                height: skill?.height,
                width: skill?.width,
                alt: `Skills in ${skill.title}`
            })),

            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `MERN Stack Dev. - ${skills.title}`,
            description: 'Explore the portfolio of Your Name, a skilled MERN stack developer.',
            image: "/images/rukon-pro-footer-images.png", // Replace with the actual image URL
        },
    }
}



export function generateStaticParams() {
    return portfolioData?.skills?.map((portfolio) => ({
        id: portfolio.title,
    }))
}

