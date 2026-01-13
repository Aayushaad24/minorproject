import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Information from "../../components/information/Information";

const LandingPage = () => {
  return (
    <main className="pt-16 bg-[#547792] h-screen text-white">
      <Information />
      <Features />
      <Footer />
    </main>
  );
};

export default LandingPage;
