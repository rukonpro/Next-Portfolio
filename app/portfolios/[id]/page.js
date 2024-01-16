import Portfolio from "@/app/components/portfolios/portfolio";
import portfolioData from "@/app/assite/portfollioData/portfollioData";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";


const Page = ({params}) => {
    const portfolio= portfolioData?.portfolios?.future?.find(data=>data?.id===params?.id);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Project',
        name: portfolio?.title,
        image: portfolio?.images[0],
        description: portfolio.description,
    }
    return (
        <section className="text-white bg-gradient-to-tl to-[#060212] via-[#021a30] from-[#410b42] bg-fixed">
            <Navigation/>
           <div className="max-w-[1200px] mx-auto py-28 px-5">
               <Portfolio data={portfolio}/>
           </div>
            {/* Add JSON-LD to your page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* ... */}
            <Footer/>
        </section>
    );
};

export default Page;

export async function generateStaticParams() {
    return await portfolioData?.portfolios?.future?.map((portfolio) => ({
        id: portfolio.id,
    }))
}

export async function generateMetadata({ params, searchParams }, parent) {
    const portfolio= portfolioData?.portfolios?.future?.find(data=>data?.id===params?.id);

    return {
        title: `MERN Stack Dev. - ${portfolio.title}`,
        description:portfolio?.description
    }
}
