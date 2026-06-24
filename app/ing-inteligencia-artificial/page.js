"use client";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://numjvtzzfjzxquooncvv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51bWp2dHp6Zmp6eHF1b29uY3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1ODQ5NDIsImV4cCI6MjA5MzE2MDk0Mn0.OB6rFFQVL2OBUUVmyBF3SuLilwJUegw7xWTxgb_C2oI"
);

const LOGO_URL = "https://numjvtzzfjzxquooncvv.supabase.co/storage/v1/object/public/assets/online%20logo%201%20(1).png";

const RAZONES = [
  { num:"01", titulo:"Doble Respaldo Global", desc:"Gradúate con contenidos codiseñados por la universidad #1 en innovación de EE.UU. (ASU), asegurando un perfil internacional atractivo para empresas globales. Mismo título, doble valor." },
  { num:"02", titulo:"Inserción Laboral Inmediata", desc:"Domina de forma práctica las herramientas exactas que Intel, IBM y las empresas líderes demandan hoy — Python, Machine Learning, Deep Learning — ahorrando años de teoría obsoleta." },
  { num:"03", titulo:"Estudia sin sacrificar tu trabajo ni tu vida", desc:"Dos rutas de aprendizaje flexibles: termina en 3 o 4 años según tu disponibilidad. Con Coach Académico personal que te acompaña en cada paso, sin que te pierdas." },
  { num:"04", titulo:"Perfil ejecutivo desde el primer cuatrimestre", desc:"No solo programas — desarrollas visión estratégica. Materias de innovación, emprendimiento y liderazgo tecnológico que te posicionan como líder, no solo como técnico." },
  { num:"05", titulo:"9 de cada 10 egresados ya trabaja en IA", desc:"Tu título UAG tiene reconocimiento nacional e internacional. Con nuestra red de +200 convenios empresariales, la inserción laboral no es una promesa — es un resultado comprobado." },
  { num:"06", titulo:"Certificación internacional sin costo extra", desc:"Al cursar Gestión de la Innovación Sostenible, recibes una certificación gratuita de ASU avalada internacionalmente. Un diferenciador real en tu CV desde el primer año." },
  { num:"07", titulo:"Domina las herramientas que el mercado exige hoy", desc:"Machine Learning, IA Generativa, Visión Artificial, NLP, Cloud Computing — el plan de estudios está diseñado con los requerimientos exactos de la industria tecnológica global." },
];

const ICON_IA = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#7a2531" fillOpacity="0.08"/>
    <circle cx="24" cy="20" r="7" stroke="#7a2531" strokeWidth="2" fill="none"/>
    <path d="M17 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#7a2531" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 27v4M20 31h8M16 20h2M30 20h2M24 13v-2" stroke="#7a2531" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="20" r="2" fill="#7a2531"/>
  </svg>
);
const ICON_DATA = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#7a2531" fillOpacity="0.08"/>
    <rect x="13" y="30" width="6" height="8" rx="1" fill="#7a2531" fillOpacity="0.3" stroke="#7a2531" strokeWidth="1.5"/>
    <rect x="21" y="24" width="6" height="14" rx="1" fill="#7a2531" fillOpacity="0.5" stroke="#7a2531" strokeWidth="1.5"/>
    <rect x="29" y="16" width="6" height="22" rx="1" fill="#7a2531" stroke="#7a2531" strokeWidth="1.5"/>
    <path d="M13 14l8 6 8-4 8-5" stroke="#f59700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ICON_VISION = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#7a2531" fillOpacity="0.08"/>
    <path d="M10 24c0 0 5-9 14-9s14 9 14 9-5 9-14 9-14-9-14-9z" stroke="#7a2531" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="24" r="4" stroke="#7a2531" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="24" r="1.5" fill="#7a2531"/>
    <path d="M34 14l4-4M34 34l4 4" stroke="#f59700" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ICON_GEN = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#7a2531" fillOpacity="0.08"/>
    <path d="M24 10v6M24 32v6M10 24h6M32 24h6" stroke="#7a2531" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="6" stroke="#7a2531" strokeWidth="2" fill="none"/>
    <path d="M18 18l-4-4M30 18l4-4M18 30l-4 4M30 30l4 4" stroke="#f59700" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="2" fill="#7a2531"/>
  </svg>
);

const HABILIDADES = [
  { icon:<ICON_IA/>, titulo:"Diseña sistemas inteligentes", desc:"Diseñar e implementar sistemas basados en inteligencia artificial y aprendizaje automático." },
  { icon:<ICON_DATA/>, titulo:"Analiza y procesa datos", desc:"Analizar y procesar grandes volúmenes de datos para generar soluciones y apoyar la toma de decisiones." },
  { icon:<ICON_VISION/>, titulo:"Visión artificial y NLP", desc:"Desarrollar aplicaciones de visión artificial y procesamiento de lenguaje natural." },
  { icon:<ICON_GEN/>, titulo:"IA generativa", desc:"Implementar modelos de IA generativa y tecnologías emergentes en distintos sectores productivos." },
];

const CAMPO = [
  "Científico de Datos","Ingeniero de Machine Learning","Desarrollador de IA",
  "Especialista en NLP","Analista de Big Data","Arquitecto de Sistemas Inteligentes",
  "Investigador en IA","Consultor de Transformación Digital",
];

const MODALIDAD = [
  { svg:<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, titulo:"Networking y Comunidad Activa", desc:"Conéctate a través de eventos deportivos, sociales y académicos que enriquecen tu experiencia y amplían tu red profesional." },
  { svg:<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, titulo:"Aprendizaje a tu Ritmo", desc:"Estudia en entornos 100% digitales, elige tu propio ritmo y organiza tu tiempo y espacio sin horarios rígidos." },
  { svg:<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, titulo:"Acceso a tu Campus UAG", desc:"Aunque estudias online, siempre tendrás las puertas abiertas de tu Campus UAG para vivir actividades presenciales cuando lo necesites." },
];

const PLAN = [
  { c:1,  materias:["Aprendizaje en entornos virtuales","Álgebra y geometría analítica","Introducción a la programación"] },
  { c:2,  materias:["Fundamentos de programación","Lógica y filosofía de la ciencia","Cálculo diferencial"] },
  { c:3,  materias:["Física general","Gestión de la innovación sostenible","Matemáticas discretas"] },
  { c:4,  materias:["Antropología filosófica","Cálculo integral","Fundamentos de inteligencia artificial","Álgebra lineal"] },
  { c:5,  materias:["Ética profesional","Probabilidad y estadística","Programación orientada a objetos","Fundamentos de redes"] },
  { c:6,  materias:["Cultura y desarrollo de la innovación","Análisis y diseño de algoritmos","Diseño digital","Programación avanzada"] },
  { c:7,  materias:["Emprendimiento en la innovación","Diseño de bases de datos","Aprendizaje máquina","Ecuaciones diferenciales"] },
  { c:8,  materias:["Estructura de datos","Cálculo multivariable","Sistemas operativos","Señales y sistemas"] },
  { c:9,  materias:["Arquitectura de microcontroladores","Procesamiento digital de señales","Sistemas distribuidos","Proc. digital de imágenes"] },
  { c:10, materias:["Cómputo en la nube","Aprendizaje profundo","IoT con microprocesadores","Visión artificial"] },
  { c:11, materias:["Procesamiento de lenguaje natural","IA generativa","Optativa 1","Optativa 2"] },
  { c:12, materias:["Ciencia y tecnología de datos","Sistemas inteligentes","Optativa 3","Optativa 4"] },
];

