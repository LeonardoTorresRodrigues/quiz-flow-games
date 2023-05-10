import Image from "next/image";

export default function MainCard() {
  return (
    <div className="flex mt-3 gap-4 border-4 border-slate-600 rounded bg-zinc-500">
      <Image
        src="/Bruno_Micali_perfil.jpg"
        alt="Bruno Micali"
        width={120}
        height={120}
      />
      <div className="flex flex-col mt-auto mb-auto gap-2">
        <p className="text-5xl text-center">7 pontos</p>
        <p className="text-lg">Bruno Micali</p>
        <a href="https://www.youtube.com/@FalaMica">Canal</a>
      </div>
    </div>
  )
}