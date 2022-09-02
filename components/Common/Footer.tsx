import React, {ReactNode} from 'react';
import styled from "@emotion/styled";
import Image from "next/image";
import {Input} from './Input'
const StyledDesktopFooter = styled.div`
  background-color: #F2F0FF;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const StyledLinksContainer = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr;

  .heading {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 10px;
  }

  a.link {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: #8A8FB9;
    text-decoration: none;
    margin-bottom: 5px;
  }
`
type LinkGroupProps = {
    heading: string;
    children: ReactNode;
}
const LinksGroup = ({heading, children}: LinkGroupProps) => <StyledLinksContainer>
    <strong className="heading">{heading}</strong>
    {children}
</StyledLinksContainer>
export const FooterLinks = {
    contact: [
        {label: 'Github', link: 'https://github.com/mann-codes2014'},
        {label: 'mann.codes2014@gmail.com', link: 'mailto:mann.codes2014@gmail.com'},
        {label: '+923407507565', link: 'tel:+923407507565'},
    ],
    categories: [
        {label: 'Laptops & Computers', link: '#'},
        {label: 'Cameras & Photography', link: '#'},
        {label: 'Smart Phones & Tablets', link: '#'},
        {label: 'Video Games & Consoles', link: '#'},
        {label: 'Waterproof Headphones', link: '#'}
    ],
    customerCare: [
        {label: 'My Account', link: '#'},
        {label: 'Discount', link: '#'},
        {label: 'Returns', link: '#'},
        {label: 'Orders History', link: '#'},
        {label: 'Order Tracking', link: '#'}
    ],
    pages: [
        {label: 'Blog', link: '#'},
        {label: 'Browse the Shop', link: '#'},
        {label: 'Category', link: '#'},
        {label: 'Pre-Built Pages', link: '#'},
        {label: 'Visual Composer Elements', link: '#'},
        {label: 'WooCommerce Pages', link: '#'}

    ],
}
export const Footer = () => {

    return (
        <div>
            <StyledDesktopFooter>
                <div>

                    <LinksGroup heading="">
                        <div style={{alignSelf: 'start'}}>
                            <Image alt="Hekto" src={'/icons/logo.svg'} width={110} height={38}/>
                        </div>
                        <div>
                            <Input buttonLabel="Sign Up"/>
                        </div>
                        <a target="_blank" rel="noreferrer" className="link"
                           href={FooterLinks?.contact[0].link}>{FooterLinks?.contact[0].label}</a>
                        <a target="_blank" rel="noreferrer" className="link"
                           href={FooterLinks?.contact[1].link}>{FooterLinks?.contact[1].label}</a>
                        <a target="_blank" rel="noreferrer" className="link"
                           href={FooterLinks?.contact[2].link}>{FooterLinks?.contact[2].label}</a>
                    </LinksGroup>
                </div>
                <div>
                    <LinksGroup heading="Catagories">
                        {FooterLinks.categories?.map(({link, label}, index) => <a href={link} key={index}
                                                                                  className="link">{label}</a>)}

                    </LinksGroup>
                </div>
                <div>
                    <LinksGroup heading="Customer Care">
                        {FooterLinks.customerCare?.map(({link, label}, index) => <a href={link} key={index}
                                                                                    className="link">{label}</a>)}
                    </LinksGroup>
                </div>
                <div>
                    <LinksGroup heading="Pages">
                        {FooterLinks.pages?.map(({link, label}, index) => <a href={link} key={index}
                                                                             className="link">{label}</a>)}
                    </LinksGroup>
                </div>
            </StyledDesktopFooter>
        </div>
    );
};

