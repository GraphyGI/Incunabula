"use client";

import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  Star,
  ChevronRight,
  ChevronLeft,
  Truck,
  ShieldCheck,
  Heart,
  SlidersHorizontal,
  Tag,
  BookMarked,
  BookOpen,
  Repeat,
  X,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

// ─── Data ──────────────────────────────────────────────────────────────────────

const allBooks = [
  // Nuevos
  {
    id: 1,
    title: "El enigma de Fermat",
    author: "Simon Singh",
    price: 39000,
    state: "Nuevo",
    category: "Ciencias",
    badge: { label: "Nuevo", bg: "#FFFFFF", text: "#2C1E16" },
    image: "https://incunabula.co/wp-content/uploads/libro-el-enigma-de-fermat-simon-singh-booket.webp",
    rating: 5,
    reviews: 12,
    description: "La apasionante historia del teorema que desafió a los mejores matemáticos del mundo durante 350 años.",
  },
  {
    id: 2,
    title: "Nada",
    author: "Janne Teller",
    price: 45000,
    state: "Nuevo",
    category: "Literatura",
    badge: { label: "Nuevo", bg: "#FFFFFF", text: "#2C1E16" },
    image: "https://incunabula.co/wp-content/uploads/libro-nada-janne-teller-booket.webp",
    rating: 5,
    reviews: 8,
    description: "Pierre Antón deja el colegio el día que descubre que la vida no tiene sentido.",
  },
  {
    id: 3,
    title: "La ciencia física en la Edad Media",
    author: "Edward Grant",
    price: 32000,
    state: "Nuevo",
    category: "Ciencias",
    badge: { label: "Nuevo", bg: "#FFFFFF", text: "#2C1E16" },
    image: "https://incunabula.co/wp-content/uploads/libro-la-ciencia-fisica-en-la-edad-media-edward-grant-fce.webp",
    rating: 4,
    reviews: 4,
    description: "Cómo el pensamiento científico transformó la visión medieval del universo físico.",
  },
  {
    id: 4,
    title: "101 Cuentos Cortos para soñar",
    author: "Varios Autores",
    price: 29900,
    state: "Nuevo",
    category: "Infantil",
    badge: { label: "Nuevo", bg: "#FFFFFF", text: "#2C1E16" },
    image: "https://incunabula.co/wp-content/uploads/libro-101-cuentos-cortos-para-sonar-gato-hojalata.webp",
    rating: 4,
    reviews: 19,
    description: "Una colección de cuentos cortos perfectos para soñar antes de dormir.",
  },
  // Segunda Mano
  {
    id: 5,
    title: "Mujeres de arena y mirra",
    author: "Hanan al-Shaykh",
    price: 35000,
    state: "Usado",
    substatus: "Como Nuevo",
    category: "Literatura",
    badge: { label: "Como Nuevo", bg: "#C6DBA8", text: "#1A3B08" },
    image: "https://incunabula.co/wp-content/uploads/libro-mujeres-de-arena-y-mirra-hannan-al-shaykh-booket.webp",
    rating: 5,
    reviews: 6,
    description: "Cuatro mujeres atrapadas en una sociedad que las oprime, buscando liberación a través de sus cuerpos y sus voces.",
  },
  {
    id: 6,
    title: "10.000 horas en la silla vacía",
    author: "León Valencia",
    price: 25000,
    state: "Usado",
    substatus: "Buen Estado",
    category: "Periodismo",
    badge: { label: "Buen Estado", bg: "#FDE68A", text: "#92400E" },
    image: "https://incunabula.co/wp-content/uploads/libro-diez-mil-horas-en-la-silla-vacia-aguilar.webp",
    rating: 4,
    reviews: 3,
    description: "Periodismo y poder en un mundo donde la información es la nueva arena de batalla.",
  },
  {
    id: 7,
    title: "100 historias de oración para niñas valientes",
    author: "Jean Fischer",
    price: 20000,
    state: "Usado",
    substatus: "Aceptable",
    category: "Infantil",
    badge: { label: "Aceptable", bg: "#F5DDB4", text: "#B85B14" },
    image: "https://incunabula.co/wp-content/uploads/libro-100-historias-de-oracion-para-ninas-valientes-jean-fischer-barbour.webp",
    rating: 3,
    reviews: 5,
    description: "Historias de niñas valientes que encontraron fuerza en la fe y en la oración.",
  },
  {
    id: 8,
    title: "1001 remedios naturales",
    author: "Laurel Vukovic",
    price: 15000,
    state: "Usado",
    substatus: "Buen Estado",
    category: "Salud",
    badge: { label: "Buen Estado", bg: "#FDE68A", text: "#92400E" },
    image: "https://incunabula.co/wp-content/uploads/libro-1001-remedios-naturales-para-la-salud-la-belleza-el-hogar-y-las-mascotas-dk.webp",
    rating: 4,
    reviews: 11,
    description: "Para la salud, la belleza, el hogar y las mascotas. Más de mil remedios naturales al alcance de todos.",
  },
  {
    id: 9,
    title: "El ángel sin cabeza",
    author: "Vicki Baum",
    price: 15000,
    state: "Usado",
    substatus: "Aceptable",
    category: "Literatura",
    badge: { label: "Aceptable", bg: "#F5DDB4", text: "#B85B14" },
    image: "https://incunabula.co/wp-content/uploads/libro-el-angel-sin-cabeza-oveja-negra.webp",
    rating: 4,
    reviews: 2,
    description: "Una novela de atmósfera intensa y personajes complejos, donde el misterio y la pasión se entrelazan.",
  },
];

