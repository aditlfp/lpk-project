import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DetailModal = ({ person, onClose }) => {
  
  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalContentVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
  };

  if (!person) return null;

  return (
    <motion.div
      variants={modalBackdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 backdrop-blur-sm bg-opacity-10 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        variants={modalContentVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 sm:p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
            <X size={24} />
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-2">{person.category}</h2>
          <p className="text-xl text-gray-700 font-semibold mb-6">{person.name}</p>
          <div className="rounded-sm shadow-md w-fit">
            <span className="font-semibold text-[#003366]">Foto:</span>
            <img width={100} className="rounded-sm w-32 mb-2" src={
              person?.document?.file_path != undefined
              ? import.meta.env.VITE_STORAGE_IMG + person?.document?.file_path
              : person.image
            } alt="" srcSet={
              person?.document?.file_path != undefined
              ? import.meta.env.VITE_STORAGE_IMG + person?.document?.file_path
              : person.image
            } />
          </div>
          <div className="space-y-4 text-left">
            {Object.entries(person.details).map(([key, value]) => (
              <div key={key}>
                <p className="font-semibold text-[#003366]">{key}</p>
                <p className="text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailModal;
