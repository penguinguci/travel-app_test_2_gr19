import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";

import tomatoSalad from "../assets/images/tomato-salad.jpg";
import shrimpSpaghetti from "../assets/images/shrimp-spaghetti.jpg";
import snackCakes from "../assets/images/snack-cakes.jpg";
import cabbageShrimp from "../assets/images/cabbage-shrimp.jpg";
import beanPotatoSalad from "../assets/images/bean-potato-salad.jpg";
import friedEggs from "../assets/images/fried-eggs.jpg";
import lotusSalad from "../assets/images/lotus-salad.jpg";

import lotusSalad2 from "../assets/images/lotus-salad-2.jpg";

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

const DetailProduct = () => {
  const [plan, setPlan] = useState("monthly");
  const { id } = useParams();
  const recipe = recipesTabSaved.find(item => item.id === Number(id));


  

  return (
    <div>
      <Header/>
      <div className="container py-5 mt-5">
        <div className="row align-items-center">
          <div className="col-md-5 d-flex flex-column gap-3">
            <h5 className="">This recipe is exclusively available to subscribers</h5>
            <h2 className="text-danger fw-bold">Join now to access effortless, hassle-free recipes</h2>
            <ul className="list-unstyled">
              <li><FaCheckCircle className="text-success" /> 20,000+ recipes to suit all tastes and skill levels</li>
              <li><FaCheckCircle className="text-success" /> Filter for diets, cook times, and more</li>
              <li><FaCheckCircle className="text-success" /> Personal Recipe Box for favorites</li>
              <li><FaCheckCircle className="text-success" /> Gain exclusive access to our mobile app</li>
            </ul>
            <h4>0.25USD / Week</h4>
            <p>Billed as $1 every 4 weeks for the first year</p>
            <button className="btn btn-danger btn-lg w-100">Subscribe Now</button>
            <button className="text-muted mt-2 border p-2 w-100 rounded-1">Cancel or Pause anytime</button>
          </div>
          <div className="col-md-7">
            <img src={recipe.image} alt="Subscription" className="img-fluid rounded" />
          </div>
        </div>
        
        <div className="text-center mt-5">
          <h3 className="fw-bold">An All Access subscription includes</h3>
          <div className="row mt-3">
            {[
              { title: "Cooking", desc: "Enjoy recipes, advice and inspiration." },
              { title: "Wirecutter", desc: "Explore independent reviews for thousands of products." },
              { title: "Games", desc: "Unwind with Spelling Bee, Wordle, The Crossword." },
              { title: "The Athletic", desc: "Discover in-depth, personalized sports journalism." },
            ].map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="border p-3 rounded shadow-sm">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-5 p-4 border rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-danger fw-bold">Cheffy</h3>
          <h4>Subscribe to Cheffy Cooking only</h4>
          <p>Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.</p>
          <div className="d-flex flex-column justify-content-center align-items-center w-25">
            <div className="d-flex flex-column justify-content-center gap-3 w-100 text-center">
              <label className="border p-2 rounded cursor-pointer">
                <input type="radio" name="plan" value="monthly" checked={plan === "monthly"} onChange={() => setPlan("monthly")} />
                $2/month (Billed every 4 weeks)
              </label>
              <label className="border p-2 rounded cursor-pointer">
                <input type="radio" name="plan" value="yearly" checked={plan === "yearly"} onChange={() => setPlan("yearly")} />
                $20/year (Billed annually)
              </label>
            </div>
            <button className="btn btn-danger btn-lg mt-3 w-100">Subscribe Now</button>
            <button className="text-muted mt-2 w-100 border-0 p-2">Cancel or Pause anytime</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default DetailProduct;
