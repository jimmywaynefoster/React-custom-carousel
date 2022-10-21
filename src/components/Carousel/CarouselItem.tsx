import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  width: string;
}

export function CarouselItem({ children, width }: Props) {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  );
}
