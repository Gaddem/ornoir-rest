"use client";

import { motion } from "framer-motion";

const LINKS = {
  Navigation: ["Menu", "Notre Histoire", "Réservation", "La Cave"],
  Services: ["Privatisation", "Traiteur", "Cours de cuisine", "Cadeaux"],
  Légal: ["Mentions légales", "Politique de confidentialité", "CGV", "Accessibilité"],
};

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="site-container">
        {/* Top section */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-gold-gradient"
                style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "3rem", marginBottom: "0.8rem" }}
              >
                NOIR & OR
              </h2>
              <p
                style={{
                  color: "rgba(245,240,232,0.6)",
                  lineHeight: 1.5,
                  maxWidth: "320px",
                  margin: "0 auto 1rem auto",
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                }}
              >
                Gastronomie d&apos;exception au cœur du VIIIe arrondissement de Paris.
                Une expérience culinaire qui transcende les saisons.
              </p>

              {/* Address */}
              <address
                style={{ fontFamily: "var(--font-cormorant)", color: "rgba(245,240,232,0.55)", lineHeight: 1.7, fontStyle: "normal" }}
              >
                <p className="footer-title" style={{ marginBottom: "0.3rem" }}>
                  Adresse
                </p>
                12, Rue du Faubourg Saint-Honoré
                <br />
                75008 Paris, France
                <br />
                <br />
                <p className="footer-title" style={{ marginBottom: "0.3rem", marginTop: "0.4rem" }}>
                  Horaires
                </p>
                Mar — Sam : 12h — 14h30 &amp; 19h — 22h30
                <br />
                Dimanche et Lundi : Fermé
              </address>

              {/* Social */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.9rem", marginTop: "1.2rem" }}>
                {["Instagram", "Facebook", "TripAdvisor"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="footer-link"
                    style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.75rem" }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links columns */}
          {Object.entries(LINKS).map(([group, links], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: gi * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <p className="footer-title">
                {group}
              </p>
              <ul className="footer-list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Separator */}
        <div className="gold-line" style={{ margin: "2rem 0 1.4rem 0" }} />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.8rem",
            color: "rgba(245,240,232,0.45)",
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
          }}
        >
          <p style={{ fontFamily: "var(--font-cormorant)" }}>
            © {new Date().getFullYear()} NOIR &amp; OR — Tous droits réservés
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>
            Gastronomie d&apos;exception · Paris · Depuis 1994
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)" }}>
            Fait avec passion
          </p>
        </div>
      </div>
    </footer>
  );
}
