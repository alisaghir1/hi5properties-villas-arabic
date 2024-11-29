import React from "react";
import Swipper from "./components/Swipper";

const FifthSection: React.FC = () => {
  return (
    <section className="bg-customText2">
      <div className="text-center mx-2 py-20 ">
        <h2 className="text-2xl font-bold text-customBg lg:text-3xl pb-4 custom-font">
        الأناقة 
        </h2>
        <p className="max-w-screen-sm black md:block mx-auto custom-font2">
        في هاي فايف بروبرتيز، نقدم أناقة لا مثيل لها من خلال دمج الفخامة، والتصميم الراقي، والأسلوب الخالد بسلاسة، مما يضمن أن كل وحدة سكنية من عقاراتنا توفر تجربة سكنية استثنائية.
        </p>
      </div>
      <Swipper />
    </section>
  );
};

export default FifthSection;
