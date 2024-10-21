"use client";
import { motion } from "framer-motion";

function SectionTitle({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <motion.div
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="flex items-center justify-between w-full"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </motion.div>
  );
}

export default SectionTitle;
