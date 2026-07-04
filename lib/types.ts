import type { ReactElement } from "react";

export type Step = {
  id: number;
  title: string;
  instruction: string;
};

export type SvgElementSpec = {
  /** step at which this element first appears */
  step: number;
  /** step at which this element is hidden again (e.g. a guide line replaced by final ink) */
  hideAt?: number;
  element: ReactElement;
};

export type Tutorial = {
  slug: string;
  name: string;
  subtitle: string;
  viewBox: string;
  steps: Step[];
  elements: SvgElementSpec[];
};
