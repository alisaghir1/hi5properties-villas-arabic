import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section className="pb-40 bg-customText2 font-mono">
      <div className="text-center px-2 mb-20 bg-customBg py-20">
        <h2 className="text-2xl font-bold text-white lg:text-3x pb-4 custom-font">
          لماذا تختار فيلات هاي فايف؟
        </h2>
      </div>
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:px-20">
          {/* السؤال 1 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              لماذا تختار فيلات هاي فايف؟
            </h2>
            <p className="text-gray-600">
              في فيلات هاي فايف، نحن متخصصون في تقديم مجموعة مختارة من الفيلات الفاخرة والمنازل التاون هاوس في أكثر المواقع المرموقة في دبي. يشمل محفظتنا فيلات حصرية على المخطط مع جودة وتصميم استثنائيين وقيمة لا مثيل لها، مما يضمن لك تجربة استثمار سلسة.
            </p>
          </div>

          {/* السؤال 2 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              ما هي فوائد الاستثمار في فيلات دبي؟
            </h2>
            <p className="text-gray-600">
              الاستثمار في الفيلات في دبي يوفر فوائد لا تضاهى. استمتع بإمكانية التقدير القوي للعقار، والعوائد المعفاة من الضرائب، وسمعة امتلاك عقار في واحدة من أكثر أسواق العقارات ديناميكية في العالم. كما أن الفيلات لدينا توفر إمكانية الحصول على الإقامة، مما يضيف قيمة طويلة الأمد لاستثمارك.
            </p>
          </div>

          {/* السؤال 3 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              ما نوع الفيلات التي تقدمها فيلات هاي فايف؟
            </h2>
            <p className="text-gray-600">
              تقدم فيلات هاي فايف مجموعة حصرية من الفيلات الفاخرة، المنازل التاون هاوس، والعقارات على المخطط. تم تصميم فيلاتنا للمشترين المميزين الذين يبحثون عن تصاميم فسيحة، تشطيبات رائعة، وسائل راحة خاصة، وإطلالات لا مثيل لها. سواء كنت تبحث عن فيلا معاصرة حديثة أو منزل بأسلوب عربي تقليدي، لدينا شيء يناسب كل ذوق ونمط حياة.
            </p>
          </div>

          {/* السؤال 4 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              أين تقع هذه الفيلات؟
            </h2>
            <p className="text-gray-600">
              تقع فيلاتنا في أرقى الأحياء في دبي، بما في ذلك نخلة جميرا، وسط دبي، دبي هيلز استيت، واديه العربي، والمزيد. هذه المواقع مشهورة بإطلالاتها الخلابة، ووسائل الراحة الفاخرة، والوصول المريح إلى كل ما تقدمه دبي.
            </p>
          </div>

          {/* السؤال 5 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              لماذا نثق بنا من قبل كبار المطورين؟
            </h2>
            <p className="text-gray-600">
              لقد كسبت فيلات هاي فايف ثقة كبار المطورين في الإمارات بفضل التزامنا بتقديم الجودة، والتميز، والقيمة. علاقاتنا الطويلة مع أفضل المطورين تمكننا من تقديم فيلات وعقارات حصرية على المخطط، مما يضمن لعملائنا أفضل فرص الاستثمار في السوق.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
