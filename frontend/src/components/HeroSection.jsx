import { Button } from "./ui/Button";
import { AnimatedGroup } from "./ui/AnimatedGroup";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 text-center mt-20 px-4">
      <AnimatedGroup
        variants={{
          item: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          },
        }}
        className="max-w-5xl mx-auto"
      >
        {/* Modern Gradient Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-dark leading-[1.1]">
          Smarter Healthcare <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-brand">
            One Click
          </span> At A Time
        </h1>

        {/* Enhanced Subtext */}
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-light leading-relaxed">
          HealTrack simplifies clinical workflows. Book appointments, 
          manage schedules, and pay securely—all in one high-performance platform. 
        </p>

        {/* Revamped CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">
          <Button className="h-14 px-10 rounded-2xl bg-gradient-brand text-white font-bold text-lg shadow-xl shadow-indigo-200 hover:scale-105 transition-all duration-300">
            <Link to="/login">Get Started Free</Link>
          </Button>

          <Button variant="outline" className="h-14 px-10 rounded-2xl border-2 border-indigo-100 text-primary font-bold text-lg hover:bg-indigo-50 transition-all duration-300">
            <Link to="/doctors">Find Your Doctor</Link>
          </Button>
        </div>

        {/* Optional: Floating Stats or Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <p className="text-sm font-medium">100+ Verified Doctors</p>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <p className="text-sm font-medium">Secure Payments</p>
            </div>
        </div>
      </AnimatedGroup>
    </section>
  );
}