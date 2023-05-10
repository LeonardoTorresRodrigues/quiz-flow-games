export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-zinc-900 text-zinc-50 border-b border-zinc-600 p-6">
        <h1 className="text-lg text-center">Ranking Quiz Flow Games</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-72 p-6 bg-zinc-600">
          <h3 className="text-md">Top do ano</h3>
        </aside>
        <main className="flex-1 p-6">
          <h2 className="text-lg">Top do mês</h2>
          <div className="flex mt-3 gap-4 border border-4 border-slate-600 rounded bg-zinc-500">
            <img width={100} src="https://flowgames.gg/wp-content/uploads/2022/10/Bruno_Micali_perfil.jpg" alt="" />
            <div className="flex flex-col m-2 gap-2">
              <p className="text-5xl text-center">7 pontos</p>
              <p className="text-lg">Bruno Micali</p>
              <a href="https://www.youtube.com/@FalaMica">Canal</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
