import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [images.length, isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  }, [images.length, isTransitioning]);

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    // Auto transition timer
    const slideTimer = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(slideTimer);
  }, [currentIndex, goToNext]);

  // Reset transitioning state after animation completes
  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this to your CSS transition time

    return () => clearTimeout(transitionTimer);
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        carouselRef.current &&
        carouselRef.current.contains(document.activeElement)
      ) {
        if (e.key === "ArrowLeft") {
          goToPrevious();
        } else if (e.key === "ArrowRight") {
          goToNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Touch event handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Handle visibility change (pause when not visible)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, do nothing
      } else {
        // Page is visible again, maybe update the carousel
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Project images carousel"
    >
      <div className="carousel-wrapper">
        <button
          className="carousel-button prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          ←
        </button>

        <div className="carousel-content">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                opacity: index === currentIndex ? 1 : 0,
                zIndex: index === currentIndex ? 1 : 0,
              }}
              aria-hidden={index !== currentIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${images.length}`}
            >
              <div className="carousel-image-container">
                <Image
                  src={image.src}
                  alt={image.alt || `Project image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  style={{ objectFit: "contain" }}
                  priority={index === 0}
                  quality={90}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              {image.caption && (
                <div className="carousel-caption">
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="carousel-button next"
          onClick={goToNext}
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          →
        </button>
      </div>

      <div className="carousel-indicators" role="tablist">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
            tabIndex={index === currentIndex ? 0 : -1}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
