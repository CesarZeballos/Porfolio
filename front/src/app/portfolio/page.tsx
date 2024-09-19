import { BannerPortfolio } from "@/components/bannerPorfolio";
import { PortfolioContainer } from "@/components/portfolioContainer";


const Portfolio: React.FC = () => {

    return (
        <div>
            <BannerPortfolio />
            <PortfolioContainer />
        </div>
    )
}

export default Portfolio;