const TESTIMONIOS = [
  { id:"sAABT9hrmZk", nombre:"Testimonio alumno UAG Online", programa:"Licenciatura Online · UAG" },
  { id:"mPG27Pudpj0", nombre:"Testimonio alumno UAG Online", programa:"Maestría Online · UAG" },
  { id:"yZyEWCOor8o", nombre:"Testimonio alumno UAG Online", programa:"Licenciatura Online · UAG" },
  { id:"hWjRcW-Q6Jk", nombre:"Testimonio alumno UAG Online", programa:"Programa Online · UAG" },
  { id:"gMpw632GYrI", nombre:"Testimonio alumno UAG Online", programa:"Ingeniería Online · UAG" },
];

const FAQS = [
  { q:"¿El título tiene validez oficial?", a:"Sí, tiene la misma validez oficial que los presenciales, avalados por la SEP y con el prestigio UAG." },
  { q:"¿Necesito ir al campus?", a:"No. Los programas son 100% online. Sin embargo, como estudiante UAG puedes acceder al campus y disfrutar de las instalaciones." },
  { q:"¿Cómo funciona Canvas?", a:"Campus Digital UAG con clases grabadas y en vivo, foros, recursos descargables y soporte técnico permanente." },
  { q:"¿Hay becas disponibles?", a:"Sí, existen opciones de beca y financiamiento disponibles también para estudiantes de modalidad en línea." },
  { q:"¿Puedo estudiar mientras trabajo?", a:"Sí, contamos con programas 100% en línea con horarios flexibles para adaptarse a tu vida profesional." },
  { q:"¿Cuándo es el próximo inicio?", a:"El próximo inicio es el 7 de septiembre de 2026. Contáctanos para asegurar tu lugar con la beca disponible." },
];

