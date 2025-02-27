import { LazyMotion, m, domAnimation } from 'framer-motion';

function DivAnimationWrapper({ children }: { children: React.ReactNode }) {
  const fromTop = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div variants={fromTop} initial="initial" whileInView="animate" viewport={{ once: false, amount: 0.1 }}>
        {children}
      </m.div>
    </LazyMotion>
  );
}

export default DivAnimationWrapper;
