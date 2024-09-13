import { LazyMotion, m, domAnimation } from 'framer-motion';

function HeaderAnimationWrapper({ children }: { children: React.ReactNode }) {
  const headerFromDown = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div variants={headerFromDown} initial="initial" whileInView="animate" viewport={{ once: false, amount: 0.1 }}>
        {children}
      </m.div>
    </LazyMotion>
  );
}

export default HeaderAnimationWrapper;
