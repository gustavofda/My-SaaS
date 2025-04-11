import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === "admin" && password === "1234") {
            navigate("/hero"); 
        } else {
            alert("Usuário ou senha inválidos!");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Usuário:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Senha:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;