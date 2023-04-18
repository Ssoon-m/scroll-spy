"use client";
import React, { useEffect } from "react";

interface Props {
  setActiveTab: (index: number) => void;
  sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const ScrollSpy = ({ setActiveTab, sectionRefs }: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              ($el) => $el === entry.target
            );
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.9 }
    );
    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);
  return null;
};

export default ScrollSpy;
