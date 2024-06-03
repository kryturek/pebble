// src/components/Header.js
import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import Navbar from "./Navbar";

// Styled components for header
const HeaderWrapper = styled.header`
	height: 730px;
	width: 100%;
	color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 768px) {
		height: auto;
		/* padding: 20px; */
		overflow: hidden;
	}
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 730px;
	background: url("https://kryturek.github.io/pebble/hero-image.png") no-repeat
		center center/cover;
	clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	z-index: -1;

	@media (max-width: 768px) {
		height: 500px;
		background-position: right;
	}
`;

const OrangeCat = styled.span`
	color: ${colors.orange};
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 1000px;
	height: 300px;
	font-family: "Saira Condensed", "Courier New", Courier, monospace;
	text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

	@media (max-width: 768px) {
		width: 100%;
		height: auto;
		padding: 20px;
		color: #ddd;
		text-shadow: 3px 3px 0px rgba(50, 50, 50, 1);
		/* text-shadow: -3px -3px 0px rgba(50, 50, 50, 1); */
		/* visibility: hidden; */
		display: none;
	}
`;

const Title = styled.h1`
	font-size: 128px;
	margin: 0;
	padding-left: 160px;
	padding-top: 160px;
	text-align: left;
	line-height: 90px;

	@media (max-width: 768px) {
		font-size: 64px;
		padding-left: 20px;
		padding-top: 20px;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
	align-self: center;
	background-color: white;
	width: 500px;
	height: 150px;
	box-shadow: 0px 21px 76px rgba(173, 122, 49, 0.16);

	@media (max-width: 768px) {
		flex-direction: column;
		width: 70%;
		height: auto;
		padding: 20px;
		margin-bottom: 20px;
		margin-top: 50px;
		box-shadow: 0px 21px 76px rgba(173, 122, 49, 0.46);
	}
`;

const Button = styled.button`
	padding: 10px 20px;
	font-size: 1rem;
	border: none;
	background-color: white;
	color: black;
	cursor: pointer;
	&:hover {
		background-color: #ddd;
	}

	@media (max-width: 768px) {
		border-bottom: #999 solid 5px;
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<Background />
			<Navbar />
			<TitleWrapper>
				<Title>
					VIBE CHECK YOUR ALZHEIMER <OrangeCat>DISEASE</OrangeCat>
				</Title>
			</TitleWrapper>
			<ButtonWrapper>
				<Button>
					<img
						src="https://kryturek.github.io/pebble/assets/Story.svg"
						alt="Story"
					/>
				</Button>
				<Button>
					<img
						src="https://kryturek.github.io/pebble/assets/Leaders.svg"
						alt="Leaders"
					/>
				</Button>
				<Button>
					<img
						src="https://kryturek.github.io/pebble/assets/Shop.svg"
						alt="Shop"
					/>
				</Button>
			</ButtonWrapper>
		</HeaderWrapper>
	);
};

export default Header;
