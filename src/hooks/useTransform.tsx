// import {useEffect, useState} from "react";

// export function useTransform(
//   shortUrl: string,
//   domain: string,
//   userDomain?: string,
//   userAlias?: string
// ) {
//   const [newShortUrl, setNewShortUrl] = useState("");
//   const [userShortUrl, setUserShortUrl] = useState("");

//   useEffect(() => {
//     const protocol = "https://";

//     // Separate domain + TLD and path from shortUrl
//     const domainAndTld = shortUrl.slice(
//       protocol.length,
//       shortUrl.indexOf("/", protocol.length) + 1
//     ); // Extract domain + TLD up to slash
//     const path = shortUrl.slice(domainAndTld.length);

//     // Transform to newShortUrl
//     const transformedShortUrl = `${protocol}${domain}${path}`;

//     // Transform newShortUrl to userShortUrl (if userDomain provided)
//     let transformedUserShortUrl = "";
//     if (userDomain) {
//       const userDomainWithTld = `${userDomain}.${userDomain.split(".").pop()}`; // Ensure full domain with TLD

//       // Separate domain + TLD and path from transformedShortUrl
//       const transformedDomainAndTld = transformedShortUrl.slice(
//         protocol.length,
//         transformedShortUrl.indexOf("/", protocol.length) + 1
//       );
//       const transformedPath = transformedShortUrl.slice(
//         transformedDomainAndTld.length
//       );

//       // Replace domain + TLD with userDomain
//       transformedUserShortUrl = `${protocol}${userDomainWithTld}${transformedPath}`;

//       // Replace path with userAlias (if provided)
//       if (userAlias) {
//         transformedUserShortUrl = transformedUserShortUrl.replace(
//           transformedPath,
//           userAlias
//         );
//       }
//     } else {
//       transformedUserShortUrl = transformedShortUrl; // Use transformedShortUrl if no userDomain
//     }

//     setNewShortUrl(transformedShortUrl);
//     setUserShortUrl(transformedUserShortUrl);
//   }, [shortUrl, domain, userDomain, userAlias]);

//   return {newShortUrl, userShortUrl};
// }

export function useTransform(
  shortUrl: string,
  domain: string,
  userDomain?: string,
  userAlias?: string
) {
  const protocol = "https://";

  // Separate domain + TLD and path from shortUrl
  const domainAndTld = shortUrl.slice(
    protocol.length,
    shortUrl.indexOf("/", protocol.length) + 1
  ); // Extract domain + TLD up to slash
  const path = shortUrl.slice(domainAndTld.length);

  // Transform to newShortUrl
  const transformedShortUrl = `${protocol}${domain}${path}`;

  // Transform newShortUrl to userShortUrl (if userDomain provided)
  let transformedUserShortUrl = "";
  if (userDomain) {
    const userDomainWithTld = `${userDomain}.${userDomain.split(".").pop()}`; // Ensure full domain with TLD

    // Separate domain + TLD and path from transformedShortUrl
    const transformedDomainAndTld = transformedShortUrl.slice(
      protocol.length,
      transformedShortUrl.indexOf("/", protocol.length) + 1
    );
    const transformedPath = transformedShortUrl.slice(
      transformedDomainAndTld.length
    );

    // Replace domain + TLD with userDomain
    transformedUserShortUrl = `${protocol}${userDomainWithTld}${transformedPath}`;

    // Replace path with userAlias (if provided)
    if (userAlias) {
      transformedUserShortUrl = transformedUserShortUrl.replace(
        transformedPath,
        userAlias
      );
    }
  } else {
    transformedUserShortUrl = transformedShortUrl; // Use transformedShortUrl if no userDomain
  }

  // Since it's synchronous, directly return the values
  return {
    newShortUrl: transformedShortUrl,
    userShortUrl: transformedUserShortUrl,
  };
}
