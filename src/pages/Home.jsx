import { useNavigate } from "react-router-dom";
import BrowserMockup from "../components/browserMockup";
import Navbar from "../components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/language/selection");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="relative">
        <div className="mx-auto max-w-4xl px-4 pt-32 pb-16 mt-10">
          <div className="text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="w-8 h-8 bg-black rotate-45" />
            </div>

            <div className="text-5xl font-bold tracking-tighter text-gray-900 md:text-7xl pb-2">
              Real-Time Language{" "}
            </div>
            <div className="text-5xl font-bold tracking-tighter text-gray-900 md:text-7xl">
              <span className="relative inline-block">
                <span className="relative z-10">Translation</span>
                <span
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-purple-400/70 -rotate-1"
                  aria-hidden="true"
                />
              </span>{" "}
              with AI
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-600">
              Instantly speak and understand any language, breaking down
              communication barriers effortlessly.
              {/* <span className="font-semibold">50%</span> */}
            </p>

            <Button
              className="mt-8 rounded-full bg-black text-md text-white hover:bg-gray-900 px-8"
              size="lg"
              onClick={() => handleNavigate()}
            >
              Get Started
            </Button>
          </div>

          {/* <BrowserMockup /> */}
          <div className="flex flex-row gap-8 justify-center items-center mt-20">
            <img
              className="w-48 rotate-[-0.349066rad] pt-24"
              src="/assets/images/1.png"
              alt="letter-svg"
            />
            <img className="w-48" src="/assets/images/2.png" alt="1-svg" />
            <img
              className="w-48 pt-24 rotate-[0.349066rad]"
              src="/assets/images/3.png"
              alt="2-svg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
