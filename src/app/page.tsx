"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const heroImages = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg"
];

const realisationsGallery = [
  {
    id: 1,
    title: "Cuisine 01",
    images: [
      "/realisation/1/682485880_18350123908208026_8877467639013657100_n.jpg",
      "/realisation/1/684084532_18350123917208026_8429369270293657831_n.jpg",
      "/realisation/1/684142371_18350123938208026_5661275375026160579_n.jpg"
    ]
  },
  {
    id: 2,
    title: "Cuisine 02",
    images: [
      "/realisation/2/670923372_18349450291208026_5542723809992684605_n.jpg",
      "/realisation/2/671224670_18349450327208026_5658471616431439539_n.jpg",
      "/realisation/2/671645629_18349450318208026_2690824454196570982_n.jpg"
    ]
  },
  {
    id: 3,
    title: "Cuisine 03",
    images: [
      "/realisation/3/670792006_18349197415208026_8486741893867944676_n.jpg",
      "/realisation/3/670844420_18349197406208026_1332297023452479004_n.jpg",
      "/realisation/3/671083749_18349197379208026_110112421878476261_n.jpg"
    ]
  },
  {
    id: 4,
    title: "Cuisine 04",
    images: [
      "/realisation/4/670788477_18349081846208026_554444859357618590_n.jpg",
      "/realisation/4/671030988_18349081810208026_6887490311280951564_n.jpg",
      "/realisation/4/671151946_18349081837208026_8615429991181459520_n.jpg"
    ]
  },
  {
    id: 5,
    title: "Cuisine 05",
    images: [
      "/realisation/5/669170266_18348337261208026_205141207412272871_n (1).jpg",
      "/realisation/5/670163447_18348337243208026_4349983619550805960_n.jpg",
      "/realisation/5/670276367_18348337168208026_7177614317890042082_n.jpg"
    ]
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HEADER */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${
          isScrolled ? "bg-primary/95 backdrop-blur-sm text-white py-4" : "bg-transparent text-white py-6"
        }`}
        style={{
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
        }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold tracking-wider">
            DAS SCHÖN
          </div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#collections" className="hover:text-accent transition-colors duration-300">Collections</a>
            <a href="#accessoires" className="hover:text-accent transition-colors duration-300">Accessoires</a>
            <a href="#realisations" className="hover:text-accent transition-colors duration-300">Réalisations</a>
            <a href="#showroom" className="hover:text-accent transition-colors duration-300">Showroom</a>
          </nav>
        </div>
      </motion.header>

      {/* 2. HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Cuisine haut de gamme allemande"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-dark/40 z-0" />

        <div className="relative z-10 flex flex-col items-center text-center text-white px-6 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest mb-4">
              DAS SCHÖN
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-xl md:text-3xl font-light tracking-wide mb-6">
              Cuisines allemandes. Fabriquées en Algérie.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm md:text-base font-light tracking-widest uppercase text-white/70">
              <span>Chéraga, Alger</span>
              <span className="hidden md:inline text-white/30">•</span>
              <span>Constantine, Algérie</span>
              <span className="hidden md:inline text-white/30">•</span>
              <span>Oran, Algérie</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 3. MANIFESTE */}
      <section className="py-32 px-6 md:px-12 bg-light">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="font-playfair text-3xl md:text-5xl lg:text-6xl text-dark mb-16 flex flex-col gap-4">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
            >
              Allemand.
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
              }}
            >
              Précis.
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
              }}
              className="text-primary italic"
            >
              Chez vous.
            </motion.span>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-24 h-px bg-accent mx-auto mb-16"
          />
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg md:text-2xl text-dark/70 font-light leading-relaxed"
          >
            Das Schön réunit le savoir-faire allemand et l&apos;artisanat algérien 
            pour créer des cuisines qui durent une vie.
          </motion.p>
        </div>
      </section>

      {/* 5. ACCESSOIRES */}
      <section id="accessoires" className="py-24 md:py-32 bg-dark text-white px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
          className="w-full md:w-3/5 h-[60vh] relative"
        >
          <Image
            src="/hettich.jpeg"
            alt="Détails tiroirs cuisine Hettich"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }
          }}
          className="w-full md:w-2/5 flex flex-col justify-center"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent"></span>
            Made in Algérie 🇩🇿
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl mb-8 leading-tight">
            Chaque détail.<br />Qualité Allemande.
          </h2>
          <p className="text-white/60 font-light text-lg leading-relaxed">
            Quincaillerie Hettich.<br />
            Des mécanismes conçus pour durer 50 ans.<br />
            Le silence parfait à chaque fermeture.
          </p>
        </motion.div>
      </section>

      {/* 6. RÉALISATIONS */}
      <section id="realisations" className="py-32 px-6 md:px-12 bg-light">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-24 md:mb-32"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-dark tracking-wider mb-8">
              Nos Réalisations
            </h2>
            <div className="w-16 h-px bg-dark/20 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col gap-32">
            {realisationsGallery.map((project, i) => (
              <div key={project.id} className="flex flex-col">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center mb-12"
                >
                  <h3 className="font-playfair text-3xl md:text-4xl text-dark tracking-widest uppercase mb-4">
                    {project.title}
                  </h3>
                  <span className="text-accent text-sm tracking-[0.3em] uppercase">
                    Das Schön
                  </span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {project.images.map((img, j) => (
                    <motion.div 
                      key={j}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: j * 0.2 } }
                      }}
                      className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group shadow-sm bg-dark/5"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - Vue ${j + 1}`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-dark/0 transition-colors duration-700 group-hover:bg-dark/10" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="showroom" className="py-24 bg-white text-dark text-center">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-playfair text-3xl font-bold tracking-widest mb-16"
          >
            DAS SCHÖN
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-12 md:gap-32 text-dark/70 font-light tracking-wide mb-16"
          >
            <div className="flex flex-col items-center">
              <p className="font-playfair font-bold text-xl mb-2 text-dark">Showroom Alger</p>
              <p className="text-sm tracking-widest uppercase mb-1">Chéraga</p>
              <p className="text-primary tracking-widest">0552 930 930</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-playfair font-bold text-xl mb-2 text-dark">Showroom Constantine</p>
              <p className="text-sm tracking-widest uppercase mb-1">Constantine</p>
              <p className="text-primary tracking-widest">0560 930 930</p>
            </div>
          </motion.div>
          
          <motion.a
            href="#"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-dark/50 hover:text-dark transition-colors duration-300 mb-16"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </motion.a>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full max-w-md mx-auto"
          >
            <div className="h-px bg-dark/10 mb-8" />
            <p className="text-xs text-dark/40 tracking-widest uppercase">
              © {new Date().getFullYear()} Das Schön Algérie
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}