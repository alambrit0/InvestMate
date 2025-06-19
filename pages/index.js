import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gray-100 rounded-2xl shadow-md p-10">
          <h1 className="text-4xl font-bold mb-4">InvestMate</h1>
          <p className="text-lg mb-6">
            Aprende a invertir en bolsa, criptomonedas, fondos y más con ayuda de una IA
            personalizada. Sin promesas falsas, solo análisis real y actualizado.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/about" className="bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-800">
              ¿Qué es InvestMate?
            </Link>
            <Link href="/login" className="border border-black text-black rounded-xl px-6 py-3 hover:bg-gray-100">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}