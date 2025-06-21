import { Card, CardContent } from "./ui/card";

const BlogInsights = () => (
  <section className="bg-[#FBF3A0] py-12 px-6 overflow-x-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 text-[#0D1E6E]" data-aos="fade-up">
      Blog / Insights
    </h2>
    <div
      className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      {[
        {
          title: "5 Mindfulness Practices",
          img: "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "A Journey to Wholeness",
          img: "https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "Exploring the Seychelles",
          img: "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ].map((post) => (
        <Card
          key={post.title}
          className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl"
          data-aos="zoom-in"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={post.img}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <CardContent className="p-6 bg-amber-50">
            <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default BlogInsights;
