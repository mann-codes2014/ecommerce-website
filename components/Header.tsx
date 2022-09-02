import React from 'react';
import styled from "@emotion/styled";
import Image from "next/image";
import {BorderInput, FooterLinks} from './index'

const StyledDesktopHeaderStrip = styled.div`
  background-color: #7E33E0;
  color: white;
  display: grid;
  grid-template-areas: 'contact actions';
  justify-items: center;
  align-items: center;

  .contact {
    grid-area: contact;
    justify-self: end;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    a.link {
      display: inline-block;
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 23px;
      text-decoration: none;
      margin-bottom: 5px;
    }
  }

  .actions {
    justify-self: end;
    grid-area: actions;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
  }
`
const StyledNavigationLinkStrip = styled.a`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 13px;
  line-height: 20px;

  color: white;
  text-align: center;
  padding: 10px 16px;

  &:hover {
    color: var(--pink);
    cursor: pointer;
  }
`

const StyledDesktopHeader = styled.header`
  display: grid;
  grid-template-areas: 'logo nav search';
  justify-items: center;
  align-items: center;

  .log {
    grid-area: logo;
    justify-self: end;
  }

  .nav {
    grid-area: nav;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    justify-items: center;
  }

  .search {
    width: 70%;
    grid-area: search;
    justify-self: start;
  }
`
const StyledNavigationLink = styled.a`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 13px;
  line-height: 20px;

  color: #0D0E43;
  text-align: center;
  padding: 10px 16px;

  &:hover {
    color: var(--pink);
    cursor: pointer;
  }
`

export const Header = () => {

    return (
        <div>
            <StyledDesktopHeaderStrip>
                <div className="contact">
                    <a target="_blank" rel="noreferrer" className="link"
                       href={FooterLinks?.contact[1].link}>{FooterLinks?.contact[1].label}</a>
                    <a target="_blank" rel="noreferrer" className="link"
                       href={FooterLinks?.contact[2].link}>{FooterLinks?.contact[2].label}</a>
                </div>
                <div className="actions">
                    <StyledNavigationLinkStrip>Login</StyledNavigationLinkStrip>
                    <StyledNavigationLinkStrip>Wishlist</StyledNavigationLinkStrip>
                    <StyledNavigationLinkStrip>Cart</StyledNavigationLinkStrip>
                </div>
            </StyledDesktopHeaderStrip>
            <StyledDesktopHeader>
                <div className="log">
                    <Image src='/icons/logo.svg' width={70} height={70} alt="Hekto"/>
                </div>
                <nav className="nav">
                    <StyledNavigationLink>Home</StyledNavigationLink>
                    <StyledNavigationLink>Categories</StyledNavigationLink>
                    <StyledNavigationLink>Products</StyledNavigationLink>
                    <StyledNavigationLink>Contact</StyledNavigationLink>
                </nav>
                <div className="search">
                    <BorderInput
                        buttonLabel={<Image src={'/icons/search.svg'} width={20} height={20} alt="search icon"/>}
                        placeholder="Product Name"/>
                </div>
            </StyledDesktopHeader>
        </div>
    );
};

