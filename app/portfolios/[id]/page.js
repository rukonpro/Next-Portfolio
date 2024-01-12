import Portfolio from "@/components/portfolios/portfolio";
import portfolioData from "@/app/assite/portfollioData/portfollioData";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

const Page = ({params}) => {
    const portfolio= portfolioData?.portfolios?.future?.find(data=>data?.id===params?.id);
    return (
        <div className="text-white bg-gradient-to-tl to-[#060212] via-[#021a30] from-[#410b42] bg-fixed">
            <Navigation/>
           <div className="max-w-[1200px] mx-auto py-28 px-5">
               <Portfolio data={portfolio}/>
           </div>

            <Footer/>
        </div>
    );
};

export default Page;

export async function generateStaticParams() {
    return await portfolioData?.portfolios?.future?.map((portfolio) => ({
        id: portfolio.id,
    }))
}