import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Grid } from "@mui/material";
import StyledButton from "../../../../components/Styledbutton";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === "admin" && password === "gustavof") {
            navigate("/hero");
        } else {
            alert("Usuário ou senha inválidos!");
        }
    };

    return (
        <Grid
            container
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center", 
                alignItems: "center", 
            }}
        >
            <Paper
                sx={{
                    width: "100%",
                    maxWidth: 400, 
                    padding: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.85)", 
                    boxShadow: 2, 
                    borderRadius: 2,  
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Seja bem-vindo ao GST
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Faça login para continuar
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Usuário"
                        name="username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Senha"
                        name="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <StyledButton type="submit">Entrar</StyledButton>
                </form>
            </Paper>
        </Grid>
    );
}

export default Login;

