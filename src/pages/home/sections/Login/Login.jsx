import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === "admin" && password === "4321") {
            navigate("/hero");
        } else {
            alert("Usuário ou senha inválidos!");
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <div className="hidden md:flex w-1/2 items-center justify-center h-full">
                <img
                    src="/assets/images/Login.png"
                    alt="Login"
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center bg-white h-full relative">
                <div className="absolute top-8 left-8 flex flex-col items-start">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold text-gray-800 text-center">OLÁ, BEM-VINDO</h1>
                        <div className="w-24 h-1 bg-blue-500 rounded mt-2 mx-auto" />
                    </div>
                </div>
                <div className="w-full max-w-md p-8 rounded-lg shadow-md mx-auto">
                    <h1 className="text-2xl font-bold text-center mb-2 mt-16 text-white md:text-gray-800">
                    SYNAPSE
                    </h1>
                    <p className="text-center text-gray-500 mb-6 text-sm">
                        FAÇA LOGIN PARA ENTRAR EM SUA CONTA COLABORADOR
                    </p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <PersonIcon />
                                </span>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Usuário"
                                    className="pl-10 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <LockIcon />
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Senha"
                                    className="pl-10 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            VALIDAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;