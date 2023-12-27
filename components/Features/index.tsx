import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 font-bold"style={{ fontFamily: 'Tajawal, sans-serif' }}>
        <div className="container">
          <SectionTitle
            title="مميزات النظام"  
            paragraph="بداية من تسجيل الحضور السهل عبر الدفتر الرقمي و كذلك تمكين الأولياء من الإطلاع على كل ما يتعلق بأبناءهم ، هذا النظام من خلال مميزاته يحقق لكم النتيجة التي ترجونها"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
