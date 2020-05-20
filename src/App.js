import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage, MobileHomepage, Tools, Books, Lessons, Articles, IAQ, About, Checkout } from "./Pages/index"
import { NavBar, Foot } from "../src/Components/index";

function App() {
  const [returnCount, setReturnCount] = useState(0);
  const [route, changeRoute] = useState({
    page: "home",
    action: ""
  });

  console.log(route)

  const page = route.page;
  const home = page === "home";
  const lessons = page === "lessons";
  const tools = page === "tools";
  const books = page === "books";
  const articles = page === "articles";
  const iaq = page === "iaq";
  const about = page === "about";
  const checkout = page === "checkout";

  window.scrollTo(0, 0);
  const isMobile = window.innerWidth <= 576;

  // debugger;

  return (
    <div className="App">
      <div className={`${(isMobile || page !== "home") ? "" : "shortDownSpacer"}`}>
        <NavBar
          onSelect={changeRoute}
          returnCount={returnCount}
          setReturnCount={setReturnCount}
          className={"mb-4"}
        />
      </div>
      {
        home &&
        <Homepage
          changeRoute={changeRoute}
          isMobile={isMobile} />
      }
      {
        lessons &&
        <Lessons
          changeRoute={changeRoute}
        />
      }
      {
        books &&
        <Books
          action={route.action}
          returnCount={returnCount}
        />
      }
      {
        tools &&
        <Tools
          returnCount={returnCount}
        />
      }
      {
        articles &&
        <Articles
          returnCount={returnCount}
        />
      }
      {
        iaq &&
        <IAQ returnCount={returnCount} />
      }
      {
        about &&
        <About returnCount={returnCount} />
      }
      {
        checkout &&
        <Checkout
          action={route.action}
        />
      }
      <Foot
        changeRoute={changeRoute}
      />
    </div >
  );
}

export default App;


