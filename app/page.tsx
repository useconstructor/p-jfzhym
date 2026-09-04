'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, Users, Award, CheckCircle } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#16A8A8] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Clínica Dental Sonrisa</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-gray-700 hover:text-[#16A8A8] font-medium transition-colors">Inicio</a>
              <a href="#tratamientos" className="text-gray-700 hover:text-[#16A8A8] font-medium transition-colors">Tratamientos</a>
              <a href="#tecnologia" className="text-gray-700 hover:text-[#16A8A8] font-medium transition-colors">Tecnología</a>
              <a href="#equipo" className="text-gray-700 hover:text-[#16A8A8] font-medium transition-colors">Nuestro Equipo</a>
              <a href="#contacto" className="text-gray-700 hover:text-[#16A8A8] font-medium transition-colors">Contacto</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#contacto" className="bg-[#16A8A8] hover:bg-[#138B8B] text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Agenda tu Cita
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t py-4">
              <div className="flex flex-col gap-4">
                <a href="#inicio" className="text-gray-700 hover:text-[#16A8A8] font-medium px-4">Inicio</a>
                <a href="#tratamientos" className="text-gray-700 hover:text-[#16A8A8] font-medium px-4">Tratamientos</a>
                <a href="#tecnologia" className="text-gray-700 hover:text-[#16A8A8] font-medium px-4">Tecnología</a>
                <a href="#equipo" className="text-gray-700 hover:text-[#16A8A8] font-medium px-4">Nuestro Equipo</a>
                <a href="#contacto" className="text-gray-700 hover:text-[#16A8A8] font-medium px-4">Contacto</a>
                <a href="#contacto" className="bg-[#16A8A8] text-white px-6 py-3 rounded-full font-semibold mx-4 text-center">
                  Agenda tu Cita
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Split Layout */}
      <section id="inicio" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block bg-[#16A8A8]/10 text-[#16A8A8] px-4 py-2 rounded-full text-sm font-medium">
                Clínica Dental de Confianza
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Diseñamos sonrisas que transforman vidas
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Expertos en odontología estética con más de 25 años de experiencia.
                Tu sonrisa perfecta está a una consulta de distancia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="bg-[#16A8A8] hover:bg-[#138B8B] text-white px-8 py-4 rounded-full font-semibold text-center transition-colors">
                  Consulta Gratuita
                </a>
                <a href="#tratamientos" className="border-2 border-[#16A8A8] text-[#16A8A8] hover:bg-[#16A8A8] hover:text-white px-8 py-4 rounded-full font-semibold text-center transition-colors">
                  Ver Tratamientos
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#16A8A8]/20 to-[#16A8A8]/5 rounded-3xl p-8 lg:p-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-[#16A8A8]/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-16 h-16 text-[#16A8A8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <p className="text-[#16A8A8] font-semibold text-lg">Clínica Moderna</p>
                    <p className="text-gray-600 text-sm mt-2">Tecnología de última generación</p>
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#16A8A8] rounded-full flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">4.9/5 Estrellas</p>
                    <p className="text-sm text-gray-500">+500 reseñas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#16A8A8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="flex justify-center mb-3">
                <Users size={40} />
              </div>
              <p className="text-4xl md:text-5xl font-bold">12,500+</p>
              <p className="text-lg opacity-90 mt-2">Pacientes Felices</p>
            </div>
            <div className="text-white">
              <div className="flex justify-center mb-3">
                <Star size={40} />
              </div>
              <p className="text-4xl md:text-5xl font-bold">4.9/5</p>
              <p className="text-lg opacity-90 mt-2">Calificación</p>
            </div>
            <div className="text-white">
              <div className="flex justify-center mb-3">
                <Award size={40} />
              </div>
              <p className="text-4xl md:text-5xl font-bold">25+</p>
              <p className="text-lg opacity-90 mt-2">Años de Experiencia</p>
            </div>
            <div className="text-white">
              <div className="flex justify-center mb-3">
                <CheckCircle size={40} />
              </div>
              <p className="text-4xl md:text-5xl font-bold">100%</p>
              <p className="text-lg opacity-90 mt-2">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="tratamientos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#16A8A8]/10 text-[#16A8A8] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tratamientos Especializados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de tratamientos dentales con la más alta calidad y tecnología de vanguardia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Treatment Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#16A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Blanqueamiento Dental</h3>
                <p className="text-gray-600 mb-4">
                  Recupera el brillo natural de tu sonrisa con nuestro tratamiento de blanqueamiento profesional.
                </p>
                <a href="#contacto" className="text-[#16A8A8] font-semibold hover:underline">
                  Más información →
                </a>
              </div>
            </div>

            {/* Treatment Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#16A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ortodoncia Invisible</h3>
                <p className="text-gray-600 mb-4">
                  Alinea tus dientes de forma discreta con nuestros alineadores transparentes personalizados.
                </p>
                <a href="#contacto" className="text-[#16A8A8] font-semibold hover:underline">
                  Más información →
                </a>
              </div>
            </div>

            {/* Treatment Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#16A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Implantes Dentales</h3>
                <p className="text-gray-600 mb-4">
                  Solución permanente para reemplazar dientes perdidos con resultados naturales.
                </p>
                <a href="#contacto" className="text-[#16A8A8] font-semibold hover:underline">
                  Más información →
                </a>
              </div>
            </div>

            {/* Treatment Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#16A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Carillas de Porcelana</h3>
                <p className="text-gray-600 mb-4">
                  Transforma tu sonrisa con carillas de porcelana ultra delgadas y de aspecto natural.
                </p>
                <a href="#contacto" className="text-[#16A8A8] font-semibold hover:underline">
                  Más información →
                </a>
              </div>
            </div>

            {/* Treatment Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#16A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Limpieza Profesional</h3>
                <p className="text-gray-600 mb-4">
                  Mantén tu salud bucal óptima con nuestras limpiezas dentales profesionales.
                </p>
                <a href="#contacto" className="text-[#16A8A8] font-semibold hover:underline">
                  Más información →
                </a>
              </div>
            </div>

            {/* Treatment Card 6 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#16A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Endodoncia</h3>
                <p className="text-gray-600 mb-4">
                  Tratamiento de conducto indoloro con tecnología avanzada para salvar tu diente.
                </p>
                <a href="#contacto" className="text-[#16A8A8] font-semibold hover:underline">
                  Más información →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#16A8A8]/10 text-[#16A8A8] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Tecnología Avanzada
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Equipamiento de Última Generación
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Invertimos constantemente en la tecnología más avanzada para ofrecerte tratamientos más precisos,
                rápidos y cómodos.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#16A8A8] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Radiografías Digitales 3D</h4>
                    <p className="text-gray-600">Diagnóstico preciso con mínima exposición a radiación.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#16A8A8] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Escáner Intraoral</h4>
                    <p className="text-gray-600">Impresiones digitales sin molestias ni materiales incómodos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#16A8A8] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Láser Dental</h4>
                    <p className="text-gray-600">Tratamientos menos invasivos y recuperación más rápida.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#16A8A8]/20 to-[#16A8A8]/5 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-[#16A8A8]/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-[#16A8A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[#16A8A8] font-semibold">Tecnología Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#16A8A8]/10 text-[#16A8A8] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Profesionales Certificados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos con un equipo de especialistas altamente capacitados y comprometidos con tu salud bucal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Doctor 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
              <div className="h-64 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#16A8A8]">DR</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Dra. María González</h3>
                <p className="text-[#16A8A8] font-medium mb-3">Directora Médica</p>
                <p className="text-gray-600 text-sm">
                  Especialista en Odontología Estética con más de 20 años de experiencia.
                  Máster en Implantología y Rehabilitación Oral.
                </p>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
              <div className="h-64 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#16A8A8]">DR</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Dr. Carlos Rodríguez</h3>
                <p className="text-[#16A8A8] font-medium mb-3">Especialista en Ortodoncia</p>
                <p className="text-gray-600 text-sm">
                  Certificado en Invisalign y ortodoncia avanzada.
                  Miembro de la Asociación de Ortodoncistas Certificados.
                </p>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
              <div className="h-64 bg-gradient-to-br from-[#16A8A8]/30 to-[#16A8A8]/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#16A8A8]/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#16A8A8]">DR</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Dra. Ana Martínez</h3>
                <p className="text-[#16A8A8] font-medium mb-3">Especialista en Endodoncia</p>
                <p className="text-gray-600 text-sm">
                  Experta en tratamientos de conducto con tecnología de microscopio.
                  Formación internacional en técnicas avanzadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block bg-[#16A8A8]/10 text-[#16A8A8] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Contáctanos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Agenda tu Consulta Gratuita
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Estamos aquí para ayudarte. Contáctanos hoy y da el primer paso hacia la sonrisa que siempre soñaste.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#16A8A8]/10 rounded-full flex items-center justify-center">
                    <Phone className="text-[#16A8A8]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+34 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#16A8A8]/10 rounded-full flex items-center justify-center">
                    <Mail className="text-[#16A8A8]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@clinicasonrisa.es</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#16A8A8]/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-[#16A8A8]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dirección</p>
                    <p className="text-gray-600">Calle Principal 123, Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A8A8] focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A8A8] focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A8A8] focus:border-transparent outline-none transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A8A8] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#16A8A8] hover:bg-[#138B8B] text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  Solicitar Cita
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#16A8A8] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold">Clínica Dental Sonrisa</span>
              </div>
              <p className="text-gray-400">
                Diseñamos sonrisas que transforman vidas. Tu confianza es nuestra prioridad.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Inicio</a></li>
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Tratamientos</a></li>
                <li><a href="#tecnologia" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Tecnología</a></li>
                <li><a href="#equipo" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Nuestro Equipo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Tratamientos</h4>
              <ul className="space-y-2">
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Blanqueamiento</a></li>
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Ortodoncia</a></li>
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Implantes</a></li>
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Carillas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+34 912 345 678</li>
                <li>info@clinicasonrisa.es</li>
                <li>Calle Principal 123</li>
                <li>Madrid, España</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Clínica Dental Sonrisa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
