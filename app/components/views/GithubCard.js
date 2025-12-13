"use client";

import { useState } from 'react';
import Image from 'next/image';
import Card from '@/app/components/ui/Card/Card';

export default function GithubCard({ card, initialSrc }) {
  const [currentSrc, setCurrentSrc] = useState(initialSrc);

  const handleError = () => {
    if (card.fallbackSrc && currentSrc !== card.fallbackSrc) {
      setCurrentSrc(card.fallbackSrc);
    }
  };

  return (
    <Card {...card}>
      <Image
        src={currentSrc}
        alt={card.title}
        width={1200}
        height={400}
        priority={card.id <= 4}
        className={`${card.className || ''} rounded-2xl`}
        style={{ width: '100%', height: 'auto' }}
        onError={handleError}
      />
    </Card>
  );
}