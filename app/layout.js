// app/layout.js
import './globals.css';
import Navbar from '@/components/navbar'; // Update the path as necessary
import Home from '@/public';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
     
        {children}
        
      </body>
    </html>
  );
}
