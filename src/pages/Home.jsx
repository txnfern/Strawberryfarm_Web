import React, { useState, useEffect } from 'react';

// Mock images for demonstration
const mockImages = {
  strawberryfarm: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  strawberryfarm2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  strawberry1: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  strawberry2: "https://plus.unsplash.com/premium_photo-1695408259712-e84f70655ba8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  strawberry3: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
};

const styles = {
  // Hero Section
  heroSection: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.7) 0%, rgba(255, 142, 142, 0.5) 100%)',
    zIndex: 2
  },
  heroContent: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    color: 'white',
    maxWidth: '800px',
    padding: '0 20px'
  },
  heroTitle: {
    fontSize: '5rem',
    fontWeight: '800',
    marginBottom: '1rem',
    textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
    background: 'linear-gradient(45deg, #fff, #ffb3b3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'fadeInUp 1s ease-out'
  },
  heroSubtitle: {
    fontSize: '1.8rem',
    fontWeight: '300',
    marginBottom: '2rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    animation: 'fadeInUp 1s ease-out 0.3s both'
  },
  heroButton: {
    padding: '18px 45px',
    fontSize: '1.3rem',
    fontWeight: '600',
    background: 'linear-gradient(45deg, #ff4757, #ff6b6b)',
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    boxShadow: '0 10px 30px rgba(255, 71, 87, 0.4)',
    animation: 'fadeInUp 1s ease-out 0.6s both',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },

  // Feature Section
  featureSection: {
    padding: '6rem 0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  featureContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  featureRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem'
  },
  featureImageContainer: {
    flex: '1',
    position: 'relative'
  },
  featureImage: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '25px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    transform: 'perspective(1000px) rotateY(-5deg)',
    transition: 'all 0.6s ease'
  },
  featureContent: {
    flex: '1',
    color: 'white'
  },
  featureTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '2rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  featureText: {
    fontSize: '1.4rem',
    lineHeight: '1.8',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
  },

  // Products Section
  productsSection: {
    padding: '6rem 0',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    position: 'relative'
  },
  sectionTitle: {
    fontSize: '4rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '4rem',
    background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    position: 'relative'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '3rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  productCard: {
    background: 'white',
    borderRadius: '25px',
    padding: '3rem 2rem',
    textAlign: 'center',
    boxShadow: '0 15px 45px rgba(0,0,0,0.1)',
    transition: 'all 0.4s ease',
    border: '1px solid #f0f0f0',
    position: 'relative',
    overflow: 'hidden'
  },
  productImage: {
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '2rem',
    border: '6px solid #ff6b6b',
    transition: 'all 0.4s ease',
    position: 'relative',
    zIndex: 2,
    items: center
  },
  productTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#ff6b6b',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  productDescription: {
    color: '#666',
    lineHeight: '1.7',
    fontSize: '1.1rem'
  },

  // Map Section
  mapSection: {
    padding: '6rem 0',
    background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
    color: 'white'
  },
  mapContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  mapTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '3rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  mapFrame: {
    width: '100%',
    height: '500px',
    border: 'none',
    borderRadius: '25px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    filter: 'saturate(1.2) contrast(1.1)'
  },

  // Footer
  footer: {
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    color: 'white',
    padding: '4rem 0 2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  footerTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '2rem',
    background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  footerText: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    opacity: '0.9'
  },
  footerIcon: {
    fontSize: '1.5rem',
    marginRight: '10px'
  }
};

// Add keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .product-card:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0,0,0,0.2);
  }
  
  .product-card:hover .product-image {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 15px 30px rgba(255, 107, 107, 0.4);
  }
  
  .hero-button:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 40px rgba(255, 71, 87, 0.6);
    background: linear-gradient(45deg, #ff3742, #ff5757);
  }
  
  .feature-image:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.05);
  }
  
  .product-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 107, 107, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .product-card:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }
    
    .hero-subtitle {
      font-size: 1.3rem;
    }
    
    .feature-row {
      flex-direction: column;
      gap: 2rem;
    }
    
    .feature-image {
      transform: none;
    }
    
    .feature-title {
      font-size: 2.5rem;
    }
    
    .section-title {
      font-size: 2.5rem;
    }
    
    .products-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;
