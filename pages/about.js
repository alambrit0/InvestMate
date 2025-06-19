export default function About() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">¿Qué es InvestMate?</h1>
        <p className="mb-4">
          <strong>InvestMate</strong> es tu compañero inteligente para aprender a invertir con cabeza.
          No somos una app para comprar acciones o criptomonedas. Somos una herramienta guiada por IA
          que te enseña, analiza contigo y te da consejos realistas.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>📊 Información en tiempo real sobre acciones, criptomonedas, fondos y más.</li>
          <li>🤖 Análisis personalizado según tu perfil y presupuesto.</li>
          <li>🎯 Recomendaciones basadas en si buscas beneficios a corto o largo plazo.</li>
          <li>🔒 Una experiencia segura, sin venderte nada, solo enseñarte a invertir mejor.</li>
        </ul>
        <p>
          Ya seas principiante o profesional, InvestMate está diseñado para ayudarte a tomar decisiones más inteligentes.
        </p>
      </div>
    </main>
  );
}