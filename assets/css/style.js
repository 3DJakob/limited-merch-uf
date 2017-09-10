import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 100 * vw,
        "minHeight": 100 * vh,
        "backgroundColor": "rgb(255, 133, 133)",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center"
    },
    "h1": {
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "color": "#fff"
    },
    "h2": {
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "color": "#fff"
    },
    "h3": {
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "color": "#fff"
    },
    "p": {
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "color": "#fff"
    },
    "a": {
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "color": "#fff"
    },
    "input": {
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "color": "#fff"
    },
    "header": {
        "backgroundColor": "#fff",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "width": 100 * vw
    },
    "header h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 40,
        "color": "#000"
    },
    "divcontainer": {
        "maxWidth": 1040,
        "backgroundColor": "#ffece0",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-around",
        "flexWrap": "wrap"
    },
    "container row": {
        "width": "100%",
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "display": "flex",
        "justifyContent": "center"
    },
    "container row input": {
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": "none"
    },
    "container row a": {
        "color": "inherit",
        "backgroundColor": "#fff",
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "marginLeft": 5
    },
    "container item": {
        "width": 190,
        "height": 190,
        "marginTop": 28,
        "marginRight": 28,
        "marginBottom": 28,
        "marginLeft": 28,
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "cursor": "pointer",
        "border": "2px solid rgba(255, 133, 133, 0)",
        "transition": "0.3s",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start"
    },
    "container itemselected": {
        "border": "2px solid rgba(100, 100, 100, 1)"
    },
    "container item:hover": {
        "border": "2px solid rgba(100, 100, 100, 1)"
    },
    "container item h3": {
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "rgba(255, 133, 133, 0.5)",
        "borderRadius": 3
    },
    "container item h3:last-of-type": {
        "backgroundColor": "rgba(0, 100, 160, 0.5)",
        "marginTop": 10
    },
    "divdivider": {
        "display": "flex",
        "flexDirection": "column",
        "width": "100%",
        "backgroundColor": "#fff",
        "overflow": "hidden",
        "transition": "300ms",
        "height": 700,
        "animation": "200ms ease-out 0s 1 trimOpen",
        "animationFillMode": "forwards"
    },
    "divdividerclosed": {
        "animation": "200ms ease-out 0s 1 trimClose",
        "height": 0
    },
    "divider h1": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 20,
        "textAlign": "center"
    },
    "divider row": {
        "position": "relative",
        "alignItems": "baseline",
        "flexWrap": "wrap",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "bottom": 700,
        "height": 0
    },
    "divider row *": {},
    "divider row h1": {
        "backgroundColor": "rgba(0, 100, 160, 0.5)",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "borderRadius": 3
    },
    "divider row h1:first-of-type": {
        "backgroundColor": "rgba(255, 133, 133, 0.5)"
    },
    "divider imageContainer": {
        "display": "flex",
        "height": 700,
        "overflow": "hidden",
        "position": "relative",
        "transition": "0.3s"
    },
    "divider imageContainer div": {
        "height": 700,
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "width": "100%"
    },
    "divider buttonContainer": {
        "position": "relative",
        "display": "flex",
        "justifyContent": "center",
        "bottom": 50,
        "height": 0
    },
    "divider buttonContainer a": {
        "height": 15,
        "width": 15,
        "border": "1px solid #fff",
        "borderRadius": "100%",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10,
        "cursor": "pointer"
    },
    "divider buttonContainer a:first-of-type": {
        "backgroundColor": "#fff"
    }
});