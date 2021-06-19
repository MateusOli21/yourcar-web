import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@tailwind base;
@tailwind components;
@tailwind utilities;

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.whiteAlt};
}

*,
input,
button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
}

a{
    text-decoration: none;
}

a:focus, button:focus{
    outline: none;
}
`;

export default GlobalStyles;
