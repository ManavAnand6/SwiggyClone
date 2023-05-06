import React, { useState } from "react";
import SvgIcons from "../../common/SvgIcons";
import { Button } from "../../components/Button";
import { styles } from "./style";
import { useFormik } from "formik";
import { imageLinkTwo } from "../../common/constant";
import { LoginForm, SwiggyFeatures } from "./components";
import { CustomModal, Footer } from "../../components";
import { secondContainerData } from "./dummyData";
import { useLocation } from "../../utilities/hooks/useLocation";

export function IntroPage() {
  const { handleClick } = useLocation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log('Hits');
    if (showModal) {
      setShowModal(false);
      document.body.style.overflow = "auto";
    } else {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div>
      <div style={styles.introPageContainer}>
        <div style={styles.introPageSubContainerOne}>
          <div style={styles.introHeaderStyle}>
            <span style={styles.introHeaderImageContainerStyle}>
              <SvgIcons.IntroSwiggyLogo />
            </span>
            <div>
              <Button
                buttonText="Login"
                customStyle={styles.loginButtonStyle}
                onClick={openModal}
              />
              <Button
                buttonText="Sign up"
                customStyle={styles.signupButtonStyle}
              />
            </div>
          </div>
          <div>
            <div style={styles.textOneStyle}>Hungry ?</div>
            <div style={styles.textTwoStyle}>
              Order food from favorite restaurants near you.
            </div>
            <div style={styles.inputTagContainerStyle}>
              <div style={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Enter your delivery location"
                  style={styles.inputTagStyle}
                />
                <div style={styles.locateMeStyle}>Locate Me</div>
              </div>
              <Button
                buttonText="FIND FOOD"
                customStyle={styles.findFoodButtonStyle}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
        <img
          src={`${imageLinkTwo}/Lunch1_vlksgq`}
          style={styles.introPageSubContainerTwo}
        />
      </div>

      {/* Intro Page Second Container */}
      <div style={styles.introPageSecondContainer}>
        <div style={styles.imageContainer}>
          {secondContainerData.map((item) => {
            return <SwiggyFeatures {...item} key={item?.id} />;
          })}
        </div>
      </div>

      {/* Intro Page Third Container */}
      <div style={styles.introPageThirdContainer}>
        <div style={styles.subContainerStyle}>
          <div style={styles.thirdContainerHeadingStyle}>
            Restaurants in your pocket
          </div>
          <div style={styles.thirdContainerSubHeadingStyle}>
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </div>
          <div style={styles.linkContainerStyle}>
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="54"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
              />
            </a>
            <a
              href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="54"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
              />
            </a>
          </div>
        </div>
        <div style={styles.secondSubContainerStyle}>
          <div style={styles.thirdContainerImageOneStyle}>
            <img
              width="384"
              height="489"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
            />
          </div>
          <div style={styles.thirdContainerImageTwoStyle}>
            <img
              width="384"
              height="489"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
            />
          </div>
        </div>
      </div>
      <Footer />
      <CustomModal visible={showModal} openModal={openModal}>
        <>
          <div style={styles.modalCrossButtonStyle} onClick={openModal}>
            <SvgIcons.CrossButton />
          </div>
          <div
            style={{
              paddingLeft: "40px",
              paddingRight: "124px",
            }}
          >
            <div style={styles.modalContainerStyle}>
              <div>
                <div style={styles.modalLoginTextStyle}>Login</div>
                <div style={styles.modalSubTextContainerStyle}>
                  <div style={styles.modalOrTextStyle}>or</div>
                  <div style={styles.modalCreateAccTextStyle}>
                    create your account
                  </div>
                </div>
                <div style={styles.modalDividerStyle}></div>
              </div>
              <img
                width="100"
                height="105"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              />
            </div>
            <LoginForm />
            {/* <div>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</div> */}
          </div>
        </>
      </CustomModal>
    </div>
  );
}
