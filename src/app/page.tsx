import Header from "@/components/Header";
import Stops from "@/components/Stops";
import Stop1 from "@/components/Stop1"
import Stop2 from "@/components/Stop2";
export default function Home() {
  return (
    <div className="bg-[#231F20]">
      <Header />
      <Stops />
      <Stop1 />
      <Stop2 />
    </div>
  );
}
