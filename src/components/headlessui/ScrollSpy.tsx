"use client";
import React, { useEffect, useRef } from "react";

interface Props {
  setActiveTab: (index: number) => void;
  sectionRefs: React.RefObject<HTMLElement>[];
}

const ScrollSpy = ({ setActiveTab, sectionRefs }: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              ($el) => $el.current === entry.target
            );
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.9 }
    );
    sectionRefs.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);
  return null;
};

export default ScrollSpy;
