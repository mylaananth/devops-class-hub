import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ChevronDown, Clock, MapPin, Users, Calendar,
  BookOpen, Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const curriculum = [
  {
    week: "Week 1-2",
    title: "Linux & Networking Fundamentals",
    topics: ["Linux CLI & Shell Scripting", "Networking basics (TCP/IP, DNS, HTTP)", "SSH & server management", "File systems & permissions"],
  },
  {
    week: "Week 3-4",
    title: "Version Control & Git",
    topics: ["Git fundamentals & branching strategies", "GitHub/GitLab workflows", "Pull requests & code reviews", "Git hooks & automation"],
  },
  {
    week: "Week 5-6",
    title: "Docker & Containerization",
    topics: ["Docker architecture & images", "Dockerfile best practices", "Docker Compose", "Container networking & volumes"],
  },
  {
    week: "Week 7-8",
    title: "CI/CD Pipelines",
    topics: ["Jenkins setup & pipeline creation", "GitHub Actions", "Automated testing in pipelines", "Artifact management"],
  },
  {
    week: "Week 9-10",
    title: "Kubernetes & Orchestration",
    topics: ["K8s architecture & components", "Pods, Services, Deployments", "Helm charts", "Scaling & load balancing"],
  },
  {
    week: "Week 11-12",
    title: "Cloud & Monitoring",
    topics: ["AWS fundamentals (EC2, S3, IAM)", "Infrastructure as Code with Terraform", "Prometheus & Grafana", "Log management & alerting"],
  },
];

const faqs = [
  {
    q: "Who can enroll in this program?",
    a: "Any student from KEC (all years and departments) with basic programming knowledge can enroll. No prior DevOps experience is required.",
  },
  {
    q: "Is this program online or offline?",
    a: "The program is conducted in hybrid mode — with in-person sessions at KEC campus and online resources available through GUVI's platform.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes! Upon successful completion, you'll receive a joint certificate from KEC and GUVI, recognized by industry partners.",
  },
  {
    q: "What are the prerequisites?",
    a: "Basic understanding of programming (any language), familiarity with using a computer terminal, and a laptop with internet connectivity.",
  },
  {
    q: "Is there a fee for the program?",
    a: "The program is offered at a subsidized rate for KEC students. Contact the coordinators for exact fee details and scholarship options.",
  },
  {
    q: "What tools will we use?",
    a: "Git, Docker, Jenkins, Kubernetes, AWS, Terraform, Prometheus, Grafana, and more — all industry-standard tools.",
  },
];

const Curriculum = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#register") {
      setTimeout(() => {
        document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted! We'll contact you soon.", {
      description: "Check your email for confirmation details.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gradient">Curriculum</span> & Registration
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            12 weeks of intensive, hands-on DevOps training with industry-grade tools and real-world projects.
          </motion.p>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Course <span className="text-gradient">Syllabus</span>
          </motion.h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {curriculum.map((module, i) => (
              <motion.div
                key={module.week}
                className={`relative flex items-start mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 glow-green z-10" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-mono-heading text-xs text-primary mb-3">
                      {module.week}
                    </span>
                    <h3 className="font-mono-heading text-lg font-semibold mb-3">{module.title}</h3>
                    <ul className="space-y-1.5">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Details */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Class <span className="text-gradient">Details</span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              { icon: Calendar, label: "Duration", value: "12 Weeks" },
              { icon: Clock, label: "Schedule", value: "Weekends, 10AM - 1PM" },
              { icon: MapPin, label: "Mode", value: "Hybrid (Online + Offline)" },
              { icon: Users, label: "Batch Size", value: "60 Students Max" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="rounded-xl border border-border bg-background p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-mono-heading text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-gradient">Register</span> Now
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Secure your seat in the next batch. Limited spots available!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-8">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required className="mt-1.5 bg-background" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required className="mt-1.5 bg-background" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="mt-1.5 bg-background" />
              </div>
              <div>
                <Label>College Year</Label>
                <Select required>
                  <SelectTrigger className="mt-1.5 bg-background">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dept">Department</Label>
                <Input id="dept" placeholder="e.g. Computer Science" required className="mt-1.5 bg-background" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:glow-green">
                <Send className="mr-2 h-4 w-4" />
                Submit Registration
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>

          <motion.div
            className="mx-auto max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-background px-6"
                >
                  <AccordionTrigger className="font-mono-heading text-sm hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Curriculum;
