

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-r from-[#6357C3] to-[#3AB0CA]">

      <div className="flex-1 flex items-center justify-center px-10">

        <div className="relative">

          <img
            src="src/assets/Farmacia.jpg"
            alt="Farmácia"
            className=" h-170 w- object-cover rounded-3xl shadow-2xl"/>

          <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

            <h1 className="text-6xl font-bold drop-shadow-lg">
              Farma Forte
            </h1>

            <p className="text-2xl mt-4 drop-shadow-md">
              Saúde em Primeiro Lugar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home