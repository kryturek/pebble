// src/components/MainContent.js
import React from "react";
import styled from "styled-components";
import { colors } from "../theme"; // Import the colors if you need them

const ContentWrapper = styled.main`
	padding: 0 160px;
	height: 850px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 100px;

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 20px;
		height: auto;
		gap: 20px;
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 450px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Image = styled.img`
	width: 550px;
	height: auto;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 150px;
`;

const Bollard = styled.div`
	width: 10px;
	height: 100px;
	background-color: ${colors.orange}; // Use your theme color
	margin-right: 20px;
`;

const Text = styled.p`
	font-size: 50px;
	font-family: "Saira Condensed", "Courier New", Courier, monospace;
	font-weight: 700;
	line-height: 1.1;

	@media (max-width: 768px) {
		font-size: 50px;
	}
`;

const Description = styled.p`
	font-size: 16px;
	font-family: "Inter", "Arial", monospace;
	line-height: 1.8;
`;

const OrangeCat = styled.span`
	color: ${colors.orange};
`;

const Button = styled.button`
	padding: 10px 20px;
	font-size: 1rem;
	border: none;
	background-color: ${colors.orange};
	font-family: "Saira Condensed", "Courier New", Courier, monospace;
	font-weight: 700;
	color: white;
	cursor: pointer;
	margin-top: 20px;
	&:hover {
		background-color: purple;
	}
`;

const MainContent = () => (
	<ContentWrapper>
		<Image
			src="https://kryturek.github.io/pebble/snap-image.png"
			alt="Snap image"
		/>
		<Section>
			<TitleWrapper>
				<Bollard />
				<Text>
					VIBE LIKE YOUR <OrangeCat>GRANNY</OrangeCat>
				</Text>
			</TitleWrapper>
			<Description>
				<p>
					Welcome to Pebble, the memory game that’s more challenging than
					finding Granny's glasses (on her head). Think you've got a good
					memory? Prove it—before you forget why you started playing in the
					first place. Here, it's perfectly fine to lose your marbles, as
					long as you can match them back up.
				</p>{" "}
				<p>
					Remember, if you can't beat the game, at least you’re one step
					closer to understanding Granny’s daily struggle!
				</p>
			</Description>
			<Button>SIGN UP</Button>
		</Section>
	</ContentWrapper>
);

export default MainContent;
