import { useEffect } from 'react';
import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Montserrat } from "@next/font/google";
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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


