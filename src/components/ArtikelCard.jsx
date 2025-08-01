import React from 'react';

const ArtikelCard = ({ image, tag, title, description, date, link }) => {
  return (
    <div className="max-w-sm">
      <img src={image} alt={title} className="w-full h-72 object-cover rounded-lg" />

      <div className="py-4">
        <span className="badge badge-primary">
          {tag}
        </span>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">
            {description} 
            </p>
            <span className="text-gray-400">{date}</span>
        </div>
        <a
          href={link}
          className="mt-3 inline-block text-blue-600 font-semibold hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default ArtikelCard;
