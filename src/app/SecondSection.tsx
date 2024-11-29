import React from "react";
import Image from "next/image";
import section1 from "./assets/section1.jpeg";

const SecondSection: React.FC = () => {
  return (
    <section className="bg-customBg flex flex-col items-center justify-center gap-10 pb-20 pt-20">
      <div className="text-center mx-2">
        <h2 className="text-2xl font-bold text-white lg:text-3xl pb-4 custom-font">
        عقارات حصرية تحت الإنشاء في دبي
        </h2>

        <p className="max-w-screen-sm text-customText2 md:block mx-auto custom-font2">
        في هاي فايف للعقارات، نحن متخصصون في تقديم مجموعة واسعة من الحلول العقارية الحصرية تحت الإنشاء في دبي والإمارات العربية المتحدة. من الشقق الفاخرة والتاون هاوس إلى الفيلات الفاخرة والبنتهاوس، تم تصميم محفظتنا لتلبية احتياجات المشترين المميزين. مع التركيز على الجودة والابتكار وخدمة العملاء الاستثنائية، نحن نوفر فرصًا لا مثيل لها لأولئك الذين يتطلعون للاستثمار في واحدة من أكثر أسواق العقارات ديناميكية في العالم. سواء كنت تبحث عن منزل جديد أو استثمار مربح، تضمن هاي فايف للعقارات أن تكون كل خطوة في رحلتك سلسة ومجزية. اتصل بنا اليوم لاستكشاف عقارك المثالي وتجربة الأفضل في سوق العقارات في دبي!
        </p>
      </div>  
      <Image
        className="w-full xl:w-5/6 rounded-none xl:rounded-2xl object-cover"
        src={section1}
        alt="second section image"
      />
    </section>
  );
};

export default SecondSection;
