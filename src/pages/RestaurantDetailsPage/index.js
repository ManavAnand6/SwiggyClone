import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { imageLink } from "../../common/constant";
import SvgIcons from "../../common/SvgIcons";
import {
  clearData,
  getRestaurantMenuData,
  openMenuModal,
  setVisibleSectionId,
} from "./restaurantDetailsPageSlice";
import {
  BrowserMenuCard,
  ComponentCustomCoupon,
  ComponentFoodList,
  CustomAccordion,
} from "./components";
import { constants } from "./constantRestaurantDetails";
import { RestaurantDetailsPageShimmer } from "./shimmer";
import { Button } from "../../components/Button";
import { CustomModal } from "../../components";

export function RestaurantDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurantDetailsState = useSelector(
    (state) => state.restaurantDetailsPage
  );
  const { restaurantMenuData, isMenuModalOpen } = restaurantDetailsState;
  const {
    TYPE_ITEM,
    TYPE_RESTAURANT,
    TYPE_RESTAURANT_ADDRESS,
    TYPE_NESTED_ITEMS,
  } = constants;
  const sectionRefArray = useRef([]);

  useEffect(() => {
    dispatch(getRestaurantMenuData(id));
    return () => {
      dispatch(clearData());
    };
  }, []);

  const renderCoupon = (couponData) => {
    const data = couponData.map((item) => {
      return <ComponentCustomCoupon data={item} />;
    });
    return data;
  };

  const renderItems = (data) => {
    const newData = data.map((foodItem) => {
      return <ComponentFoodList data={foodItem} />;
    });
    return newData;
  };

  useEffect(() => {
    if (restaurantMenuData.length !== 0) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            console.log("sectionId interSecting", sectionId);
            dispatch(setVisibleSectionId(sectionId));
          } else {
            const sectionId = entry.target.id;
            console.log("sectionId notInterSecting", sectionId);
          }
        });
      };

      const observer = new IntersectionObserver(callback, options);
      sectionRefArray.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });

      return () => {
        sectionRefArray.current.forEach((ref) => {
          if (ref) {
            console.log("sectionRefArray[ref]", ref);
            observer.unobserve(ref);
          }
        });
      };
    }
  }, [restaurantMenuData]);

  const addSectionId = (ref) => {
    sectionRefArray.current.push(ref);
  };

  const renderFoodItems = (foodItemsData) => {
    const data = foodItemsData.map((item, index) => {
      const type = item?.card?.card?.["@type"];
      const { title } = item?.card?.card;
      const sectionId = `section_${title}`;
      switch (type) {
        case TYPE_NESTED_ITEMS:
          const { categories } = item?.card?.card;
          return (
            <div style={{ paddingTop: "20px" }}>
              <span id="nested-component-heading">{title}</span>
              {categories.map((categoriesItem) => {
                const { itemCards, title } = categoriesItem;
                return (
                  <CustomAccordion
                    customRef={(ref) => addSectionId(ref)}
                    title={title}
                    nested
                    sectionId={sectionId}
                  >
                    {renderItems(itemCards)}
                  </CustomAccordion>
                );
              })}
            </div>
          );
        case TYPE_ITEM:
          const { itemCards } = item?.card?.card;
          return (
            <CustomAccordion
              customRef={(ref) => addSectionId(ref)}
              title={title}
              sectionId={sectionId}
            >
              {renderItems(itemCards)}
            </CustomAccordion>
          );
        case TYPE_RESTAURANT:
          return (
            <div id="license-info-container">
              <img
                src={`${imageLink}${item?.card?.card?.imageId}`}
                id="license-logo"
              />
              <span id="license-number">{item?.card?.card?.text}</span>
            </div>
          );
        case TYPE_RESTAURANT_ADDRESS:
          return (
            <div id="address-container">
              <div id="address-sub-container">
                <div id="address-restaurant-name">{item?.card?.card?.name}</div>
                <div id="address-restaurant-area">{item?.card?.card?.area}</div>
                <div id="complete-address">
                  {item?.card?.card?.completeAddress}
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    });
    return data;
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      dispatch(openMenuModal(false));
      document.body.style.overflow = "auto";
    }
  };

  const openMenu = () => {
    if (isMenuModalOpen) {
      dispatch(openMenuModal(false));
      document.body.style.overflow = "auto";
    } else {
      dispatch(openMenuModal(true));
      document.body.style.overflow = "hidden";
    }
  };

  return restaurantMenuData.length !== 0 ? (
    <div id="restaurant-details-container" className="borderStyle">
      <div id="first-container">
        <div id="restaurant-container">
          <div id="restaurant-name">
            {restaurantMenuData?.cards[0]?.card?.card?.info?.name}
          </div>
          <div id="cuisine">
            {restaurantMenuData?.cards[0]?.card?.card?.info?.cuisines?.join(
              ", "
            )}
          </div>
          <div id="restaurant-address">
            <div>
              {restaurantMenuData?.cards[0]?.card?.card?.info?.areaName}
            </div>
            <div>
              {
                restaurantMenuData?.cards[0]?.card?.card?.info?.sla
                  ?.lastMileTravelString
              }
            </div>
          </div>
        </div>
        <div id="restaurant-rating-container">
          <div id="rating-container-upper">
            <span id="rating-star">
              <SvgIcons.Star />
            </span>
            <span>
              {restaurantMenuData?.cards[0]?.card?.card?.info?.avgRating}
            </span>
          </div>
          <span>
            {restaurantMenuData?.cards[0]?.card?.card?.info?.totalRatingsString}
          </span>
        </div>
      </div>
      <div id="second-container">
        <div id="delivery-details-container">
          <div className="details-container">
            <SvgIcons.TimerLogo />
            <span className="detailsStyle">
              {restaurantMenuData?.cards[0]?.card?.card?.info?.sla?.slaString}
            </span>
          </div>
          <div className="details-container">
            <SvgIcons.RupeeLogo />
            <span className="detailsStyle">
              {
                restaurantMenuData?.cards[0]?.card?.card?.info
                  ?.costForTwoMessage
              }
            </span>
          </div>
        </div>
        <div
          style={{
            overflowX: "scroll",
            whiteSpace: "nowrap",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "0",
          }}
          id="coupon-list"
        >
          {renderCoupon(
            restaurantMenuData?.cards[1]?.card?.card?.gridElements
              ?.infoWithStyle?.offers
          )}
        </div>
      </div>
      <div id="third-container">
        {renderFoodItems(
          restaurantMenuData?.cards[restaurantMenuData?.cards.length - 1]
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        )}
      </div>
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "90%",
          transform: "translateX(-50%)",
          width: "150px",
          height: "40px",
          pointerEvents: "auto",
        }}
      >
        <Button
          buttonText="Browse Menu"
          onClick={openMenu}
          customStyle={{
            position: "fixed",
            borderRadius: "30px",
            background: "#5d8ed5",
            color: "#fff",
            textAlign: "center",
            boxShadow:
              "0 5px 10px 0 rgb(0 0 0 / 30%), 0 2px 1px 0 rgb(93 141 213 / 20%)",
            padding: "14px",
            fontWeight: "600",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
            willChange: "transform",
            transform: "scaleX(1)",
            transition: "transform .25s ease-in-out",
          }}
        />
      </div>
      {isMenuModalOpen && (
        <CustomModal
          visible={isMenuModalOpen}
          openModal={openMenu}
          modalWrapperStyle={styles.modalWrapper}
        >
          <BrowserMenuCard
            data={
              restaurantMenuData?.cards[restaurantMenuData?.cards.length - 1]
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards
            }
            scrollToSection={scrollToSection}
          />
        </CustomModal>
      )}
    </div>
  ) : (
    <RestaurantDetailsPageShimmer />
  );
}

const styles = {
  modalWrapper: {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    zIndex: 1,
    background: "rgba(40,44,62,.6)",
    width: "100%",
  },
};
