import React from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
  return (
    <div className="loader-container">
      <h2>Loading...</h2>
    </div>
  );
}

if (error) {
  return <h2 style={{ textAlign: "center" }}>Error: {error.message}</h2>;
}

  return (
    <div>
      <h1>Photos</h1>
      <div className="photo-grid">
        {data.map((item) => (
          <div key={item.id} className="photo-card">
            <img src={item.images[0]} alt={item.title} />
            <div className="caption">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;