import Header from "@/components/Header";
import TopYear from "@/components/TopYear";
import TopMonth from "@/components/TopMonth";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <TopYear />
        <TopMonth />
      </div>
    </div>
  )
}
