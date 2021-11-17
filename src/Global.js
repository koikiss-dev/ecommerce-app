import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
:root{
    /* primary */
    --orange: hsl(26, 100%, 55%);
    --pale-orange: hsl(25, 100%, 94%);

    /*neutral*/
    --Very-Dark-blue: hsl(220, 13%, 13%);
    --Dark-grayish-blue: hsl(219, 9%, 45%);
    --Grayish-blue: hsl(220, 14%, 75%);
    --Light-grayish-blue: hsl(223, 64%, 98%);
    --White: hsl(0, 0%, 100%);
    --Black-lightbox-background): hsl(0, 0%, 0%);
    
    /*font*/
    --f-400: 400;
    --f-700: 700;
    /*buttons*/
    --w-b: 100%;
    --p-b: 2rem 2rem;
    --border-b: 10px;
}
img{
    max-width: 100%;
    height: auto;
    object-fit: contain;
}
a{
    text-decoration: none;
    color: var(--Very-Dark-blue)
}
ul{
    list-style: none;
}
    *, *::after, *::before{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
        box-sizing: border-box;
    }
    body{
        font-size: 16px;
        background: var(--White);
        font-family: 'Kumbh Sans', sans-serif;
    }
`