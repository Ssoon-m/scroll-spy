"use client";
import React, { useEffect, useRef } from "react";

interface ScrollSpyProps {
  setActiveTab: (index: number) => void;
  sectionRefs: Array<HTMLElement | null>;
}

const ScrollSpy = ({ setActiveTab, sectionRefs }: ScrollSpyProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(($el) => $el === entry.target);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.9 }
    );
    sectionRefs.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);
  return <></>;
};

export default ScrollSpy;
