import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function Login() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative flex flex-col justify-center px-12 bg-[#E6E6E6]">
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-6 left-6 flex items-center gap-2 text-sm text-black hover:opacity-70 transition"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Volver al inicio
                </button>
                <h1 className="text-4xl font-light text-black mb-4">
                    Inicia sesión en tu cuenta
                </h1>
                <p className="mb-8 text-sm text-black">
                    ¿No tienes cuenta?{" "}
                    <button
                        onClick={() => navigate('/Register')}
                        className="font-semibold underline cursor-pointer"
                    >
                        Registrate
                    </button>
                </p>
                <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                    <div>
                        <label className="block mb-1 text-sm text-black">
                            Correo
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full h-10 px-3 bg-[#8F9B63] outline-none text-black"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm text-black">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full h-10 px-3 bg-[#8F9B63] outline-none text-black"
                        />
                    </div>
                    <p className="text-xs font-semibold text-black cursor-pointer">
                        ¿Olvidaste la contraseña?
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-[#B11212] text-white py-3 font-semibold hover:bg-red-700 transition"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
            <div className="hidden md:flex items-center justify-center bg-[#9AA36E]">
                <img
                    src="/"
                    className="max-w-md"
                />
            </div>

        </div>
    )
}
