import React from "react";
import Image from "next/image";
import bedroom1 from "./assets/oneBedroom.jpg";
import bedroom2 from "./assets/twoBed.jpg";
import bedroom3 from "./assets/threeBed.jpg";
import bedroom4 from "./assets//fourPlus.jpg";

const FirstSection: React.FC = () => {
  return (
    <section className="bg-customBg h-full pt-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-white lg:text-3x custom-font">
              اكتشف فللنا
            </h2>

            <p className="hidden max-w-screen-sm text-customText2 md:block custom-font">
              استكشف مجموعتنا المختارة من الفلل الفاخرة عبر فئات مختلفة. سواء
              كنت تبحث عن ملاذ مريح أو عقار واسع، لدينا الفيلا المثالية التي
              تناسب كل أسلوب حياة.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80">
            <Image
              src={bedroom1}
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg custom-font2">
              فيلا بغرفة نوم واحدة
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              src={bedroom2}
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg custom-font2">
              فيلا بغرفتي نوم
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              src={bedroom3}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg custom-font2">
              فيلا بثلاث غرف نوم
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image
              src={bedroom4}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg custom-font2">
            فيلا بأربع غرف نوم أو أكثر
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
