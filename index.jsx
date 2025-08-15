import { useState } from "react";
import { X } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Top bar */}
      <div className="flex justify-between items-center p-4">
        <a href="/" className="flex items-center gap-1">
          <img
            src="/train-sim-world-5-logo.png"
            alt="Train Sim World 5"
            className="h-6"
          />
        </a>
        <button onClick={() => setIsOpen(true)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 p-6">
          <div className="flex justify-between items-start">
            <img
              src="/train-sim-world-5-logo.png"
              alt="Train Sim World 5"
              className="h-6 mt-1"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-6 space-y-4 text-lg font-semibold">
            <a href="#" className="block border-b border-gray-700 pb-2">
              HOME
            </a>
            <a href="#" className="block border-b border-gray-700 pb-2">
              DLC
            </a>
            <a href="#" className="block border-b border-gray-700 pb-2">
              FAQ
            </a>
          </nav>

          <button className="mt-8 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded">
            BUY NOW
          </button>
        </div>
      )}
    </div>
  );
}