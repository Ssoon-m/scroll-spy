"use client";
import React, { useRef, useState } from "react";
import Tab from "@/components/base/Tab";
import ProductsInfo from "@/components/products/ProductsInfo";
import ProductsPurchaseInfo from "@/components/products/ProductsPurchaseInfo";
import ProductsQnA from "@/components/products/ProductsQnA";
import ProductsReview from "@/components/products/ProductsReview";
import ScrollSpy from "@/components/headlessui/ScrollSpy";
import { useRouter } from "next/navigation";
const PageClient = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentTab, setCurrentTab] = useState(0);
  const router = useRouter();

  const handleSetActive = (index: number) => {
    setCurrentTab(index);
    window.history.replaceState(
      { data: "replace" },
      "",
      `#${sectionRefs.current[index]?.id}` ?? "/"
    );
    // router.replace(`#${sectionRefs.current[index]?.id}` ?? "/");
  };

  const handleActiveTabClick = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView();
      router.push(`#${sectionRefs.current[index]?.id}` ?? "/");
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
        <section id="productInfo" ref={(el) => (sectionRefs.current[0] = el)}>
          <ProductsInfo />
        </section>
        <section
          id="productsPurchaseInfo"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <ProductsPurchaseInfo />
        </section>
        <section id="productsQnA" ref={(el) => (sectionRefs.current[2] = el)}>
          <ProductsQnA />
        </section>
        <section
          id="productsReview"
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <ProductsReview />
        </section>
      </div>
    </div>
  );
};

export default PageClient;
