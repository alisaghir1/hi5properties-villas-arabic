import React from "react";
import Image from "next/image";
import section1 from "./assets/section2.jpg";

const SecondSection: React.FC = () => {
  return (
    <section className="bg-customBg flex flex-col items-center justify-center gap-10 pb-20 pt-20">
      <div className="text-center mx-2">
        <h2 className="text-2xl font-bold text-white lg:text-3xl pb-4 custom-font">
        فلل حصرية قيد الإنشاء في دبي
        </h2>

        <p className="max-w-screen-sm text-customText2 md:block mx-auto custom-font2">
        في Hi5 Villas، نتخصص في تقديم مجموعة واسعة من حلول العقارات الفاخرة للفلل قيد الإنشاء عبر دبي ودولة الإمارات العربية المتحدة. من الفلل الفاخرة المستقلة والمنازل الريفية إلى البنتهاوس الفاخرة، تم تصميم مجموعتنا لتلبية احتياجات المشترين المميزين والمتنوعين. مع التركيز على الجودة والابتكار وخدمة العملاء الاستثنائية، نوفر فرصًا لا تضاهى لأولئك الذين يتطلعون للاستثمار في أحد أكثر أسواق العقارات ديناميكية في العالم. سواء كنت تبحث عن منزل جديد أو استثمار مربح، تضمن Hi5 Villas أن تكون كل خطوة في رحلتك سلسة ومجزية. تواصل معنا اليوم لاستكشاف فيلا أحلامك وتجربة الأفضل في عقارات الفلل في دبي!
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
