import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";
import { siteConfig } from "../../config/site";

const signals = [
  ["Clean rooms", "Repeatedly praised for hygiene and well-kept spaces."],
  ["Helpful staff", "Guests mention polite, cooperative, practical service."],
  ["Food quality", "Vegetarian dining and room service add stay confidence."],
  ["Central location", "Close to market movement, bus stand, and railway station."],
];
const reviews = [
  ["Excellent stay", "Helpful guidance, polite staff, and a smooth visit experience."],
  ["Family friendly", "Comfortable, welcoming, and practical for visitors to Solapur."],
  ["Clean and spacious", "Well maintained rooms with convenient city access."],
];

export default function TrustSection() {
  return (
    <SectionShell
      id="trust"
      eyebrow="Guest trust"
      title="Hospitality proven through comfort, service, and consistency."
      description="Guests repeatedly value the cleanliness, cooperative staff, spacious rooms, dining quality, and location convenience."
    >
      <motion.div className="mt-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]" variants={staggerContainer}>
        <motion.div className="glass-panel rounded-lg p-8" variants={fadeUp}>
          <p className="font-display text-7xl font-bold text-gold-200">{siteConfig.rating}</p>
          <p className="mt-3 text-sm font-bold uppercase text-ivory-50">{siteConfig.reviewCount} reviews</p>
          <p className="mt-6 text-sm leading-7 text-ivory-100/66">A premium Solapur stay trusted for practical comfort and warm service.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {signals.map(([signal, text]) => (
            <motion.div key={signal} className="luxury-card rounded-lg p-6" variants={fadeUp}>
              <p className="font-display text-3xl font-bold text-ivory-50">{signal}</p>
              <p className="mt-3 text-sm leading-7 text-ivory-100/62">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div className="mt-6 grid gap-4 md:grid-cols-3" variants={staggerContainer}>
        {reviews.map(([title, text]) => (
          <motion.article key={title} className="glass-panel rounded-lg p-6" variants={fadeUp}>
            <p className="text-sm text-gold-200">★★★★★</p>
            <p className="mt-4 font-display text-3xl font-semibold text-ivory-50">{title}</p>
            <p className="mt-3 text-sm leading-7 text-ivory-100/64">{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
