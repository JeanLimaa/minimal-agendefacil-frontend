import { Smartphone } from 'lucide-react';

export default function MobileAppsSection() {
  return (
    <section id="sobre" className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Baixe nossos apps mobile
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12">
            Gerencie seus agendamentos em qualquer lugar com nossos aplicativos para Android e iOS
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="#" 
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <Smartphone className="w-8 h-8 mr-3" />
            <div className="text-left">
              <div className="text-xs">Disponível no</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </a>
          
          <a 
            href="#" 
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <Smartphone className="w-8 h-8 mr-3" />
            <div className="text-left">
              <div className="text-xs">Baixar na</div>
              <div className="font-semibold">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}