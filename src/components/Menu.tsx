"use client";

import { useEffect, useRef, RefObject } from "react";

export default function Menu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden"
    >
      <div className="flex flex-col items-center">
        <a href="#ceremony" className="m-4" onClick={onClose}>
          Ceremony
        </a>
        <a href="#reception" className="m-4" onClick={onClose}>
          Reception
        </a>
        <a href="#accommodations" className="m-4" onClick={onClose}>
          Accommodations
        </a>
        <a href="#faq" className="m-4" onClick={onClose}>
          FAQ
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSexi1ygLEJ436agoeJfkVus5KSLInBj0-vZuDaZ6LcX2TZQ2w/viewform?usp=header"
          className="m-4 mb-8 font-bold rsvp-border"
          target="blank"
          onClick={onClose}
        >
          RSVP
        </a>
      </div>
    </div>
  );
}

function useOnClickOutside(
  ref: RefObject<HTMLDivElement | null>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
