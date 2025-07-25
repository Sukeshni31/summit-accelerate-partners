const Expertise = () => {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "Enterprise", label: "Partnerships" },
    { value: "Lufthansa", label: "Key Partnership" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  const expertise = [
    "Lufthansa Partnership",
    "The AI School Collaboration",
    "Aviation & Travel Industry",
    "Technology & Innovation",
    "Executive Search",
    "AI Training & Development"
  ];

  return (
    <section id="expertise" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Partnerships & Expertise
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Built on strong relationships and strategic partnerships, we deliver exceptional 
              human capital solutions with our trusted network including Lufthansa and The AI School.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-semibold mb-6 text-accent">
              Key Partnerships & Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-primary-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;