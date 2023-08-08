import { useState } from "react";
import Nav from "./components/navigation/Nav";
import Products from "./components/products/Products";
import Recommended from "./components/recommended/Recommended";
import Sidebar from "./components/sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //input search filter
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (item) =>
      item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  //radio filter

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    
  };

  //button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData (products, selected, query) {
    let filteredProducts = products;

    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ))
  }

  const result = filteredData(products, selectedCategory, query);


  return (
    <>
      <Nav query={query} handleSearchChange={handleSearchChange} />

      <div className="main-wrapper">
        <Sidebar handleChange={handleChange} />
        <div className="products">
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </div>
      </div>
    </>
  );
}

export default App;
