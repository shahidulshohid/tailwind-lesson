
function App() {

  return (
    <>
      <div className="text-3xl font-bold underline">
      <h1>
      Hello world!
    </h1>
      </div>
      <div>
        <p className="text-red-500 text-3xl text-left">Tom</p>
        <p className="text-gray-400 text-lg text-center">Jerry</p>
        <p className="text-blue-900 text-xs text-right">Max</p>
      </div>
      <div className="bg-red-500">
        Tailwind is great
      </div>
      <div className="bg-blue-200">
        Tailwind is fantastic
      </div>
      <div className="bg-gray-900 text-white">
        Tailwind is Awesome
      </div>
      {/* <div className="bg-[url('./images/banner.png')] h-screen bg-no-repeat bg-cover bg-center">
      </div> */}
      <div className="bg-gradient-to-r from-blue-300 via-purple-500">
        We are learning gradient
      </div>
    </>
  )
}

export default App

