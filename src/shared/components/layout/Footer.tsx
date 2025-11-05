import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, LinkedinIcon, LucideLinkedin, InstagramIcon, LucideInstagram } from 'lucide-react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-bg-darker text-text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-brand-main mb-4">AgendeFácil</h3>
              <p className="text-neutral-300 leading-relaxed">
                A plataforma completa para gestão de agendamentos online. 
                Simplifique sua agenda e ofereça uma experiência excepcional aos seus clientes.
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-brand-main transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-brand-main transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-brand-main transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Sobre */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Sobre o AgendeFácil</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-neutral-300 hover:text-brand-main transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="text-neutral-300 hover:text-brand-main transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#planos" className="text-neutral-300 hover:text-brand-main transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <Link href="/contato" className="text-neutral-300 hover:text-brand-main transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-neutral-300 hover:text-brand-main transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-300 hover:text-brand-main transition-colors">
                  Tutoriais
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-300 hover:text-brand-main transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-300 hover:text-brand-main transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-main mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">contato@agendefacil.com</p>
                  <p className="text-neutral-300">suporte@agendefacil.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-main mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">(11) 9999-9999</p>
                  <p className="text-neutral-400 text-sm">Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © 2025 AgendeFácil. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-neutral-400 hover:text-brand-main transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-brand-main transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-brand-main transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}