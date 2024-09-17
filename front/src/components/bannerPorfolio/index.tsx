import { portfolio } from "@/utils/portfolio"
import { Banner } from "../banner"


export const BannerPortfolio: React.FC = () => {

    return (
        <div className="sectionContainer">
            {portfolio.map((portfolio) => (
                <Banner
                    key={portfolio.index}
                    index={portfolio.index}
                    title={portfolio.title}
                    type={portfolio.type}
                    description={portfolio.description}
                    image={portfolio.image}
                    figma={portfolio.figma}
                    behance={portfolio.behance}
                />
            ))}
        </div>
    )
}