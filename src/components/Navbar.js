// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../theme";

const NavbarWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 160px;
	background-color: rgba(0, 0, 0, 0.4);
	font-family: "Saira Condensed", "Courier New", Courier, monospace;
	position: sticky;
	top: 0;
	z-index: 1000;
	transition: transform 0.3s ease-in-out;
	transform: ${({ hidden }) =>
		hidden ? "translateY(-100%)" : "translateY(0)"};

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 10px;
		position: relative;
		background-color: rgba(0, 0, 0, 0.3);
		transform: none;
		transition: none;
	}
`;

const Logo = styled.div`
	cursor: pointer;
`;

const NavLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}
`;

const NavLink = styled.a`
	color: white;
	font-weight: bold;
`;

const SignUpNavLink = styled.a`
	font-weight: bold;
	color: white;
	background-color: ${colors.orange};
	padding: 10px 30px;
	&:hover {
		background-color: purple;
	}
`;

const Navbar = () => {
	const [hidden, setHidden] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 500) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<NavbarWrapper hidden={hidden}>
			<Logo>
				<img
					src="https://kryturek.github.io/pebble/assets/Logo.svg"
					alt="Pebble Logo"
					width="203"
					height="49"
				/>
			</Logo>
			<NavLinks>
				<NavLink href="#home">HOME</NavLink>
				<NavLink href="#about">ABOUT</NavLink>
				<NavLink href="#location">LOCATION</NavLink>
				<NavLink href="#contact">CONTACT</NavLink>
				<SignUpNavLink href="#signup">SIGN UP</SignUpNavLink>
			</NavLinks>
		</NavbarWrapper>
	);
};

export default Navbar;
