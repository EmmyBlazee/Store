import {BookOpen, Users, Award} from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative z-10 px-6 py-16 lg:px-12 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Empowering Africa's Future Through Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Techxagon Academy is pioneering the future of education in Africa by
            developing cutting-edge Fourth Industrial Revolution (4IR)
            curriculum designed specifically for secondary school students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-card p-8 rounded-3xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Innovative Curriculum
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our 4IR curriculum integrates AI, robotics, coding, and digital
              literacy to prepare students for the jobs of tomorrow.
            </p>
          </div>

          <div className="group bg-card p-8 rounded-3xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Expert Educators
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced educators and industry professionals bring
              real-world expertise to the classroom.
            </p>
          </div>

          <div className="group bg-card p-8 rounded-3xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Proven Results
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Students who complete our programs show significant improvement in
              critical thinking, problem-solving, and technical skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
