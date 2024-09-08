import React, { useEffect, useState } from 'react';
import SingleCard from "./SingleCard";

// eslint-disable-next-line react/prop-types
export default function BooksCard({ data }) {
  const [filteredBooks, setFilteredBooks] = useState(data);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let booksToFilter = data;

    if (activeTab !== "All") {
      booksToFilter = booksToFilter.filter((book) => book.category === activeTab);
    }

    if (searchQuery) {
      booksToFilter = booksToFilter.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBooks(booksToFilter);
  }, [activeTab, searchQuery, data]);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div id="shadow" className="my-5">
      <h1 className="my-8 text-2xl font-bold text-center">Books</h1>

      {/* Search Box */}
      <div className="mb-5 text-center">
        <input
          type="text"
          placeholder="Search by book title..."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Tab Navigation */}
      <div className="tabs tabs-boxed text-center mb-5">
        {["All", "Bangla", "English", "ICT", "Math", "Other"].map((category) => (
          <div
            key={category}
            onClick={() => handleTabClick(category)}
            className={`tab ${activeTab === category ? "tab-active" : ""}`}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-middle">
        {
          filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <SingleCard key={book.id} book={book} />
            ))
          ) : (
            <p className="text-center col-span-full">No books found.</p>
          )
        }
      </div>
    </div>
  );
}
