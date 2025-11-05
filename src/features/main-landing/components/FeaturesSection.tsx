import { mainLandingFeatures } from "../constants/mainLandingFeatures";

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Uma plataforma completa com todos os recursos necessários para gerenciar e fazer crescer seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainLandingFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="group text-center">
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors`}>
                  <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}