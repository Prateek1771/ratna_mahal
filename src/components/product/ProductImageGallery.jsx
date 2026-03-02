export default function ProductImageGallery({ images }) {
  const displayImages = images.slice(0, 6);

  return (
    <div className="hidden md:grid grid-cols-2 gap-1.5">
      {displayImages.map((src, index) => (
        <div key={index} className="overflow-hidden group/img">
          <img
            src={src}
            alt={`Product image ${index + 1}`}
            loading={index < 2 ? "eager" : "lazy"}
            className="aspect-square object-cover w-full cursor-zoom-in transition-transform duration-700 ease-out group-hover/img:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
