import { useEffect, useState } from "react";


const useBootstrap = () => {
  const [subdomain, setSubdomain] = useState("");

  useEffect(() => {
    getSubdomain();
  }, []);

  const getSubdomain = () => {
    const domain = "";
    // console.log(domain);
    if (!domain) {
      // return alert("You must add the PLATFORM_DOMAIN env var");
    }
    const { hostname } = window.location;
    let subdomainIndex;

    switch (process.env.NODE_ENV) {
      case "development":
        subdomainIndex = hostname.split(".").indexOf(domain) - 1;

        if (subdomainIndex < 0) {
          break;
        }
        setSubdomain(hostname.split(".")[subdomainIndex]);
      case "production":
        subdomainIndex = hostname.split(".").indexOf(domain.split(".")[0]) - 1;

        if (subdomainIndex < 0) {
          break;
        }
        setSubdomain(hostname.split(".")[subdomainIndex]);
        break;
    }
  };

  return { subdomain, getSubdomain };
};

export default useBootstrap;
