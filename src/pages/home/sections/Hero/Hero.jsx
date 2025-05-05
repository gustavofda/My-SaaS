import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";

function Hero () {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 100); 
    }, []);

    return (
        <section className="flex flex-col items-center justify-center bg-gray-50 px-4 pt-8">
            <h1
                className={`text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4 transition-all duration-700 ease-out
                ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
            >
                Controle total do seu estoque, sem complicação.
            </h1>
            <p
                className={`text-lg md:text-xl text-gray-700 text-center mb-8 max-w-2xl transition-all duration-700 delay-100 ease-out
                ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
            >
                Gerencie entradas, saídas, fornecedores e mais com segurança e rapidez.
            </p>
            <img
                src="/assets/images/Auth.png"
                alt="Dashboard do sistema de estoque"
                className={`w-80 md:w-[320px] mb-8 rounded shadow transition-all duration-700 delay-200 ease-out
                ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            />
            <Link
                to="/system" 
                className={`bg-[#0f2f76] text-white font-semibold px-8 py-3 rounded shadow hover:opacity-90 mb-10 transition-all duration-700 delay-300 ease-out
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                Acessar sistema
            </Link>
            <div
                className={`flex flex-col md:flex-row gap-6 mt-4 mb-4 transition-all duration-700 delay-500 ease-out
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="flex flex-col items-center">
                    <SearchIcon className="text-4xl text-[#0f2f76] mb-2" />
                    <span className="text-base font-medium text-gray-800 text-center">Rastreamento em tempo real</span>
                </div>
                <div className="flex flex-col items-center">
                    <BarChartIcon className="text-4xl text-[#0f2f76] mb-2" />
                    <span className="text-base font-medium text-gray-800 text-center">Relatórios inteligentes</span>
                </div>
                <div className="flex flex-col items-center">
                    <SettingsIcon className="text-4xl text-[#0f2f76] mb-2" />
                    <span className="text-base font-medium text-gray-800 text-center">Cadastro fácil de produtos</span>
                </div>
            </div>
        </section>
    )
}

export default Hero;