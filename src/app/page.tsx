import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center">
        {/* HEADER Y NAV */}
        <header className="h-fit w-full">
          <nav className="h-20 flex justify-evenly items-center">
            <div className="w-fit h-fit md:p-3 sm:text-2xl p-1 text-sm border-2 font-semibold border-yellow-300 bg-blue-800 text-gray-200 text-center hand hover:text-white"><a className="font-roboto" href="#">¿Quienes Somos?</a></div>
            <div className="w-fit h-fit md:p-3 sm:text-2xl p-1 text-sm border-2 font-semibold border-yellow-300 bg-blue-800 text-gray-200 text-center hand hover:text-white"><a className="font-roboto" href="#">Portal Curriculums</a></div>
            <div className="w-fit h-fit md:p-3 sm:text-2xl p-1 text-sm border-2 font-semibold border-yellow-300 bg-blue-800 text-gray-200 text-center hand hover:text-white"><a className="font-roboto" href="#">Tus Beneficios</a></div>
            <div className="w-fit h-fit md:p-3 sm:text-2xl p-1 text-sm border-2 font-semibold border-yellow-300 bg-blue-800 text-gray-200 text-center hand hover:text-white"><a className="font-roboto" href="#">Contactanos</a></div>
          </nav>
        </header>
        {/* TITULO Y BANDERAS */}
        <h1 className="text-3xl md:text-6xl text-center text-yellow-100 font-light mt-2 tracking-wide italic [text-shadow:_-1px_-1px_0_yellow,_1px_-1px_0_yellow,_-1px_1px_0_yellow,_1px_1px_0_yellow]">Corporación Ejecutiva Internacional</h1>
        <Image className="absolute top-20 md:flex shrink -left-10 hidden" src={"/resources/estatua-libertad.png"} width={300} height={200} alt="Estatua de la Libertad"></Image>
        <Image className="absolute left-15 top-58 md:hidden" src={"/resources/estatua-libertad.png"} width={60} height={20} alt="Estatua de la Libertad"></Image>
        <div className="grid grid-cols-5 sm:flex sm:w-200 w-fit h-15 gap-2 my-4 justify-evenly items-center">
          <Image src={"/resources/colombia-flag.avif"} width={60} height={150} alt="bandera de colombia"></Image>
          <Image src={"/resources/venezuela-flag.png"} width={60} height={150} alt="bandera de venezuela"></Image>
          <Image src={"/resources/españa-flag.png"} width={60} height={150} alt="bandera de españa"></Image>
          <Image src={"/resources/peru-flag.png"} width={60} height={150} alt="bandera de peru"></Image>
          <Image src={"/resources/usa-flag.png"} width={60} height={150} alt="bandera de usa"></Image>
        </div>
        {/* ROSA DE LOS VIENTOS  */}
        <Image src={"/resources/rosa-vientos.png"} width={40} height={50} alt={"rosa de los vientos"}></Image>

        {/* PRIMER DIV  */}
        <div className="w-fit h-fit flex flex-col items-center justify-evenly px-10 mt-5 md:mt-8 bg-[#9AD2AD] rounded-[80] border border-black ">
          <h2 className="text-md md:text-4xl font-semibold text-[#2E3091] italic">Sistema Internacional de DESCUENTOS</h2>
          <h2 className="text-md md:text-4xl text-[#2E3091] italic [text-shadow:_-1px_-1px_0_orange,_1px_-1px_0_orange,_-1px_1px_0_orange,_1px_1px_0_orange]">AUMENTO DE VENTAS Y CLIENTELA</h2>
          <h2 className="text-md md:text-4xl font-semibold text-[#2E3091] italic">Brindando una Atención Especial</h2>
        </div>
        {/* SEGUNDO Y TERCER DIV  */}
        <div className="w-screen h-fit flex flex-col md:w-350 md:h-50 mt-15 md:mt-5 md:flex md:flex-row justify-evenly items-center">
          <div className="flex flex-col items-center md:mt-8">
            <div className="h-fit px-10 flex flex-col justify-evenly items-center bg-[#DDEFF3] rounded-[30] md:rounded-[80] border border-black">
              <h3 className="text-md font-semibold md:text-3xl md:font-bold italic text-[#151B50]">Record Ventas Internacionales</h3>
              <h3 className="text-md font-semibold md:text-3xl md:font-bold italic text-[#C43033]">Libro Prohibido el 2022</h3>
              <h3 className="text-md font-semibold md:text-3xl md:font-bold italic text-[#191C55]">Probable VERDAD del <span className="text-[#C43033]">COVID 19</span></h3>
            </div>
            <div className="w-fit h-fit md:p-3 md:flex">
              <button className="text-md md:text-4xl italic cursor-pointer font-extrabold text-[#dee05d]">Ver Cartas Recibidas</button>
              <Image className="md:flex absolute bottom-28 left-165 hidden" src={"/resources/pearl-harbor2.jpg"} width={59} height={30} alt="Pearl Harbor"></Image>
              <Image className="absolute bottom-25 left-45 md:hidden" src={"/resources/pearl-harbor2.jpg"} width={40} height={30} alt="Pearl Harbor"></Image>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-fit h-fit">
              <p className="text-md md:text-4xl italic font-extrabold text-[#445159] font-jura [text-shadow:_-1px_-1px_0_lightblue,_1px_-1px_0_lightblue,_-1px_1px_0_lightblue,_1px_1px_0_lightblue]">Curso Short Time</p>
            </div>
            <div className="bg-[#DDEFF3] h-fit px-10 rounded-[30] md:rounded-[80] border border-black flex flex-col justify-evenly items-center">
              <h3 className="text-md font-semibold md:text-3xl md:font-bold italic text-[#6A61A5]">Como Materializar Tus Deseos</h3>
              <h3 className="text-md font-semibold md:text-3xl md:font-bold italic text-[#0F453C]">TU MENTE CUMPLE TUS DESEOS</h3>
              <h3 className="text-md font-semibold md:text-3xl md:font-bold italic text-[#9D487F]">Control Mental Alpha</h3>
            </div>
            <div className="w-fit h-fit p-3">
              <button className="text-md md:text-4xl italic font-extrabold cursor-pointer text-[#dee05d]">Ver Cartas Recibidas</button>
            </div>
          </div>
        </div>
        {/* ULTIMO DIV  */}
        <div className="w-fit h-fit text-center mt-25 md:mt-15 py-3 px-8 rounded-md border-5 border-[#493176] bg-[#F3A8AB]">
          <h4 className="text-lg md:text-3xl italic font-extrabold text-[#323285]">Pre Fundación Patitas En La Calle</h4>
        </div>
      </div>
    </>
  );
}