import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage, TOC, Tools, Books, Lessons, Blogs, IAQ } from "./Pages/index"
import { NavBar, Foot } from "../src/Components/index";

function App() {
  const [returnCount, setReturnCount] = useState(0);
  const [route, changeRoute] = useState({
    page: "home",
    action: ""
  });

  const page = route.page;
  const home = page === "home";
  const lessons = page === "lessons";
  const tools = page === "tools";
  const books = page === "books";
  const blogs = page === "blogs";
  const iaq = page === "iaq";

  window.scrollTo(0, 0);

  return (
    <div className="App">
      <div className={`${page === "home" ? "shortDownSpacer" : ""}`}>
        <NavBar
          onSelect={changeRoute}
          returnCount={returnCount}
          setReturnCount={setReturnCount}
        />
      </div>
      {home &&
        <Homepage
          changeRoute={changeRoute} />}
      {lessons &&
        <Lessons />}
      {books &&
        <Books
          action={route.action}
          returnCount={returnCount}
        />}
      {tools &&
        <Tools
          returnCount={returnCount}
        />}
      {blogs &&
        <Blogs
          returnCount={returnCount}
        />}
      {iaq &&
        <IAQ />}
      <Foot
        changeRoute={changeRoute}
      />
    </div>
  );
}

export default App;


