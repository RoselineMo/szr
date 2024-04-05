export function useTransform(
  shortUrl: string,
  domain: string,
  userDomain?: string,
  userAlias?: string
) {
  const protocol = "https://";

  // Replace domain directly in shortUrl (keeping path intact)
  const transformedShortUrl = shortUrl.replace(
    new RegExp(`${protocol}[^/]+/`), // Match https:// up to next slash (including any characters)
    `${protocol}${domain}/`
  );

  // Transform newShortUrl to userShortUrl (if userDomain provided)
  let transformedUserShortUrl = "";
  if (userDomain) {
    const userDomainWithTld = `${userDomain}.${userDomain.split(".").pop()}`; // Ensure full domain with TLD

    transformedUserShortUrl = transformedShortUrl.replace(
      domain,
      userDomainWithTld
    );

    // Replace path with userAlias (if provided)
    if (userAlias) {
      transformedUserShortUrl = transformedUserShortUrl.replace(
        transformedShortUrl.slice(domain.length + protocol.length), // Extract path after domain
        userAlias
      );
    }
  } else {
    transformedUserShortUrl = transformedShortUrl;
  }

  // Return the transformed URLs
  return {
    newShortUrl: transformedShortUrl,
    userShortUrl: transformedUserShortUrl,
  };
}
