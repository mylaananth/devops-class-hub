import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GitBranch, Container, Cloud, Activity, Terminal,
  Workflow, Server, Shield, Users, Award, TrendingUp, BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const highlights = [
  { icon: GitBranch, title: "CI/CD Pipelines", desc: "Build automated delivery pipelines with Jenkins & GitHub Actions" },
  { icon: Container, title: "Docker & Containers", desc: "Master containerization for consistent deployments" },
  { icon: Cloud, title: "Kubernetes", desc: "Orchestrate containers at scale with K8s" },
  { icon: Server, title: "Cloud Deployment", desc: "Deploy on AWS, Azure & GCP like a pro" },
  { icon: Activity, title: "Monitoring", desc: "Prometheus, Grafana & real-time observability" },
  { icon: Shield, title: "DevSecOps", desc: "Integrate security into your DevOps workflow" },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "95%", label: "Placement Rate" },
  { value: "50+", label: "Industry Projects" },
  { value: "4.8★", label: "Student Rating" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid-pattern overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono-heading text-xs text-muted-foreground">KEC × GUVI Collaboration</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Master{" "}
            <span className="text-gradient">DevOps</span>
            <br />
            for the Modern Industry
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            An industry-focused DevOps program by Kongu Engineering College in collaboration with GUVI. 
            Learn CI/CD, Docker, Kubernetes, Cloud & more from industry experts.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/curriculum#register"
              className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:glow-green hover:scale-105"
            >
              Register Now →
            </Link>
            <Link
              to="/curriculum"
              className="rounded-lg border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Explore Curriculum
            </Link>
          </motion.div>

          {/* Terminal snippet */}
          <motion.div
            className="mx-auto mt-16 max-w-lg rounded-lg border border-border bg-card p-4 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex gap-1.5 mb-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-secondary/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
            </div>
            <code className="font-mono-heading text-sm text-muted-foreground">
              <span className="text-primary">$</span> docker run -d --name devops-career \<br />
              <span className="text-muted-foreground pl-4">-e SKILLS="ci-cd,k8s,aws" \</span><br />
              <span className="text-muted-foreground pl-4">-p 8080:future \</span><br />
              <span className="text-muted-foreground pl-4">kec-guvi/devops-program:latest</span><br />
              <span className="text-terminal-green">✓ Container started successfully</span>
            </code>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll <span className="text-gradient">Learn</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Industry-relevant DevOps skills that companies are actively hiring for.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:glow-green"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-mono-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DevOps */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-gradient">DevOps</span>?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, text: "DevOps engineers earn ₹8-25 LPA on average in India" },
                  { icon: Users, text: "85% of companies are adopting DevOps practices" },
                  { icon: Award, text: "One of the fastest growing tech roles globally" },
                  { icon: BookOpen, text: "Bridges the gap between development and operations" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    variants={fadeUp}
                    custom={i + 1}
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-xl border border-border bg-background p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <Workflow className="h-8 w-8 text-secondary mb-4" />
              <h3 className="font-mono-heading text-xl font-semibold mb-3">The DevOps Lifecycle</h3>
              <div className="flex flex-wrap gap-2">
                {["Plan", "Code", "Build", "Test", "Release", "Deploy", "Operate", "Monitor"].map((step, i) => (
                  <span
                    key={step}
                    className="rounded-full border border-border bg-muted px-3 py-1 font-mono-heading text-xs text-muted-foreground"
                  >
                    {step}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-card p-4">
                <code className="font-mono-heading text-xs text-primary">
                  {">"} Continuous Integration → Continuous Delivery → Continuous Deployment
                </code>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Collaboration */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Powerful <span className="text-gradient">Collaboration</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              Kongu Engineering College partners with GUVI to bring industry-standard DevOps education directly to students, 
              combining academic excellence with real-world tech training.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            <motion.div
              className="rounded-xl border border-border bg-card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <Terminal className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-mono-heading text-xl font-bold mb-2">KEC</h3>
              <p className="text-sm text-muted-foreground">
                Kongu Engineering College — a premier institution with decades of academic excellence, 
                providing the infrastructure and student community.
              </p>
            </motion.div>

            <motion.div
              className="rounded-xl border border-border bg-card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <Cloud className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="font-mono-heading text-xl font-bold mb-2">GUVI</h3>
              <p className="text-sm text-muted-foreground">
                GUVI — an IIT-M incubated edtech platform powering vernacular tech education, 
                bringing industry-relevant curriculum and expert mentors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <p className="font-mono-heading text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="mx-auto max-w-2xl rounded-2xl border border-primary/30 bg-card p-12 glow-green"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-gradient">DevOps Journey</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Limited seats available. Register now and transform your career.
            </p>
            <Link
              to="/curriculum#register"
              className="inline-block rounded-lg bg-primary px-10 py-4 font-semibold text-primary-foreground transition-all hover:scale-105"
            >
              Register Now →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