const categories = ["Todos", "Literatura", "Ciencias", "Infantil", "Periodismo", "Salud"];
const stateFilters = ["Todos", "Nuevo", "Usado"];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          color="#B85B14"
          fill={s <= rating ? "#B85B14" : "transparent"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function BookCard({ book, view = "grid" }: { book: typeof allBooks[0]; view?: string }) {
  const [liked, setLiked] = useState(false);
  const formatCOP = (n: number) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(n);

  if (view === "list") {
    return (
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          background: "#FFF",
          border: "1px solid #E8E2D9",
          borderRadius: "12px",
          padding: "1.25rem",
          transition: "box-shadow 0.25s ease, transform 0.25s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.transform = "none";
        }}
      >
        <div style={{ width: "80px", flexShrink: 0, borderRadius: "6px", overflow: "hidden", aspectRatio: "2/3" }}>
          <img src={book.image} alt={book.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
            <span style={{ background: book.badge.bg, color: book.badge.text, padding: "3px 10px", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700 }}>{book.badge.label}</span>
            <span style={{ background: "#F3EFE6", color: "#6E4B39", padding: "3px 10px", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 600 }}>{book.category}</span>
          </div>
          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "#2C1E16", marginBottom: "3px" }}>{book.title}</h3>
          <p style={{ fontSize: "0.85rem", color: "#6E4B39", marginBottom: "8px" }}>{book.author}</p>
          <p style={{ fontSize: "0.82rem", color: "#999", lineHeight: 1.5, marginBottom: "12px" }}>{book.description}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#2C1E16" }}>{formatCOP(book.price)}</span>
            <button style={{ background: "#4A3123", color: "#FFF", border: "none", padding: "8px 20px", borderRadius: "6px", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
              Añadir
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="book-card"
      style={{ cursor: "pointer", position: "relative" }}
      onMouseEnter={(e) => {
        const overlay = e.currentTarget.querySelector(".book-card-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "1";
        const img = e.currentTarget.querySelector(".book-card-image") as HTMLElement;
        if (img) img.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        const overlay = e.currentTarget.querySelector(".book-card-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "0";
        const img = e.currentTarget.querySelector(".book-card-image") as HTMLElement;
        if (img) img.style.transform = "scale(1)";
      }}
    >
      {/* Cover */}
      <div style={{ position: "relative", aspectRatio: "2/3", borderRadius: "8px", overflow: "hidden", marginBottom: "1rem", boxShadow: "0 8px 25px rgba(0,0,0,0.12)" }}>
        <img
          className="book-card-image"
          src={book.image}
          alt={book.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
        />
        {/* Badge */}
        <div style={{ position: "absolute", top: "10px", left: "10px", background: book.badge.bg, color: book.badge.text, padding: "5px 12px", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {book.badge.label}
        </div>
        {/* Like button */}
        <button
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          style={{ position: "absolute", top: "10px", right: "10px", background: liked ? "#B85B14" : "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%", width: "34px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
        >
          <Heart size={16} color={liked ? "#FFF" : "#4A3123"} fill={liked ? "#FFF" : "transparent"} />
        </button>
        {/* Add to cart overlay */}
        <div
          className="book-card-overlay"
          style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(44,30,22,0.9)", padding: "14px", textAlign: "center", opacity: 0, transition: "opacity 0.3s ease" }}
        >
          <span style={{ color: "#FFF", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <ShoppingBag size={16} /> Añadir al carrito
          </span>
        </div>
      </div>
      {/* Info */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
          <StarRating rating={book.rating} />
          <span style={{ fontSize: "0.72rem", color: "#999" }}>({book.reviews})</span>
        </div>
        <span style={{ fontSize: "0.7rem", background: "#F3EFE6", color: "#6E4B39", padding: "2px 8px", borderRadius: "999px", fontWeight: 600, marginBottom: "6px", display: "inline-block" }}>{book.category}</span>
        <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "#2C1E16", marginBottom: "3px", lineHeight: 1.3 }}>
          {book.title}
        </h3>
        <p style={{ fontSize: "0.82rem", color: "#6E4B39", marginBottom: "10px" }}>{book.author}</p>
        <p style={{ fontSize: "1.15rem", fontWeight: 700, color: book.state === "Nuevo" ? "#2C1E16" : "#B85B14" }}>
          {formatCOP(book.price)}
        </p>
      </div>
    </div>
  );
}

// ─── Hero Slider ───────────────────────────────────────────────────────────────
const heroSlides = [
  {
    title: "Libros con historia, para lectores con memoria.",
    sub: "Explora nuestra curaduría de libros nuevos y segunda mano.",
    cta: "Ver Segunda Mano",
    ctaSecondary: "Novedades",
    image: "/hero-bookshop.png",
  },
  {
    title: "Segunda mano. Primera elección.",
    sub: "Libros únicos, inspeccionados y clasificados. Dale una nueva vida a un buen libro.",
    cta: "Explorar catálogo",
    ctaSecondary: "¿Cómo funciona?",
    image: "/used-books.png",
  },
  {
    title: "El lugar de los lectores curiosos.",
    sub: "Ciencia, literatura, arte e historia. Tu próxima aventura está en estas páginas.",
    cta: "Comenzar a explorar",
    ctaSecondary: "Ver todo",
    image: "/reading-lifestyle.png",
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Prototipo() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeState, setActiveState] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevancia");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [heroSlide, setHeroSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MAX_WIDTH = "1400px"; // ✅ BEST PRACTICE: ancho estandarizado para todas las secciones

  const filteredBooks = allBooks
    .filter((b) => {
      const matchCat = activeCategory === "Todos" || b.category === activeCategory;
      const matchState = activeState === "Todos" || b.state === activeState;
      const matchSearch =
        searchTerm === "" ||
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.author.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchState && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "precio-asc") return a.price - b.price;
      if (sortBy === "precio-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const slide = heroSlides[heroSlide];
  const formatCOP = (n: number) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(n);

  return (
    <div style={{ background: "#FDFBF7", minHeight: "100vh", fontFamily: "var(--font-inter), 'Inter', sans-serif", overflowX: "hidden" }}>

      {/* ── Announcement Bar ── */}
      <div style={{ background: "#2C1E16", color: "#D4C7BA", padding: "9px 32px", fontSize: "0.78rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}><Truck size={13} /> Envío gratis por compras superiores a $90.000</span>
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}><ShieldCheck size={13} /> Compra 100% segura</span>
        </div>
        <div style={{ display: "flex", gap: "18px" }}>
          <span style={{ cursor: "pointer" }}>Mi Cuenta</span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}><PhoneCall size={13} /> Contacto</span>
        </div>
      </div>

      {/* ── Navbar ── */}
      <nav style={{ padding: "1rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E8E2D9", position: "sticky", top: 0, background: "rgba(253,251,247,0.97)", backdropFilter: "blur(10px)", zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {/* 📚 LEARN: El menu hamburguesa muestra/oculta el menú móvil con state */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: "4px" }}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen
              ? <X size={24} color="#4A3123" />
              : <Menu size={24} color="#4A3123" />}
          </button>
          <div style={{ display: "flex", gap: "1.75rem", fontSize: "0.88rem", fontWeight: 600, color: "#4A3123" }}>
            {["Novedades", "Segunda Mano", "Literatura", "Ciencias", "Infantil", "Colecciones"].map((n) => (
              <span key={n} style={{ cursor: "pointer", transition: "color 0.2s", paddingBottom: "2px", borderBottom: n === "Segunda Mano" ? "2px solid #B85B14" : "2px solid transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B85B14")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A3123")}
              >{n}</span>
            ))}
          </div>
        </div>

        {/* Logo */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <img
            src="/logo-sin-fondo.png"
            alt="Incunabula"
            style={{ height: "60px", width: "auto" }}
          />
        </div>

        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          {/* Search bar */}
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #E8E2D9", borderRadius: "20px", padding: "6px 14px", gap: "8px", background: "#FAF7F3" }}>
            <Search size={16} color="#9A8A7E" />
            <input
              placeholder="Busca por título o autor..."
              style={{ border: "none", background: "transparent", outline: "none", fontSize: "0.82rem", color: "#4A3123", width: "160px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Heart size={22} color="#4A3123" style={{ cursor: "pointer" }} />
          <div style={{ position: "relative", cursor: "pointer" }}>
            <ShoppingBag size={22} color="#4A3123" />
            <span style={{ position: "absolute", top: -6, right: -8, background: "#B85B14", color: "#FFF", fontSize: "0.62rem", fontWeight: 700, width: "17px", height: "17px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>2</span>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", top: "calc(37px + 60px + 2px)", left: 0, right: 0, background: "#FFF", borderBottom: "1px solid #E8E2D9", zIndex: 99, padding: "1.5rem 3rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", animation: "fadeInUp 0.2s ease-out" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {["Novedades", "Segunda Mano", "Literatura", "Ciencias", "Infantil", "Colecciones"].map((n) => (
              <span key={n} onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "1.1rem", fontWeight: 600, color: "#4A3123", cursor: "pointer", paddingBottom: "1.25rem", borderBottom: "1px solid #F3EFE6" }}>{n}</span>
            ))}
          </div>
        </div>
      )}

      {/* ── Hero Slider ── */}
      <section style={{ position: "relative", height: "68vh", overflow: "hidden" }}>
        {/* BG */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, rgba(28,18,12,0.85) 40%, rgba(28,18,12,0.35) 100%), url('${slide.image}') center/cover`, transition: "background-image 0.8s ease" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5rem", maxWidth: "700px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "6px 16px", marginBottom: "1.5rem", width: "fit-content" }}>
            <BookOpen size={13} color="#D4C7BA" />
            <span style={{ color: "#D4C7BA", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em" }}>INCUNABULA LIBRERÍA · CALI, COLOMBIA</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1.25rem", animation: "fadeInUp 0.6s ease-out" }}>
            {slide.title}
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: "2.5rem" }}>{slide.sub}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button style={{ background: "#B85B14", color: "#FFF", border: "none", padding: "14px 30px", borderRadius: "6px", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", boxShadow: "0 4px 20px rgba(184,91,20,0.4)", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#92400E")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#B85B14")}
            >{slide.cta}</button>
            <button style={{ background: "transparent", color: "#FFF", border: "1px solid rgba(255,255,255,0.4)", padding: "14px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
            >{slide.ctaSecondary}</button>
          </div>
        </div>

        {/* Slide indicators + nav */}
        <div style={{ position: "absolute", bottom: "2rem", left: "5rem", display: "flex", gap: "12px", alignItems: "center", zIndex: 10 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setHeroSlide(i)} style={{ width: i === heroSlide ? "28px" : "8px", height: "8px", borderRadius: "999px", background: i === heroSlide ? "#D4C7BA" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
          ))}
        </div>
        <div style={{ position: "absolute", bottom: "1.75rem", right: "3rem", display: "flex", gap: "10px", zIndex: 10 }}>
          <button onClick={() => setHeroSlide((heroSlide - 1 + heroSlides.length) % heroSlides.length)} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#FFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => setHeroSlide((heroSlide + 1) % heroSlides.length)} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#FFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <div style={{ background: "#4A3123", padding: "1.25rem 3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          {[
            { icon: <Truck size={20} />, label: "Envío gratis", sub: "en compras +$90.000" },
            { icon: <ShieldCheck size={20} />, label: "Compra segura", sub: "Pago 100% protegido" },
            { icon: <BookMarked size={20} />, label: "Libros revisados", sub: "Clasificados con cuidado" },
            { icon: <Repeat size={20} />, label: "Devolvemos tu dinero", sub: "Si no quedas satisfecho" },
          ].map((t) => (
            <div key={t.label} style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <div style={{ color: "#D4C7BA", flexShrink: 0 }}>{t.icon}</div>
              <div>
                <p style={{ color: "#FFF", fontWeight: 700, fontSize: "0.88rem" }}>{t.label}</p>
                <p style={{ color: "rgba(212,199,186,0.7)", fontSize: "0.75rem" }}>{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured Books Second-Hand ── */}
      <section style={{ padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem" }}>
            <div>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B85B14", display: "block", marginBottom: "8px" }}>Segunda Mano</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#2C1E16" }}>Tesoros que esperan ser redescubiertos</h2>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "6px", background: "none", border: "1px solid #4A3123", padding: "10px 20px", borderRadius: "6px", fontWeight: 600, fontSize: "0.85rem", color: "#4A3123", cursor: "pointer" }}>
              Ver todos <ChevronRight size={16} />
            </button>
          </div>

          {/* Estado State Tags */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Todos", bg: "#2C1E16", text: "#FFF" },
              { label: "Como Nuevo", bg: "#C6DBA8", text: "#1A3B08" },
              { label: "Buen Estado", bg: "#FDE68A", text: "#92400E" },
              { label: "Aceptable", bg: "#F5DDB4", text: "#B85B14" },
            ].map(({ label, bg, text }) => (
              <button key={label} style={{ padding: "8px 18px", borderRadius: "999px", background: bg, color: text, fontSize: "0.78rem", fontWeight: 700, border: "none", cursor: "pointer", letterSpacing: "0.04em", transition: "transform 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >{label}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "2rem" }}>
            {allBooks.filter((b) => b.state === "Usado").map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid Banner: Buy/Sell ── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ background: `linear-gradient(to right, rgba(44,30,22,0.9), rgba(110,75,57,0.7)), url('/used-books.png') center/cover`, padding: "5rem 3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", maxWidth: "100%" }}>
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4C7BA", display: "block", marginBottom: "1rem" }}>Compra y venta</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "2.5rem", color: "#FFF", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              ¿Tienes libros<br/>que ya no lees?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Compramos tus libros usados. Dales una segunda vida y recibe crédito para tu próxima lectura. Proceso simple, transparente y justo.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button style={{ background: "#D4C7BA", color: "#2C1E16", border: "none", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                Quiero vender mis libros
              </button>
              <button style={{ background: "transparent", color: "#FFF", border: "1px solid rgba(255,255,255,0.4)", padding: "13px 22px", borderRadius: "6px", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}>
                ¿Cómo funciona?
              </button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { num: "01", title: "Envíanos tu lista", desc: "Comparte los títulos y estados de tus libros por WhatsApp." },
              { num: "02", title: "Recibe una oferta", desc: "Te hacemos una propuesta justa en menos de 24 horas." },
              { num: "03", title: "Entrega y recibe crédito", desc: "Trae los libros a la tienda o coordina un domicilio." },
            ].map((step) => (
              <div key={step.num} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "2.5rem", color: "rgba(212,199,186,0.3)", fontWeight: 700, lineHeight: 1, flexShrink: 0, width: "50px" }}>{step.num}</span>
                <div>
                  <p style={{ color: "#FFF", fontWeight: 700, fontSize: "0.95rem", marginBottom: "4px" }}>{step.title}</p>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Catalog with Filters ── */}
      <section style={{ padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B85B14", display: "block", marginBottom: "8px" }}>Catálogo</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#2C1E16" }}>Novedades Literarias</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {/* View toggle */}
              <div style={{ display: "flex", border: "1px solid #E8E2D9", borderRadius: "6px", overflow: "hidden" }}>
                {[{ v: "grid", icon: "⊞" }, { v: "list", icon: "≡" }].map(({ v, icon }) => (
                  <button key={v} onClick={() => setView(v as any)} style={{ padding: "8px 14px", background: view === v ? "#4A3123" : "#FFF", color: view === v ? "#FFF" : "#4A3123", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "1rem", transition: "all 0.2s" }}>{icon}</button>
                ))}
              </div>
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ border: "1px solid #E8E2D9", borderRadius: "6px", padding: "9px 14px", fontSize: "0.82rem", color: "#4A3123", background: "#FFF", cursor: "pointer", outline: "none" }}
              >
                <option value="relevancia">Relevancia</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
                <option value="rating">Mejor valorados</option>
              </select>
              {/* Filters toggle */}
              <button onClick={() => setShowFilters(!showFilters)} style={{ display: "flex", alignItems: "center", gap: "7px", border: "1px solid #E8E2D9", borderRadius: "6px", padding: "9px 16px", fontSize: "0.82rem", fontWeight: 600, color: "#4A3123", background: showFilters ? "#F3EFE6" : "#FFF", cursor: "pointer" }}>
                <SlidersHorizontal size={16} /> Filtros
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div style={{ background: "#FAF7F3", border: "1px solid #E8E2D9", borderRadius: "12px", padding: "1.75rem", marginBottom: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", animation: "scaleIn 0.25s ease-out" }}>
              <div>
                <p style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6E4B39", marginBottom: "10px" }}>Categoría</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {categories.map((c) => (
                    <button key={c} onClick={() => setActiveCategory(c)} style={{ padding: "6px 14px", borderRadius: "999px", background: activeCategory === c ? "#4A3123" : "#FFF", color: activeCategory === c ? "#FFF" : "#4A3123", border: "1px solid #E8E2D9", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>{c}</button>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6E4B39", marginBottom: "10px" }}>Estado</p>
                <div style={{ display: "flex", gap: "6px" }}>
                  {stateFilters.map((s) => (
                    <button key={s} onClick={() => setActiveState(s)} style={{ padding: "6px 14px", borderRadius: "999px", background: activeState === s ? "#4A3123" : "#FFF", color: activeState === s ? "#FFF" : "#4A3123", border: "1px solid #E8E2D9", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6E4B39", marginBottom: "10px" }}>Búsqueda</p>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid #E8E2D9", borderRadius: "8px", padding: "8px 14px", gap: "8px", background: "#FFF" }}>
                  <Search size={15} color="#9A8A7E" />
                  <input
                    placeholder="Título, autor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ border: "none", background: "transparent", outline: "none", fontSize: "0.82rem", width: "100%", color: "#2C1E16" }}
                  />
                  {searchTerm && <X size={14} color="#9A8A7E" onClick={() => setSearchTerm("")} style={{ cursor: "pointer" }} />}
                </div>
              </div>
            </div>
          )}

          {/* Active tags */}
          {(activeCategory !== "Todos" || activeState !== "Todos" || searchTerm) && (
            <div style={{ display: "flex", gap: "8px", marginBottom: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.78rem", color: "#9A8A7E" }}>Filtros activos:</span>
              {activeCategory !== "Todos" && (
                <span style={{ background: "#F3EFE6", color: "#4A3123", padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "5px" }}>
                  <Tag size={11} /> {activeCategory}
                  <X size={11} style={{ cursor: "pointer" }} onClick={() => setActiveCategory("Todos")} />
                </span>
              )}
              {activeState !== "Todos" && (
                <span style={{ background: "#F3EFE6", color: "#4A3123", padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "5px" }}>
                  <Tag size={11} /> {activeState}
                  <X size={11} style={{ cursor: "pointer" }} onClick={() => setActiveState("Todos")} />
                </span>
              )}
              {searchTerm && (
                <span style={{ background: "#F3EFE6", color: "#4A3123", padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "5px" }}>
                  🔍 "{searchTerm}"
                  <X size={11} style={{ cursor: "pointer" }} onClick={() => setSearchTerm("")} />
                </span>
              )}
              <span style={{ fontSize: "0.78rem", color: "#B85B14", fontWeight: 600 }}>{filteredBooks.length} resultado{filteredBooks.length !== 1 && "s"}</span>
            </div>
          )}

          {/* Grid / List */}
          {filteredBooks.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 0", color: "#9A8A7E" }}>
              <BookOpen size={48} color="#D4C7BA" style={{ margin: "0 auto 1rem" }} />
              <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>No encontramos libros con esos filtros</p>
              <p style={{ fontSize: "0.88rem", marginTop: "8px" }}>Prueba cambiando la categoría o el estado</p>
            </div>
          ) : view === "grid" ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "2.25rem" }}>
              {filteredBooks.map((book) => <BookCard key={book.id} book={book} view="grid" />)}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {filteredBooks.map((book) => <BookCard key={book.id} book={book} view="list" />)}
            </div>
          )}
        </div>
      </section>

      {/* ── Reading Lifestyle Banner ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "420px" }}>
        <div style={{ background: `url('/reading-lifestyle.png') center/cover` }} />
        <div style={{ background: "#2C1E16", padding: "4.5rem 4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B85B14", display: "block", marginBottom: "1rem" }}>Comunidad</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "2.25rem", color: "#FFF", lineHeight: 1.25, marginBottom: "1.5rem" }}>
            Más que una tienda.<br/>Una comunidad de lectores.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
            Clubs de lectura, eventos, presentaciones de autores y recomendaciones personalizadas. En Incunabula, leer es compartir.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[{ n: "4.800+", l: "Clientes" }, { n: "2.500+", l: "Títulos" }, { n: "8 años", l: "Experiencia" }].map(({ n, l }) => (
              <div key={l}>
                <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "1.75rem", color: "#D4C7BA", fontWeight: 700 }}>{n}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em" }}>{l.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#1C130D", padding: "4rem 3rem 2.5rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
            <div>
              <img
                src="/logo-sin-fondo.png"
                alt="Incunabula"
                className="logo-dark-bg"
                style={{ height: "55px", width: "auto", marginBottom: "1.5rem" }}
              />
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "320px" }}>
                Librería independiente en Colombia. Libros con historia para lectores con memoria.
              </p>
            </div>
            {[
              { h: "Catálogo", items: ["Segunda Mano", "Novedades", "Literatura", "Ciencias", "Infantil"] },
              { h: "Ayuda", items: ["FAQ", "Envíos", "Devoluciones", "Términos"] },
              { h: "Contacto", items: ["WhatsApp", "Email", "Tienda física", "Horarios"] },
            ].map(({ h, items }) => (
              <div key={h}>
                <h4 style={{ color: "#FFF", fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "1.1rem", marginBottom: "1.25rem" }}>{h}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {items.map((item) => (
                    <span key={item} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", cursor: "pointer", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#D4C7BA")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem" }}>© 2026 Incunabula Librería. Todos los derechos reservados.</p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>Propuesta visual por GraphyGI · No funcional</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
