import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"asda"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.QuarklycommunityKitAnimation
			trigger="Onload"
			animation="Fade In"
			test
			iteration="once"
			timingFunction="ease-in"
			duration="0.5s"
		>
			<Components.QuarklycommunityKitAnimation
				trigger="Onload"
				animation="Grow In"
				iteration="once"
				test
				timingFunction="ease-in"
				duration="0.5s"
			>
				<Section padding="100px 0" sm-padding="40px 0">
					<Override slot="SectionContent" align-items="center" />
					<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
						About Us
					</Text>
					<Text as="p" font="--lead" margin="20px 0 0 0">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
					</Text>
					<Button font="--lead" margin="20px">
						Button
					</Button>
				</Section>
			</Components.QuarklycommunityKitAnimation>
			<Components.QuarklycommunityKitCollapse minDuration="0.1s" maxDuration="0.5s" animFunction="ease-in-out">
				<Text color="--darkL2">
					Some text
				</Text>
			</Components.QuarklycommunityKitCollapse>
			<Section
				text-align="center"
				background-color="--primary"
				color="--light"
				padding="100px 0"
				sm-padding="40px 0"
			>
				<Text
					as="h5"
					font="--lead"
					margin="10px 0 0 0"
					text-transform="uppercase"
					letter-spacing="5px"
				>
					Second to none
				</Text>
				<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
					About Us
				</Text>
				<Text as="p" font="--lead" margin="40px 0 20px 0">
					Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
				</Text>
			</Section>
		</Components.QuarklycommunityKitAnimation>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});