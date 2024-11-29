import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section className="pb-40 bg-customText2 custom-font2">
      <div className="text-center px-2 mb-20 bg-customBg py-20">
        <h2 className="text-2xl font-bold text-white lg:text-3x pb-4 custom-font">
        اكتشف لماذا تتميز هاي فايف للعقارات
        </h2>
      </div>
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:px-20 ">
          {/* Question 1 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
            لماذا تختار هاي فايف للعقارات؟
            </h2>
            <p className="text-gray-600">
            في هاي فايف للعقارات، نقدم فرص حصرية للمشروعات المستقبلية، محفظة عقارية متنوعة، وعقارات في مواقع مميزة. نحن موثوقون من قبل أبرز المطورين في الإمارات، مما يضمن أن استثمارك آمن ومربح.
            </p>
          </div>

          {/* Question 2 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
            ما هي فوائد الاستثمار في العقارات في الإمارات؟
            </h2>
            <p className="text-gray-600">
            يقدم الاستثمار في العقارات في الإمارات العديد من الفوائد، مثل العوائد الاستثمارية المعفاة من الضرائب، وسوق مزدهر ذو إمكانات عالية للنمو، وإمكانية تأمين الإقامة طويلة الأجل من خلال ملكية العقار.
            </p>
          </div>

          {/* Question 3 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
            ما نوع العقارات التي تقدمها هاي فايف للعقارات؟
            </h2>
            <p className="text-gray-600">
            تقدم هاي فايف للعقارات مجموعة واسعة من العقارات الفاخرة، بما في ذلك الشقق غير المكتملة، الفيلات، المنازل المتلاصقة، البنتهاوس، والقصور. نحن نحرص على أن يكون هناك ما يناسب كل أسلوب حياة وميزانية.
            </p>
          </div>

          {/* Question 4 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
            أين تقع هذه العقارات؟
            </h2>
            <p className="text-gray-600">
            نحن متخصصون في العقارات الواقعة في أكثر الأحياء طلباً في دبي، بما في ذلك وسط مدينة دبي، مرسى دبي، نخلة جميرا، الخليج التجاري، وغيرها. تتميز هذه المناطق بالمرافق الرائعة وتقع في مواقع استراتيجية متميزة.
            </p>
          </div>

          {/* Question 5 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
            لماذا نحن موثوقون من قبل المطورين الرائدين؟
            </h2>
            <p className="text-gray-600">
            تتعاون هاي فايف للعقارات مع المطورين الرائدين في الإمارات، مما يضمن لك الوصول إلى عقارات عالية الجودة تعد بعوائد ممتازة على الاستثمار. تم بناء سمعتنا القوية على الثقة والخبرة والشراكات الناجحة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
