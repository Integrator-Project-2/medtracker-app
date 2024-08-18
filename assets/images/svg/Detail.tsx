import * as React from "react";
import Svg, { SvgProps, Circle, Rect } from "react-native-svg";

export const Detail = (props: SvgProps) => (
  <Svg
    width={51}
    height={6}
    viewBox="0 0 51 6"
    fill="none"
    {...props}
  >
    <Circle cx={32} cy={3} r={3} fill="#D9D9D9" />
    <Circle cx={48} cy={3} r={3} fill="#D9D9D9" />
    <Rect width={19} height={6} rx={3} fill="#99A4D6" />
  </Svg>
);
