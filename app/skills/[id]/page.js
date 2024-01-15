import portfolioData from "@/app/assite/portfollioData/portfollioData";
import Navigation from "@/app/components/navigation/navigation";
import BackButton from "@/app/components/backButton/backButton";
import SkillsCard from "@/app/components/skills/SkillsCard";
import Footer from "@/app/components/footer/footer";




const Page = ({params}) => {
    const skills=portfolioData?.skills?.find(data=>data?.title===params?.id);

    return (
        <div className=" bg-[#0e0e36] min-h-screen overflow-hidden ">
            <Navigation/>


            <div className="max-w-[1200px] relative  z-10 mx-auto px-5 py-20">
                <div className="flex justify-between items-center py-3"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-duration="1000"
                >
                    <h1 className={`text-white text-xl  font-bold  pt-15 `}>All {params?.id}</h1>
                    <BackButton/>
                </div>
                <div>

                    <ol className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-5">
                        {
                            skills?.data?.map((data, index) => {
                                return (
                                    <li key={index}
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-duration="1000"
                                    >
                                        <SkillsCard data={data}/>
                                    </li>
                                )
                            })
                        }
                    </ol>

                    <div className="flex justify-center py-3">
                        <BackButton/>
                    </div>
                </div>

            </div>
            <div className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>
            <Footer/>
        </div>
    );
};

export default Page;



export async function generateMetadata({ params, searchParams }, parent) {
    const skills=portfolioData?.skills?.find(data=>data?.title===params?.id);

    return {
        title: `MERN stack dev - ${skills.title}`,
        description: 'Explore the portfolio of Your Name, a skilled MERN stack developer with expertise in building robust web applications.',
    }
}


export function generateStaticParams() {
    return portfolioData?.skills?.map((portfolio) => ({
        id: portfolio.title,
    }))
}

