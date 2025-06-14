import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import BusinessSolutions from "@/components/BusinessSolutions";
import Image from "next/image";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/VideoSection";
import EngagementSuite from "@/EngagementSuite";
import Statistics from "@/Statistics";
import InsightsSection from "@/InsightsSection";
import IntegrationGrid from "@/IntegrationGrid";
import AdditionalFeatures from "@/AdditionalFeatures";
import Footer from "@/Footer";


export default function Home() {
  return (
   <>
   <Header />
   <HeroSection />
   <FeaturesSection />
   <BusinessSolutions />
   <VideoSection />
   <EngagementSuite/>
   <Statistics/>
   <InsightsSection/>
   <IntegrationGrid/>
   <AdditionalFeatures/>
   <Footer/>
   </>
  );
}

const features = [
  {
    icon: "🚀",
    title: "Fast Performance",
    description: "Lightning-fast loading times and smooth interactions."
  },
  {
    icon: "🛡️",
    title: "Secure Platform",
    description: "Enterprise-grade security to protect your data."
  },
  {
    icon: "💡",
    title: "Smart Features",
    description: "Intelligent features that make your life easier."
  }
]
