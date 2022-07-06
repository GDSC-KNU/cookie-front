import React from 'react';
import { css, Global } from '@emotion/react';
import normalize from 'emotion-normalize';
import { theme as chakraTheme } from '@chakra-ui/react';
import Routes from './pages/Routes';

function App() {
	return (
		<>
			<Global
				styles={css`
					${normalize}
					* {
						box-sizing: border-box;
						background-color: transparent;
						border: none;
						font: ${chakraTheme.fonts.body};
					}
					a {
						text-decoration: none;
						color: inherit;
					}
					button:not([disabled]) {
						cursor: pointer;
					}
					body {
						background-color: #f7fafc;
					}
					h1,
					h2,
					h3,
					h4,
					h5,
					h6 {
						margin: 0;
						font: ${chakraTheme.fonts.heading};
					}
				`}
			/>
			<Routes />
		</>
	);
}

export default App;
