import { lazy } from "react";

export const sectionRegistry = [
  {
    id: "hero",
    component: lazy(() => import("./HeroSection")),
  },
  {
    id: "storytelling",
    component: lazy(() => import("./StorytellingSection")),
  },
  {
    id: "experience",
    component: lazy(() => import("./ExperienceSection")),
  },
  {
    id: "rooms",
    component: lazy(() => import("./RoomShowcase")),
  },
  {
    id: "facilities",
    component: lazy(() => import("./FacilityExperience")),
  },
  {
    id: "gallery",
    component: lazy(() => import("./CinematicGallery")),
  },
  {
    id: "testimonials",
    component: lazy(() => import("./TestimonialCarousel")),
  },
  {
    id: "booking",
    component: lazy(() => import("./BookingExperience")),
  },
  {
    id: "trust",
    component: lazy(() => import("./TrustSection")),
  },
  {
    id: "contact",
    component: lazy(() => import("./ContactSection")),
  },
];
