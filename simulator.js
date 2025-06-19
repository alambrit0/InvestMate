import { useState } from "react";

export default function Simulator() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    if (!question.trim()) return;
    // Simulación de IA
    setResponse("[Simulación IA] Según tu perfil, podrías explorar inversiones en ETFs de bajo riesgo o criptomonedas estables como BTC/ETH. La clave es diversificar.");
  };

  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Simulador de IA</h1>
        <p className="mb-4">Escribe una pregunta sobre inversión y nuestra IA te dará un ejemplo de cómo podría responderte.</p>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-xl mb-4"
          rows="4"
          placeholder="¿Dónde debería invertir si tengo 1000€ y quiero beneficios a largo plazo?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <button
          onClick={handleAsk}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 mb-4"
        >
          Preguntar
        </button>
        {response && (
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <p className="font-medium">Respuesta de IA simulada:</p>
            <p>{response}</p>
          </div>
        )}
      </div>
    </main>
  );
}