import { useEffect, useState } from "react";
import SearchProductHook from "../Products/SearchProductHook";

const NavbarSearchHook = () => {
  const [, , , , , allProducts] = SearchProductHook();
  const [searchWord, setSearchWord] = useState("");
  const onSearchChange = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== "/products") {
      window.location.href = "/products";
    }
  };
  let word = "";
  if (localStorage.getItem("searchWord")) {
    word = localStorage.getItem("searchWord");
  }
  useEffect(() => {
    setTimeout(() => allProducts(), 1000);
  }, [searchWord]);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUserData("");
  };
  return [searchWord, onSearchChange, word, userData, handleLogout];
};

export default NavbarSearchHook;
