import { FiAlertTriangle } from "react-icons/fi";

export default function NotFoundCompany() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
            <FiAlertTriangle className="text-6xl mb-4" style={{ color: "#FF7900" }} />
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">Empresa Não Encontrada</h1>
            <p className="text-lg text-neutral-600">A empresa que você está procurando não foi encontrada.</p>
        </div>
    );
}