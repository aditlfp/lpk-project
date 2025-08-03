import React from 'react';

const WhatsappBubble = () => {
  const whatsappNumber = "6281395554334"; // Replace with your WhatsApp number (with country code)
  const message = "Halo Admin LPK Asa Hikari Mulya, Saya ingin menanyakan informasi lebih lanjut mengenai program pelatihan yang tersedia!"; // Optional default message

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat via WhatsApp"
      >
        {/* WhatsApp Icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2.004a9.931 9.931 0 0 0-8.872 14.438L2 22l5.691-1.185A9.931 9.931 0 1 0 12.04 2.004zm0 2a7.931 7.931 0 1 1 0 15.862 7.931 7.931 0 0 1 0-15.862zm3.784 10.936c-.167.469-.968.925-1.339.975-.362.049-.794.07-2.567-.831-2.16-1.077-3.566-3.786-3.672-3.961-.106-.175-.879-1.162-.879-2.214 0-1.052.557-1.568.755-1.787.198-.218.43-.273.574-.273h.443c.198 0 .3.014.431.325.167.392.567 1.349.617 1.448.049.1.082.221.017.356-.065.135-.098.219-.193.336-.097.118-.204.262-.292.352-.097.098-.198.205-.084.403.113.198.504.829 1.082 1.343.746.666 1.374.875 1.572.973.197.099.312.083.43-.05.118-.134.496-.577.63-.775.133-.198.263-.165.431-.099.168.065 1.064.503 1.246.596.182.093.3.14.344.218.049.07.049.412-.117.88z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsappBubble;
