const StarRating = ({ rating }) => {
  const max = 5;
  const size = "w-4 h-4"; // Slightly smaller for table cells
  const starPath =
    "M10.868 2.884c.321-.772 1.308-.772 1.629 0l1.983 4.795a1 1 0 00.753.542h5.036c.84 0 1.18.993.524 1.485l-4.073 2.96a1 1 0 00-.364 1.118l1.518 4.674c.274.84-.658 1.558-1.413 1.053l-4.24-3.083a1 1 0 00-1.175 0l-4.24 3.083c-.755.505-1.687-.213-1.413-1.053l1.518-4.674a1 1 0 00-.364-1.118L2.554 9.706c-.655-.492-.316-1.485.524-1.485h5.036a1 1 0 00.753-.542l1.983-4.795z";

  const safeRating = Math.max(0, Math.min(parseFloat(rating), max));
  const rounded = Math.round(safeRating * 2) / 2;

  const full = Math.floor(rounded);
  const half = rounded - full >= 0.5 ? 1 : 0;
  const empty = max - full - half;

  const gradId = `grad_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center justify-center gap-x-1">
      {/* Full Stars */}
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={size}
          fill="oklch(80.9% 0.105 251.813)"
        >
          <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
        </svg>
      ))}

      {/* Half Star */}
      {half ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={size}
        >
          <defs>
            <linearGradient id={gradId}>
              <stop offset="50%" stopColor="oklch(80.9% 0.105 251.813)" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path fill={`url(#${gradId})`} d={starPath} />
        </svg>
      ) : null}

      {/* Empty Stars */}
      {Array.from({ length: empty }).map((_, i) => (
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={size}
          fill="#d1d5db"
        >
          <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
        </svg>
      ))}

      {/* Numeric Rating */}
      <span className="ml-2 text-sm mt-1 text-gray-500">
        ({safeRating.toFixed(1)})
      </span>
    </div>
  );
};

export default StarRating;
