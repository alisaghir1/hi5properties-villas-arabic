import React from "react";
import Image from "next/image";
import { MdHolidayVillage } from "react-icons/md";
import { IoFlowerSharp } from "react-icons/io5";
import { MdEventSeat } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { GiFruitTree } from "react-icons/gi";
import { MdElectricCar } from "react-icons/md";
import { GiRoundTable } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { MdOutlineSportsCricket } from "react-icons/md";
import { MdSportsHockey } from "react-icons/md";
import { MdOutlineDeck } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { TbPool } from "react-icons/tb";
import { RiBikeFill } from "react-icons/ri";
import { FaPersonRunning } from "react-icons/fa6";
import { GiKidSlide } from "react-icons/gi";
import { GiTennisCourt } from "react-icons/gi";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { FaTableTennis } from "react-icons/fa";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GrLounge } from "react-icons/gr";
import { GiWaterPolo } from "react-icons/gi";
import { PiChairThin } from "react-icons/pi";
import section2 from "./assets/section5.jpeg";
import a1 from "./assets/amenities/a1.jpg";
import a2 from "./assets/amenities/a2.png";
import a3 from "./assets/amenities/a3.jpeg";
import a4 from "./assets/amenities/a4.png";
import a5 from "./assets/amenities/a5.png";
import a6 from "./assets/amenities/a6.jpg";