document.head.appendChild(styleSheet);

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
        <div style={{ height: '3000px', backgroundColor: 'white' }}></div>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <img 
          src={mockImages.strawberryfarm} 
          alt="Strawberry Farm" 
          style={{
            ...styles.heroImage,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Strawberry Paradise</h1>
          <p style={styles.heroSubtitle}>
            Discover the sweetest journey through our organic strawberry fields
          </p>
          <button 
            style={styles.heroButton}
            className="hero-button"
          >
            🍓 Explore Our Farm
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section style={styles.featureSection}>
        <div style={styles.featureContainer}>
          <div style={styles.featureRow}>
            <div style={styles.featureImageContainer}>
              <img 
                src={mockImages.strawberryfarm2}
                alt="Organic Strawberry Farm"
                style={styles.featureImage}
                className="feature-image"
              />
            </div>
            <div style={styles.featureContent}>
              <h2 style={styles.featureTitle}>🌱 Grown with Natural Love</h2>
              <p style={styles.featureText}>
                Our strawberry farm embraces completely organic practices, nurturing each berry 
                without synthetic pesticides or fertilizers. We believe in natural methods that 
                honor the soil, protect the ecosystem, and deliver the purest, most flavorful 
                strawberries you've ever tasted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.productsSection}>
        <h2 style={styles.sectionTitle}>✨ Our Premium Products</h2>
        <div style={styles.productsGrid}>
          <div style={styles.productCard} className="product-card">
            <img 
              src={mockImages.strawberry1}
              alt="Fresh Strawberries"
              style={styles.productImage}
              className="product-image"
            />
            <h3 style={styles.productTitle}>🍓 Fresh Strawberries</h3>
            <p style={styles.productDescription}>
              Hand-picked at peak ripeness from our sun-kissed fields. Each berry bursts 
              with natural sweetness and contains all the vitamins and antioxidants nature intended.
            </p>
          </div>
          
          <div style={styles.productCard} className="product-card">
            <img 
              src={mockImages.strawberry2}
              alt="Strawberry Milk"
              style={styles.productImage}
              className="product-image"
            />
            <h3 style={styles.productTitle}>🥛 Strawberry Fresh Milk</h3>
            <p style={styles.productDescription}>
              Creamy, dreamy milk blended with our farm-fresh strawberries. Made with 
              locally sourced milk and real strawberry goodness - no artificial flavors, just pure delight.
            </p>
          </div>
          
          <div style={styles.productCard} className="product-card">
            <img 
              src={mockImages.strawberry3}
              alt="Strawberry Products"
              style={styles.productImage}
              className="product-image"
            />
            <h3 style={styles.productTitle}>🍯 Artisan Products</h3>
            <p style={styles.productDescription}>
              From homemade preserves to gourmet dried strawberries, each product is 
              crafted with care using traditional methods and only the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={styles.mapSection}>
        <div style={styles.mapContainer}>
          <h2 style={styles.mapTitle}>📍 Visit Our Paradise</h2>
          <iframe
            title="Our Strawberry Farm Location"
            style={styles.mapFrame}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.795456839849!2d100.52318671528736!3d13.736717901163988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed1528a22e5%3A0x65b77fa3c4cbe56!2zQmFuayBvZiBUaGFpbGFuZA!5e0!3m2!1sen!2sth!4v1618213509881!5m2!1sen!2sth"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <h2 style={styles.footerTitle}>🍓 Strawberry Paradise Farm</h2>
          <p style={styles.footerText}>
            <span style={styles.footerIcon}>📍</span>
            123/4 Somewhere Bldg., Street Name, District Name, Province, 10400
          </p>
          <p style={styles.footerText}>
            <span style={styles.footerIcon}>📞</span>
            012 345 6789
            <span style={styles.footerIcon}>✉️</span>
            info@strawberryparadise.com
          </p>
          <p style={styles.footerText}>
            🌟 Follow us for daily updates on our fresh strawberry harvest! 🌟
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;