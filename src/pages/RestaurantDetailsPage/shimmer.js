import React from "react";

export function RestaurantDetailsPageShimmer() {
  return (
    <div
      style={Styles.containerStyle}
    >
      {console.log('Shimmer is on Screen')}
      {Array(2)
        .fill("")
        .map(() => (
          <div style={Styles.shimmerContainerStyle}>
            <div>
              <div style={Styles.shimmerBoxStyle} />
              <div style={Styles.shimmerHeaderOneStyle} />
              <div style={Styles.shimmerHeaderStyle} />
            </div>
          </div>
        ))}
    </div>
  );
}

const Styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  shimmerContainerStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "100px",
  },
  shimmerBoxStyle: {
    width: "400px",
    height: "200px",
    backgroundColor: "#eef0f5",
  },
  shimmerHeaderOneStyle: {
    width: "300px",
    height: "15px",
    backgroundColor: "#eef0f5",
    marginTop: "10px",
  },
  shimmerHeaderStyle: {
    width: "200px",
    height: "10px",
    backgroundColor: "#eef0f5",
    marginTop: "10px",
  },
};
