

import React from 'react';
import { FaRegClock } from 'react-icons/fa'; // Example icon for the time
import { FiEye } from 'react-icons/fi'; // Example icon for views

const NewsCard = ({ news }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white overflow-hidden">
      {/* Image */}
      <img className="w-full h-96 object-cover object-center rounded-t-lg" src={news.thumbnail_url} alt={news.title} />

      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>

        {/* Author and Date */}
        <div className="flex items-center space-x-2 mt-2">
          <img className="w-8 h-8 rounded-full" src={news.author.img} alt={news.author.name} />
          <div>
            <p className="text-sm text-gray-500">{news.author.name}</p>
            <p className="text-xs text-gray-400">{new Date(news.author.published_date).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <span className="text-sm text-yellow-500">{'★'.repeat(Math.floor(news.rating.number))}</span>
          <span className="text-xs text-gray-400 ml-2">{news.rating.badge}</span>
        </div>

        {/* Details */}
        <p className="text-sm text-gray-600 mt-3">{news.details}</p>

        {/* Footer with Views and Category */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-gray-500 text-xs space-x-1">
            <FiEye />
            <span>{news.total_view}</span>
          </div>
          <span className="badge badge-primary">{`Category: ${news.category_id}`}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
