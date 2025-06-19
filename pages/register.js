import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return; <p className="mt-4 text-center">
  ¿No tienes cuenta?{" "}
  <a href="/register" className="text-blue-600 hover:underline">
    Regístrate aquí
  </a>
</p>

    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (err) {
      setError("Error al crear la cuenta. Intenta de nuevo.");
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Crear cuenta</h1>
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
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="w-full p-3 rounded-xl border border-gray-300"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
          >
            Registrarse
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    </main>
  );
}
