/* @flow */
export const intlPath = (path: string): string => `/:locale(fr)${path}`;

export const currentLocale = (): string => "fr";

export const intlLocation = (
  location: string | Location,
  locale: string = currentLocale()
): string | Location => {
  if (typeof location === "string") {
    return `/${locale}${location}`;
  }
  const pathname = `/${locale}${location.pathname}`;
  return {
    ...location,
    pathname
  };
};
