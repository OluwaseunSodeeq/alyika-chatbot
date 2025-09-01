import './globals.css';
import { Montserrat } from 'next/font/google';
import { satoshi } from './fonts';


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Alyika Chatbot',
  description: 'Environmental Awareness Chatbot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${montserrat.variable}`}>
      <body className="antialiased min-h-screen w-full bg-base100">
        <div className="flex justify-center items-center border-amber-950">
          {children}
        </div>
      </body>
    </html>
  );
}



