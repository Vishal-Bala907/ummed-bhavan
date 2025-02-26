"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const currencies = [
  {
    title: "Facility",
    location: "/tour-list-6",
  },
];

export default function Currency({ parentClass }) {
  const [currentdd, setCurrentdd] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentdd("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      ref={dropDownContainer}
      className={`${parentClass ? parentClass : "headerDropdown  js-form-dd"}`}
    >
      <div
        className="headerDropdown__button"
        onClick={() =>
          setCurrentdd((pre) => (pre == "currency" ? "" : "currency"))
        }
      >
        {selectedCurrency}
        <i className="icon-chevron-down text-18"></i>
      </div>

      <div
        className={`headerDropdown__content ${
          currentdd == "currency" ? "is-active" : ""
        } `}
      >
        <div className="headerDropdown">
          <div className="headerDropdown__container">
            {currencies.map((elm, i) => (
              <Link
                key={i}
                className="headerDropdown__item"
                href={elm.location}
              >
                <button className="">{elm.title}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
