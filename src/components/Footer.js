// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

const OrangeCat = styled.span`
	color: ${colors.orange};
`;

const FooterWrapper = styled.footer`
	background-color: #333;
	color: white;
	padding: 20px 160px;
	background-color: rgba(99, 181, 188, 1);
	height: 220px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Top = styled.div`
	font-family: "Saira Condensed", "Courier New", Courier, monospace;
	font-weight: 700;
	display: flex;
	justify-content: space-between;
`;

const HeroText = styled.h1`
	font-size: 50px;
	line-height: 1;
	width: 380px;
	text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
`;

const SMIcons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 35px;
`;

const SM = styled.a`
	text-decoration: none;
	color: white;
	font-size: 40px;
	transition: transform 0.3s ease-in-out;
	&:hover {
		i {
			animation: fa-beat 1s infinite;
		}
	}
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ContactInfo = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	font-size: large;
	color: white;
`;

const Policies = styled.div`
	font-size: large;
	display: flex;
	gap: 30px;
`;

const Footer = () => (
	<FooterWrapper>
		<Top>
			<HeroText>
				READY FOR YOUR NEW <OrangeCat>DISASTER</OrangeCat>
			</HeroText>
			<SMIcons>
				<SM href="http://www.facebook.com">
					<i class="fa-brands fa-facebook"></i>
				</SM>
				<SM href="http://www.instagram.com">
					<i class="fa-brands fa-instagram"></i>
				</SM>
				<SM href="http://www.youtube.com">
					<i class="fa-brands fa-youtube"></i>
				</SM>
			</SMIcons>
		</Top>
		<Bottom>
			<ContactInfo>
				<a href="mailto:damian.sadkiewicz.94@gmail.com">
					<i class="fa-solid fa-envelope"></i> Contact me via e-mail!
				</a>
			</ContactInfo>
			<Policies>
				<a href="/">Privacy policy</a>
				<a href="/">Terms & conditions</a>
			</Policies>
		</Bottom>
	</FooterWrapper>
);

export default Footer;
