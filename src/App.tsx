/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Sun, 
  Radio, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const E_PH = "OTI2IDI1MCA3MDk=";
const E_WA = "aHR0cHM6Ly93YS5tZS8zNDkyNjI1MDcwOQ==";
const E_EM = "aW5mb0BpbnRlbGVjLWNpdWRhZHJlYWwuZXM=";

const dS = (e: string) => typeof window !== 'undefined' ? window.atob(e) : e;

const getWAUrl = (msg?: string) => {
  const base = dS(E_WA);
  return msg ? `${base}?text=${encodeURIComponent(msg)}` : base;
};

const BRAND_COLOR = "#D60081";

interface NavProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <img 
            src="https://raw.githubusercontent.com/websprintt/intelec-lamancha/c49533572e510fd576f116a7b8762fa9ddca867b/img/LogoTransparente.png" 
            alt="Intelec" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Servicios', 'Nosotros', 'Contacto'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            onClick={(e) => { e.preventDefault(); window.open(getWAUrl("¡Hola! Necesito un electricista urgente en Ciudad Real."), '_blank', 'noopener,noreferrer'); }}
            className="btn-primary py-3 px-8 text-sm shadow-primary/20" 
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" /> 
            Urgente
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900 bg-white/50 backdrop-blur rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl overflow-hidden border-t border-slate-100"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#servicios" className="text-lg font-bold" onClick={() => setIsOpen(false)}>Servicios</a>
              <a href="#nosotros" className="text-lg font-bold" onClick={() => setIsOpen(false)}>Nosotros</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.location.href = `tel:${dS(E_PH).replace(/\s/g, '')}`; }} className="btn-secondary w-full">
                <Phone className="w-5 h-5" /> Llamar ahora
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.open(getWAUrl("Hola, necesito información sobre vuestros servicios eléctricos."), '_blank', 'noopener,noreferrer'); }} className="btn-primary w-full shadow-primary/20">
                <MessageCircle className="w-5 h-5" /> WhatsApp Directo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Blob = ({ className, color }: { className: string, color: string }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      x: [0, 50, 0],
      y: [0, 30, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{ backgroundColor: color }}
  />
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
    {/* Dynamic Background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Blob className="w-96 h-96 -top-20 -left-20" color="#D60081" />
      <Blob className="w-[500px] h-[500px] top-1/2 -right-20" color="#1E293B" />
      <Blob className="w-80 h-80 bottom-0 left-1/3" color="#D60081" />
      <div className="absolute inset-0 bg-white/40" />
    </div>

    <div className="section-padding relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Urgencias 24h Ciudad Real
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
          Electricistas en <br />
          <span className="text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Ciudad Real.</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
          Más de 30 años instalando y solucionando problemas eléctricos en hogares y empresas. Su técnico de confianza en menos de 24 horas.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-12">
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            onClick={(e) => { e.preventDefault(); window.location.href = `tel:${dS(E_PH).replace(/\s/g, '')}`; }}
            className="btn-primary text-lg px-10 shadow-xl shadow-primary/20"
            aria-label={`Llamar por teléfono`}
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Llamar YA
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            onClick={(e) => { e.preventDefault(); window.open(getWAUrl("¡Hola Intelec! Necesito un electricista urgente en Ciudad Real."), '_blank', 'noopener,noreferrer'); }}
            className="btn-secondary text-lg px-10"
            aria-label="Enviar mensaje directo por WhatsApp"
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
              <MessageCircle className="w-5 h-5 transition-transform" />
            </motion.div>
            Presupuesto Libre
          </motion.a>
        </div>

        <div className="flex items-center gap-8 grayscale opacity-50">
          <div className="text-xs font-black uppercase tracking-widest">Empresa Autorizada</div>
          <div className="text-xs font-black uppercase tracking-widest">+30 Años</div>
          <div className="text-xs font-black uppercase tracking-widest">Garantía 100%</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotateY: 15, x: 50 }}
        animate={{ opacity: 1, rotateY: 0, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="relative perspective-1000 hidden lg:block"
      >
        <div className="relative group max-w-sm ml-auto">
          <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
          <div className="relative glass-card p-3 rounded-[35px] shadow-2xl transform transition-transform duration-700 hover:rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
              alt="Electricista profesional trabajando"
              className="rounded-[28px] w-full aspect-[4/5] object-cover shadow-inner"
              referrerPolicy="no-referrer"
            />
            {/* Overlay UI elements */}
            <div className="absolute top-10 -left-8 glass-card p-4 rounded-xl shadow-2xl animate-float">
              <div className="text-2xl font-display font-black text-primary">⚡ 24h</div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Llegamos rápido</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-slate-900 py-16 overflow-hidden relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#D6008115_0%,transparent_50%)]" />
    <motion.div 
      initial={{ x: "0%" }}
      animate={{ x: ["0%", "-1%", "0%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10"
    >
      {[
        { label: "Experiencia Real", value: "+30", suffix: "Años" },
        { label: "Casos de Éxito", value: "10k", suffix: "+" },
        { label: "Disponibilidad", value: "24", suffix: "/7" },
        { label: "Garantía Post-Venta", value: "100", suffix: "%" },
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="text-center md:text-left border-l border-white/10 pl-6 lg:hover:border-primary transition-all duration-300"
        >
          <div className="flex items-baseline gap-1 justify-center md:justify-start">
            <span className="text-5xl font-display font-black text-white">{stat.value}</span>
            <span className="text-primary font-bold text-xl">{stat.suffix}</span>
          </div>
          <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2 leading-none">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const Services = () => (
  <section id="servicios" className="section-padding overflow-hidden">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
      <div className="max-w-2xl">
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">Lo que hacemos</h2>
        <h3 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter">
          Servicios que impulsan <br /> <span className="opacity-40 italic">tu tranquilidad.</span>
        </h3>
      </div>
      <p className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed">
        Soluciones integrales certificadas con los más altos estándares de seguridad y eficiencia energética.
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="bento-grid min-h-[800px]">
      {/* 1. Averías Urgentes (Large Card) */}
      <motion.div 
        whileHover={{ y: -5, scale: 1.01 }}
        className="md:col-span-4 md:row-span-1 bg-slate-900 border-2 border-white/5 p-10 rounded-[40px] relative overflow-hidden group shadow-2xl shadow-black/50"
      >
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000 grayscale inverse">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-125 duration-700 pointer-events-none">
          <Clock className="w-64 h-64 text-primary" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }} 
              className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20"
            >
              <Zap className="text-white w-8 h-8" />
            </motion.div>
            <h4 className="text-3xl font-display font-black mb-4 text-white group-hover:text-primary transition-colors">Averías Urgentes 24/7</h4>
            <p className="text-slate-400 max-sm text-lg mb-8 leading-relaxed font-bold">
              Si se ha ido la luz o tienes un cortocircuito, no esperes. Estamos en Ciudad Real y llegamos en tiempo récord.
            </p>
          </div>
          <motion.div whileHover={{ x: 5 }} className="flex gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              onClick={(e) => { e.preventDefault(); window.open(getWAUrl("¡Hola Intelec! Tengo una urgencia eléctrica ahora mismo en Ciudad Real."), '_blank', 'noopener,noreferrer'); }}
              className="bg-primary text-white text-[10px] font-black px-6 py-3 rounded-full uppercase tracking-widest shadow-lg shadow-primary/30 hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              <Phone className="w-3 h-3" /> Llamada de Emergencia
            </motion.a>
            <span className="bg-white/10 text-white text-[10px] font-black px-6 py-3 rounded-full uppercase tracking-widest shadow-lg">Toda la Provincia</span>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. Energía Solar (Tall Card) */}
      <motion.div 
        whileHover={{ y: -5, scale: 1.01 }}
        className="md:col-span-2 md:row-span-2 bg-slate-900 border-2 border-white/5 p-10 rounded-[40px] relative overflow-hidden group shadow-2xl shadow-black/50"
      >
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000 grayscale">
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-125 duration-700 pointer-events-none">
          <Sun className="w-64 h-64 text-amber-500" />
        </div>
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner"
            >
              <Sun className="text-amber-500 w-8 h-8" />
            </motion.div>
            <h4 className="text-3xl font-display font-black mb-4 text-white group-hover:text-amber-500 transition-colors">Energía Solar</h4>
            <p className="text-slate-400 leading-relaxed font-bold text-lg mb-8">
              Ahorra hasta un 70% en tu factura. Instalamos sistemas inteligentes de autoconsumo fotovoltaico.
            </p>
          </div>
          <div>
            <motion.a 
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              onClick={(e) => { e.preventDefault(); window.open(getWAUrl("Hola Intelec, me gustaría pedir presupuesto para paneles solares."), '_blank', 'noopener,noreferrer'); }}
              className="bg-primary text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] inline-flex items-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/40"
            >
              Consultar Ahorro <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* 3. Instalaciones (Small Card) */}
      <motion.div 
        whileHover={{ y: -5, scale: 1.01 }}
        className="md:col-span-2 md:row-span-1 bg-slate-900 border-2 border-white/5 p-10 rounded-[40px] group shadow-2xl shadow-black/50 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000 grayscale">
          <img src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=1200&q=80" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1, y: -5 }}
            className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors shadow-inner"
          >
            <Award className="text-slate-400 group-hover:text-primary transition-colors w-7 h-7" />
          </motion.div>
          <h4 className="text-2xl font-display font-black mb-1 text-white group-hover:text-primary transition-colors">Reformas y Obra Nueva</h4>
          <p className="text-slate-400 leading-relaxed font-bold mb-4">
            Viviendas y locales comerciales. Boletines oficiales.
          </p>
          <motion.a 
            whileHover={{ x: 3 }}
            href="#" 
            onClick={(e) => { e.preventDefault(); window.open(getWAUrl("Hola! Me gustaría pedir presupuesto para una reforma eléctrica."), '_blank', 'noopener,noreferrer'); }} 
            className="text-xs font-black uppercase text-primary tracking-widest flex items-center gap-1"
          >
            Saber más <ChevronRight className="w-3 h-3" />
          </motion.a>
        </div>
      </motion.div>

      {/* 4. Telecomunicaciones (Small Card) */}
      <motion.div 
        whileHover={{ y: -5, scale: 1.01 }}
        className="md:col-span-2 md:row-span-1 bg-slate-900 border-2 border-white/5 p-10 rounded-[40px] group shadow-2xl shadow-black/50 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000 grayscale">
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: -10 }}
            className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors shadow-inner"
          >
            <Radio className="text-slate-400 group-hover:text-primary transition-colors w-7 h-7" />
          </motion.div>
          <h4 className="text-2xl font-display font-black mb-1 text-white group-hover:text-primary transition-colors">Voz y Datos</h4>
          <p className="text-slate-400 leading-relaxed font-bold mb-4">
            Antenas, redes WiFi y cableado de datos.
          </p>
          <motion.a 
            whileHover={{ x: 3 }}
            href="#" 
            onClick={(e) => { e.preventDefault(); window.open(getWAUrl("Hola, necesito ayuda técnica con mi antena/conexión de red."), '_blank', 'noopener,noreferrer'); }} 
            className="text-xs font-black uppercase text-primary tracking-widest flex items-center gap-1"
          >
            Solicitar ayuda <ChevronRight className="w-3 h-3" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhyUs = () => (
  <section id="nosotros" className="section-padding">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="relative group">
        <div className="absolute -inset-10 bg-primary/5 rounded-[60px] blur-3xl group-hover:bg-primary/10 transition-all duration-1000" />
        <div className="relative glass-card p-6 rounded-[48px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
            alt="Confianza y seriedad - Intelec Ciudad Real"
            className="rounded-[32px] w-full aspect-square object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40"
            >
              <ShieldCheck className="w-10 h-10" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Confianza Local</h2>
          <h3 className="text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.95]">
            La seriedad de lo <br /> bien hecho.
          </h3>
        </div>
        
        <div className="space-y-10">
          {[
            { 
              title: "Técnicos de Élite", 
              desc: "Personal propio altamente cualificado. No subcontratamos tu seguridad.",
              icon: <Zap />
            },
            { 
              title: "Transparencia Total", 
              desc: "Presupuestos cerrados sin sorpresas. Facturación clara y detallada.",
              icon: <CheckCircle2 />
            },
            { 
              title: "Certificación Oficial", 
              desc: "Empresa autorizada por el Ministerio de Industria. Boletines en el acto.",
              icon: <Award />
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-slate-50 p-4 rounded-2xl group-hover:bg-primary/10 transition-colors shadow-inner shrink-0"
              >
                {React.cloneElement(item.icon as React.ReactElement, { className: "text-primary w-6 h-6" })}
              </motion.div>
              <div className="space-y-1 pt-1">
                <h4 className="text-xl font-display font-black text-slate-900">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section id="contacto" className="section-padding">
    <div className="relative bg-slate-900 rounded-[48px] p-12 md:p-24 overflow-hidden text-center shadow-2xl">
      {/* Background patterns */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto space-y-10"
      >
        <div className="space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary">¿Hablamos?</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-none">
            Tu electricista de siempre, <br /> <span className="opacity-40">ahora a un mensaje.</span>
          </h3>
        </div>
        
        <p className="text-slate-400 text-lg font-medium leading-relaxed">
          Ya sea una avería crítica o un proyecto de energía solar, estamos listos para asesorarte.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px #D6008180" }}
            whileTap={{ scale: 0.95 }}
            href="#"
            onClick={(e) => { e.preventDefault(); window.open(getWAUrl("¡Hola! Me gustaría ponerme en contacto con Intelec para un servicio eléctrico."), '_blank', 'noopener,noreferrer'); }}
            className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
            aria-label="Contactar por WhatsApp ahora"
          >
            <MessageCircle className="w-6 h-6 animate-bounce" /> WhatsApp Directo
          </motion.a>
          
          <div className="h-10 w-px bg-white/10 hidden md:block" />
          
          <div className="flex flex-col items-center md:items-start text-white">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">O llámanos directamente</span>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.location.href = `tel:${dS(E_PH).replace(/\s/g, '')}`; }}
              className="text-2xl font-display font-black hover:text-primary transition-colors" 
              aria-label={`Llamar directamente al número`}
            >
              {dS(E_PH)}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="bg-slate-950 text-white pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
      <div className="md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-display font-extrabold tracking-tighter">INTELEC</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Líderes en servicios eléctricos en Ciudad Real desde 1995. Tu seguridad eléctrica es nuestra prioridad.
        </p>
      </div>

      <div>
        <h5 className="font-bold mb-6 text-primary">Contacto</h5>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" /> 
            <div>
              Calle del Espino, 6<br/>
              13002 Ciudad Real<br/>
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Plus Code: X3RC+CG</span>
            </div>
          </li>
          <li className="flex items-center gap-3 text-white font-bold">
            <Phone className="w-4 h-4 text-primary" /> {dS(E_PH)}
          </li>
          <li className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-primary" /> 
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.location.href = `mailto:${dS(E_EM)}`; }}
              className="hover:text-primary transition-colors"
            >
              {dS(E_EM)}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="font-bold mb-6 text-primary">Horario</h5>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li className="flex justify-between">
            <span>Lunes - Viernes:</span>
            <span className="text-white">09:00 - 14:00</span>
          </li>
          <li className="flex justify-between">
            <span>Tardes:</span>
            <span className="text-white">17:00 - 20:00</span>
          </li>
          <li className="text-xs text-primary font-bold bg-primary/10 p-2 rounded">
            Atención de urgencias 24h sujeto a disponibilidad inmediata.
          </li>
        </ul>
      </div>

      <div>
        <h5 className="font-bold mb-6 text-primary">Nuestra Ubicación</h5>
        <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-lg border border-white/5 h-40">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6202.471516528971!2d-3.9406866064208903!3d38.9871154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6bc369a348a81b%3A0xec3615f1754da47d!2sIntelec%20la%20Mancha%20S.L.!5e0!3m2!1ses-419!2ses!4v1778028959059!5m2!1ses-419!2ses" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Intelec Ciudad Real"
          ></iframe>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
      <p>© {new Date().getFullYear()} Intelec Electricidad. Todos los derechos reservados.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        <a href="#" className="hover:text-white transition-colors">Cookies</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <FinalCTA />
      <Footer />

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 flex gap-4 md:hidden">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.location.href = `tel:${dS(E_PH).replace(/\s/g, '')}`; }}
          className="flex-1 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-bold active:scale-95 transition-transform" 
          aria-label="Llamar ahora por teléfono"
        >
          <Phone className="w-5 h-5" /> Llamar
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.open(getWAUrl("¡Hola Intelec! Necesito asistencia eléctrica urgente."), '_blank', 'noopener,noreferrer'); }}
          className="flex-1 bg-green-500 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-bold active:scale-95 transition-transform" 
          aria-label="Enviar WhatsApp directo"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
