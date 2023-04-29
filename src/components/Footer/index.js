import React from "react";
import { styles } from "./style";

const FooterData = [
  {
    id: "1",
    heading: "COMPANY",
    subCategories: [
      "About us",
      "Team",
      "Careers",
      "Swiggy Blog",
      "Bug Bounty",
      "Swiggy One",
      "Swiggy Corporate",
      "Swiggy Instamart",
      "Swiggy Genie",
    ],
  },
  {
    id: "2",
    heading: "CONTACT",
    subCategories: [
      "Help & Support",
      "Partner with us",
      "Ride with us",
    ],
  },
  {
    id: "3",
    heading: "LEGAL",
    subCategories: [
      "Terms & Conditions",
      "Refund & Cancellation",
      "Privacy Policy",
      "Cookie Policy",
      "Offer Terms",
      "Phishing & Fraud",
      "Corporate - Swiggy Money Codes Terms and Conditions",
      "Corporate - Swiggy Discount Voucher Terms and Conditions",
    ],
  },
];

export const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerSubContainer}>
        {FooterData.map((data) => {
          return (
            <div style={{ display: "flex", flexDirection: "column", marginRight: '180px' }} key={data?.id}>
              <div style={styles.footerHeading}>{data.heading}</div>
              {data.subCategories.map((item, index) => {
                return <div style={styles.footerSubHeading} key={index}>{item}</div>;
              })}
            </div>
          );
        })}
      </div>
      <div style={styles.linkContainer}>
        <a
          href="https://play.google.com/store/apps/details?id=in.swiggy.android"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.linkElementStyle}
        >
          <img
            height="54"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
          />
        </a>
        <a
          href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.linkElementStyle}
        >
          <img
            height="54"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
          />
        </a>
      </div>
    </div>
  );
};
