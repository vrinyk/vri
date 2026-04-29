import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <div className="fixed top-24 left-6 z-[60]">
      <Link
        to="/"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e0d5] bg-[#fbfaf7] shadow-sm transition-colors hover:bg-[#eee8dd]"
        aria-label="Back to portfolio"
      >
        <ArrowLeft className="h-5 w-5 text-[#1f232d]" />
      </Link>
    </div>
  );
}
