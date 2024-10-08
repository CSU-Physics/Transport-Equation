import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Numerical simulation of radioactive pollution",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script type="text/javascript">
          var sc_project=13006461;
          var sc_invisible=1;
          var sc_security="3ab8d0c3";
        </script>
        <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script>
        <noscript><div class="statcounter">
          <a title="Web Analytics" href="https://statcounter.com/" target="_blank">
            <img class="statcounter" src="https://c.statcounter.com/13006461/0/3ab8d0c3/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade" />
          </a></div></noscript>
        {children}
      </body>

    </html>
  );
}
