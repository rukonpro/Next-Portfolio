import Portfolio from "@/components/portfolios/portfolio";
import portfolioData from "@/app/assite/portfollioData/portfollioData";
import Navigation from "@/components/navigation/navigation";

const Page = ({params}) => {
    const portfolio= portfolioData?.portfolios?.future?.find(data=>data?.id===params?.id);
    return (
        <div>
            <Navigation/>
           <div className="max-w-[1200px] mx-auto py-28 px-5">
               <Portfolio data={portfolio}/>
           </div>
        </div>
    );
};

export default Page;

export async function generateStaticParams() {
    return await portfolioData?.portfolios?.future?.map((portfolio) => ({
        id: portfolio.id,
    }))
}