import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "RetainIQ",
  description: "Generated by create next app", icons: {
icon: "https://framerusercontent.com/images/E4ASOtv32Ln0x5c9sOJ8aUHtQYg.png"} }

// rendering on the server, you do not have a browser and thus you do not have access to all the
// APIs that the browser provides, including localStorage.else if () return initialValue == "true"; }
// let darkMode = getInitialState();
// document.getElementById("darkmode").checked = darkMode;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return (
  <html lang="en"><body><script dangerouslySetInnerHTML={{ __html: `
    // console.log(document.readyState)
    d=document.documentElement,c=d.classList;
    c.remove('light-theme','dark-theme');var e=localStorage.getItem('mode')
    if('system'===e||(!e&&true)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t)
      if(m.media!==t||m.matches) c.add('dark') else {
      d.style.colorScheme = 'light';c.add('light-theme')}}else if(e){
    var x={"light":"light-theme","dark":"dark-theme"};c.add(x[e]|| '')}
          if(e==='light'||e==='dark')d.style.colorScheme=e`,
}}></script>{children}</body></html> ) }