const FourthSection: React.FC = () => {
  return (
    <section className=" flex flex-col items-center justify-center gap-10 pb-20 bg-customBg">
      <div className="relative w-full h-screen">
        <Image
          src={section2}
          alt="section 2 pic"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center mx-2">
        <h2 className="text-2xl font-bold text-white lg:text-3xl pb-4 mt-10 custom-font">
        نوفر لك قيمة استثنائية
        </h2>
        <p className="max-w-screen-sm text-customText2 md:block mx-auto mb-10 custom-font2">
        من خلال الجمع بين الفخامة والجودة والقدرة على التحمل، مما يضمن لعملائنا الحصول على أفضل تجربة سكنية ممكنة لاستثماراتهم.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Image 1 */}
        <Image
          className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 h-[300px] sm:h-[400px] rounded-lg transition-transform transform hover:opacity-80"
          src={a1}
          alt="amenities pic 1"
        />
        {/* Image 2 */}
        <Image
          className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 h-[300px] sm:h-[400px] rounded-lg transition-transform transform hover:opacity-80"
          src={a2}
          alt="amenities pic 2"
        />
        {/* Image 3 */}
        <Image
          className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 h-[300px] sm:h-[400px] rounded-lg transition-transform transform hover:opacity-80"
          src={a3}
          alt="amenities pic 1"
        />
      </div>
      <div className="text-center mx-2 mt-10">
        <h2 className="text-2xl font-bold text-white lg:text-3x pb-4 custom-font">
        المجتمع والمرافق المتكاملة
        </h2>
        <p className="max-w-screen-sm text-customText2 md:block mx-auto custom-font2 ">
        نحن نؤمن بخلق مجتمعات حيوية ومترابطة حيث يمكن للأفراد الازدهار والاستمتاع بلحظاتهم والاستفادة من مجموعة من المرافق التي تعزز هذه الروابط.
        </p>
      </div>
      <div className="my-10 p-4 text-customText2 custom-font2">
  {/* Grid container */}
  <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20 lg:mx-20">
    {/* Icon 1 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <MdHolidayVillage className="fa fa-home text-7xl text-customText2" />
      <span>فيلا الضيوف</span> {/* GUEST VILLA */}
    </div>

    {/* Icon 2 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <IoFlowerSharp className="fa fa-home text-7xl text-customText2" />
      <span>حديقة خاصة</span> {/* PRIVATE GARDEN */}
    </div>

    {/* Icon 3 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <MdEventSeat className="fa fa-home text-7xl text-customText2" />
      <span>مقاعد غارقة</span> {/* SUNKEN SEATS */}
    </div>

    {/* Icon 4 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <GrYoga className="fa fa-home text-7xl text-customText2" />
      <span>مساحات اليوغا</span> {/* YOGA AREAS */}
    </div>

    {/* Icon 5 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <GiFruitTree className="fa fa-home text-7xl text-customText2" />
      <span>حديقة خضروات</span> {/* VEGETABLE GARDEN */}
    </div>

    {/* Icon 6 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <MdElectricCar className="fa fa-home text-7xl text-customText2" />
      <span>محطة شحن المركبات الكهربائية</span> {/* ELECTRIC VEHICLE RECHARGE STATION */}
    </div>

    {/* Icon 7 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <GiRoundTable className="fa fa-home text-7xl text-customText2" />
      <span>مساحة عمل مشتركة</span> {/* CO-WORKING SPACE */}
    </div>

    {/* Icon 8 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <TbMeat className="fa fa-home text-7xl text-customText2" />
      <span>منطقة للشواء 4X</span> {/* 4X BBQ AREA */}
    </div>

    {/* Icon 9 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <MdOutlineSportsCricket className="fa fa-home text-7xl text-customText2" />
      <span>ملعب كريكيت</span> {/* CRICKET PITCH */}
    </div>

    {/* Icon 10 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <MdSportsHockey className="fa fa-home text-7xl text-customText2" />
      <span>منطقة كروسفيت</span> {/* CROSSFIT AREA */}
    </div>

    {/* Icon 11 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <MdOutlineDeck className="fa fa-home text-7xl text-customText2" />
      <span>منطقة التشمس</span> {/* DECKING AREA */}
    </div>

    {/* Icon 12 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <CgGym className="fa fa-home text-7xl text-customText2" />
      <span>صالة رياضية داخلية</span> {/* INDOOR GYM */}
    </div>

    {/* Icon 13 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <RiBikeFill className="fa fa-home text-7xl text-customText2" />
      <span>دراجات مائية</span> {/* AQUA BIKE */}
    </div>

    {/* Icon 14 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <TbPool className="fa fa-home text-7xl text-customText2" />
      <span>جاكوزي</span> {/* JACUZZI */}
    </div>

    {/* Icon 15 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <FaPersonRunning className="fa fa-home text-7xl text-customText2" />
      <span>مسار للجري</span> {/* JOGGING TRACK */}
    </div>

    {/* Icon 16 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <GiKidSlide className="fa fa-home text-7xl text-customText2" />
      <span>منطقة لعب للأطفال</span> {/* KIDS PLAY AREA */}
    </div>

    {/* Icon 17 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <GiTennisCourt className="fa fa-home text-7xl text-customText2" />
      <span>ملعب متعدد الأغراض</span> {/* MULTIPURPOSE COURT */}
    </div>

    {/* Icon 18 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <PiProjectorScreenChartLight className="fa fa-home text-7xl text-customText2" />
      <span>سينما على السطح</span> {/* ROOFTOP CINEMA */}
    </div>

    {/* Icon 19 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <GiWeightLiftingUp className="fa fa-home text-7xl text-customText2" />
      <span >  صالة رياضية خارجية  </span> {/* OUTDOOR GYM */}
    </div>

    {/* Icon 20 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <MdOutlinePool className="fa fa-home text-7xl text-customText2" />
      <span>مسبح </span> {/* SWIMMING POOL */}
    </div>

    {/* Icon 21 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <FaTableTennis className="fa fa-home text-7xl text-customText2" />
      <span>بيكل بول</span> {/* PICKLE BALL */}
    </div>

    {/* Icon 22 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <MdOutlineLocalLaundryService className="fa fa-home text-7xl text-customText2" />
      <span>خدمة غسيل عالية الجودة</span> {/* HIGH-END LAUNDRY SERVICE */}
    </div>

    {/* Icon 23 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <GrLounge className="fa fa-home text-7xl text-customText2" />
      <span>منطقة استراحة</span> {/* LOUNGE SEATING */}
    </div>

    {/* Icon 24 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <GiWaterPolo className="fa fa-home text-7xl text-customText2" />
      <span>مسبح رياضي</span> {/* EXERCISE POOL */}
    </div>

    {/* Icon 25 */}
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <PiChairThin className="fa fa-home text-7xl text-customText2" />
      <span>منطقة جلوس</span> {/* SITTING AREA */}
    </div>
  </div>

        <div className="grid lg:grid-cols-2 gap-3 lg:mx-20 lg:px-20 md:mx-10 md:px-10 pt-20">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <figure className="relative w-full h-60">
              <Image
                className="w-full h-full absolute top-0 start-0 object-cover rounded-xl transform transition-all duration-300 hover:opacity-80"
                src={a4}
                alt="Image Description"
              />
            </figure>
            <figure className="relative w-full h-60">
              <Image
                className="w-full h-full absolute top-0 start-0 object-cover rounded-xl transform transition-all duration-300 hover:opacity-80"
                src={a5}
                alt="Image Description"
              />
            </figure>
          </div>
          <figure className="relative w-full h-72 sm:h-96 lg:h-full">
            <Image
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl transform transition-all duration-300 hover:opacity-80"
              src={a6}
              alt="Image Description"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
