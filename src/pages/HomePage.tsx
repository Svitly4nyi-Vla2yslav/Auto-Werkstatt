import { ContactLocationSection } from '../sections/ContactLocationSection';
import { CTABannerSection } from '../sections/CTABannerSection';
import { FaqPreviewSection } from '../sections/FaqPreviewSection';
import { ProcessSection } from '../sections/ProcessSection';
import { ServicesPreviewSection } from '../sections/ServicesPreviewSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { TrustStripSection } from '../sections/TrustStripSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { Hero } from '../components/Hero';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../routes/routeMeta';

const HomePage = () => {
  useDocumentMeta(routeMeta.home.title, routeMeta.home.description);

  return (
    <>
      <Hero />
      <TrustStripSection />
      <ServicesPreviewSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABannerSection
        title="Termin bequem online anfragen oder direkt anrufen."
        description="Wenn Sie Ihr Anliegen kurz schildern, können wir oft schon vorab einschätzen, wie dringend es ist und welches Zeitfenster gut passt."
      />
      <FaqPreviewSection />
      <ContactLocationSection />
    </>
  );
};

export default HomePage;
