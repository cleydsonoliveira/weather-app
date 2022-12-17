import React from "react";
import fetchData from "./services/api";
import Card from "./components/Card";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData().then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
        ></input>
        <button
          type="submit"
          className="bg-blue-500 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card />
    </div>
  );
}

export default App;
