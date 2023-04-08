"use client";
import React, { useRef, useState } from "react";
import Tab from "@/components/base/Tab";
import ProductsInfo from "@/components/products/ProductsInfo";
import ProductsPurchaseInfo from "@/components/products/ProductsPurchaseInfo";
import ProductsQnA from "@/components/products/ProductsQnA";
import ProductsReview from "@/components/products/ProductsReview";
import ScrollSpy from "@/components/headlessui/ScrollSpy";
const PageClient = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const [currentTab, setCurrentTab] = useState(0);
  const sectionRefs = [
    section1Ref.current,
    section2Ref.current,
    section3Ref.current,
    section4Ref.current,
  ];
  const handleTabClick = (index: number) => {
    if (sectionRefs[index]) {
      sectionRefs[index]?.scrollIntoView({ behavior: "smooth" });
      setCurrentTab(index);
    }
  };

  return (
    <div>
      <ScrollSpy sectionRefs={sectionRefs} setActiveTab={handleTabClick} />
      <div className="sticky top-0">
        <Tab
          onClickTab={handleTabClick}
          activeTab={currentTab}
          items={[
            { title: "상품정보" },
            { title: "구매후기" },
            { title: "상품문의" },
            { title: "구매정보" },
          ]}
        />
      </div>
      <div>
        <section id="productInfo" ref={section1Ref}>
          <ProductsInfo />
        </section>
        <section id="productsPurchaseInfo" ref={section2Ref}>
          <ProductsPurchaseInfo />
        </section>
        <section id="productsQnA" ref={section3Ref}>
          <ProductsQnA />
        </section>
        <section id="productsReview" ref={section4Ref}>
          <ProductsReview />
        </section>
      </div>
    </div>
  );
};

export default PageClient;
