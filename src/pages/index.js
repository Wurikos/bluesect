import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-orange" />
		<Section background="--color-purple" />
		<Section background="--color-darkL1" />
	</Theme>;
});