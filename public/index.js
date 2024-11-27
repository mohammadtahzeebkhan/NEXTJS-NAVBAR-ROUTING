import Head from 'next/head'; // Import for managing the head (metadata)
import Navbar from '@/components/navbar'; // Importing Navbar component
import Link from 'next/link'; // For internal linking to other pages

const Home = () => {
  return (
    <>
      <Head>
        <title>My Vending Machine Franchise</title>
        <meta name="description" content="Vending machine franchise opportunities" />
      </Head>
      
      <Navbar /> {/* Render the Navbar component */}
      
      <main>
        <section className="hero">
          <h1>Welcome to Our Vending Machine Franchise</h1>
          <p>Join the most innovative vending machine franchise in the industry.</p>
          <Link href="/vending-machine-franchise.html">
            <Link href="" className="cta-button">Learn More</Link>
          </Link>
        </section>
        
        <section className="about">
          <h2>About Us</h2>
          <p>We are a leading franchise in the vending machine business with over 100 locations worldwide.</p>
        </section>
      </main>
      
    
    </>
  );
};

export default Home;
