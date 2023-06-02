import React, { useContext, useState } from "react";
import SvgIcons from "../../common/SvgIcons";
import { Button } from "../../components/Button";
import { styles } from "./style";
import { imageLinkTwo } from "../../common/constant";
import { LoginForm, SwiggyFeatures } from "./components";
import { CustomModal, Footer } from "../../components";
import { secondContainerData } from "./dummyData";
import { useLocation } from "../../hooks/useLocation";
import { StringContext } from "../../common/StringProvider";

export function IntroPage() {
  const translations = useContext(StringContext);
  const { handleClick } = useLocation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
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
                buttonText={translations.LOGIN}
                customStyle={styles.loginButtonStyle}
                onClick={openModal}
              />
              <Button
                buttonText={translations.SIGN_UP}
                customStyle={styles.signupButtonStyle}
              />
            </div>
          </div>
          <div>
            <div style={styles.textOneStyle}>Hungry ?</div>
            <div style={styles.textTwoStyle}>
              {translations.INTRO_PAGE_LONG_TEXT_ONE}
            </div>
            <div style={styles.inputTagContainerStyle}>
              <div style={styles.inputContainer}>
                <input
                  type="text"
                  placeholder={translations.ENTER_YOUR_DELIVERY_LOCATION}
                  style={styles.inputTagStyle}
                />
                <div style={styles.locateMeStyle}>{translations.LOCATE_ME}</div>
              </div>
              <Button
                buttonText={translations.FIND_FOOD}
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
            {translations.RESTAURANTS_IN_YOUR_POCKET}
          </div>
          <div style={styles.thirdContainerSubHeadingStyle}>
            {translations.INTRO_PAGE_LONG_TEXT_TWO}
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
                <div style={styles.modalLoginTextStyle}>
                  {translations.LOGIN}
                </div>
                <div style={styles.modalSubTextContainerStyle}>
                  <div style={styles.modalOrTextStyle}>{translations.OR}</div>
                  <div style={styles.modalCreateAccTextStyle}>
                    {translations.CREATE_YOUR_ACCOUNT}
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
            <div style={styles.afterLoginTextStyle}>
              {translations.SWIGGY_POLICY_TEXT_LINE}
            </div>
          </div>
        </>
      </CustomModal>
    </div>
  );
}
