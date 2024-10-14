import { useEffect } from 'react';
import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Merriweather_Sans } from "@next/font/google";
export const montserrat = Merriweather_Sans({
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserract",
});
function MyApp({ Component, pageProps }) {
     useEffect(() => {
       AOS.init();
       AOS.refresh();
     }, []);
  return (
      <main className={`${montserrat.className} `}>
      
      <Component {...pageProps} />
      </main>
      )
}

export default MyApp


