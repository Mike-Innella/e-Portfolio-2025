"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ProjectMedia } from '@/content/projects';
import ImageModal from '@/components/ImageModal/ImageModal';
import s from './ProjectGallery.module.css';

type Props = {
  media: ProjectMedia[];
};

export default function ProjectGallery({ media }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={s.gallery}>
        {media.map((item, idx) => (
          <figure 
            key={idx} 
            className={s.item}
            onClick={() => item.type !== 'video' && handleImageClick(idx)}
            style={{ cursor: item.type !== 'video' ? 'pointer' : 'default' }}
          >
            {item.type === 'video' ? (
              <video src={item.src} controls className={s.media} />
            ) : (
              <>
                <div className={s.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className={s.media}
                    loading="lazy"
                  />
                  <div className={s.overlay}>
                    <span className={s.expandIcon}>⤢</span>
                  </div>
                </div>
              </>
            )}
            {item.caption && (
              <figcaption className={s.caption}>{item.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {modalOpen && (
        <ImageModal
          media={media}
          initialIndex={selectedIndex}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
