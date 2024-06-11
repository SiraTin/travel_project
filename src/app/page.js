import Image from "next/image";
import Homepage from "./home/landing";
import Navbar from "./layouts/navbar";
import Secondsection from "./home/section-2";
import Thirdsection from "./home/section-3";
import Footer from "./layouts/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-white">
        <Homepage />
        <Secondsection/>
        <Thirdsection/>
      </main>
      <Footer/>
    </>
  );
}
