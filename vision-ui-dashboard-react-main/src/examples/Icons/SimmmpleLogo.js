/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function SimmmpleLogo({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2428 3086 c-88 -24 -148 -92 -148 -168 0 -32 -3 -34 -78 -68 -111 -50 -208 -118 -289 -203 -87 -92 -142 -183 -185 -307 -30 -89 -32 -103 -32 -235 0 -132 2 -146 32 -235 47 -135 100 -220 206 -326 102 -102 189 -158 315 -204 241 -88 494 -76 726 34 170 81 306 212 384 369 41 84 81 216 81 271 0 51 11 74 36 80 66 17 149 132 161 224 3 26 32 119 63 207 90 249 99 293 81 363 -17 60 -51 95 -134 136 -97 48 -125 46 -156 -12 -27 -51 14 -88 95 -84 46 3 54 0 73 -24 31 -40 42 -90 30 -142 -15 -69 -120 -335 -140 -358 -11 -11 -26 -44 -35 -74 -21 -71 -69 -120 -117 -120 -48 0 -82 31 -107 97 -11 31 -29 67 -40 80 -19 24 -126 287 -150 370 -7 23 -10 57 -6 77 9 46 61 100 90 92 65 -19 74 -18 101 8 21 21 25 33 20 54 -13 56 -60 66 -147 31 -99 -38 -157 -118 -158 -216 0 -39 16 -98 65 -235 36 -101 65 -197 65 -215 0 -44 34 -132 70 -182 29 -39 93 -81 125 -81 37 0 4 -184 -55 -299 -37 -73 -110 -165 -177 -222 -196 -167 -482 -229 -732 -159 -362 102 -598 435 -551 780 21 154 79 274 189 392 69 74 166 144 256 183 l57 26 34 -30 c63 -56 151 -65 231 -26 59 30 99 82 109 141 21 134 -118 248 -258 210z m130 -76 c70 -43 78 -136 17 -197 -28 -28 -40 -33 -80 -33 -82 0 -135 50 -135 128 0 44 35 96 74 112 37 15 90 11 124 -10z"
        fill="white"
      />
    </svg>
  );
}
// Setting default values for the props of SimmmpleLogo
SimmmpleLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the SimmmpleLogo
SimmmpleLogo.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SimmmpleLogo;
