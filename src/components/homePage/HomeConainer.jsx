import BlockBusterDeals from "./BlockBusterDeals";
import CollectionSelect from "./CollectionSelect";
import FeaturedCategory from "./FeaturedCategory";
import GreatSaving from "./GreatSaving";
import HomePageBanner from "./HomePageBanner";
import PopularProducts from "./PopularProducts";
import ShoesSection from "./ShoesSection";
import SimilarProfile from "./SimilarProfile";
import WinterCollection from "./WinterCollection";

const HomeConainer = () => {
    return (
        <div>
            <HomePageBanner></HomePageBanner>
            <ShoesSection></ShoesSection>
            <FeaturedCategory></FeaturedCategory>
            <CollectionSelect></CollectionSelect>
            <PopularProducts></PopularProducts>
            <WinterCollection></WinterCollection>
            <SimilarProfile></SimilarProfile>
            <GreatSaving></GreatSaving>
            <BlockBusterDeals></BlockBusterDeals>
        </div>
    );
};

export default HomeConainer;