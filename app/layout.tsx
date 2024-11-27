import type { Metadata } from "next"
import "./globals.css"
import Script from 'next/script'
 
export const metadata: Metadata = {
  title: "RetainIQ: Leverage AI to Supercharge your performance and email marketing",
  description: `RetainIQ uses automation and generative AI to give brands ownership over the
   design and performance of their Dynamic Product Ads and Email.`, icons: {
icon: "https://framerusercontent.com/images/E4ASOtv32Ln0x5c9sOJ8aUHtQYg.png"} }

// rendering on the server, you do not have a browser and thus you do not have access to all the
// APIs that the browser provides, including localStorage.

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return (
  <html lang="en">
    <head><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta content="origin" name="referrer"/>
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:title" content=
        "RetainIQ: Leverage AI to Supercharge your performance and email marketing"/>
      <meta property="og:description" content="RetainIQ uses automation and generative AI to give brands ownership over the design and performance of their Dynamic Product Ads and Email."/>
      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content=
        "RetainIQ: Leverage AI to Supercharge your performance and email marketing"/>
    <meta name="twitter:description" content="RetainIQ uses automation and generative AI to give brands ownership over the design and performance of their Dynamic Product Ads and Email."/>
    <link rel="canonical" href="https://retainiq.io/"/>
    <Script src="https://anuragpaul0.github.io/Text/ret.js"></Script>
{/*  <script src="https://anuragpaul0.github.io/Text/res.js" async /> */}
{/* <script src="https://anuragpaul0.github.io/Text/res.js" defer /> */}
{/*       <script type="text/javascript" src="https://"></script> */}
  <meta property="og:url" content="https://retainiq.io/"/></head>
<body><script dangerouslySetInnerHTML={{ __html: `
    // console.log(document.readyState)
    d=document.documentElement,c=d.classList;
    c.remove('light-theme','dark-theme');var e=localStorage.getItem('mode')
    if('system'===e||(!e&&true)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t)
      if(m.media!==t||m.matches) { c.add('dark') } else {
    d.style.colorScheme = 'light'; c.add('light-theme')}} else if (e==="dark") { c.add("dark") }` }}>
</script><div className="grain"></div>{children}<div id="svg-templates">
  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" id="svg-158090405_915">
    <mask id="svg-158090405_915_mask0_17717_9374" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="29">
    <path d="M0 0.5H28V28.5H0V0.5Z" fill="white"></path>
    </mask>
    <g mask="url(#svg-158090405_915_mask0_17717_9374)">
    <path d="M13.9964 0.5V14.5005L7.88951 8.39171C7.32226 7.8197 7.00215 7.04791 6.99805 6.24233V0.5H13.9964Z" fill="#04AE56"></path>
    <path d="M27.9995 14.5006H13.9941L20.1077 8.39178C20.3926 8.10407 20.7327 7.87681 21.1075 7.72363C21.4823 7.57045 21.8842 7.49449 22.289 7.50031H28.0294L27.9975 14.5006H27.9995Z" fill="#04AE56"></path>
    <path d="M13.9966 28.5V14.4995L20.1025 20.616C20.3906 20.9008 20.6182 21.241 20.7714 21.616C20.9246 21.991 21.0003 22.3932 20.994 22.7983V28.5396L13.9966 28.5ZM0 14.5005H13.9966L7.88978 20.6083C7.31931 21.1787 6.54581 21.4998 5.74039 21.4998H0V14.4995V14.5005Z" fill="#04AE56"></path>
</g></svg></div></body></html> ) }
