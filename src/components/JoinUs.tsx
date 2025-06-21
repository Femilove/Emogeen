const JoinUs = () => (
  <section className="bg-[#FBF3A0] py-12 px-6 overflow-x-hidden">
    <h2
      className="text-3xl font-semibold text-center mb-4 text-[#0D1E6E]"
      data-aos="fade-down-left"
    >
      Join Us
    </h2>
    <p
      className="text-center max-w-xl mx-auto mb-8 text-[#a3957c]"
      data-aos="zoom-out-right"
    >
      Ready to embark on your wellness journey? Apply to join EdenOceans today and
      step into a world of luxury, healing, and connection in destinations like Fiji,
      Barbados, and beyond. Start by sharing a bit about yourself through our
      application process.
    </p>

    <form
      className="max-w-xl mx-auto grid gap-4 bg-white p-6 rounded-xl shadow-md"
      data-aos="fade-up"
    >
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0D1E6E]"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0D1E6E]"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Phone"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0D1E6E]"
        />
      </div>

      <div>
        <label htmlFor="membership" className="sr-only">
          Preferred Membership Tier
        </label>
        <select
          id="membership"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#0D1E6E]"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Preferred Membership Tier
          </option>
          <option value="premium">Premium</option>
          <option value="elite">Elite</option>
        </select>
      </div>

      <div>
        <label htmlFor="goals" className="sr-only">
          Tell us about your goals
        </label>
        <textarea
          id="goals"
          placeholder="Tell us about your goals..."
          className="w-full border p-3 rounded h-28 focus:outline-none focus:ring-2 focus:ring-[#0D1E6E]"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-[#C8A86E] text-[#0D1E6E] py-3 rounded font-semibold hover:opacity-90 transition"
      >
        Submit Application
      </button>
    </form>
  </section>
)

export default JoinUs
