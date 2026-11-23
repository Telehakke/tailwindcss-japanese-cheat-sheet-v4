// oxlint-disable react/jsx-key
import type { ReactNode } from "react";
import { TypographyEnum } from "../../../../../../domain/models/entry";

export const typographyTableData: Record<string, ReactNode[]> = {
  [TypographyEnum.color]: [
    <td className="bg-transparent" />,
    <td className="bg-transparent" />,
    <td className="bg-transparent" />,
    <td>
      <p className="text-black">Aa</p>{" "}
    </td>,
    <td>
      <p className="text-white">Aa</p>
    </td>,
    <td>
      <p className="text-red-500">Aa</p>
    </td>,
    <td>
      <p className="text-orange-500">Aa</p>
    </td>,
    <td>
      <p className="text-amber-500">Aa</p>
    </td>,
    <td>
      <p className="text-yellow-500">Aa</p>
    </td>,
    <td>
      <p className="text-lime-500">Aa</p>
    </td>,
    <td>
      <p className="text-green-500">Aa</p>
    </td>,
    <td>
      <p className="text-emerald-500">Aa</p>
    </td>,
    <td>
      <p className="text-teal-500">Aa</p>
    </td>,
    <td>
      <p className="text-cyan-500">Aa</p>
    </td>,
    <td>
      <p className="text-sky-500">Aa</p>
    </td>,
    <td>
      <p className="text-blue-500">Aa</p>
    </td>,
    <td>
      <p className="text-indigo-500">Aa</p>
    </td>,
    <td>
      <p className="text-violet-500">Aa</p>
    </td>,
    <td>
      <p className="text-purple-500">Aa</p>
    </td>,
    <td>
      <p className="text-fuchsia-500">Aa</p>
    </td>,
    <td>
      <p className="text-pink-500">Aa</p>
    </td>,
    <td>
      <p className="text-rose-500">Aa</p>
    </td>,
    <td>
      <p className="text-slate-500">Aa</p>
    </td>,
    <td>
      <p className="text-gray-500">Aa</p>
    </td>,
    <td>
      <p className="text-zinc-500">Aa</p>
    </td>,
    <td>
      <p className="text-neutral-500">Aa</p>
    </td>,
    <td>
      <p className="text-stone-500">Aa</p>
    </td>,
    <td>
      <p className="text-mauve-500">Aa</p>
    </td>,
    <td>
      <p className="text-olive-500">Aa</p>
    </td>,
    <td>
      <p className="text-mist-500">Aa</p>
    </td>,
    <td>
      <p className="text-taupe-500">Aa</p>
    </td>,
    <td>
      <p className="text-red-500/25">Aa</p>
    </td>,
  ],
  [TypographyEnum.textDecorationLine]: [
    <td>
      <p className="underline">Aa</p>
    </td>,
    <td>
      <p className="overline">Aa</p>
    </td>,
    <td>
      <p className="line-through">Aa</p>
    </td>,
    <td>
      <p className="no-underline">Aa</p>
    </td>,
  ],
  [TypographyEnum.textDecorationColor]: [
    <td />,
    <td />,
    <td />,
    <td>
      <p className="underline decoration-black">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-white">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-red-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-orange-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-amber-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-yellow-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-lime-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-green-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-emerald-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-teal-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-cyan-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-sky-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-blue-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-indigo-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-violet-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-purple-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-fuchsia-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-pink-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-rose-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-slate-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-gray-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-zinc-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-neutral-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-stone-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-mauve-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-olive-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-mist-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-taupe-500">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-red-500/25">Aa</p>
    </td>,
  ],
  [TypographyEnum.textDecorationStyle]: [
    <td>
      <p className="underline decoration-solid">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-double">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-dotted">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-dashed">Aa</p>
    </td>,
    <td>
      <p className="underline decoration-wavy">Aa</p>
    </td>,
  ],
};
