

const BlogInsights = () => (
  <section className="bg-[#FBF3A0] py-12 px-6">
    <h2 className="text-3xl font-bold text-center mb-8 text-[#0D1E6E]" data-aos="fade-left">Blog / Insights</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      {[
        { title: "5 Mindfulness Practices", img: "thumb1.jpg" },
        { title: "A Journey to Wholeness", img: "thumb2.jpg" },
        { title: "Exploring the Seychelles", img: "thumb3.jpg" },
      ].map((post, idx) => (
        <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
          <img src={post.img} alt="" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{post.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BlogInsights;
