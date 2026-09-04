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
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-salmon/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cucumber/10 blur-3xl"
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-14 sm:grid-cols-[1.1fr_1fr] sm:items-center sm:pt-20"
      >
        <div>
          <motion.p variants={rise} className="mb-4 text-sm font-medium text-cucumber">
            {restaurant.adres} · 100% halal
          </motion.p>
          <motion.h1
            variants={rise}
            className="font-heading text-4xl font-semibold leading-[1.05] text-nori sm:text-6xl"
          >
            Stel &apos;m samen
            <br />
            zoals jij het wil.
          </motion.h1>
          <motion.p variants={rise} className="mt-6 max-w-md text-lg text-nori/70">
            Basis, proteïne, vijf mix-ins, topping en saus. Bel ons, zeg wat je
            wil — en wij bouwen &apos;m voor je op.
          </motion.p>
          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${restaurant.telefoon.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-nori px-7 py-3.5 text-base font-semibold text-rice transition-colors hover:bg-salmon"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {restaurant.telefoon}
            </a>
            <Link
              href="/menu"
              className="text-sm font-medium text-nori/70 underline underline-offset-4 hover:text-nori"
            >
              of bekijk het menu
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={rise}
          className="mx-auto w-full max-w-sm sm:max-w-md"
        >
          <Image
            src="/brand/logo-full.png"
            alt="B&F Bowl — Poké Bowl, Desserts & More"
            width={1266}
            height={1253}
            priority
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
