"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import useGdprConsent from "hooks/useGdprConsent";
import Script from "next/script";
import { GOOGLE_ANALYTICS, PIXEL_ID } from "utils/constants";

const Trackings = () => {
  const { hasConsented } = useGdprConsent();

  return (
    hasConsented && (
      <>
        {GOOGLE_ANALYTICS && <GoogleAnalytics gaId={GOOGLE_ANALYTICS} />}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </>
    )
  );
};

export default Trackings;
