import React, {ReactNode} from 'react';
import {Footer, Header} from "./index";


export const Layout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};
