import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Lógica de autenticação
        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === "admin" && password === "1234") {
            navigate("/hero"); // Redireciona para o Hero se as credenciais forem válidas
        } else {
            alert("Usuário ou senha inválidos!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Usuário:
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Senha:
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;