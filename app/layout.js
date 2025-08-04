import './globals.css';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Alyika Chatbot',
  description: 'Environmental Awareness Chatbot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased min-h-screen w-full bg-base100 " >
        <div className="flex justify-center items-center border-amber-950">
            {children}
        </div>
      </body>
    </html>
  );
}

