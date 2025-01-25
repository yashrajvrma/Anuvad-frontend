// import Link from "next/link";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/language/selection");
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-3xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <div className="px-4 py-1 text-neutral-900">Anuvaad</div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {/* <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              More
            </Link> */}
          </div>
          <Button
            onClick={() => handleNavigate()}
            variant="outline"
            size="md"
            className="hidden md:inline-flex px-5 py-2"
          >
            Try Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
