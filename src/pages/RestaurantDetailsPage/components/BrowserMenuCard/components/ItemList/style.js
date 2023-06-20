const styles = {
  itemContainerStyle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: "15px",
  },
  itemIconStyle: (showIcon) => {
    if (showIcon) {
      return {
        marginRight: "20px",
        width: "8px",
        height: "8px",
        backgroundColor: "#5d8ed5",
        transform: "rotate(45deg)",
        alignSelf: "center",
      };
    }
    return {
      marginRight: "20px",
      width: "8px",
      height: "8px",
      alignSelf: "center",
    };
  },
  itemSubContainerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  itemCountStyle: {
    marginLeft: "20px",
    cursor: 'pointer',
  },
  selectedTitleStyle: (showIcon) => {
    if (showIcon) {
      return {
        fontWeight: "bolder",
        cursor: 'pointer',
      };
    }
    return {
      cursor: 'pointer',
    };
  },
};

export default styles;
