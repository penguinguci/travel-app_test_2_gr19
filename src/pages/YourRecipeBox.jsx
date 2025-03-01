import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";

import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";

import tomatoSalad from "../assets/images/tomato-salad.jpg";
import shrimpSpaghetti from "../assets/images/shrimp-spaghetti.jpg";
import lotusSalad from "../assets/images/lotus-salad.jpg";
import snackCakes from "../assets/images/snack-cakes.jpg";
import cabbageShrimp from "../assets/images/cabbage-shrimp.jpg";
import beanPotatoSalad from "../assets/images/bean-potato-salad.jpg";
import friedEggs from "../assets/images/fried-eggs.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import lotusSalad2 from "../assets/images/lotus-salad-2.jpg";

const breadcrumbLinks = [
  { label: "Home", url: "/" },
  { label: "Your Recipe Box" },
];

const ITEMS_PER_PAGE = 8; // Số món ăn hiển thị trên mỗi trang

// Danh sách món ăn cho từng tab
const recipesTabSaved = [
  {
    id: 1,
    title: "Italian-style tomato salad",
    time: "11 minutes",
    image: tomatoSalad,
  },
  {
    id: 2,
    title: "Vegetable and shrimp spaghetti",
    time: "15 minutes",
    image: shrimpSpaghetti,
  },
  { id: 3, title: "Lotus delight salad", time: "20 minutes", image: lotusSalad },
  { id: 4, title: "Snack cakes", time: "22 minutes", image: snackCakes },
  {
    id: 5,
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image: cabbageShrimp,
  },
  {
    id: 6,
    title: "Bean, shrimp, and potato salad",
    time: "52 minutes",
    image: beanPotatoSalad,
  },
  { id: 7, title: "Sunny-side up fried eggs", time: "32 minutes", image: friedEggs },
  { id: 8, title: "Lotus delight salad", time: "32 minutes", image: lotusSalad2 },
]

const recipesTabFolder = [
  { title: "Snack cakes", time: "22 minutes", image: snackCakes },
  {
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image: cabbageShrimp,
  },
];

const recipesTabGenevie = [
  {
    title: "Bean, shrimp, and potato salad",
    time: "52 minutes",
    image: beanPotatoSalad,
  },
  { title: "Sunny-side up fried eggs", time: "32 minutes", image: friedEggs },
];

const YourRecipeBox = () => {
  const [activeTab, setActiveTab] = useState("Save Recipes");
  const [currentPage, setCurrentPage] = useState(1);

  const getRecipesByTab = () => {
    switch (activeTab) {
      case "Save Recipes":
        return recipesTabSaved;
      case "Folders":
        return recipesTabFolder;
      case "Recipes by Genevie":
        return recipesTabGenevie;
      default:
        return [];
    }
  };

  // Danh sách món ăn của tab hiện tại
  const recipes = getRecipesByTab();
  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);

  // Xác định vị trí cắt danh sách món ăn
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentRecipes = recipes.slice(startIndex, endIndex); // Cắt đúng số lượng

  // Chuyển trang
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="main-content">
        <div className="position-relative container mt-6">
          {/* Breadcrumb */}
          <Breadcrumb links={breadcrumbLinks} />

          <div>
            <h2 className="fw-bold">Emma Gonzalez's Recipe Box</h2>
            <div className="d-flex gap-5 mt-4">
              <img
                src={avatar2}
                alt={avatar2}
                style={{
                  width: "164px",
                  height: "164px",
                  borderRadius: "50%",
                  objectFit: "fill",
                }}
              />
              <div className="py-3 d-flex flex-column justify-content-between">
                <p className="text-muted">
                  Emma Gonzalez is a deputy editor at Cheffy, bringing her
                  expertise as a former cooking editor at the Los Angeles Times.
                  She is also an accomplished author, contributing to numerous
                  cookbooks and food publications. Originally from East Los
                  Angeles, Emma now resides in New York City, where she explores
                  a wide range of culinary delights.
                </p>

                <div className="">
                  <a
                    href=""
                    className="text-pink me-4 text-decoration-none"
                  >
                    6.5k Subscribers
                  </a>

                  <button
                    style={{ borderRadius: "15px" }}
                    className="btn btn-pink"
                  >
                    Share <i class="ms-1 bi bi-arrow-90deg-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="d-flex my-4" style={{borderBottom: "1px solid #ccc", fontSize: "14px"}}>
            {["Save Recipes", "Folders", "Recipes by Genevie"].map((tab) => (
              <button
                key={tab}
                style={{ padding: "15px 12px", border: "none"}}
                className={` ${
                  activeTab === tab ? "text-pink custom-active-tab fw-bold" : "text-muted bg-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Danh sách món ăn theo từng tab */}
          <div className="row g-4 mt-3">
            {currentRecipes.map((recipe, index) => (
              <CartProduct key={index} recipe={recipe} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default YourRecipeBox;
