const pregQuote = (str: string, delimiter?: string) => {
  // http://kevin.vanzonneveld.net
  // +   original by: booeyOH
  // +   improved by: Ates Goral (http://magnetiq.com)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: preg_quote("$40");
  // *     returns 1: '\$40'
  // *     example 2: preg_quote("*RRRING* Hello?");
  // *     returns 2: '\*RRRING\* Hello\?'
  // *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
  // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'
  return `${str}`.replace(
    new RegExp(`[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\${delimiter || ""}-]`, "g"),
    "\\$&"
  );
};

/**
 * Convert a globbing string to a Javascript RegExp expression
 * https://en.wikipedia.org/wiki/Glob_(programming)
 *
 * @param str - glob pattern
 * @returns corresponding Javascript RegExp
 */
const globStringToRegex = (str: string) => {
  return new RegExp(
    pregQuote(str).replace(/\\\*/g, ".*").replace(/\\\?/g, "."),
    "g"
  );
};

export default globStringToRegex;
