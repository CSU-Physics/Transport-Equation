import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Radioactive Pollution Transport | CSU Physics",
  description: "Convection–diffusion theory and MATLAB simulations for radioactive pollution transport in one-, two-, and three-dimensional water flows.",
  keywords: ["transport equation", "convection diffusion", "radioactive pollution", "computational physics", "MATLAB"],
  authors: [{ name: "Dr. Mohammadreza Hadizadeh", url: "https://people.ohio.edu/hadizadm/" }],
  alternates: { canonical: "https://csu-physics.github.io/Transport-Equation/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script id="statcounter-config" strategy="afterInteractive">
          {`var sc_project=13006461; var sc_invisible=1; var sc_security="3ab8d0c3";`}
        </Script>
        <Script src="https://www.statcounter.com/counter/counter.js" strategy="afterInteractive" />
        <noscript><div className="statcounter">
          <a title="Web Analytics" href="https://statcounter.com/" target="_blank" rel="noreferrer">
            <img className="statcounter" src="https://c.statcounter.com/13006461/0/3ab8d0c3/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade" />
          </a></div></noscript>
        {children}
      </body>

    </html>
  );
}
