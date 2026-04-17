"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

const STATS = [
  { value: "30+", label: "Années d'excellence" },
  { value: "2", label: "Étoiles Michelin" },
  { value: "18/20", label: "Gault & Millau" },
  { value: "4k", label: "Références en cave" },
];

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef(null);
  const inView = useInView(textRef, { once: true, margin: "-80px" });

  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 2200], ["-4%", "4%"]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.9, ease: EASE_OUT },
    }),
  };

  return (
    <section id="histoire" ref={sectionRef} className="site-section site-section-dark">
      <div className="site-container story-grid">
        {/* Image column */}
        <div style={{ position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="story-card"
          >
            <motion.div style={{ y: imgY, width: "100%", height: "100%", position: "absolute", inset: 0 }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `
                    radial-gradient(ellipse at 40% 30%, #2a1f08 0%, #0D0D0D 60%),
                    radial-gradient(ellipse at 70% 80%, #1a1208 0%, transparent 50%)
                  `,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `
                    radial-gradient(circle at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 60%),
                    linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)
                  `,
                }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: "10rem",
                      height: "4px",
                      borderRadius: 9999,
                      marginBottom: "2rem",
                      background: "rgba(201,168,76,0.15)",
                      boxShadow: "0 0 40px rgba(201,168,76,0.08)",
                    }}
                  />
                  <div
                    style={{
                      width: "4rem",
                      height: "1px",
                      margin: "0 auto 1.5rem auto",
                      background: "rgba(201,168,76,0.3)",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: i === 1 ? 10 : 6,
                          height: i === 1 ? 10 : 6,
                          borderRadius: "9999px",
                          background: `rgba(201,168,76,${i === 1 ? 0.5 : 0.25})`,
                          boxShadow: i === 1 ? "0 0 20px rgba(201,168,76,0.2)" : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "8rem",
                  height: "16rem",
                  background: "linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.6) 100%)",
                  borderRadius: "50% 50% 0 0",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Text column */}
        <div ref={textRef}>
          <motion.p
            custom={0}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="section-eyebrow"
            style={{ textAlign: "left", marginBottom: "0.8rem" }}
          >
            Notre Histoire
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            Une passion
          </motion.h2>
          <motion.h2
            custom={2}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-gold-gradient"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.2rem,5vw,4rem)", marginBottom: "1.1rem" }}
          >
            intemporelle
          </motion.h2>

          <motion.div
            custom={3}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="gold-line"
            style={{ maxWidth: "120px", marginBottom: "1.25rem" }}
          />

          <motion.p
            custom={4}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="story-text"
          >
            Né d&apos;une vision singulière — celle du Chef Antoine Marchand — NOIR &amp; OR
            incarne depuis 1994 l&apos;alliance parfaite entre la grande tradition française
            et une créativité sans compromis.
          </motion.p>

          <motion.p
            custom={5}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="story-text"
            style={{ fontStyle: "italic" }}
          >
            Chaque plat est une déclaration — un dialogue entre le terroir le plus noble
            et l&apos;audace de techniques avant-gardistes. Ici, le temps s&apos;arrête
            pour ne laisser place qu&apos;à l&apos;essentiel : l&apos;émotion pure d&apos;un repas d&apos;exception.
          </motion.p>

          {/* Stats */}
          <motion.div
            custom={6}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{ borderLeft: "2px solid rgba(201,168,76,0.3)", padding: "0.4rem 0 0.4rem 0.8rem" }}
              >
                <p
                  style={{ fontFamily: "var(--font-playfair)", color: "#c9a84c", fontSize: "1.8rem", marginBottom: "0.2rem" }}
                >
                  {stat.value}
                </p>
                <p
                  style={{ fontFamily: "var(--font-cormorant)", color: "rgba(245,240,232,0.6)", fontSize: "0.95rem" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
