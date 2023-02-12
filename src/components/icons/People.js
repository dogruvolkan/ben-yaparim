import * as React from "react";
const SvgPeople = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#people_svg__a)" fill="#969EAD">
      <path d="m21.682 14.827-3.016-1.973 1.16-2.13a3.71 3.71 0 0 0 .428-1.723V5.626A4.873 4.873 0 0 0 12.07 2.04l1.02 1.1a3.374 3.374 0 0 1 5.665 2.485V9c0 .35-.084.694-.245 1.005l-1.824 3.345 4.174 2.731a1.975 1.975 0 0 1 .895 1.66v2.509H18.38v1.5h4.875v-4.008a3.471 3.471 0 0 0-1.573-2.916Z" />
      <path d="m14.932 16.327-3.017-1.973 1.162-2.13a3.71 3.71 0 0 0 .427-1.723V7.126a4.885 4.885 0 0 0-4.877-4.882 4.882 4.882 0 0 0-4.873 4.882V10.5c-.002.6.143 1.192.423 1.724l1.168 2.14-2.999 1.962a3.47 3.47 0 0 0-1.573 2.911L.75 23.251h15.754v-4.008a3.471 3.471 0 0 0-1.572-2.916Zm.072 5.424H2.26l.014-2.508a1.976 1.976 0 0 1 .894-1.66l4.157-2.72-1.83-3.357a2.196 2.196 0 0 1-.24-1.005V7.126a3.375 3.375 0 0 1 6.75 0V10.5c0 .35-.084.694-.244 1.005l-1.824 3.345 4.174 2.731a1.976 1.976 0 0 1 .894 1.66v2.509Z" />
    </g>
    <defs>
      <clipPath id="people_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPeople;
