import Image from 'next/image'
import MySection from "./components/MySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <MySection />
    </main>
  );
}
