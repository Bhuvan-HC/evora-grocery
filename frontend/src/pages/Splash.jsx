import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/evora-splash.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black">
      
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Evora"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-40 mb-6"
      />

      {/* Brand text */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-white text-2xl tracking-widest font-semibold"
      >
        EVORA
      </motion.h1>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 text-sm text-gray-400"
      >
        from EVORA Technologies
      </motion.p>
    </div>
  );
};

export default Splash;
