import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-main to-brand-hover text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Pronto para revolucionar seu negócio?
        </h2>
        <p className="text-xl sm:text-2xl mb-8 text-brand-lightest max-w-2xl mx-auto">
          Junte-se a centenas de empresas que já transformaram seus agendamentos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#" 
            className="inline-flex items-center px-8 py-4 bg-white text-brand-main font-semibold rounded-xl hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            Começar Grátis Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}