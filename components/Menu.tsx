"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

const CATEGORIES = [
  {
    id: "entrees",
    label: "Entrées",
    roman: "I",
    items: [
      {
        name: "Foie Gras de Canard",
        desc: "Torchon maison, brioche dorée au beurre noisette, confiture de figues à l'Armagnac",
        price: "38",
        note: "Signature",
      },
      {
        name: "Huîtres Spéciales Gillardeau",
        desc: "Granité de Champagne, caviar Osciètre, échalotes confites au vinaigre de Xérès",
        price: "52",
        note: null,
      },
      {
        name: "Saint-Jacques Snackées",
        desc: "Crème de chou-fleur truffée, noisettes torréfiées, émulsion citronnelle",
        price: "44",
        note: "Saison",
      },
      {
        name: "Tartare de Thon Rouge",
        desc: "Avocat fumé, yuzu, herbes fraîches du jardin, chips de riz soufflé",
        price: "36",
        note: null,
      },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    roman: "II",
    items: [
      {
        name: "Turbot Sauvage en Croûte",
        desc: "Épinards fondants, beurre blanc au Champagne, caviar Baeri en finition",
        price: "72",
        note: "Chef",
      },
      {
        name: "Pigeon de Vendée Rôti",
        desc: "Jus corsé aux cerises noires, foie poêlé, polenta crémeuse au parmesan 36 mois",
        price: "68",
        note: null,
      },
      {
        name: "Filet de Wagyu A5",
        desc: "Pommes soufflées au beurre de truffe noire, sauce Bordelaise au vin de Pomerol",
        price: "98",
        note: "Prestige",
      },
      {
        name: "Homard Bleu Breton",
        desc: "Bisque réduite, légumes du marché en brunoise, condiment de corail",
        price: "88",
        note: null,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    roman: "III",
    items: [
      {
        name: "Soufflé au Grand Marnier",
        desc: "Sorbet mandarine yuzu, tuile dentelle au sésame, crème Anglaise à la vanille de Tahiti",
        price: "28",
        note: "Signature",
      },
      {
        name: "Millefeuille Revisité",
        desc: "Crème légère à la vanille Bourbon, caramel fleur de sel, feuilletage inversé",
        price: "24",
        note: null,
      },
      {
        name: "Chocolat Guanaja 70%",
        desc: "Crémeux intense, glace praliné noisettes du Piémont, tuile croustillante",
        price: "26",
        note: "Chef",
      },
      {
        name: "Île Flottante Dorée",
        desc: "Blancs en neige caramélisés, crème Anglaise safranée, amandes effilées grillées",
        price: "22",
        note: null,
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: EASE_OUT },
  }),
};

function MenuCard({
  item,
  index,
}: {
  item: (typeof CATEGORIES)[0]["items"][0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="menu-item"
      data-cursor="hover"
    >
      <div>
        <div>
          <h4 className="menu-item-title" style={{ fontFamily: "var(--font-playfair)" }}>
            {item.name}
          </h4>
          {item.note && (
            <span className="menu-item-note" style={{ fontFamily: "var(--font-cormorant)" }}>
              {item.note}
            </span>
          )}
        </div>
        <p className="menu-item-desc" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>
          {item.desc}
        </p>
      </div>
      <div>
        <span className="menu-item-price" style={{ fontFamily: "var(--font-playfair)" }}>
          {item.price}
          <span style={{ fontSize: "1rem", marginLeft: "0.1rem" }}>€</span>
        </span>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [active, setActive] = useState("entrees");
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const currentCategory = CATEGORIES.find((c) => c.id === active)!;

  return (
    <section id="menu" className="site-section site-section-dark">
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
        }}
      />

      <div className="site-container">
        {/* Header */}
        <div ref={headerRef} className="site-container-narrow" style={{ marginBottom: "2.75rem" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="section-eyebrow"
          >
            Carte & Saisons
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE_OUT }}
            className="section-title"
          >
            Notre Menu
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-line"
            style={{ maxWidth: "220px", margin: "0 auto" }}
          />
        </div>

        {/* Category tabs */}
        <div className="site-container-narrow menu-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`menu-tab ${active === cat.id ? "active" : ""}`}
            >
              <span>
                <span style={{ opacity: 0.5, marginRight: "0.45rem", fontSize: "0.72rem" }}>{cat.roman}</span>
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="site-container-narrow">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="menu-list"
          >
            {currentCategory.items.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textAlign: "center",
            marginTop: "2.1rem",
            color: "rgba(245,240,232,0.35)",
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
          }}
        >
          Tous nos plats sont élaborés à partir de produits frais et de saison.
          <br />
          Prix nets, service compris.
        </motion.p>
      </div>
    </section>
  );
}
