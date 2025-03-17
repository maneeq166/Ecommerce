import { useState } from "react";
import ProductCard from "../components/product-card";
import macBook from "../assets/images/mac-card-40-macbook-air-202503.jpeg"

function Search() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addCartHandler = () =>{};

  const isNextPage = page < 4
  const isPrevPage = page > 1 

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to high)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price:{maxPrice || ""}</h4>
          <input
            type="range"
            value={maxPrice}
            min={100}
            max={100000}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <h2>Category</h2>
        <div>
          <h4>Sort</h4>
          <select value={category} onChange={(e) => setSort(e.target.value)}>
            <option value="">All </option>
            <option value="">Sample1</option>
            <option value="">Sample2</option>
          </select>
        </div>
      </aside>
      <main>
        <h2>Products</h2>
        <input
          type="text"
          value={search}
          placeholder="search by name"
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="search-product-list">
          <ProductCard
            name="macbook"
            photo={macBook}
            handler={addCartHandler}
            productId="jkasdhfsadf"
            stock={1}
            price={99999}
          />
        </div>
      <article>
        <button disabled={!isPrevPage} onClick={()=>setPage((prev)=>prev-1)}>Prev</button>
        <span>
          {page} of {4}
      
        </span>
        <button disabled={!isNextPage} onClick={()=>setPage((prev)=>prev+1)}>Next</button>
      </article>
      </main>
    </div>
  );
}

export default Search;
