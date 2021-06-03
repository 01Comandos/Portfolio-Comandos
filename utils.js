import * as Parser from "ua-parser-js";

const isMobile = (req) => {
  let userAgent;

  if (req) {
    userAgent = Parser(req.headers["user-agent"] || "");
  } else {
    userAgent = new Parser().getResult();
  }

  return userAgent?.device?.type === "mobile";
};

export { isMobile };
