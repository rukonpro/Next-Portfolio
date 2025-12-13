import portfolioData from "@/app/assets/portfolioData/portfolioData";
import Portfolio from "@/app/components/views/portfolios/PortfolioView";


const Page = async ({ params }) => {
    const portfolio = portfolioData?.portfolios?.future?.find(data => data?.id === params?.id);

    const serializableImage = (img) => {
      if (!img) return null;
      return {
        src: img.src,
        height: img.height,
        width: img.width,
        blurDataURL: img.blurDataURL,
        blurWidth: img.blurWidth,
        blurHeight: img.blurHeight,
      };
    };

    const serializablePortfolio = portfolio ? {
        ...portfolio,
        logo: serializableImage(portfolio.logo),
        images: portfolio.images.map(serializableImage),
        links: {
            ...portfolio.links,
            fontEndCode: {
                ...portfolio.links.fontEndCode,
                icon: serializableImage(portfolio.links.fontEndCode.icon),
            },
            backEndCode: {
                ...portfolio.links.backEndCode,
                icon: serializableImage(portfolio.links.backEndCode.icon),
            },
            liveLink: {
                ...portfolio.links.liveLink,
                icon: serializableImage(portfolio.links.liveLink.icon),
            },
        },
    } : null;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Project',
        name: portfolio?.title,
        image: portfolio?.images[0]?.src,
        description: portfolio?.description,
    }
    return (
        <section className=" text-white portfolio-bg">
            <div className="max-w-[1200px] mx-auto py-28 px-5 z-10">
                <Portfolio data={serializablePortfolio} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </div>
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
        robots: 'index, follow', // This tells search engines to index the page and follow its links
    };
}

export const viewport = ({ params }) => {
    const portfolio = portfolioData?.portfolios?.future?.find(data => data?.id === params?.id);


    if (!portfolio) {
        return {
            width: 'device-width',
            initialScale: 1,
            themeColor: '#37306b',
        }
    }
    return {
        width: 'device-width',
        initialScale: 1,
        themeColor: '#37306b',
    };
};
