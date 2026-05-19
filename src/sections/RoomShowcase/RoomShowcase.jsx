import { motion } from "framer-motion";
import { fadeUp, hoverLift, staggerContainer } from "../../animation/motionVariants";
import CinematicGalleryStrip from "../../components/gallery/CinematicGalleryStrip";
import SectionShell from "../../components/layout/SectionShell";
import deluxeQueen from "../../assets/rooms/deluxe-queen-bed-ac.png";
import executiveDeluxeTwin from "../../assets/rooms/executive-deluxe-twin-bed-ac.png";
import executiveSuite from "../../assets/rooms/executive-suite-ac.png";
import singleNonAc from "../../assets/rooms/single-non-ac.png";

const roomAmenities = ["Free Wi-Fi", "Smart TV", "Room Service", "Clean Linen", "Business Friendly"];

const rooms = [
  {
    title: "Executive Deluxe Twin Bed AC",
    description: "Spacious twin-bed comfort designed for families, corporate travelers, and longer premium stays with warm hospitality atmosphere.",
    src: executiveDeluxeTwin,
    occupancy: "Up to 3 guests",
    badge: "AC",
    highlights: ["Twin beds", "Spacious layout", "Corporate-ready"],
  },
  {
    title: "Executive Suite AC",
    description: "A refined premium suite experience balancing comfort, elegance, and business-class convenience.",
    src: executiveSuite,
    occupancy: "Up to 4 guests",
    badge: "AC",
    highlights: ["Suite comfort", "Premium lighting", "Extended stay"],
  },
  {
    title: "Deluxe Queen Bed AC",
    description: "Warm and elegant queen-bed accommodation crafted for calm private stays and premium relaxation.",
    src: deluxeQueen,
    occupancy: "Up to 2 guests",
    badge: "AC",
    highlights: ["Queen bed", "Warm ambience", "Private stay"],
  },
  {
    title: "Single Non AC",
    description: "Clean, efficient, and thoughtfully designed accommodation for practical solo travelers.",
    src: singleNonAc,
    occupancy: "1 guest",
    badge: "Non AC",
    highlights: ["Single bed", "Efficient layout", "Solo travel"],
  },
];

const roomGallery = rooms.map((room, index) => ({
  title: room.title,
  caption: room.description,
  kicker: `Room 0${index + 1}`,
  src: room.src,
  priority: true,
}));

export default function RoomShowcase() {
  return (
    <SectionShell
      id="rooms"
      eyebrow="Rooms"
      title="Spacious, hygienic rooms with a calm premium feel."
      description="A room experience built around cleanliness, comfort, and the confidence guests expect from a trusted city hotel."
    >
      <motion.div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2" variants={staggerContainer}>
        {rooms.map((room, index) => (
          <motion.article key={room.title} className="luxury-card group rounded-lg p-4" variants={fadeUp} whileHover={hoverLift}>
            <div className="relative overflow-hidden rounded-md bg-ink-950">
              <img
                src={room.src}
                alt={room.title}
                className="aspect-[16/10] w-full object-contain transition-transform duration-700 group-hover:scale-[1.018]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/36 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 rounded-md border border-gold-200/24 bg-ink-950/70 px-3 py-2 text-xs font-bold text-gold-200 backdrop-blur-md">
                {room.badge}
              </span>
            </div>
            <div className="p-2 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/76">Room 0{index + 1}</p>
              <h3 className="mt-2 font-display text-4xl font-semibold leading-none text-ivory-50">{room.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory-100/66">{room.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {room.highlights.map((item) => (
                  <span key={item} className="rounded-md border border-ivory-50/10 bg-ink-950/48 px-3 py-2 text-xs text-ivory-100/70">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-3 border-t border-ivory-50/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ivory-100/68">{room.occupancy} · Available on request</p>
                <a href="#booking" className="text-sm font-bold text-gold-200 transition-colors duration-300 hover:text-gold-100">
                  Check Availability
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
      <div className="mt-6 flex flex-wrap gap-2">
        {roomAmenities.map((item) => (
          <span key={item} className="rounded-md border border-ivory-50/10 bg-ink-950/44 px-3 py-2 text-xs font-semibold text-ivory-100/62">
            {item}
          </span>
        ))}
      </div>
      <CinematicGalleryStrip items={roomGallery} className="mt-6 sm:grid-cols-4" />
    </SectionShell>
  );
}
