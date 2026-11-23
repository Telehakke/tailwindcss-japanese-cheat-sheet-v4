// oxlint-disable react/jsx-key
import type { ReactNode } from "react";
import { TransitionsAndAnimationEnum } from "../../../../../../domain/models/entry";

export const transitionsAndAnimationTableData: Record<string, ReactNode[]> = {
  [TransitionsAndAnimationEnum.animation]: [
    <td className="w-10">
      <p className="animate-spin text-center">Aa</p>
    </td>,
    <td className="w-10">
      <p className="animate-ping text-center">Aa</p>
    </td>,
    <td className="w-10">
      <p className="animate-pulse text-center">Aa</p>
    </td>,
    <td className="w-10">
      <p className="animate-bounce text-center">Aa</p>
    </td>,
    <td className="w-10">
      <p className="animate-none text-center">Aa</p>
    </td>,
  ],
};
