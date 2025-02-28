import React from "react";
import Link from "next/link";

const AnimatedLink = ({ href, content }: { href: string; content: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="fill-right social-media"
      data-content={content}
    >
      {content}
    </Link>
  );
};

export default AnimatedLink;
