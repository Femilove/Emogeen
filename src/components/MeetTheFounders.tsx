const MeetTheFounders = () => (
  <section className="bg-[#FBF3A0] py-12 px-6 overflow-x-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 text-[#0D1E6E]" data-aos="fade-down-left">
      Meet the Founders
    </h2>
    <p className="max-w-3xl mx-auto text-center mb-8 text-[#0D1E6E]" data-aos="fade-down-right">
      EdenOceans was born from a shared vision to redefine luxury wellness. Meet the founders who are dedicated to guiding you on a transformative journey of intentional living, travel, and excellence.
    </p>

    <div
      className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      {/* Founder 1 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
        <img
          src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Alexandra"
          loading="lazy"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h3 className="text-xl font-bold mt-4">Alexandra Bennett</h3>
        <p className="text-sm">Co-Founder & Wellness Visionary</p>
        <p className="mt-4 text-gray-700 text-sm">
          With over 15 years in holistic wellness, Alexandra has curated transformative experiences for individuals worldwide. Her passion for intentional living inspired EdenOceans’ mission to make wellbeing an essential part of every lifestyle.
        </p>
      </div>

      {/* Founder 2 */}
      <div
        className="bg-gray-50 p-6 rounded-lg shadow text-center"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Michael"
          loading="lazy"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h3 className="text-xl font-bold mt-4">Michael Torres</h3>
        <p className="text-sm">Co-Founder & Travel Innovator</p>
        <p className="mt-4 text-gray-700 text-sm">
          Michael’s expertise in luxury travel and hospitality has shaped EdenOceans’ transformational travel experiences, including ocean and riverboat cruises. He believes travel should elevate the soul, and he’s committed to designing journeys that inspire renewal in destinations like Bali and the Seychelles.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold text-center mb-8 mt-8 text-[#0D1E6E]" data-aos="zoom-in-up">
      Founders’ Message
    </h2>
    <p className="max-w-3xl mx-auto text-center mb-8 text-[#0D1E6E]" data-aos="zoom-in-up">
      “We founded EdenOceans to create a sanctuary where high-achieving individuals can reset and reconnect. Our wellness retreats in destinations like Barbados and Phuket are designed to heal, elevate, and inspire — because you deserve a life of vitality and joy.” — Alexandra & Michael
    </p>
  </section>
);

export default MeetTheFounders;
