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
    blogs: [
      {
        title: "Color psychology",
        id: "color-psychology",
        image: "logo-black.png",
        author: "Uichroma team",
        content: [
          {
            title: "",
            text: "Color psychology is the study of colors in relation to human behavior. It aims to determine how color affects our daily decisions and life in general. Color meanings can have an impact on why we prefer certain colors over others. The same color can also have different meanings that are dependent on our  gender, location, values, and a variety of other factors.  ",
            image: "",
          },
          {
            title: "Red",
            text: "Red can capture attention, its meaning is associated with excitement, passion, danger, energy, and action. You might’ve noticed that some brands use red for 'call to action' buttons or for their packaging as a way to stand out on the shelf. In color psychology, red is the most intense color. And thus, can provoke the strongest emotions. Red can also trigger danger so you want to use the color moderately.",
            image: "",
          },
          {
            title: "Orange",
            text: "Orange is the hue of encouragement, optimism, and self-confidence, marking the extrovert. Orange radiates warmth and happiness, combining the physical energy and stimulation of red with the cheerfulness of yellow. Orange can inspire courage, enthusiasm, and vitality. It can also have a stimulating effect.",
            image: "",
          },
          {
            title: "Yellow",
            text: "Yellow represents the sun, warmth, and summertime. It’s also the most visible color on the color spectrum. It’s especially eye-catching when combined with white or black, as it is in safety equipment, school buses, and taxis. Be careful with it, though, as many people it irritating.",
            image: "",
          },
          {
            title: "Green",
            text: "The color green relates to nture, balance and harmony. It is the great balancer of the heart and the emotions, creating equilibrium between the head and the heart. Green is also the color of growth, spring, renewal and rebirth. It renews energy. It is the safe place from the stresses of modern living, restoring us back to a sense of well being. This is why there is so much of this relaxing color on the earth, and why we need to keep it that way. Green is an emotionally positive color, a natural peacemaker.",
            image: "",
          },
          {
            title: "Brown",
            text: "Brown connotes to earthy color, wood and stone. So naturally, it  relates to comfort, security. In marketing, you’ll find that brown is often used for natural products and food. Brown is a color that shows up in logos, banner images, and sometimes even text due to its contrast on a white background.",
            image: "",
          },
          {
            title: "Purple",
            text: "Purple is an ideal hue for luxury brands. When combined with red, it can feel intimate and romantic. With whites and pinks, it becomes playful and child-like.",
            image: "",
          },
          {
            title: "White",
            text: "White showcases innocence, goodness, cleanliness, and humility. On an ecommerce website, white tends to be the most used color. You’ll likely use it as the background color for your product photo. Your pages will likely have a white background with a black font. This is because, black font on a white background is the best color combination for readability.",
            image: "",
          },
          {
            title: "Black",
            text: "The color black relates to the hidden, the secretive and the unknown. It keeps things hidden from the world. In color psychology this color gives protection from external emotional stress. Black is the absorption of all color and the absence of light.Black hides, while white brings to light.What black covers, white uncovers. We all use black at various times to hide from the world around us in one way or another. Some of us use it to hide our weight; others among us use it to hide our feelings, our fears or our insecurities.",
            image: "",
          },
        ],
        summary:
          "It is obvious that a color is ostensibly different from an other color, but what many people do not know, is colors have different meanings and psychological effects as well, big companies like Facebook, Amazon and Nike for example, did not chose colors in an arbitrary way, concisely, a wrong colors set may work against you down the road, so it is not a bad idea to invest time and effort to study colors and pick one or two that fit your next design. For more, read the article",
        time: "5min",
        publishingDate: "20/06/2021",
        path: { name: "article", params: { topic: "color-psychology" } },
      },
      {
        title: "Color vocabulary ",
        id: "color-vocabulary",
        image: "logo-black.png",
        author: "Uichroma team",
        content: [
          {
            title: "",
            text: " If want to use color effectively in your designs, you’ll need to know a few color concepts and terms.",
            image: "",
          },
          {
            title: "Hue",
            text: "The term hue and color do not point to the same thing. First, we should understand that term 'color' is a general term that people use to dub all the hues, tints, and tones. On the other hand, a hue is exactly the thing we mean asking “what color is it?”. Basically, it is a family of twelve pure and bold colors presented on the color wheel. A hue serves as a basic material that can be transformed in three different ways – tinting, shading, and toning. They are easy to distinguish. A tint is created by mixing a hue with white, while a shade is a mix of a hue and black. Toning is a more delicate process because it requires adding both black and white the reason why the results may seem more natural than shades and tints.",
            image: "",
          },
          {
            title: "Chroma",
            text: "Chroma refers to the purity of a color. A hue with high chroma has no black, white, or gray added to it. Conversely, adding white, black, or gray reduces its chroma. It’s similar to saturation but not quite the same. Chroma can be thought of as the brightness of a color in comparison to white. In design, avoid using hues that have a similar (but not identical) chroma. Opt instead for hues with chromas that are either exactly the same or at least a few steps away from each other.",
            image: "",
          },
          {
            title: "Saturation",
            text: "Saturation describes the intensity of a color. Increasing saturation makes the color richer and darker, while reducing saturation makes it look faded and lighter. When we say “light green or “dark red,” we’re describing changes in saturation.",
            image: "",
          },
          {
            title: "Value",
            text: "Value is how light or dark a color is. Lighter colors have higher values — such as yellow having a higher value than a dark green. Black has the lowest value of any hue, and white the highest. This contributes to why the two colors are seen as direct opposites.",
            image: "",
          },
          {
            title: "Tones",
            text: "Tones are created when grey is added to a hue. Tones are generally softer than pure hues. Tones are sometimes easier to use in designs. More grey can lend a certain vintage feel to websites. Depending on the hues, they can also add a elegant look.",
            image: "",
          },
          {
            title: "Intensity",
            text: "Intensity is the brightness or dullness of a pigment. The stronger, or brighter a color is, the more pigment is present in the paint. The weaker or duller a paint color is, there’s less pigment present.",
            image: "",
          },
          {
            title: "The color wheel",
            text: "Color wheel and helps to understand how different colors relate to each other and how they can be merged. The color circle is usually built of primary, secondary and tertiary hues.",
            image: "",
          },
          {
            title: "Primary color",
            text: "Primary colors form the basis for all other shades. Humans perceive tradtionally three base hues: (blue, red, yellow), but research has shown that magenta, cyan, and yellow better describe our experience of color.So every other hue we see consists of a combination of these three colors in varying amounts, brightnesses, tints, and shades.",
            image: "",
          },
          {
            title: "Secondary color",
            text: "These colors appear by the combination of two primary colors. Since each system has different basic colors, the secondary colors vary too.",
            image: "",
          },
          {
            title: "Tertiary color",
            text: "a color that is made by mixing one primary color and an adjacent secondary color; ex. red (primary) and orange(secondary) merged together produce the intermediate color, red-orange.",
            image: "",
          },
          {
            title: "RGB",
            text: "RGB color system considers red, blue, and green as primary colors. The system is the basis of all colors used on the screen. The combination of primary colors in equal proportions of this system produces secondary colors which are cyan, magenta and yellow, but you need to remember that the more light you add, the brighter and lighter the color becomes.",
            image: "",
          },
          {
            title: "Cool, warm and neutral colors",
            text: "Cool colors are the ones on the green-blue side of the color wheel. They are called cool since they bring the feeling of cold. Warm colors are opposite to the previous due to the warm associations which they possess. Yellow, orange, and red are the hues relating to the warm type. Neutral colors are not part of the color wheel including grey, brown and beige.",
            image: "",
          },
          {
            title: "Tints and shades",
            text: "A tint results from adding white to a color, and a shade when you add black. Tints and shades let you create monochrome color schemes by adding varying levels of white and black to a base color.",
            image: "",
          },
        ],
        summary:
          "Knowing and understanding couple of important color terms, make the process of picking colors easier and more efficient.This is what we will cover in this article",
        time: "6min",
        publishingDate: "01/07/2021",
        path: { name: "article", params: { topic: "color-vocabulary" } },
      },
      {
        title: "Color schemes ",
        id: "color-schemes",
        image: "logo-black.png",
        author: "Uichroma team",
        content: [
          {
            title: "",
            text: "The color balance is vital in design since users make their impression of the website or application by the first look, and colors have a big influence. Designers distinguished the basic color schemes, or color harmony, which works effectively.",
            image: "",
          },
          {
            title: "Monochrome",
            text: "A monochromatic color scheme consists of various tints, shades, and saturations of a single base color.",
            image: "",
          },
          {
            title: "Analogous",
            text: "To create analogous harmony, you need to use colors located right next to each other on the color wheel. This type of color scheme is used for the design where no contrast is needed including the background of web pages.",
            image: "",
          },
          {
            title: "Triadic",
            text: "A combination of three hues that are equally spaced from one another around the color wheel. Ex. Red, Yellow, Blue or Green, Purple, Orange.",
            image: "",
          },
          {
            title: "Complementary",
            text: "The complementary scheme is colors placed in front of each other on the color wheel. This scheme is the opposite of analogous and monochromatic since it aims to produce high contrast. For example, the orange button on the blue background is hard to miss in any interface.",
            image: "",
          },
        ],
        summary:
          "By using the power of colors wheel and comprehension of their terminology, we can create schemes which expand the selection area of colors. In this article, we will cover the most used colors shcemes patterns.",
        time: "1min",
        publishingDate: "06/07/2021",
        path: { name: "article", params: { topic: "color-schemes" } },
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
    getBlogs(state) {
      return state.blogs;
    },
  },
});
