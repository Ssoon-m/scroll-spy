"use client";
import React, { useEffect, useRef, useState } from "react";
import Tab from "@/components/base/Tab";
import ProductsInfo from "@/components/products/ProductsInfo";
import ProductsPurchaseInfo from "@/components/products/ProductsPurchaseInfo";
import ProductsQnA from "@/components/products/ProductsQnA";
import ProductsReview from "@/components/products/ProductsReview";
import ScrollSpy from "@/components/headlessui/ScrollSpy";
const PageClient = () => {
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];
  const [currentTab, setCurrentTab] = useState(0);

  const handleSetActive = (index: number) => {
    if (currentTab !== index) {
      setCurrentTab(index);
    }
  };

  const handleActiveTabClick = (index: number) => {
    if (sectionRefs[index].current) {
      sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentTab(index);
  };

  return (
    <div>
      <ScrollSpy sectionRefs={sectionRefs} setActiveTab={handleSetActive} />
      <div className="sticky top-0">
        <Tab
          onClickTab={handleActiveTabClick}
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
        <section id="productInfo" ref={sectionRefs[0]}>
          <ProductsInfo />
        </section>
        <section id="productsPurchaseInfo" ref={sectionRefs[1]}>
          <ProductsPurchaseInfo />
        </section>
        <section id="productsQnA" ref={sectionRefs[2]}>
          <ProductsQnA />
        </section>
        <section id="productsReview" ref={sectionRefs[3]}>
          <ProductsReview />
        </section>
      </div>
    </div>
  );
};

export default PageClient;
