import { createStore } from "vuex";

export default createStore({
  state: {
    navMenuExpanded: false,
    displayModeLight: true,
    selectedColor: "",
    colors: [
      {
        close: "pink",
        name: "pink",
        code: "#E91E63",
      },
      {
        close: "red",
        name: "red",
        code: "#F44336",
      },
      {
        close: "green",
        name: "green",
        code: "#4CAF50",
      },
      {
        close: "blue",
        name: "blue",
        code: "#2196F3",
      },
      {
        close: "grey",
        name: "grey",
        code: "#616161",
      },
      {
        close: "yellow",
        name: "yellow",
        code: "#FBC02D",
      },
      {
        close: "orange",
        name: "orange",
        code: "#FF9800",
      },
      {
        close: "green",
        name: "turquoise",
        code: "#1ccba8",
      },
      {
        close: "green",
        name: "acid green",
        code: "#B0BF1A",
      },
      {
        close: "brown",
        name: "fuzzy wuzzy",
        code: "#87421F",
      },
      {
        close: "blue",
        name: "absolute zero ",
        code: "#0048BA",
      },
      {
        close: "blue",
        name: "aero  ",
        code: "#7CB9E8",
      },
      {
        close: "blue",
        name: "aero blue ",
        code: "#C0E8D5",
      },
      {
        close: "purple",
        name: "african violet ",
        code: "#B284BE",
      },
      {
        close: "blue",
        name: "air blue ",
        code: "#72A0C1",
      },
      {
        close: "yellow",
        name: "alabaster  ",
        code: "#EDEAE0",
      },
      {
        close: "blue",
        name: "alice blue  ",
        code: "#F0F8FF",
      },
      {
        close: "orange",
        name: "alloy orange  ",
        code: "#C46210",
      },
      {
        close: "yellow",
        name: "almond ",
        code: "#EFDECD",
      },
      {
        close: "red",
        name: "amaranth",
        code: "#E52B50",
      },
      {
        close: "orange",
        name: "fulvous",
        code: "#E48400",
      },
      {
        close: "pink",
        name: "fuchsia rose",
        code: "#C74375",
      },
      {
        close: "purple",
        name: "fuchsia crayola",
        code: "#C154C1",
      },
      {
        close: "purple",
        name: "fuchsia ",
        code: "#FF00FF",
      },
      {
        close: "pirple",
        name: "fuchsia purple",
        code: "#CC397B",
      },
      {
        close: "purple",
        name: "frostbite ",
        code: "#E936A7",
      },
      {
        close: "purple",
        name: "french violet ",
        code: "#8806CE",
      },
      {
        close: "red",
        name: "chili red",
        code: "#E23D28",
      },
      {
        close: "yellow",
        name: "amber",
        code: "#FFBF00",
      },
      {
        close: "blue",
        name: "aqua",
        code: "#00FFFF",
      },
      {
        close: "green",
        name: "aquamarine",
        code: "#7FFFD4",
      },
      {
        close: "yellow",
        name: "arctic lime",
        code: "#D0FF14",
      },
      {
        close: "orange",
        name: "atomic tangerine",
        code: "#FF9966",
      },
      {
        close: "blue",
        name: "azure",
        code: "#007FFF",
      },
      {
        close: "grey",
        name: "baby powder",
        code: "#FEFEFA",
      },
      {
        close: "pink",
        name: "baker-miller pink",
        code: "#FF91AF",
      },
      {
        close: "yellow",
        name: "bisque ",
        code: "#FFE4C4",
      },
      {
        close: "green",
        name: "bitter lime ",
        code: "#BFFF00",
      },
      {
        close: "red",
        name: "bittersweet ",
        code: "#FE6F5E",
      },
      {
        close: "white",
        name: "blanched almond ",
        code: "#FFEBCD",
      },
      {
        close: "blue",
        name: "blue crayola ",
        code: "#1F75FE",
      },
      {
        close: "green",
        name: "bright green ",
        code: "#66FF00",
      },
      {
        close: "pink",
        name: "brillant rose ",
        code: "#FF55A3",
      },
      {
        close: "orange",
        name: "bright yellow ",
        code: "#FFAA1D",
      },
      {
        close: "yellow",
        name: "buff ",
        code: "#FFC680",
      },
      {
        close: "yellow",
        name: "cadmium yellow ",
        code: "#FFF600",
      },
      {
        close: "red",
        name: "marrakesh red ",
        code: "#f6844f",
      },
      {
        close: "yellow",
        name: "canary",
        code: "#FFFF99",
      },
      {
        close: "yellow",
        name: "canary yellow",
        code: "#FFEF00",
      },
      {
        close: "red",
        name: "canary apple red",
        code: "#FF0800",
      },
      {
        close: "blue",
        name: "capri",
        code: "#00BFFF",
      },
      {
        close: "pink",
        name: "carnation pink",
        code: "#FFA6C9",
      },
      {
        close: "blue",
        name: "celeste",
        code: "#B2FFFF",
      },
      {
        close: "yellow",
        name: "charteuse traditional",
        code: "#DFFF00",
      },
      {
        close: "green",
        name: "charteuse web",
        code: "#7FFF00",
      },
      {
        close: "pink",
        name: "cherry blossom pink",
        code: "#FFB7C5",
      },
      {
        close: "yellow",
        name: "moroccan yellow",
        code: "#FFB200",
      },
      {
        close: "yellow",
        name: "chrome yellow",
        code: "#FFA700",
      },
      {
        close: "red",
        name: "coquelicot ",
        code: "#FF3800",
      },
      {
        close: "red",
        name: "coral ",
        code: "#FF7F50",
      },
      {
        close: "white",
        name: "cornsilk ",
        code: "#FFF8DC",
      },
      {
        close: "pink",
        name: "cotton candy ",
        code: "#FFBCD9",
      },
      {
        close: "white",
        name: "cosmic latte ",
        code: "#FFF8E7",
      },
      {
        close: "yellow",
        name: "cyber yellow ",
        code: "#FFD300",
      },
      {
        close: "pink",
        name: "deep pink ",
        code: "#FF1493",
      },
      {
        close: "orange",
        name: "deep saffron ",
        code: "#FF9933",
      },
      {
        close: "blue",
        name: "deep sky blue ",
        code: "#00BFFF",
      },
      {
        close: "green",
        name: "electric lime ",
        code: "#CCFF00",
      },
      {
        close: "purple",
        name: "electric purple ",
        code: "#8F00FF",
      },
      {
        close: "green",
        name: "erin ",
        code: "#00FF40",
      },
      {
        close: "blue",
        name: "dodger blue ",
        code: "#1E90FF",
      },
      {
        close: "purple",
        name: "dodger violet ",
        code: "#8F00FF",
      },
      {
        close: "blue",
        name: "electric blue ",
        code: "#7DF9FF",
      },
      {
        close: "red",
        name: "apricot ",
        code: "#FBCEB1",
      },
      {
        close: "yellow",
        name: "corn ",
        code: "#FBEC5D",
      },
      {
        close: "yellow",
        name: "deep champagne ",
        code: "#FAD6A5",
      },
      {
        close: "yellow",
        name: "beige ",
        code: "#F5F5DC",
      },
      {
        close: "yellow",
        name: "eggshell ",
        code: "#F0EAD6",
      },
      {
        close: "blue",
        name: "beau blue ",
        code: "#BCD4E6",
      },
      {
        close: "orange",
        name: "carrot orange ",
        code: "#ED9121",
      },
      {
        close: "yellow",
        name: "desert sand ",
        code: "#EDC9AF",
      },
      {
        close: "blue",
        name: "blue jeans ",
        code: "#5DADEC",
      },
      {
        close: "red",
        name: "fire engine red ",
        code: "#CE2029",
      },
      {
        close: "brown",
        name: "bronze  ",
        code: "#CD7F32",
      },
      {
        close: "green",
        name: "emerald  ",
        code: "#50C878",
      },
      {
        close: "yellow",
        name: "camel  ",
        code: "#C19A6B",
      },
      {
        close: "purple",
        name: "byzantine  ",
        code: "#BD33A4",
      },
      {
        close: "orange",
        name: "copper  ",
        code: "#B87333",
      },
      {
        close: "green",
        name: "citron  ",
        code: "#9FA91F",
      },
      {
        close: "green",
        name: "caribbean green  ",
        code: "#00CC99",
      },
      {
        close: "orange",
        name: "flame",
        code: "#E25822",
      },
      {
        close: "blue",
        name: "crystal",
        code: "#A7D8DE",
      },
      {
        close: "pink",
        name: "cerise",
        code: "#DE3163",
      },
      {
        close: "green",
        name: "android green",
        code: "#3DDC84",
      },
      {
        close: "pink",
        name: "barbie pink",
        code: "#DA1884",
      },
      {
        close: "blue",
        name: "celtic blue",
        code: "#246BCE",
      },
      {
        close: "grey",
        name: "ash grey",
        code: "#B2BEB5",
      },
      {
        close: "blue",
        name: "denim",
        code: "#1560BD",
      },
      {
        close: "green",
        name: "asparagus",
        code: "#87A96B",
      },
      {
        close: "blue",
        name: "moroccan blue",
        code: "#1034A6",
      },
      {
        close: "green",
        name: "avocado",
        code: "#568203",
      },
      {
        close: "brown",
        name: "coffee",
        code: "#6F4E37",
      },
      {
        close: "brown",
        name: "cafe au lait",
        code: "#A67B5B",
      },
      {
        close: "pink",
        name: "cyclamen ",
        code: "#F56FA1",
      },
      {
        close: "purple",
        name: "eggplant ",
        code: "#614051",
      },
      {
        close: "blue",
        name: "fluorescent blue ",
        code: "#15F4EE",
      },
      {
        close: "brown",
        name: "cocoa brown ",
        code: "#D2691E",
      },
      {
        close: "yellow",
        name: "amber ",
        code: "#FFBF00",
      },
      {
        close: "green",
        name: "army green ",
        code: "#4B5320",
      },
      {
        close: "purple",
        name: "bright lilac ",
        code: "#D891EF",
      },
      {
        close: "white",
        name: "dutch white ",
        code: "#EFDFBB",
      },
      {
        close: "orange",
        name: "dark salmon ",
        code: "#E9967A",
      },
      {
        close: "yellow",
        name: "dark goldenrod ",
        code: "#B8860B",
      },
      {
        close: "pink",
        name: "fandango ",
        code: "#B53389",
      },
      {
        close: "blue",
        name: "Prussian Blue Color ",
        code: "#003153",
      },
      {
        close: "blue",
        name: "Navy Blue Color",
        code: "#000080",
      },
      {
        close: "blue",
        name: "royal Blue Color",
        code: "#4169e1",
      },
      {
        close: "blue",
        name: "Midnight Blue Color",
        code: "#003366",
      },
      {
        close: "white",
        name: "Platinum Color",
        code: "#E5e4e2",
      },
      {
        close: "white",
        name: "navajo white",
        code: "#Ffdead",
      },
      {
        close: "white",
        name: "Lavender Color",
        code: "#E6e6fa",
      },
      {
        close: "grey",
        name: "silver Color",
        code: "#C0c0c0",
      },
      {
        close: "grey",
        name: "charcoal Color",
        code: "#36454f",
      },
      {
        close: "grey",
        name: "slate grey",
        code: "#778899",
      },
      {
        close: "grey",
        name: "gunmetal grey",
        code: "#2c3539",
      },
      {
        close: "grey",
        name: "purple grey",
        code: "#A7a6ba",
      },
      {
        close: "grey",
        name: "battleship grey",
        code: "#848482",
      },
      {
        close: "grey",
        name: "cool grey",
        code: "#8c92ac",
      },
      {
        close: "grey",
        name: "payne's grey",
        code: "#40404f",
      },
      {
        close: "grey",
        name: "Timberwolf Color",
        code: "#Dbd7d2",
      },
      {
        close: "white",
        name: "ivory Color",
        code: "#Fffff0",
      },
      {
        close: "white",
        name: "honydew Color",
        code: "#F0fff0",
      },
    ],
  },
  mutations: {
    checkDisplayMode(state) {
      state.displayModeLight = !state.displayModeLight;
    },
    selectColor(state, payload) {
      state.selectedColor = payload;
    },
    setColors(state, payload) {
      state.colors = payload;
    },
    expandNav(state) {
      state.navMenuExpanded = !state.navMenuExpanded;
    },
  },
  actions: {
    checkDisplayMode(context) {
      context.commit("checkDisplayMode");
    },
    sendMailTo() {
      console.log("jj");
      window.location.href = "mailto:sehoulihamza@yahoo.com";
    },
    selectColor(context, payload) {
      context.commit("selectColor", payload);
    },
    setColors(context, payload) {
      context.commit("setColors", payload);
    },
    expandNav(context) {
      context.commit("expandNav");
    },
  },
  getters: {
    getDisplayState(state) {
      return state.displayModeLight;
    },
    getSelectedColor(state) {
      return state.selectedColor;
    },
    getColors(state) {
      return state.colors;
    },
    getExpandNav(state) {
      return state.navMenuExpanded;
    },
  },
  modules: {},
});
