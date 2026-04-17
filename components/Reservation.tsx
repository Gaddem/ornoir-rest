"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

export default function Reservation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1800);
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  };

  return (
    <section
      id="reservation"
      className="site-section site-section-elevated"
      style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #0A0A0A 100%)" }}
    >
      {/* Atmospheric glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="site-container site-container-narrow" ref={ref}>
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "2.75rem" }}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p
            variants={item}
            className="section-eyebrow"
          >
            Réservation
          </motion.p>
          <motion.h2
            variants={item}
            className="section-title"
          >
            Votre Table
          </motion.h2>
          <motion.p
            variants={item}
            className="section-intro"
          >
            Pour toute réservation de plus de 8 couverts ou occasion spéciale,
            contactez-nous directement au{" "}
            <span style={{ color: "#c9a84c" }}>+33 1 42 00 00 00</span>.
          </motion.p>
          <motion.div
            variants={item}
            className="gold-line"
            style={{ maxWidth: "220px", margin: "2rem auto 0 auto" }}
          />
        </motion.div>

        {/* Form / Success */}
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: "center",
                padding: "4rem 1rem",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "9999px",
                  border: "1px solid #C9A84C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem auto",
                }}
              >
                <span style={{ color: "#c9a84c", fontSize: "1.5rem" }}>✓</span>
              </motion.div>
              <h3
                style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "2rem", color: "#f5f0e8", marginBottom: "0.7rem" }}
              >
                Réservation confirmée
              </h3>
              <p
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", color: "rgba(245,240,232,0.7)", fontSize: "1.15rem" }}
              >
                Un email de confirmation vous sera adressé dans les plus brefs délais.
                <br />
                Nous nous réjouissons de vous accueillir.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              variants={stagger}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              onSubmit={handleSubmit}
              className="reservation-form"
              style={{ paddingBottom: "1.5rem" }}
            >
              {/* Prénom */}
              <motion.div variants={item} className="reservation-field">
                <label className="reservation-label">Prénom</label>
                <input
                  type="text"
                  required
                  placeholder="Antoine"
                  className="input-gold"
                />
              </motion.div>

              {/* Nom */}
              <motion.div variants={item} className="reservation-field">
                <label className="reservation-label">Nom</label>
                <input
                  type="text"
                  required
                  placeholder="Marchand"
                  className="input-gold"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={item} className="reservation-field">
                <label className="reservation-label">Email</label>
                <input
                  type="email"
                  required
                  placeholder="votre@email.fr"
                  className="input-gold"
                />
              </motion.div>

              {/* Téléphone */}
              <motion.div variants={item} className="reservation-field">
                <label className="reservation-label">Téléphone</label>
                <input
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  className="input-gold"
                />
              </motion.div>

              {/* Date */}
              <motion.div variants={item} className="reservation-field">
                <label className="reservation-label">Date</label>
                <input
                  type="date"
                  required
                  className="input-gold"
                  style={{ colorScheme: "dark" }}
                />
              </motion.div>

              {/* Heure */}
              <motion.div variants={item} className="reservation-field">
                <label className="reservation-label">Heure</label>
                <select required className="input-gold">
                  <option value="">Sélectionner</option>
                  <optgroup label="Déjeuner">
                    <option>12h00</option>
                    <option>12h30</option>
                    <option>13h00</option>
                    <option>13h30</option>
                  </optgroup>
                  <optgroup label="Dîner">
                    <option>19h00</option>
                    <option>19h30</option>
                    <option>20h00</option>
                    <option>20h30</option>
                    <option>21h00</option>
                  </optgroup>
                </select>
              </motion.div>

              {/* Couverts */}
              <motion.div variants={item} className="reservation-field">
                <label className="reservation-label">Nombre de couverts</label>
                <select required className="input-gold">
                  <option value="">Sélectionner</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n}>
                      {n} {n === 1 ? "personne" : "personnes"}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Occasion */}
              <motion.div variants={item} className="reservation-field">
                <label className="reservation-label">Occasion spéciale</label>
                <select className="input-gold">
                  <option value="">Aucune</option>
                  <option>Anniversaire</option>
                  <option>Dîner romantique</option>
                  <option>Repas d&apos;affaires</option>
                  <option>Célébration</option>
                  <option>Autre</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={item} className="reservation-field reservation-full">
                <label className="reservation-label">Message / Demandes particulières</label>
                <textarea
                  rows={4}
                  placeholder="Allergies, préférences, préparations spéciales…"
                  className="input-gold"
                  style={{ resize: "none" }}
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={item} className="reservation-cta reservation-full">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold"
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        style={{
                          width: "1rem",
                          height: "1rem",
                          border: "2px solid rgba(10,10,10,0.3)",
                          borderTopColor: "#0A0A0A",
                          borderRadius: "9999px",
                          display: "block",
                        }}
                      />
                      Traitement…
                    </span>
                  ) : (
                    "Confirmer la réservation"
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>

        <div style={{ height: "1.8rem" }} aria-hidden="true" />
      </div>
    </section>
  );
}
