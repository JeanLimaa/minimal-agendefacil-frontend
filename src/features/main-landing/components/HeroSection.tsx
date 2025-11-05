import { Star, Users, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-brand-lightest via-white to-brand-lightest py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Transforme seu negócio com
            <span className="text-brand-main block">agendamentos online</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
            A plataforma completa para gerenciar agendamentos, clientes e crescer seu negócio. 
            Simples, rápido e profissional.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-500">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-status-warning fill-current" />
              <span className="text-sm font-medium">4.9/5 de satisfação</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-status-success" />
              <span className="text-sm font-medium">+1000 empresas</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-status-info" />
              <span className="text-sm font-medium">100% seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}