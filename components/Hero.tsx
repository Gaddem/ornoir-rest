"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Réservation", href: "#reservation" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 1200], ["0%", "28%"]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const scale = useTransform(scrollY, [0, 1200], [1, 1.06]);

  const letterVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.8, ease: EASE_OUT },
    }),
  };

  const title = "NOIR & OR";

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      className="grain-overlay"
    >
      {/* Background */}
      <motion.div
        style={{ position: "absolute", inset: 0, y: yBg, scale }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 40%, #1a1208 0%, #0A0A0A 55%), radial-gradient(ellipse at 80% 70%, #120e04 0%, transparent 60%)",
          }}
        />
        {/* Abstract gold light streaks */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.04) 50%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "60%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          position: "relative",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "1rem",
          padding: "2.1rem 2.5rem",
        }}
      >
        <div
          style={{ color: "#c9a84c", letterSpacing: "0.35em", textTransform: "uppercase", fontSize: "0.72rem", fontFamily: "var(--font-cormorant)" }}
        >
          Paris, depuis 1994
        </div>
        <ul style={{ display: "flex", justifySelf: "center", gap: "2rem", listStyle: "none", padding: 0, margin: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: "rgba(245,240,232,0.75)",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  fontSize: "0.72rem",
                  textDecoration: "none",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reservation"
          style={{
            justifySelf: "end",
            border: "1px solid rgba(201,168,76,0.5)",
            color: "#c9a84c",
            padding: "0.55rem 1.2rem",
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Réserver
        </a>
      </motion.nav>

      {/* Center content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          textAlign: "center",
          padding: "0 1rem",
          opacity,
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.8em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            color: "#c9a84c",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
            letterSpacing: "0.65em",
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Restaurant Gastronomique
        </motion.p>

        {/* Main title — letter by letter */}
        <h1
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            whiteSpace: "nowrap",
            overflow: "visible",
            gap: "0.02em",
            fontSize: "clamp(1.8rem, 8.2vw, 9rem)",
            lineHeight: 1,
            letterSpacing: "0.04em",
            marginBottom: "2rem",
            paddingLeft: "0.22em",
            paddingRight: "0.22em",
            userSelect: "none",
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontWeight: 600,
          }}
          aria-label={title}
        >
          <span aria-hidden="true" style={{ display: "inline-block", width: "0.2em" }} />
          {title.split("").map((char, i) =>
            char === " " ? (
              <span key={i} style={{ display: "inline-block", width: "0.3em" }} />
            ) : (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-gold-gradient"
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            )
          )}
        </h1>

        {/* Ornamental line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: EASE_OUT }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.8rem" }}
        >
          <div style={{ width: "5rem", height: "1px", background: "rgba(201,168,76,0.5)" }} />
          <span
            style={{ color: "#c9a84c", fontSize: "1.1rem", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            ✦
          </span>
          <div style={{ width: "5rem", height: "1px", background: "rgba(201,168,76,0.5)" }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1.4rem",
            letterSpacing: "0.16em",
            maxWidth: "760px",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
          }}
        >
          L&apos;excellence au cœur de chaque assiette
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            marginTop: "2.6rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.7rem",
            background: "#c9a84c",
            color: "#0a0a0a",
            padding: "0.9rem 1.8rem",
            fontSize: "0.85rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            fontWeight: 600,
            textDecoration: "none",
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Découvrir le menu
          <span style={{ fontSize: "1rem" }}>↓</span>
        </motion.a>
      </motion.div>

      {/* Bottom ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", paddingBottom: "2rem" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
        >
          <span
            style={{ color: "rgba(201,168,76,0.5)", fontSize: "0.72rem", letterSpacing: "0.35em", textTransform: "uppercase", fontFamily: "var(--font-cormorant)" }}
          >
            Scroll
          </span>
          <div style={{ width: "1px", height: "2.5rem", background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
