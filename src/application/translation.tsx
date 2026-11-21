import type { JSX } from "react/jsx-runtime";

export type Translation = {
  readonly entry: string;
  readonly description: string;
  readonly details: readonly [string, string, JSX.Element?][];
};
