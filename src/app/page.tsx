import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="h-screen w-screen flex flex-col items-center">
        <header className="h-20 w-full">
          <nav className="h-20 flex justify-evenly items-center">
            <div className="border-2 border-blue-300 text-gray-200 p-3 text-xl hand rounded-lg hover:text-white hover:bg-blue-100/10"><a className="font-roboto" href="#">¿Quienes Somos?</a></div>
            <div className="border-2 border-blue-300 text-gray-200 p-3 text-xl hand rounded-lg hover:text-white hover:bg-blue-100/10"><a className="font-roboto" href="#">Portal Curriculums</a></div>
            <div className="border-2 border-blue-300 text-gray-200 p-3 text-xl hand rounded-lg hover:text-white hover:bg-blue-100/10"><a className="font-roboto" href="#">Tus Beneficios</a></div>
            <div className="border-2 border-blue-300 text-gray-200 p-3 text-xl hand rounded-lg hover:text-white hover:bg-blue-100/10"><a className="font-roboto" href="#">Contactanos</a></div>
          </nav>
        </header>
        <h1 className="text-center text-5xl mt-5 font-sen tracking-wide">Corporación Ejecutiva Internacional</h1>
        <Image className="absolute top-30 left-5" src={"/resources/estatua-libertad.png"} width={300} height={200} alt="Estatua de la Libertad"></Image>
        <div className="w-200 h-25 mt-2 flex justify-evenly items-center">
          <Image src={"/resources/colombia-flag.avif"} width={100} height={150} alt="bandera de colombia"></Image>
          <Image src={"/resources/venezuela-flag.png"} width={100} height={150} alt="bandera de venezuela"></Image>
          <Image src={"/resources/españa-flag.png"} width={100} height={150} alt="bandera de españa"></Image>
          <Image src={"/resources/peru-flag.png"} width={100} height={150} alt="bandera de peru"></Image>
          <Image src={"/resources/usa-flag.png"} width={100} height={150} alt="bandera de usa"></Image>
        </div>

        <div className="bg-blue-200/50 w-fit h-40 p-5 rounded-2xl mt-8 flex flex-col items-center justify-evenly">
          <h2 className="text-4xl font-inconsolata text-blue-200 ">Sistema Internacional de DESCUENTOS</h2>
          <h2 className="text-4xl font-inconsolata text-blue-200 uppercase italic">Aumento de Ventas y Clientela</h2>
          <h2 className="text-4xl font-inconsolata text-blue-200 ">Brindando una Atención Especial</h2>
        </div>

        <div className="w-350 h-50 mt-10 flex justify-evenly items-center">
          <div className="flex flex-col items-center mt-8">
            <div className="bg-blue-200/50 h-fit p-5 rounded-2xl flex flex-col justify-evenly items-center">
              <h3 className="text-3xl font-inconsolata text-green-300">Record Ventas Internacionales</h3>
              <h3 className="text-3xl font-inconsolata text-green-300">Libro Prohibido 2022</h3>
              <h3 className="text-3xl font-inconsolata text-green-300">Probable Verdad del Covid 19</h3>
            </div>
            <div className="w-fit h-fit p-3 flex">                            
              <p className="text-xl text-violet-300 font-jura">Ver Cartas Recibidas:</p>
              <Image className="ml-5 -mt-8" src={"/resources/pearl-harbor.webp"} width={60} height={30} alt="Pearl Harbor"></Image>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-fit h-fit p-2">
              <p className="text-xl text-violet-300 font-jura">Curso Short Time</p>
            </div>
            <div className="bg-blue-200/50 h-fit p-5 rounded-2xl flex flex-col justify-evenly items-center">
              <h3 className="text-3xl font-inconsolata text-green-300">Como Materializar Tus Deseos</h3>
              <h3 className="text-3xl font-inconsolata text-green-300">Tu Mente Cumple Tus Deseos</h3>
              <h3 className="text-3xl font-inconsolata text-green-300">Control Mental Alpha</h3>
            </div>
            <div className="w-fit h-fit p-3">
              <p className="text-xl text-violet-300 font-jura">Ver Cartas Recibidas:</p>
            </div>
          </div>
        </div>

        <div className="w-fit h-fit mt-8 p-5 rounded-md bg-blue-200/50">
          <h4 className="text-3xl text-pink-300">Pre Fundación Patitas En La Calle</h4>
        </div>
    </div>
    </>
  );
}
