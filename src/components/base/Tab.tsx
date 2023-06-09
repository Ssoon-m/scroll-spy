"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";

interface listItem {
  title: string;
}

interface Props {
  items: listItem[];
  activeTab?: number;
  onClickTab?: (id: number) => void;
}

const Tab = ({ items, activeTab = 0, onClickTab }: Props) => {
  const [currentTab, setCurrentTab] = useState(activeTab);
  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleListItem = (index: number) => {
    setCurrentTab(index);
    onClickTab && onClickTab(index);
  };
  return (
    <ul className="list-nones flex border-b border-b-stone-300 bg-white">
      {items.map((item, i) => (
        <li
          key={i}
          onClick={() => handleListItem(i)}
          className={cx(
            "flex justify-center items-center flex-1 p-3 hover:cursor-pointer",
            currentTab === i && "text-pink-400 border-b-2 border-b-pink-400"
          )}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
