import React, { useState, useEffect } from "react";
import data from "./data.json";
import WebFont from "webfontloader";
import { Tab, Tabs } from "@material-ui/core";

export default function ChartSearch() {
  const [searchResults, setSearchResults] = useState([]);
  // Perform search when component mounts
  useEffect(() => {
    performSearch();
  }, []);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka"]
      }
    });
  }, []);

  const styleDesc = {
    fontSize: "20px",
    letterSpacing: "0.015em",
    fontFamily: "Droid Sans"
  };
  const styleInput = {
    fontSize: "20px",
    width: "90vw",
    letterSpacing: "0.025em",
    fontFamily: "Droid Sans"
  };
  const styleSelect = {
    fontSize: "20px",
    width: "30vw",
    letterSpacing: "0.025em",
    fontFamily: "Droid Sans"
  };
  const styleBtn = {
    fontSize: "18px",
    width: "40vmin",
    letterSpacing: "0.025em",
    fontFamily: "Droid Sans"
  };

  const storedSelectedCategory =
    localStorage.getItem("selectedCategory") || "All";
  const storedSearchTerm = localStorage.getItem("searchTerm") || "";
  const [selectedCategory, setSelectedCategory] = useState(
    storedSelectedCategory
  );
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(storedSearchTerm);
  const allProducts = [...data.Trends, ...data.Ranges, ...data.Reversals];

  const categories = [
    "All",
    ...new Set(allProducts.map((product) => product.book))
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    localStorage.setItem("selectedCategory", event.target.value);
    filterProducts(event.target.value, searchTerm);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem("searchTerm", event.target.value);
    filterProducts(selectedCategory, event.target.value);
  };

  function handleClick() {
    setFilteredProducts([]);
    setSearchTerm("");
    localStorage.removeItem("searchTerm");
  }

  const filterProducts = (category, searchTerm) => {
    let filtered = allProducts;
    if (category !== "All") {
      filtered = allProducts.filter((product) => product.book === category);
    }
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };
  const performSearch = () => {
    // Perform search and store results in searchResults state
    if (searchTerm === "") {
      setFilteredProducts([]);
    } else {
      const results = filterProducts(selectedCategory, searchTerm);
      setSearchResults(results);
    }
  };

  //google ID
  function manipulateValue(src) {
    // Regular expression pattern to match numbers in the input value
    const regexPattern = /https:\/\/drive\.google\.com\/file\/d\/(.+)\/view\?usp=share_link/;

    // Find all numbers in the input value using the regex pattern
    const matches = src.match(regexPattern);

    // Combine all matches into a single string
    const manipulatedValue = matches ? matches : "";
    const FinalmanipulatedValue =
      manipulatedValue !== "" ? manipulatedValue[1] : "";

    //console.log(FinalmanipulatedValue);
    FinalmanipulatedValue.trim();
    // Render the manipulated value in a new div
    return FinalmanipulatedValue;
  }
  const SubString = ".png" || ".jpeg" || ".jpg"
  return (
    <div>
      <p></p>
      <div>
        <label style={{ fontFamily: "Droid Sans" }} htmlFor="category-select">
          Filter by book:{" "}
        </label>
        <select
          style={styleSelect}
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <p></p>
        <input
          style={styleInput}
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <p></p>
      <button style={styleBtn} onClick={handleClick}>
        Clear Results
      </button>
      <div>
        <p></p>
        {filteredProducts.map((product, index) => (
          <div style={styleDesc} key={product.name}>
            {product.name.trimEnd().replace(SubString, '')} - {product.book}
            <p></p>
            <img
              width="100%"
              alt={product.name.trimEnd().replace(SubString, '')}
              src={
                product.book === "Trends"
                  ? process.env.PUBLIC_URL + '/trends/' + product.src
                  : product.book === "Reversals"
                    ? process.env.PUBLIC_URL + '/reversals/' + product.src
                    : product.book === "Ranges"
                      ? process.env.PUBLIC_URL + '/ranges/' + product.src
                      : ''

              }
            />

            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}