export default function IAPage() {
  const [scrollY, setScrollY]       = useState(0);
  const [formData, setFormData]     = useState({ nombre:"", email:"", telefono:"" });
  const [loading, setLoading]       = useState(false);
  const [status, setStatus]         = useState(null);
  const [openFaq, setOpenFaq]       = useState(null);
  const [hoveredC, setHoveredC]     = useState(null);
  const [videoOpen, setVideoOpen]   = useState(false);
  const [testVideo, setTestVideo]     = useState(null);
  const admRef                      = useRef(null);
  const audioRef                    = useRef(null);
  const [admVisible, setAdmVisible] = useState(false);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!admRef.current) return;
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setAdmVisible(true); }, { threshold:0.15 });
    obs.observe(admRef.current);
    return () => obs.disconnect();
  }, []);

  const enviar = async e => {
    e.preventDefault(); setLoading(true);
    try {
      const { error } = await supabase.from("solicitudes").insert([{
        nombre:formData.nombre, email:formData.email,
        telefono:formData.telefono,
        programa:"Ingeniería en Inteligencia Artificial",
        fecha:new Date().toISOString()
      }]);
      if(error) throw error;
      setStatus("ok");
      setFormData({ nombre:"", email:"", telefono:"" });
    } catch { setStatus("err"); }
    finally { setLoading(false); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;600&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { font-family:'Open Sans',Arial,sans-serif; background:#fff; color:#333; overflow-x:hidden; }
        h1,h2,h3,h4,h5 { font-family:'Outfit',Arial,sans-serif; }
        ::selection { background:#7a2531; color:#fff; }
        a { color:inherit; text-decoration:none; }

        /* NAV */
        .nav-ia {
          position:fixed; top:0; left:0; right:0; z-index:500;
          background:#fff; border-bottom:2px solid #f59700;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 2rem; height:70px;
          box-shadow:0 2px 8px rgba(0,0,0,0.08);
          transition:box-shadow 0.3s;
        }
        .nav-ia.scrolled { box-shadow:0 4px 16px rgba(0,0,0,0.12); }

        .btn-orange {
          font-family:'Outfit',Arial,sans-serif; font-size:0.85rem; font-weight:700;
          background:#f59700; color:#fff; border:none;
          padding:0.6rem 1.4rem; border-radius:4px; cursor:pointer;
          text-transform:uppercase; letter-spacing:0.04em;
          transition:background 0.2s, transform 0.15s;
        }
        .btn-orange:hover { background:#e08800; transform:translateY(-1px); }

        .btn-red {
          font-family:'Outfit',Arial,sans-serif; font-size:0.85rem; font-weight:700;
          background:#7a2531; color:#fff; border:none;
          padding:0.6rem 1.4rem; border-radius:4px; cursor:pointer;
          text-transform:uppercase; letter-spacing:0.04em;
          transition:background 0.2s, transform 0.15s;
        }
        .btn-red:hover { background:#5a1a25; transform:translateY(-1px); }

        /* CAMPO */
        .form-field {
          width:100%; padding:0.75rem 0.9rem;
          border:1px solid #ddd; border-radius:4px;
          font-family:'Open Sans',Arial,sans-serif; font-size:0.88rem;
          color:#333; background:#fff; outline:none;
          transition:border-color 0.2s;
        }
        .form-field:focus { border-color:#f59700; box-shadow:0 0 0 2px rgba(245,151,0,0.15); }
        .form-field::placeholder { color:#aaa; }

        /* RAZONES */
        .razon-row {
          display:flex; gap:1.5rem; align-items:flex-start;
          padding:1.5rem 0; border-bottom:1px solid #eee;
        }
        .razon-row:last-child { border-bottom:none; }
        .razon-num {
          font-family:'Outfit',Arial,sans-serif; font-size:1.5rem; font-weight:900;
          color:#f59700; min-width:40px; line-height:1;
        }

        /* PLAN CIRCLES */
        .plan-circle {
          width:64px; height:64px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-family:'Outfit',Arial,sans-serif; font-size:1.2rem; font-weight:800;
          cursor:pointer; margin:0 auto; position:relative;
          transition:transform 0.2s, box-shadow 0.2s;
          border:3px solid #fff;
        }
        .plan-circle:hover { transform:scale(1.12); }
        .plan-tooltip {
          position:absolute; bottom:calc(100% + 10px); left:50%;
          transform:translateX(-50%);
          background:#fff; border-radius:8px; padding:1rem 1.1rem;
          min-width:190px; box-shadow:0 8px 32px rgba(0,0,0,0.14);
          border:2px solid #f59700;
          opacity:0; visibility:hidden; transition:opacity 0.2s;
          z-index:100; pointer-events:none;
        }
        .plan-tooltip.show { opacity:1; visibility:visible; }
        .plan-tooltip::after {
          content:''; position:absolute; top:100%; left:50%;
          transform:translateX(-50%);
          border:8px solid transparent; border-top-color:#f59700;
        }

        /* PASOS */
        .paso-card {
          background:#f5f5f5; border-radius:8px; padding:1.5rem;
          opacity:0; transform:translateY(20px);
          transition:opacity 0.5s ease, transform 0.5s ease;
        }
        .paso-card.visible { opacity:1; transform:translateY(0); }
        .paso-num {
          font-family:'Outfit',Arial,sans-serif; font-size:1.6rem;
          font-weight:900; color:#7a2531; margin-bottom:0.6rem;
        }

        /* FAQ */
        .faq-item {
          border-bottom:1px solid #eee;
        }
        .faq-btn {
          width:100%; display:flex; align-items:center; justify-content:space-between;
          padding:1.1rem 0; background:none; border:none; cursor:pointer;
          text-align:left; gap:1rem;
        }
        .faq-answer {
          overflow:hidden; transition:max-height 0.35s ease;
        }

        /* STICKY */
        .sticky-bar {
          position:fixed; bottom:0; left:0; right:0; z-index:400;
          background:#7a2531; padding:0.7rem 2rem;
          display:flex; align-items:center; justify-content:space-between;
          gap:1rem; transform:translateY(100%);
          transition:transform 0.4s cubic-bezier(0.16,1,0.3,1);
          border-top:3px solid #f59700;
        }
        .sticky-bar.show { transform:translateY(0); }

        /* RESPONSIVE */
        @media(max-width:900px){
          .hero-grid { grid-template-columns:1fr !important; }
          .intro-benefit-grid { grid-template-columns:1fr !important; }
          .social-proof-grid { grid-template-columns:1fr !important; }
          .hero-man-img { height:75% !important; opacity:0.35 !important; right:0 !important; }
          .uag-exp-grid { grid-template-columns:1fr 1fr !important; }
          .asu-chat-grid { grid-template-columns:1fr !important; gap:1.5rem !important; }
          .stats-ia-grid  { grid-template-columns:repeat(3,1fr) !important; }
          .plan-cards-grid { grid-template-columns:repeat(2,1fr) !important; }
          .plan-accordion   { display:none !important; }
          .habilidades-grid { grid-template-columns:1fr 1fr !important; }
          .campo-grid { grid-template-columns:1fr 1fr !important; }
          .modal-grid { grid-template-columns:1fr !important; }
          .plan-grid { grid-template-columns:repeat(6,1fr) !important; }
          .pasos-grid { grid-template-columns:1fr 1fr !important; }
        }
        @media(max-width:600px){
          .habilidades-grid { grid-template-columns:1fr !important; }
          .uag-exp-grid { grid-template-columns:1fr !important; }
          .stats-ia-grid  { grid-template-columns:repeat(2,1fr) !important; }
          .plan-cards-grid { grid-template-columns:1fr 1fr !important; display:none !important; }
          .plan-accordion   { display:flex !important; }
          .campo-grid { grid-template-columns:1fr !important; }
          .plan-grid { grid-template-columns:repeat(4,1fr) !important; }
          .pasos-grid { grid-template-columns:1fr !important; }
          .nav-ia { padding:0 1rem; }
          .sticky-bar { flex-direction:column; padding:0.8rem 1rem; gap:0.5rem; }
        }
        @keyframes mayaBar0 { 0%,100%{height:8px} 50%{height:20px} }
        @keyframes mayaBar1 { 0%,100%{height:14px} 50%{height:8px} }
        @keyframes mayaBar2 { 0%,100%{height:6px} 50%{height:18px} }
        @keyframes mayaBar3 { 0%,100%{height:18px} 50%{height:8px} }
        @keyframes mayaBar4 { 0%,100%{height:10px} 50%{height:20px} }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`nav-ia ${scrollY>50?"scrolled":""}`}>
        <div></div>
        <img src={LOGO_URL} alt="UAG Online" style={{ height:"52px" }} />
        <a href="#formulario">
          <button className="btn-orange">Habla con un asesor</button>
        </a>
      </nav>

      {/* ── HERO / BANNER ── */}
      <section style={{ marginTop:"70px", background:"#7a2531", padding:"0" }}>
        <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 400px", minHeight:"380px" }}>
          {/* Izq — Background imagen + MAN.png + texto encima */}
          <div style={{ position:"relative", overflow:"hidden", minHeight:"420px", display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
            {/* Imagen de fondo del banner */}
            <img src="https://numjvtzzfjzxquooncvv.supabase.co/storage/v1/object/public/assets/BACK%20BANNERS.png"
              alt="" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
            {/* Overlay oscuro para legibilidad */}
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(90,10,20,0.82) 0%,rgba(122,37,49,0.65) 60%,rgba(0,0,0,0.3) 100%)" }} />
            {/* Imagen del estudiante — lado derecho */}
            <img src="https://numjvtzzfjzxquooncvv.supabase.co/storage/v1/object/public/assets/MAN.png"
              alt="Estudiante UAG" className="hero-man-img"
              style={{ position:"absolute", bottom:0, right:"2%", height:"105%", objectFit:"contain", objectPosition:"bottom", zIndex:1, pointerEvents:"none" }} />
            {/* Contenido de texto v2 — headline de beneficio */}
            <div style={{ position:"relative", zIndex:2, padding:"3rem 3rem 3rem" }}>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.8rem", fontWeight:700, color:"#f59700", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"1rem" }}>
                LIC. EN · UAG ONLINE
              </p>
              <h1 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.8rem,4vw,3.2rem)", fontWeight:900, color:"#fff", lineHeight:1.08, letterSpacing:"-0.02em", marginBottom:"1rem" }}>
                Domina el futuro tecnológico<br/>
                con la Ingeniería en<br/>
                <span style={{ color:"#f59700" }}>Inteligencia Artificial</span><br/>
                Online de la UAG
              </h1>
              <p style={{ fontSize:"0.95rem", color:"rgba(255,255,255,0.82)", lineHeight:1.7, maxWidth:"480px", marginBottom:"2rem" }}>
                Diseña sistemas inteligentes, lidera proyectos de IA y posiciona tu carrera en la industria tecnológica global — sin dejar de trabajar.
              </p>
              {/* CTA inmediato arriba del fold — MEJORA 2 */}
              <div style={{ display:"flex", gap:"0.8rem", flexWrap:"wrap", marginBottom:"1.5rem" }}>
                <a href="#formulario">
                  <button style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1rem", fontWeight:800,
                    background:"#f59700", color:"#fff", border:"none",
                    padding:"0.85rem 2rem", borderRadius:"6px", cursor:"pointer",
                    boxShadow:"0 4px 20px rgba(245,151,0,0.45)",
                    transition:"background 0.2s, transform 0.15s",
                    textTransform:"uppercase", letterSpacing:"0.04em" }}
                    onMouseEnter={e=>{ e.currentTarget.style.background="#e08800"; e.currentTarget.style.transform="translateY(-2px)"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background="#f59700"; e.currentTarget.style.transform="none"; }}>
                    Inicia tu proceso hoy →
                  </button>
                </a>
                <a href="#formulario">
                  <button style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.88rem", fontWeight:700,
                    background:"transparent", color:"#fff", border:"2px solid rgba(255,255,255,0.5)",
                    padding:"0.85rem 1.5rem", borderRadius:"6px", cursor:"pointer",
                    transition:"border-color 0.2s" }}
                    onMouseEnter={e=>e.currentTarget.style.borderColor="#fff"}
                    onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.5)"}>
                    Investiga becas disponibles
                  </button>
                </a>
              </div>
              {/* Trust pills */}
              <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
                {["✓ Inicio sep 2026","✓ Beca + Bono","✓ 100% Online","✓ Título SEP"].map((t,i)=>(
                  <span key={i} style={{ fontSize:"0.75rem", fontWeight:600, color:"rgba(255,255,255,0.75)", background:"rgba(255,255,255,0.08)", borderRadius:"100px", padding:"0.25rem 0.7rem", border:"1px solid rgba(255,255,255,0.15)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Der — Formulario */}
          <div id="formulario" style={{ background:"#fff", padding:"2.5rem 2rem", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1.25rem", fontWeight:800, color:"#333", marginBottom:"0.3rem" }}>
              Solicita información
            </h2>
            <p style={{ fontSize:"0.82rem", color:"#888", marginBottom:"1.4rem" }}>
              Sin costo · Te contactamos en menos de 24 hrs
            </p>
            <form onSubmit={enviar} noValidate>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                {[
                  { label:"Nombre completo *",  name:"nombre",   type:"text",  ph:"Tu nombre" },
                  { label:"Correo electrónico *", name:"email",  type:"email", ph:"correo@ejemplo.com" },
                  { label:"Teléfono *",           name:"telefono",type:"tel",  ph:"+52 33 …" },
                ].map(f=>(
                  <div key={f.name}>
                    <label style={{ fontSize:"0.75rem", fontWeight:600, color:"#555", display:"block", marginBottom:"0.25rem" }}>{f.label}</label>
                    <input className="form-field" type={f.type} placeholder={f.ph}
                      value={formData[f.name]} onChange={e=>setFormData({...formData,[f.name]:e.target.value})} required />
                  </div>
                ))}
                {status==="ok" && <div style={{ background:"#f0fdf4", border:"1px solid #86efac", borderRadius:"4px", padding:"0.6rem 0.85rem", color:"#166534", fontSize:"0.82rem", fontWeight:600 }}>✅ ¡Recibido! Te contactamos pronto.</div>}
                {status==="err" && <div style={{ background:"#fef2f2", border:"1px solid #fca5a5", borderRadius:"4px", padding:"0.6rem 0.85rem", color:"#991b1b", fontSize:"0.82rem", fontWeight:600 }}>❌ Error. Intenta de nuevo.</div>}
                <button type="submit" className="btn-orange" disabled={loading} style={{ width:"100%", padding:"0.85rem", fontSize:"0.92rem" }}>
                  {loading?"Enviando…":"INSCRÍBETE YA"}
                </button>
                <p style={{ fontSize:"0.68rem", color:"#bbb", textAlign:"center" }}>Al enviar aceptas nuestra política de privacidad.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── INTRO v2 — beneficios claros ── */}
      <section style={{ padding:"4rem 2rem", background:"#fff", maxWidth:"1100px", margin:"0 auto" }}>

        {/* Bloque de beneficio principal */}
        <div className="intro-benefit-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"center", marginBottom:"3rem" }}>
          <div>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.2rem,2.5vw,1.7rem)", fontWeight:800, color:"#333", lineHeight:1.3, marginBottom:"1rem" }}>
              Dirige el futuro de la tecnología.
            </p>
            <p style={{ fontSize:"0.92rem", color:"#555", lineHeight:1.8, marginBottom:"1rem" }}>
              Aquí no solo estudias Inteligencia Artificial — te preparas para liderar la transformación digital del mundo. Con el respaldo de la UAG y Arizona State University, dominarás las herramientas exactas que Intel, IBM y las empresas líderes demandan hoy.
            </p>
            <a href="#formulario">
              <button className="btn-orange" style={{ marginTop:"0.5rem" }}>Solicita información gratis →</button>
            </a>
          </div>
          {/* Métricas de social proof — MEJORA 5 */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
            {[
              { num:"9/10", label:"egresados consigue empleo en menos de 1 año", color:"#7a2531" },
              { num:"90%", label:"de estudiantes obtiene beca o apoyo financiero", color:"#f59700" },
              { num:"#1", label:"Universidad en innovación según alianza con ASU", color:"#7a2531" },
              { num:"100%", label:"online — sin horarios rígidos ni clases obligatorias", color:"#f59700" },
            ].map((m,i)=>(
              <div key={i} style={{ padding:"1.2rem", background:"#f9f9f9", borderRadius:"10px", border:`2px solid ${m.color}22` }}>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1.8rem", fontWeight:900, color:m.color, lineHeight:1, marginBottom:"0.3rem" }}>{m.num}</p>
                <p style={{ fontSize:"0.78rem", color:"#666", lineHeight:1.4 }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ paddingTop:"2.5rem", borderTop:"2px solid #f59700" }}>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1rem", fontWeight:700, color:"#f59700", marginBottom:"0.3rem" }}>Crea, Innova y Lidera</p>
          <h2 style={{ fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333", marginBottom:"2rem", lineHeight:1.3 }}>
            Forma parte de la generación que transforma la tecnología en oportunidades reales para la sociedad.
          </h2>

          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1rem", fontWeight:700, color:"#555", fontStyle:"italic", marginBottom:"1.5rem" }}>
            ¿Por qué estudiar Ingeniería en Inteligencia Artificial Online en la UAG?
          </p>

          <div style={{ display:"flex", flexDirection:"column" }}>
            {RAZONES.map((r,i)=>(
              <div key={i} className="razon-row">
                <span className="razon-num">{r.num}</span>
                <div>
                  <p style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.95rem", color:"#333", marginBottom:"0.3rem" }}>
                    {r.titulo}
                  </p>
                  <p style={{ fontSize:"0.87rem", color:"#666", lineHeight:1.7 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LO QUE TE HARÁ IMPARABLE ── */}
      <section style={{ padding:"4rem 0 4rem", background:"#fff" }}>
        <div>
          <div style={{ background:"#7a2531", padding:"2.5rem 3rem", borderRadius:"0", marginBottom:"3rem", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"40%", background:"linear-gradient(90deg,transparent,rgba(0,0,0,0.15))" }} />
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,4vw,2.5rem)", fontWeight:900, color:"#fff", position:"relative", zIndex:1 }}>
              LO QUE TE HARÁ{" "}
              <span style={{ color:"#f59700", fontStyle:"italic", fontWeight:900 }}>imparable</span>
            </p>
            <div style={{ width:"80px", height:"3px", background:"#f59700", marginTop:"1rem", position:"relative", zIndex:1 }} />
          </div>

          <div className="habilidades-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem", maxWidth:"1100px", margin:"0 auto", padding:"0 2rem" }}>
            {HABILIDADES.map((h,i)=>(
              <div key={i} style={{ textAlign:"center", padding:"0 0.5rem" }}>
                <div style={{ display:"flex", justifyContent:"center", marginBottom:"1.5rem" }}>{h.icon}</div>
                <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.95rem", fontWeight:700, color:"#333", marginBottom:"0.5rem", lineHeight:1.3 }}>{h.titulo}</h3>
                <p style={{ fontSize:"0.83rem", color:"#666", lineHeight:1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODALIDAD ONLINE ── */}
      <section style={{ padding:"4rem 2rem", background:"#1a2744" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.8rem", fontWeight:700, color:"#f59700", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"0.4rem" }}>MODALIDAD ONLINE</p>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1.4rem", fontWeight:700, color:"#fff", marginBottom:"0.3rem" }}>Programa Cuatrimestral | 12 Cuatrimestres</h2>
          <p style={{ fontSize:"0.88rem", color:"rgba(255,255,255,0.65)", marginBottom:"3rem" }}>Estudia a tu ritmo, sin horarios fijos, con acompañamiento personalizado.</p>
          <div className="modal-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2.5rem" }}>
            {MODALIDAD.map((m,i)=>(
              <div key={i} style={{ textAlign:"center" }}>
                <div style={{ display:"flex", justifyContent:"center", marginBottom:"1.2rem" }}>{m.svg}</div>
                <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1rem", fontWeight:700, color:"#fff", marginBottom:"0.6rem" }}>{m.titulo}</h3>
                <p style={{ fontSize:"0.84rem", color:"rgba(255,255,255,0.7)", lineHeight:1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPO LABORAL ── */}
      <section style={{ padding:"4rem 2rem", background:"#fff" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333", marginBottom:"0.5rem" }}>¿Dónde podrás trabajar?</h2>
          <div style={{ width:"60px", height:"3px", background:"#f59700", marginBottom:"2.5rem" }} />
          <div className="campo-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0.8rem" }}>
            {CAMPO.map((c,i)=>(
              <div key={i} style={{ padding:"1.1rem 1.2rem", background:"#f8f8f8", border:"1px solid #eee", borderRadius:"6px", display:"flex", alignItems:"center", gap:"0.7rem", transition:"border-color 0.2s, transform 0.2s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor="#f59700"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor="#eee"; e.currentTarget.style.transform="none"; }}>
                <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:i%2===0?"#7a2531":"#f59700", flexShrink:0 }} />
                <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.86rem", fontWeight:600, color:"#333" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ UAG ONLINE ── */}
      <section style={{ padding:"4rem 2rem", background:"#fff" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333", marginBottom:"0.5rem" }}>Más que una carrera. Una experiencia UAG.</h2>
          <div style={{ width:"60px", height:"3px", background:"#f59700", marginBottom:"2.5rem" }} />
          <div className="uag-exp-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }}>
            {[
              { svg:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a2531" strokeWidth="1.5" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, t:"Título con la misma validez que presencial" },
              { svg:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a2531" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, t:"Alianza con Arizona State University (ASU)" },
              { svg:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a2531" strokeWidth="1.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, t:"Coach Académico durante toda tu carrera" },
              { svg:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a2531" strokeWidth="1.5" strokeLinecap="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>, t:"Campus Canvas 24/7 con clases grabadas" },
              { svg:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a2531" strokeWidth="1.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, t:"Acceso al Campus UAG cuando lo necesites" },
              { svg:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a2531" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, t:"Comunidad Alumni y +200 convenios empresariales" },
            ].map((d,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"0.9rem", padding:"1.3rem", background:"#f8f8f8", borderRadius:"6px", border:"1px solid #eee", transition:"border-color 0.2s" }}
                onMouseEnter={e=>e.currentTarget.style.borderColor="#f59700"}
                onMouseLeave={e=>e.currentTarget.style.borderColor="#eee"}>
                <span style={{ flexShrink:0 }}>{d.svg}</span>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.88rem", fontWeight:600, color:"#333", lineHeight:1.4 }}>{d.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INGLÉS + MAYA ── */}
      <section style={{ padding:"4rem 2rem", background:"#f9f9f9", borderTop:"3px solid #f59700" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          {/* Header con logo ASU oficial */}
          <div style={{ marginBottom:"0.5rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"1.2rem", flexWrap:"wrap", marginBottom:"0.4rem" }}>
              <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333" }}>
                Certifica tu inglés con
              </h2>
              <img
                src="https://numjvtzzfjzxquooncvv.supabase.co/storage/v1/object/public/assets/asu.png"
                alt="Arizona State University"
                style={{ height:"52px", objectFit:"contain" }}
              />
            </div>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.1rem,2.5vw,1.6rem)", fontWeight:700, color:"#555" }}>
              Incluido sin costo adicional
            </p>
          </div>
          <div style={{ width:"60px", height:"3px", background:"#f59700", marginBottom:"2rem" }} />

          <div className="asu-chat-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"center" }}>
            <div>
              <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:1.8, marginBottom:"1.5rem" }}>
                Tu programa incluye 14 niveles de inglés con certificación de Arizona State University, sin costo adicional. <strong>Maya</strong> es la inteligencia artificial que guía tu práctica y conversación disponible las 24 horas.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.7rem", marginBottom:"1.8rem" }}>
                {["14 niveles de inglés certificados por ASU","Inteligencia Artificial MAYA disponible 24/7","Certificación internacional sin costo adicional","Práctica de conversación guiada por IA"].map((t,i)=>(
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.7rem" }}>
                    <span style={{ color:"#f59700", fontWeight:700, fontSize:"1rem" }}>✓</span>
                    <span style={{ fontSize:"0.88rem", color:"#555" }}>{t}</span>
                  </div>
                ))}
              </div>
              {/* Botón Conoce nuestra alianza ASU */}
              <button
                onClick={()=>setVideoOpen(true)}
                className="btn-red"
                style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"0.75rem 1.6rem", fontSize:"0.88rem" }}>
                ▶ Conoce nuestra alianza ASU
              </button>
            </div>

            {/* Card chat Maya */}
            <div style={{ background:"#fff", border:"1px solid #eee", borderRadius:"8px", padding:"1.8rem", boxShadow:"0 4px 20px rgba(0,0,0,0.06)", position:"relative" }}>
              {/* Espectro de audio en esquina superior derecha */}
              <div style={{ position:"absolute", top:"1rem", right:"1rem", cursor:"pointer" }}
                onMouseEnter={e=>{ audioRef.current?.play(); e.currentTarget.querySelector(".maya-bars").style.opacity="1"; }}
                onMouseLeave={e=>{ const a=audioRef.current; if(a){a.pause();a.currentTime=0;} e.currentTarget.querySelector(".maya-bars").style.opacity="0.35"; }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"50%", background:"#7a2531", border:"2px solid #f59700", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 8px rgba(122,37,49,0.3)" }}>
                  <div className="maya-bars" style={{ display:"flex", gap:"2px", alignItems:"center", height:"22px", opacity:0.35, transition:"opacity 0.3s" }}>
                    {[10,18,12,20,14,16,10].map((_,i)=>(
                      <div key={i} style={{ width:"3px", borderRadius:"2px", background:"#f59700", animation:`mayaBar${i%5} ${0.55+(i*0.07)}s ease-in-out infinite` }} />
                    ))}
                  </div>
                </div>
                <audio ref={audioRef} preload="auto"><source src="https://numjvtzzfjzxquooncvv.supabase.co/storage/v1/object/public/assets/UAG_1.mp3" type="audio/mpeg" /></audio>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"1.2rem", paddingBottom:"1rem", borderBottom:"1px solid #f0f0f0" }}>
                <div style={{ width:"40px", height:"40px", borderRadius:"8px", background:"#7a2531", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem" }}>🤖</div>
                <div>
                  <p style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.9rem", color:"#333" }}>Maya IA</p>
                  <p style={{ fontSize:"0.72rem", color:"#888" }}>Asistente de inglés UAG · ASU · Disponible 24/7</p>
                </div>
              </div>
              {[["Maya","¡Hola! Hoy practicaremos listening. ¿Listo?",false],["Tú","Yes, I'm ready!",true],["Maya","Great! Describe your ideal workplace in 3 sentences.",false]].map(([who,msg,isMe],i)=>(
                <div key={i} style={{ display:"flex", justifyContent:isMe?"flex-end":"flex-start", marginBottom:"0.65rem" }}>
                  <div style={{ maxWidth:"82%", padding:"0.55rem 0.85rem", borderRadius:isMe?"12px 12px 4px 12px":"12px 12px 12px 4px", background:isMe?"#7a2531":"#f0f0f0", color:isMe?"#fff":"#333", fontSize:"0.8rem", lineHeight:1.4 }}>{msg}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal video alianza ASU */}
      {videoOpen && (
        <div onClick={()=>setVideoOpen(false)} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.82)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem" }}>
          <div onClick={e=>e.stopPropagation()} style={{ position:"relative", width:"100%", maxWidth:"860px", background:"#000", borderRadius:"12px", overflow:"hidden", boxShadow:"0 24px 80px rgba(0,0,0,0.5)" }}>
            {/* Botón cerrar */}
            <button onClick={()=>setVideoOpen(false)}
              style={{ position:"absolute", top:"0.8rem", right:"0.8rem", zIndex:10, background:"rgba(0,0,0,0.6)", border:"none", borderRadius:"50%", width:"36px", height:"36px", color:"#fff", fontSize:"1.1rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
              ✕
            </button>
            {/* YouTube embed */}
            <div style={{ position:"relative", paddingBottom:"56.25%", height:0 }}>
              <iframe
                src="https://www.youtube.com/embed/LBQTOLmMmrM?autoplay=1"
                title="Alianza UAG — Arizona State University"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", border:"none" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── SOCIAL PROOF + BECAS — v2 ── */}
      <section style={{ padding:"4rem 2rem", background:"#fff", borderTop:"3px solid #f59700" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div className="social-proof-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"center" }}>
            <div>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.74rem", fontWeight:700, color:"#f59700", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"0.5rem" }}>BECAS Y FINANCIAMIENTO</p>
              <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333", marginBottom:"1rem", lineHeight:1.2 }}>
                Estudiar en la UAG es más accesible de lo que crees
              </h2>
              <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:1.75, marginBottom:"1.5rem" }}>
                El <strong>90% de nuestros estudiantes online</strong> recibe algún tipo de beca o apoyo financiero. No dejes que el costo sea el obstáculo — habla con un asesor y descubre las opciones disponibles para tu perfil.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.7rem", marginBottom:"1.5rem" }}>
                {["Beca por desempeño académico","Bono de inscripción para nuevo ingreso","Opciones de pago flexibles sin intereses","Programa de referidos con descuento adicional"].map((t,i)=>(
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.7rem" }}>
                    <span style={{ color:"#f59700", fontWeight:700, fontSize:"1rem", flexShrink:0 }}>✓</span>
                    <span style={{ fontSize:"0.88rem", color:"#555" }}>{t}</span>
                  </div>
                ))}
              </div>
              <a href="#formulario">
                <button className="btn-orange">Investiga tu beca disponible →</button>
              </a>
            </div>
            {/* Testimonial mockup */}
            <div style={{ background:"#f9f9f9", borderRadius:"16px", padding:"2rem", border:"1px solid #eee", position:"relative" }}>
              <div style={{ position:"absolute", top:"-14px", left:"2rem", background:"#f59700", color:"#fff",
                width:"36px", height:"36px", borderRadius:"50%", display:"flex", alignItems:"center",
                justifyContent:"center", fontSize:"1.4rem", fontWeight:900, lineHeight:1 }}>❝</div>
              <p style={{ fontSize:"0.95rem", color:"#333", lineHeight:1.75, fontStyle:"italic", marginBottom:"1.2rem", marginTop:"0.5rem" }}>
                "Estudiar en UAG Online me permitió seguir trabajando mientras completaba mi carrera. El Coach Académico fue clave — nunca me sentí solo en el proceso."
              </p>
              <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"50%", background:"#7a2531", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Outfit',sans-serif", fontWeight:800, color:"#fff", fontSize:"1.1rem", flexShrink:0 }}>M</div>
                <div>
                  <p style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.88rem", color:"#333" }}>Miguel A. Ramírez</p>
                  <p style={{ fontSize:"0.76rem", color:"#888" }}>Egresado UAG Online · Ing. en Sistemas</p>
                </div>
                <div style={{ marginLeft:"auto", textAlign:"right" }}>
                  <p style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, fontSize:"1.1rem", color:"#f59700" }}>★★★★★</p>
                  <p style={{ fontSize:"0.7rem", color:"#aaa" }}>Alumno verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMERALIA ── */}
      <section style={{ padding:"4rem 2rem", background:"#f9f9f9", borderTop:"3px solid #f59700" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginBottom:"0.4rem", flexWrap:"wrap" }}>
            <img src="https://numjvtzzfjzxquooncvv.supabase.co/storage/v1/object/public/assets/Logo%20UAG-01.png" alt="UAG" style={{ height:"52px", objectFit:"contain" }} />
            <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.3rem,3vw,1.8rem)", fontWeight:800, color:"#333" }}>Respaldo UAG</h2>
          </div>
          <div style={{ width:"50px", height:"3px", background:"#f59700", margin:"0 auto 2.5rem" }} />
          <div className="stats-ia-grid" style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:"1rem" }}>
            {[["90","años de prestigio"],["44","programas online"],["1,777","alumnos activos"],["567","egresados"],["+200","convenios empresariales"],["5★","QS Stars"]].map(([n,l],i)=>(
              <div key={i} style={{ textAlign:"center", padding:"1.5rem 0.8rem", background:"#fff", borderRadius:"8px", border:"1px solid #eee", boxShadow:"0 2px 8px rgba(0,0,0,0.05)", transition:"transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 6px 20px rgba(122,37,49,0.12)"; e.currentTarget.style.borderColor="#f59700"; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor="#eee"; }}>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"2rem", fontWeight:900, color:"#1a1a1a", lineHeight:1 }}>{n}</p>
                <div style={{ width:"24px", height:"2px", background:"#f59700", margin:"0.3rem auto 0.3rem", borderRadius:"2px" }} />
                <p style={{ fontSize:"0.74rem", color:"#888", lineHeight:1.3 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS — carrusel auto-scroll ── */}
      <section style={{ padding:"4rem 0", background:"#fff", overflow:"hidden" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", paddingLeft:"2rem", paddingRight:"2rem" }}>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333", marginBottom:"0.4rem" }}>Lo que dicen nuestros alumnos</h2>
          <div style={{ width:"60px", height:"3px", background:"#f59700", marginBottom:"2rem" }} />
        </div>
        {/* Track de videos que se desplazan */}
        <div style={{ position:"relative", overflow:"hidden" }}>
          <div className="test-track" style={{ display:"flex", gap:"1.5rem", width:"max-content", animation:"scrollTest 30s linear infinite" }}
            onMouseEnter={e=>e.currentTarget.style.animationPlayState="paused"}
            onMouseLeave={e=>e.currentTarget.style.animationPlayState="running"}>
            {/* Duplicamos la lista para el efecto infinito */}
            {[...TESTIMONIOS, ...TESTIMONIOS].map((v,i)=>(
              <div key={i} style={{ flexShrink:0, width:"320px", borderRadius:"12px", overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,0.1)", background:"#000", cursor:"pointer", position:"relative" }}>
                {/* Thumbnail YouTube */}
                <div style={{ position:"relative", paddingBottom:"56.25%", height:0 }}>
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.nombre}
                    style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}
                  />
                  {/* Overlay con play */}
                  <div style={{ position:"absolute", inset:0, background:"rgba(122,37,49,0.35)", display:"flex", alignItems:"center", justifyContent:"center" }}
                    onClick={()=>setTestVideo(v.id)}>
                    <div style={{ width:"52px", height:"52px", borderRadius:"50%", background:"rgba(255,255,255,0.9)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 16px rgba(0,0,0,0.3)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#7a2531"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </div>
                </div>
                {/* Info del testimonio */}
                <div style={{ padding:"0.9rem 1rem", background:"#fff" }}>
                  <p style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.88rem", color:"#333", marginBottom:"0.2rem" }}>{v.nombre}</p>
                  <p style={{ fontSize:"0.76rem", color:"#888" }}>{v.programa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scrollTest {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Modal video testimonio */}
      {testVideo && (
        <div onClick={()=>setTestVideo(null)} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem" }}>
          <div onClick={e=>e.stopPropagation()} style={{ position:"relative", width:"100%", maxWidth:"860px", background:"#000", borderRadius:"12px", overflow:"hidden", boxShadow:"0 24px 80px rgba(0,0,0,0.5)" }}>
            <button onClick={()=>setTestVideo(null)} style={{ position:"absolute", top:"0.8rem", right:"0.8rem", zIndex:10, background:"rgba(0,0,0,0.6)", border:"none", borderRadius:"50%", width:"36px", height:"36px", color:"#fff", fontSize:"1.1rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
            <div style={{ position:"relative", paddingBottom:"56.25%", height:0 }}>
              <iframe src={`https://www.youtube.com/embed/${testVideo}?autoplay=1`} title="Testimonio UAG Online" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", border:"none" }} />
            </div>
          </div>
        </div>
      )}

      {/* ── PLAN DE ESTUDIOS ── */}
      <section style={{ padding:"4rem 2rem", background:"#f9f9f9", borderTop:"3px solid #f59700" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333", marginBottom:"0.3rem" }}>Plan de estudios</h2>
          <p style={{ fontSize:"0.84rem", color:"#888", marginBottom:"0.5rem" }}>Programa Cuatrimestral · 12 Cuatrimestres · 4 años</p>
          <div style={{ width:"60px", height:"3px", background:"#f59700", marginBottom:"1.5rem" }} />

          {/* Áreas temáticas */}
          <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2rem" }}>
            {[
              { label:"Fundamentos", rango:"C1–C3", color:"#f59700" },
              { label:"Programación & Matemáticas", rango:"C4–C6", color:"#7a2531" },
              { label:"IA & Machine Learning", rango:"C7–C9", color:"#f59700" },
              { label:"IA Avanzada & Especialización", rango:"C10–C12", color:"#7a2531" },
            ].map((a,i)=>(
              <div key={i} style={{ padding:"0.5rem 1rem", borderRadius:"100px",
                background:`${a.color}12`, border:`1.5px solid ${a.color}40`,
                display:"flex", alignItems:"center", gap:"0.5rem" }}>
                <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:a.color, flexShrink:0 }} />
                <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.78rem", fontWeight:700, color:a.color }}>{a.label}</span>
                <span style={{ fontSize:"0.72rem", color:"#888" }}>{a.rango}</span>
              </div>
            ))}
          </div>

          {/* ── DESKTOP: grid de tarjetas ── */}
          <div className="plan-cards-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem" }}>
            {PLAN.map((item,i)=>{
              const isRed = i%2===0;
              const isHov = hoveredC===item.c;
              return (
                <div key={i}
                  onMouseEnter={()=>setHoveredC(item.c)}
                  onMouseLeave={()=>setHoveredC(null)}
                  style={{
                    background: isHov?(isRed?"#7a2531":"#f59700"):"#fff",
                    border:`2px solid ${isRed?"#7a2531":"#f59700"}`,
                    borderRadius:"10px", padding:"1.3rem 1.2rem",
                    cursor:"pointer", transition:"background 0.2s, transform 0.2s, box-shadow 0.2s",
                    transform: isHov?"translateY(-4px)":"none",
                    boxShadow: isHov?`0 8px 24px ${isRed?"rgba(122,37,49,0.25)":"rgba(245,151,0,0.25)"}`:"0 2px 8px rgba(0,0,0,0.06)"
                  }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.9rem" }}>
                    <div style={{ width:"36px", height:"36px", borderRadius:"50%",
                      background: isHov?"rgba(255,255,255,0.2)":(isRed?"#7a2531":"#f59700"),
                      display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.9rem", fontWeight:900, color:"#fff" }}>
                        {String(item.c).padStart(2,"0")}
                      </span>
                    </div>
                    <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.78rem", fontWeight:700,
                      color: isHov?"rgba(255,255,255,0.8)":(isRed?"#7a2531":"#f59700"),
                      textTransform:"uppercase", letterSpacing:"0.05em" }}>
                      Cuatrimestre {item.c}
                    </span>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
                    {item.materias.map((m,j)=>(
                      <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.5rem" }}>
                        <span style={{ width:"5px", height:"5px", borderRadius:"50%", flexShrink:0, marginTop:"6px",
                          background: isHov?"rgba(255,255,255,0.7)":(isRed?"#7a2531":"#f59700") }} />
                        <span style={{ fontSize:"0.8rem", color: isHov?"rgba(255,255,255,0.95)":"#444", lineHeight:1.4 }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── MÓVIL: acordeón colapsable ── */}
          <div className="plan-accordion" style={{ display:"none", flexDirection:"column", gap:"0.5rem" }}>
            {PLAN.map((item,i)=>{
              const isRed  = i%2===0;
              const isOpen = hoveredC===item.c;
              const accent = isRed?"#7a2531":"#f59700";
              return (
                <div key={i} style={{ borderRadius:"10px", overflow:"hidden", border:`2px solid ${accent}`, background:"#fff", boxShadow:"0 2px 6px rgba(0,0,0,0.05)" }}>
                  {/* Header clickeable */}
                  <button
                    onClick={()=>setHoveredC(isOpen?null:item.c)}
                    style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                      padding:"1rem 1.1rem", background: isOpen?accent:"#fff",
                      border:"none", cursor:"pointer", gap:"0.8rem", textAlign:"left",
                      transition:"background 0.2s" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
                      <div style={{ width:"34px", height:"34px", borderRadius:"50%",
                        background: isOpen?"rgba(255,255,255,0.2)":accent,
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.88rem", fontWeight:900, color:"#fff" }}>
                          {String(item.c).padStart(2,"0")}
                        </span>
                      </div>
                      <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.85rem", fontWeight:700,
                        color: isOpen?"#fff":accent, textTransform:"uppercase", letterSpacing:"0.04em" }}>
                        Cuatrimestre {item.c}
                      </span>
                    </div>
                    {/* Chevron animado */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke={isOpen?"#fff":accent} strokeWidth="2.5" strokeLinecap="round"
                      style={{ transition:"transform 0.25s", transform:isOpen?"rotate(180deg)":"rotate(0)", flexShrink:0 }}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  {/* Contenido colapsable */}
                  <div style={{ maxHeight:isOpen?"300px":"0", overflow:"hidden",
                    transition:"max-height 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
                    <div style={{ padding:"0.9rem 1.1rem 1.1rem", borderTop:`1px solid ${accent}22` }}>
                      {item.materias.map((m,j)=>(
                        <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.6rem", marginBottom:"0.55rem" }}>
                          <span style={{ width:"6px", height:"6px", borderRadius:"50%", flexShrink:0,
                            marginTop:"5px", background:accent }} />
                          <span style={{ fontSize:"0.84rem", color:"#444", lineHeight:1.5 }}>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── PROCESO DE ADMISIÓN ── */}
      <section style={{ padding:"4rem 2rem", background:"#fff" }} ref={admRef}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333", textAlign:"center", marginBottom:"2.5rem" }}>Proceso de admisión</h2>
          <div className="pasos-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.2rem" }}>
            {[
              { n:"01", t:"Realiza la Solicitud de Admisión y adjunta tus documentos", d:"Ingresa al portal de admisiones, proporciona la información que se solicita y adjunta los documentos requeridos.", cta:true },
              { n:"02", t:"Programa tu examen de admisión y el pago del trámite de ingreso", d:"Realiza el pago inicial o total de tu colegiatura por medio de institución bancaria o transferencia electrónica desde el portal de Campus Digital UAG." },
              { n:"03", t:"Entrega de documentos originales", d:"a. Acta de nacimiento original.\nb. Certificado de preparatoria original." },
              { n:"04", t:"Horario y carga académica", d:"a. Se te asignará tu carga académica y el horario de clases después de realizar el pago.\nb. Tu horario lo podrás encontrar en Campus Digital UAG en la opción de toolbox." },
            ].map((p,i)=>(
              <div key={i} className={`paso-card ${admVisible?"visible":""}`}
                style={{ transitionDelay:`${i*0.12}s` }}>
                <div className="paso-num">{p.n}</div>
                <h3 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"0.9rem", color:"#333", marginBottom:"0.7rem", lineHeight:1.4 }}>{p.t}</h3>
                <p style={{ fontSize:"0.82rem", color:"#666", lineHeight:1.65, whiteSpace:"pre-line" }}>{p.d}</p>
                {p.cta && (
                  <a href="https://admision.uag.mx" target="_blank" rel="noopener noreferrer" style={{ display:"inline-block", marginTop:"1rem" }}>
                    <button className="btn-orange" style={{ fontSize:"0.8rem", padding:"0.55rem 1.1rem" }}>Inicia tu solicitud aquí</button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding:"4rem 2rem", background:"#f9f9f9" }}>
        <div style={{ maxWidth:"800px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, color:"#333", marginBottom:"0.5rem" }}>Preguntas frecuentes</h2>
          <div style={{ width:"60px", height:"3px", background:"#f59700", marginBottom:"2rem" }} />
          <div>
            {FAQS.map((f,i)=>{
              const open = openFaq===i;
              return (
                <div key={i} className="faq-item">
                  <button className="faq-btn" onClick={()=>setOpenFaq(open?null:i)}>
                    <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:600, fontSize:"0.93rem", color:"#333" }}>{f.q}</span>
                    <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1.4rem", fontWeight:300, color:"#f59700", flexShrink:0, transition:"transform 0.25s", transform:open?"rotate(45deg)":"none" }}>+</span>
                  </button>
                  <div className="faq-answer" style={{ maxHeight:open?"200px":"0" }}>
                    <p style={{ fontSize:"0.87rem", color:"#666", lineHeight:1.75, paddingBottom:"1.2rem", paddingLeft:"0" }}>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding:"5rem 2rem", background:"#fff", borderTop:"4px solid #f59700", textAlign:"center" }}>
        <div style={{ maxWidth:"700px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,4vw,2.4rem)", fontWeight:900, color:"#333", marginBottom:"0.8rem", lineHeight:1.1 }}>
            ¿Listo para diseñar el futuro con IA?
          </h2>
          <p style={{ fontSize:"0.95rem", color:"#777", marginBottom:"2.5rem", lineHeight:1.7 }}>
            Inicio 7 de septiembre de 2026 · Beca + Bono disponibles · Sin examen de admisión
          </p>
          <a href="#formulario">
            <button className="btn-orange" style={{ padding:"1rem 3rem", fontSize:"1rem", letterSpacing:"0.06em" }}>
              HABLA CON UN ASESOR
            </button>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding:"2rem", background:"#1a1a1a", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
        <img src={LOGO_URL} alt="UAG Online" style={{ height:"50px", filter:"brightness(0) invert(1)", opacity:0.85 }} />
        <p style={{ fontSize:"0.74rem", color:"#555" }}>© 2026 Universidad Autónoma de Guadalajara · Todos los derechos reservados.</p>
      </footer>

      {/* ── STICKY BAR ── */}
      <div className={`sticky-bar ${scrollY>400?"show":""}`}>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.85rem", fontWeight:600, color:"#fff" }}>
          🎓 Ing. en Inteligencia Artificial Online · <span style={{ color:"#f59700" }}>Beca + Bono disponibles</span>
        </p>
        <a href="#formulario">
          <button className="btn-orange" style={{ whiteSpace:"nowrap", padding:"0.55rem 1.5rem" }}>HABLA CON UN ASESOR</button>
        </a>
      </div>
    </>
  );
}
// deploy 06/24/2026 07:07:00
