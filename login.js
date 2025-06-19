import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Funcionalidad aún en desarrollo");
  };

  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="bg-gray-100 rounded-2xl shadow-md p-6 space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded-xl border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 rounded-xl border border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}