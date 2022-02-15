import React, { useCallback } from 'react';
import NextLink from 'next/link';

export default function SmoothScroll({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  ...anchorProps
}) {
  const handleClick = useCallback(
    (e) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href);
        if (destination) {
          destination.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    },
    [href]
  );
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      onClick={handleClick}
        onKeyDown={handleClick}
    >
      <a
        tabIndex={0}
        target={target}
        role="link"
        onClick={handleClick}
        onKeyDown={handleClick}
        {...anchorProps}
      >
        {children}
      </a>
    </NextLink>
  );
}
