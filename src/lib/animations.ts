const EASE = "easeOut" as const;
export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
  },
 transition: {
  duration: 0.8,
  ease: EASE,
},
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -40,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
  },
 transition: {
  duration: 0.8,
 ease: EASE,
},
};

export const fadeRight= {
  initial: {
    opacity: 0,
    x: 40,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
  },
  transition: {
    duration: 0.8,
    ease: EASE,
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
  viewport: {
    once: true,
  },
 transition: {
  duration: 0.7,
ease: EASE,
},
};
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
     staggerChildren: 0.12,
delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
  duration: 0.65,
  ease: EASE,
},
  },
};
export const sectionReveal= {
  initial: {
    opacity: 0,
    y: 60,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: 0.9,
    ease: EASE,
  },
};

export const zoomReveal = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
  transition: {
    duration: 0.8,
   ease: EASE,
  },
};