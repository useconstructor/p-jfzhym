'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Calendar, Star, Award, Users, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Project 1788484015687</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#inicio" className="text-[#16A8A8] font-medium border-b-2 border-[#16A8A8] pb-1">Inicio</a>
              <a href="#tratamientos" className="text-gray-600 hover:text-[#16A8A8] font-medium transition-colors">Tratamientos</a>
              <a href="#tecnologia" className="text-gray-600 hover:text-[#16A8A8] font-medium transition-colors">Tecnología</a>
              <a href="#equipo" className="text-gray-600 hover:text-[#16A8A8] font-medium transition-colors">Nuestro Equipo</a>
              <a href="#contacto" className="text-gray-600 hover:text-[#16A8A8] font-medium transition-colors">Contacto</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#contacto" className="bg-[#16A8A8] hover:bg-[#138B8B] text-white px-5 py-2.5 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                <Calendar size={18} />
                Agendar cita
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
                <a href="#inicio" className="text-[#16A8A8] font-medium px-4">Inicio</a>
                <a href="#tratamientos" className="text-gray-600 hover:text-[#16A8A8] font-medium px-4">Tratamientos</a>
                <a href="#tecnologia" className="text-gray-600 hover:text-[#16A8A8] font-medium px-4">Tecnología</a>
                <a href="#equipo" className="text-gray-600 hover:text-[#16A8A8] font-medium px-4">Nuestro Equipo</a>
                <a href="#contacto" className="text-gray-600 hover:text-[#16A8A8] font-medium px-4">Contacto</a>
                <a href="#contacto" className="bg-[#16A8A8] text-white px-5 py-2.5 rounded-lg font-medium mx-4 text-center inline-flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Agendar cita
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Split Layout */}
      <section id="inicio" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-180px)] py-12">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-[#16A8A8] font-medium tracking-wide text-sm uppercase">
                Estética dental de alta precisión
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight">
                <span className="font-bold text-gray-900">Diseñamos sonrisas</span>
                <br />
                <span className="text-gray-400 font-light">que transforman vidas</span>
              </h1>
              <div className="w-16 h-1 bg-[#16A8A8]"></div>
              <p className="text-gray-500 text-lg max-w-md">
                Combinamos ciencia, arte y tecnología para brindarte tratamientos personalizados con resultados naturales y duraderos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="#contacto" className="bg-[#16A8A8] hover:bg-[#138B8B] text-white px-6 py-3 rounded-lg font-medium text-center transition-colors inline-flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Agendar evaluación
                </a>
                <a href="#tratamientos" className="text-gray-700 hover:text-[#16A8A8] px-2 py-3 font-medium text-center transition-colors inline-flex items-center justify-center gap-2">
                  Conoce nuestros tratamientos
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Right Image - Dental Office */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                  alt="Consultorio dental moderno"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner - White cards on light background */}
        <div className="bg-gray-50 border-t-4 border-[#16A8A8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <Users className="text-[#16A8A8]" size={32} />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">12,500+</p>
                  <p className="text-sm text-gray-500 mt-1">Pacientes satisfechos</p>
                </div>
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <Star className="text-[#16A8A8]" size={32} />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">4.9/5</p>
                  <p className="text-sm text-gray-500 mt-1">Calificación promedio en Google</p>
                </div>
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <Award className="text-[#16A8A8]" size={32} />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">25+</p>
                  <p className="text-sm text-gray-500 mt-1">Años de experiencia combinada</p>
                </div>
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <Heart className="text-[#16A8A8]" size={32} />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-500 mt-1">Comprometidos con tu salud y bienestar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="tratamientos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#16A8A8] font-medium tracking-wide text-sm uppercase mb-3">
              Tratamientos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Soluciones a la medida de tu sonrisa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Treatment Card 1 - Ortodoncia Invisible */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80"
                  alt="Ortodoncia Invisible"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Ortodoncia Invisible</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Alinea tu sonrisa de forma discreta y cómoda con Invisalign.
                </p>
                <a href="#contacto" className="text-[#16A8A8] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Treatment Card 2 - Diseño de Sonrisa */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581585829899-d3641e43e7b6?w=400&q=80"
                  alt="Diseño de Sonrisa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Diseño de Sonrisa</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Creamos sonrisas armónicas y naturales adaptadas a ti.
                </p>
                <a href="#contacto" className="text-[#16A8A8] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Treatment Card 3 - Implantes Dentales */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80"
                  alt="Implantes Dentales"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Implantes Dentales</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Recupera tu confianza y funcionalidad con resultados duraderos.
                </p>
                <a href="#contacto" className="text-[#16A8A8] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Treatment Card 4 - Blanqueamiento Dental */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80"
                  alt="Blanqueamiento Dental"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Blanqueamiento Dental</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Ilumina tu sonrisa con tratamientos seguros y efectivos.
                </p>
                <a href="#contacto" className="text-[#16A8A8] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Treatment Card 5 - Carillas de Porcelana */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80"
                  alt="Carillas de Porcelana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Carillas de Porcelana</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Corrige imperfecciones y consigue una sonrisa impecable.
                </p>
                <a href="#contacto" className="text-[#16A8A8] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#16A8A8] font-medium tracking-wide text-sm uppercase mb-3">
                Tecnología Avanzada
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Equipamiento de Última Generación
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Invertimos constantemente en la tecnología más avanzada para ofrecerte tratamientos más precisos,
                rápidos y cómodos.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#16A8A8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Radiografías Digitales 3D</h4>
                    <p className="text-gray-500">Diagnóstico preciso con mínima exposición a radiación.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#16A8A8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Escáner Intraoral</h4>
                    <p className="text-gray-500">Impresiones digitales sin molestias ni materiales incómodos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#16A8A8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Láser Dental</h4>
                    <p className="text-gray-500">Tratamientos menos invasivos y recuperación más rápida.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909615957-1e3e7c0f7a71?w=600&q=80"
                alt="Tecnología dental avanzada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#16A8A8] font-medium tracking-wide text-sm uppercase mb-3">
              Nuestro Equipo
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Especialistas en tu sonrisa
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80"
                  alt="Dra. María González"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Dra. María González</h3>
              <p className="text-sm text-gray-500">Directora Médica</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80"
                  alt="Dr. Carlos Rodríguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Dr. Carlos Rodríguez</h3>
              <p className="text-sm text-gray-500">Especialista en Ortodoncia</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80"
                  alt="Dra. Ana Martínez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Dra. Ana Martínez</h3>
              <p className="text-sm text-gray-500">Especialista en Endodoncia</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80"
                  alt="Dra. Laura Sánchez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Dra. Laura Sánchez</h3>
              <p className="text-sm text-gray-500">Odontología Estética</p>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80"
                  alt="Dr. Miguel Torres"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Dr. Miguel Torres</h3>
              <p className="text-sm text-gray-500">Implantología</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#16A8A8] font-medium tracking-wide text-sm uppercase mb-3">
                Contáctanos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Agenda tu Consulta Gratuita
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Estamos aquí para ayudarte. Contáctanos hoy y da el primer paso hacia la sonrisa que siempre soñaste.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#16A8A8]/10 rounded-full flex items-center justify-center">
                    <Phone className="text-[#16A8A8]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-500">+34 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#16A8A8]/10 rounded-full flex items-center justify-center">
                    <Mail className="text-[#16A8A8]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-500">info@project1788484015687.es</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#16A8A8]/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-[#16A8A8]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dirección</p>
                    <p className="text-gray-500">Calle Principal 123, Madrid, España</p>
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
              <span className="text-xl font-bold mb-4 block">Project 1788484015687</span>
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
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Ortodoncia Invisible</a></li>
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Diseño de Sonrisa</a></li>
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Implantes</a></li>
                <li><a href="#tratamientos" className="text-gray-400 hover:text-[#16A8A8] transition-colors">Carillas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+34 912 345 678</li>
                <li>info@project1788484015687.es</li>
                <li>Calle Principal 123</li>
                <li>Madrid, España</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Project 1788484015687. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
