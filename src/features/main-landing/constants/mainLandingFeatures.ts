import { 
    Calendar, 
    Smartphone, 
    CreditCard, 
    Clock, 
    Users,
    BarChart3,
    Shield,
    Headphones
} from "lucide-react";

export const mainLandingFeatures = [
    {
        icon: Calendar,
        title: "Agendamento Online",
        description: "Sistema completo de agendamentos com calendário integrado e sincronização em tempo real",
        bgColor: "bg-blue-100 group-hover:bg-blue-200",
        iconColor: "text-blue-600"
    },
    {
        icon: Smartphone,
        title: "Apps Mobile",
        description: "Aplicativos nativos para Android e iOS com notificações push",
        bgColor: "bg-green-100 group-hover:bg-green-200",
        iconColor: "text-green-600"
    },
/*     {
        icon: CreditCard,
        title: "Pagamentos Online",
        description: "Aceite cartões, PIX e boletos com integração direta aos principais gateways",
        bgColor: "bg-purple-100 group-hover:bg-purple-200",
        iconColor: "text-purple-600"
    }, */
    {
        icon: Clock,
        title: "Gestão de Horários",
        description: "Configure horários de funcionamento, intervalos e bloqueios automaticamente",
        bgColor: "bg-indigo-100 group-hover:bg-indigo-200",
        iconColor: "text-indigo-600"
    },
    {
        icon: Users,
        title: "Gestão de Clientes",
        description: "Controle completo da base de clientes com histórico e dados organizados",
        bgColor: "bg-pink-100 group-hover:bg-pink-200",
        iconColor: "text-pink-600"
    },
    {
        icon: BarChart3,
        title: "Relatórios Detalhados",
        description: "Dashboard com métricas em tempo real e relatórios de performance",
        bgColor: "bg-orange-100 group-hover:bg-orange-200",
        iconColor: "text-orange-600"
    },
    {
        icon: Shield,
        title: "Dados Seguros",
        description: "Proteção total dos dados com criptografia e backup automático",
        bgColor: "bg-red-100 group-hover:bg-red-200",
        iconColor: "text-red-600"
    },
    {
        icon: Headphones,
        title: "Suporte Especializado",
        description: "Equipe dedicada para te ajudar a aproveitar ao máximo a plataforma",
        bgColor: "bg-yellow-100 group-hover:bg-yellow-200",
        iconColor: "text-yellow-600"
    }
];