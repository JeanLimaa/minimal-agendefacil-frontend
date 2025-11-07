import { Star } from "lucide-react";
import { statistics } from "../constants/statistics";

export default function SocialProofSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Empresas que confiam na Beauty Slot
          </h2>
          <p className="text-xl text-text-secondary">
            De pequenos negócios a grandes empresas, todos crescem conosco
          </p>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-brand-main mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
