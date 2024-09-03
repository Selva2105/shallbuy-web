import { CategoryLinkProps } from "@/types";
import Link from "next/link";
import { FC } from "react";

const CategoryLink: FC<CategoryLinkProps> = ({
  altText,
  categoryName,
  href,
  imgSrc,
}) => {
  return (
    <Link
      href={href}
      className="group grid h-auto w-full justify-center gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 items-start"
      prefetch={false}
    >
      <img
        src={imgSrc}
        width="200"
        height="200"
        alt={altText}
        className="aspect-square overflow-hidden rounded-lg object-cover object-center"
        loading="lazy"
      />
      <div className="text-sm font-medium leading-none group-hover:underline">
        {categoryName}
      </div>
    </Link>
  );
};
export default CategoryLink;
