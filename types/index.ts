import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type GraphQuery = {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  mediaLink?: string;
};
