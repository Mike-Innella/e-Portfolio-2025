"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import { ProjectMedia } from "@/content/projects";
import s from "./ImageModal.module.css";

type Props = {
  media: ProjectMedia[];
  initialIndex: number;
  onClose: () => void;
};

export default function ImageModal({ media, initialIndex, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentItem = media[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : media.length - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < media.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [media.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : media.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < media.length - 1 ? prev + 1 : 0));
  };

  return (
    <Modal open={true} onClose={onClose} dialogClassName={s.imageModal}>
      <div className={s.modalContent}>
        {/* Close button */}
        <button
          onClick={onClose}
          className={s.closeButton}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Image counter */}
        {media.length > 1 && (
          <div className={s.counter}>
            {currentIndex + 1} / {media.length}
          </div>
        )}

        {/* Navigation arrows for multiple images */}
        {media.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`${s.navButton} ${s.prevButton}`}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className={`${s.navButton} ${s.nextButton}`}
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}

        {/* Main image/video display */}
        <div className={s.mediaContainer}>
          {currentItem.type === "video" ? (
            <video
              src={currentItem.src}
              controls
              className={s.media}
              autoPlay
            />
          ) : (
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              width={1920}
              height={1080}
              className={s.media}
              quality={100}
              priority
            />
          )}
        </div>

        {/* Caption */}
        {currentItem.caption && (
          <div className={s.caption}>{currentItem.caption}</div>
        )}

        {/* Thumbnail strip for navigation */}
        {media.length > 1 && (
          <div className={s.thumbnails}>
            {media.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`${s.thumbnail} ${
                  idx === currentIndex ? s.active : ""
                }`}
                aria-label={`Go to image ${idx + 1}`}
              >
                {item.type === "video" ? (
                  <div className={s.videoThumb}>▶</div>
                ) : (
                  <Image
                    src={item.src}
                    alt={`Thumbnail ${idx + 1}`}
                    width={80}
                    height={60}
                    className={s.thumbImage}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
