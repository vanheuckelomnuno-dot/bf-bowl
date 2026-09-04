"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[640px]">
      <Image
        src="/gallery/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-nori/45"
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl px-6 py-20 text-center [text-shadow:0_1px_16px_rgba(0,0,0,0.45)]"
      >
        <motion.span
          variants={rise}
          className="mb-4 inline-block rounded-full bg-salmon px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm"
        >
          De eerste pokébowl van Kontich
        </motion.span>
        <motion.p variants={rise} className="mb-4 text-sm font-medium text-rice">
          {restaurant.adres} · 100% halal
        </motion.p>
        <motion.h1
          variants={rise}
          className="font-heading text-4xl font-semibold leading-[1.05] text-rice sm:text-6xl"
        >
          Stel &apos;m samen
          <br />
          zoals jij het wil.
        </motion.h1>
        <motion.p variants={rise} className="mx-auto mt-6 max-w-md text-lg text-rice">
          Basis, proteïne, vijf mix-ins, topping en saus. Bel ons, zeg wat je
          wil — en wij bouwen &apos;m voor je op.
        </motion.p>
        <motion.div variants={rise} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${restaurant.telefoon.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-rice px-7 py-3.5 text-base font-semibold text-nori transition-colors hover:bg-salmon hover:text-white"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            {restaurant.telefoon}
          </a>
          <Link
            href="/menu"
            className="text-sm font-medium text-rice/80 underline underline-offset-4 hover:text-rice"
          >
            of bekijk het menu
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
