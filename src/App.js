// src/App.js
import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
