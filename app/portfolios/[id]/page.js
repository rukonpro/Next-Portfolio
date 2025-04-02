import Portfolio from "@/app/components/portfolios/portfolio";
import portfolioData from "@/app/assite/portfollioData/portfollioData";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";


const Page = async ({ params }) => {
    const portfolio = portfolioData?.portfolios?.future?.find(data => data?.id === params?.id);


    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Project',
        name: portfolio?.title,
        image: portfolio?.images[0],
        description: portfolio.description,
    }
    return (
        <section className="portfolio-bg text-white bg-gradient-to-tl to-[#060212] via-[#021a30] from-[#410b42] bg-fixed">
            <Navigation />
            <div className="max-w-[1200px] mx-auto py-28 px-5">
                <Portfolio data={portfolio} />
            </div>
            {/* Add JSON-LD to your page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* ... */}
            <Footer />
        </section>
    );
};

export default Page;

export async function generateStaticParams() {
    return portfolioData?.portfolios?.future?.map((portfolio) => ({
        id: portfolio.id,
    }))
}

export async function generateMetadata({ params }) {
    const portfolio = portfolioData?.portfolios?.future?.find(data => data?.id === params?.id);

    if (!portfolio) {
      return {
        title: 'Portfolio Not Found - Rukon.Pro',
        description: 'The portfolio you are looking for does not exist.',
        openGraph: {
          title: 'Portfolio Not Found',
          description: 'The portfolio you are looking for does not exist.',
          url: 'https://rukonpro.vercel.app',
          images: [],
        },
        themeColor: '#FF0000',
        robots: 'noindex, nofollow', // Add this for pages you don’t want indexed
      };
    }

    return {
        title: `${portfolio.title} - Rukon.Pro`,
        description: portfolio.description,
        keywords: 'Musafir, Online Wholesalers, React, Tailwind CSS, GraphQL, Apollo Client, E-commerce Development, Web Development',
        authors: 'Rukon',
        creator: 'Rukon',
        publisher: 'Rukon.Pro',
        openGraph: {
          title: portfolio.title,
          description: portfolio.description,
          url: `https://rukonpro.vercel.app/portfolios/${params?.id}`,
          siteName: 'Rukon.Pro',
          locale: 'en_US',
          type: 'website',
          images: portfolio.images.map((img) => ({
            url: img.src,
            width: img.width,
            height: img.height,
            alt: portfolio.title
          })),
        },
        twitter: {
          card: 'summary_large_image',
          title: portfolio.title,
          description: portfolio.description,
          image: portfolio.images[0].src,
        },
        themeColor: '#009688',
        robots: 'index, follow', // This tells search engines to index the page and follow its links
    };
}

export async function getStaticPaths() {
    const paths = portfolioData?.portfolios?.future?.map(future => {
        return {
            params: { id: future.id }
        }
    })
    return {
        paths,
        fallback: 'blocking', // false or "blocking"
    }
}
