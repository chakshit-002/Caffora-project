import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestSeller() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [navReady, setNavReady] = useState(false);

  const products = [
    {
      id: 1,
      title: "1829 Espresso.",
      desc: "Our seasonal espresso blend, sourced, roasted, and brewed for an exceptional milk-based experience.",
      price: "£12.00",
      btn: "BUY NOW",
    },
    {
      id: 2,
      title: "Roaster’s Spotlight",
      desc: "Explore the best of our single origin roasts; each delivery is hand-picked by our Roastery team.",
      price: "£13.50",
      btn: "SUBSCRIBE NOW",
    },
    {
      id: 3,
      title: "Galeras Decaf.",
      desc: "Clean, sweet and complex. Smooth milk chocolate and clear orange acidity for discerning coffee lovers.",
      price: "£12.00",
      btn: "BUY NOW",
    },
    {
      id: 4,
      title: "Rituals Subscription.",
      desc: "Smooth, everyday coffee. Rituals, on subscription.designed to make every day taste better.",
      price: "£12.00",
      btn: "BUY NOW",
    },
  ];

  // When buttons mount and refs are set, notify swiper
  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="bg-[#FAF4EB] py-12 px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-black mb-2">Subscribe today.</h2>
          <p className="text-gray-700 max-w-md">
            WatchHouse. YourHouse. The Modern Coffee experience in the comfort of your own home.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={
            navReady
              ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
              : false
          }
          onBeforeInit={(swiper) => {
            if (navReady) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#DCC4A6] rounded-2xl p-6 flex flex-col h-full shadow-md">
                <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
                  {/* Placeholder for product image */}
                  <span className="text-gray-500">Product Image</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{item.desc}</p>
                <p className="text-black font-bold mb-4">{item.price}</p>
                <ul className="text-sm text-gray-800 mb-6 space-y-1">
                  <li>✓ Free UK shipping</li>
                  <li>✓ Always 10% off</li>
                  <li>✓ Pause, skip or cancel anytime</li>
                </ul>
                <button className="mt-auto bg-white text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition">
                  {item.btn}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrows */}
        <button
          ref={prevRef}
          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white absolute top-1/2 left-2 sm:-left-5 transform -translate-y-1/2 hover:bg-gray-800 transition z-10"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          ref={nextRef}
          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white absolute top-1/2 right-2 sm:-right-5 transform -translate-y-1/2 hover:bg-gray-800 transition z-10"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
