

const JoinUs = () => (
  <section className="bg-[#FBF3A0] py-12 px-6">
    <h2 className="text-3xl font-semibold text-center mb-4 text-[#0D1E6E]" data-aos="fade-down-left">Join Us</h2>
    <p className="text-center max-w-xl mx-auto mb-8 text-[#a3957c]" data-aos="zoom-out-right">
    Ready to embark on your wellness journey? Apply to join EdenOceans today and
step into a world of luxury, healing, and connection in destinations like Fiji, Barbados, and
beyond. Start by sharing a bit about yourself through our application process.
    </p>
    <form className="max-w-xl mx-auto grid gap-4 bg-white p-6 rounded-xl shadow-md" data-aos="fade-up">
      <input type="text" placeholder="Name" className="border p-3 rounded" />
      <input type="email" placeholder="Email" className="border p-3 rounded" />
      <input type="tel" placeholder="Phone" className="border p-3 rounded" />
      <select className="border p-3 rounded">
        <option value="">Preferred Membership Tier</option>
        <option value="premium">Premium</option>
        <option value="elite">Elite</option>
      </select>
      <textarea placeholder="Tell us about your goals..." className="border p-3 rounded h-28" />
      <button type="submit" className="bg-[#C8A86E] text-[#0D1E6E] text-gold-400 py-3 rounded font-semibold hover:opacity-90">
        Submit Application
      </button>
    </form>
  </section>
);

export default JoinUs;
