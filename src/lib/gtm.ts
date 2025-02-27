export const GTM_ID = "GTM-W66CRFWC";

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer


export const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
    console.log("Firing pageview event for " + url);

  } else {
    console.log("NOT Firing pageview event for " + url)
  }
}
