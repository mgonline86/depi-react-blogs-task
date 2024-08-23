import { motion } from "framer-motion";

export default function OnScrollReveal({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0.5, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
