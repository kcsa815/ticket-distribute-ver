import MainBanner from "../components/home/MainBanner";
import RankingSection from "../components/home/RankingSection";
import SaleSection from "../components/home/SaleSection";
import UpcomingSection from "../components/home/UpcomingSection";

function HomePage() {
  return (
    <div>
      <MainBanner />

      <div className="content-wrapper">
        <RankingSection />
        <UpcomingSection />
        <SaleSection />
      </div>
    </div>
  );
}

export default HomePage;