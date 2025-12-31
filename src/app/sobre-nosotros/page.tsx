
import Image from "next/image";

export default function SobreNosotros() {
  return (
    <main className="min-h-screen w-full bg-[#eee9e1] py-16 px-4">
      <div className="flex flex-col items-center mb-10">
        <Image src="/saxo1.png" alt="Equipo SaxoShop" width={160} height={160} className="mb-6 rounded-xl shadow-lg bg-[#eee9e1] p-2" />
        <h1 className="text-5xl font-extrabold text-black mb-6 text-center font-serif">Sobre Nosotros</h1>
        <p className="text-lg text-gray-800 mb-8 text-center max-w-2xl">
          En <span className="font-bold text-yellow-700">SaxoShop</span> somos apasionados por la música y los saxofones. Nuestra misión es acercar los mejores instrumentos a músicos de todos los niveles, brindando asesoría personalizada y productos de calidad.
        </p>
      </div>
      <div className="w-full max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-[#eee9e1] rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-[#7c6043] mb-2 font-serif">Nuestra Historia</h2>
          <p className="text-gray-800">Nacimos de la pasión de músicos profesionales que, tras años de experiencia, decidieron crear una tienda especializada para compartir su conocimiento y amor por el saxofón.</p>
        </div>
        <div className="bg-[#eee9e1] rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-[#7c6043] mb-2 font-serif">Valores</h2>
          <ul className="list-disc pl-6 text-gray-800">
            <li>Atención personalizada</li>
            <li>Calidad garantizada</li>
            <li>Pasión por la música</li>
            <li>Transparencia y confianza</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
