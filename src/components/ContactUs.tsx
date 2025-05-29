
const ContactUs = () => (
  <section className="py-12 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">Contact Us</h2>
    <p className="text-center mb-6" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">Email: info@edenoceans.com | Instagram | Facebook | WhatsApp</p>
    <form className="max-w-xl mx-auto grid gap-4" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <input type="text" placeholder="Name" className="border p-3 rounded" />
      <input type="email" placeholder="Email" className="border p-3 rounded" />
      <input type="text" placeholder="Subject" className="border p-3 rounded" />
      <textarea placeholder="Message" className="border p-3 rounded h-28" />
      <button type="submit" className="bg-[#C8A86E] text-white py-3 rounded">Send Message</button>
    </form>
  </section>
);

export default ContactUs;
