import Header from "../Components/Header/Header";
import PopularSection from "../Components/Popular Section/Popular";
import OfferSection from "../Components/Offer Section/Offer";
import NewCollections from "../Components/New Collections/Newcollection";
import NewsLetter from "../Components/News Letter/Newsletter";
export default function Home() {
  return (
    <div>
      <Header />
      <PopularSection />
      <OfferSection />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}
