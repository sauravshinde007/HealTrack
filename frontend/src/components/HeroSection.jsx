import { Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { AnimatedGroup } from "./ui/AnimatedGroup";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 text-center mt-20">
      <AnimatedGroup
        variants={{
          item: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          },
        }}
      >
        <h1 className="text-4xl md:text-6xl font-semibold">
          Book Doctor Appointments Easily
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          HealTrack helps patients book appointments, pay securely,
          and manage healthcare efficiently.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>
            <Link to="/login">Get Started</Link>
          </Button>

          <Button variant="outline">
            <Link to="/doctors">Find Doctors</Link>
          </Button>
        </div>

        
      </AnimatedGroup>
    </section>
  );
}
