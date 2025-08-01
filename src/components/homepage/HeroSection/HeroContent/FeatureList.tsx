import { Utils } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

const features: string[] = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

const HeroContentFeatureList: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={Utils.cn("", className)} {...props}>
      <ul className="w-fit mx-auto flex flex-col gap-[10px] font-figtree text-left text-base font-[500] leading-[22px]">
        {features.map((feature, i) => {
          return (
            <li
              key={i}
              className="text-white flex justify-start gap-[11px] items-center"
            >
              <span>✨</span>
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroContentFeatureList;
