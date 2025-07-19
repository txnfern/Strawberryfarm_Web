import React from 'react';

// Mock images for demonstration
const mockImages = {
  strawberryfarm: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  strawberryfarm2: "https://plus.unsplash.com/premium_photo-1720790800954-a1a6ffea45d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  strawberry1: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  strawberry2: "https://plus.unsplash.com/premium_photo-1695408259712-e84f70655ba8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  strawberry3: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  strawberryfarm4: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  strawberryfarm5: "https://images.unsplash.com/photo-1716209290680-373ad7d245d5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const styles = {
  heroSection: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
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
    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.8) 0%, rgba(255, 142, 142, 0.6) 100%)',
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
    fontSize: '4rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    animation: 'fadeInUp 1s ease-out'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    fontWeight: '300',
    marginBottom: '2rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    animation: 'fadeInUp 1s ease-out 0.3s both'
  },
  heroButton: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    fontWeight: '600',
    background: 'linear-gradient(45deg, #ff4757, #ff6b6b)',
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(255, 71, 87, 0.3)',
    animation: 'fadeInUp 1s ease-out 0.6s both'
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  productCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    border: '1px solid #f0f0f0',
    height: '100%'
  },
  productImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1.5rem',
    border: '5px solid #ff6b6b',
    transition: 'all 0.3s ease'
  },
  productTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#ff6b6b',
    marginBottom: '1rem'
  },
  productDescription: {
    color: '#666',
    lineHeight: '1.6'
  },
  featureSection: {
    padding: '5rem 0',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
  },
  featureRow: {
    marginBottom: '4rem',
    display: 'flex',
    alignItems: 'center',
    minHeight: '400px'
  },
  featureImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
  },
  featureContent: {
    padding: '2rem'
  },
  featureTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#ff6b6b',
    marginBottom: '1.5rem'
  },
  featureText: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.8'
  },
  footer: {
    background: 'linear-gradient(135deg, #ff4757 0%, #ff6b6b 100%)',
    color: 'white',
    padding: '3rem 0',
    textAlign: 'center'
  },
  footerTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem'
  },
  footerText: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    opacity: '0.9'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px'
  },
  col: {
    flex: '1',
    padding: '0 15px',
    marginBottom: '2rem'
  },
  colMd6: {
    flex: '0 0 50%',
    maxWidth: '50%',
    padding: '0 15px'
  },
  colMd4: {
    flex: '0 0 33.333333%',
    maxWidth: '33.333333%',
    padding: '0 15px'
  }
};

// Add keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
  
  .product-card:hover .product-image {
    transform: scale(1.1);
  }
  
  .hero-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(255, 71, 87, 0.4);
  }
  
  @media (max-width: 768px) {
    .col-md-6, .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .feature-title {
      font-size: 2rem;
    }
  }
`;
document.head.appendChild(styleSheet);

function About() {
  return (
    <div style={{ backgroundColor: 'white' }}>
        
      <div style={{ height: '3000px', backgroundColor: 'white' }}></div>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <img 
          src={mockImages.strawberryfarm} 
          alt="Strawberry Farm" 
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Strawberry Paradise</h1>
          <p style={styles.heroSubtitle}>
            Discover the sweetest, most delicious organic strawberries grown with love and care
          </p>
          <button 
            style={styles.heroButton}
            className="hero-button"
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 30px rgba(255, 71, 87, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 71, 87, 0.3)';
            }}
          >
            Explore Our Farm
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Premium Products</h2>
          <div style={styles.row}>
            <div style={styles.colMd4}>
              <div 
                style={styles.productCard}
                className="product-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <img 
                  src={mockImages.strawberry1}
                  alt="Fresh Strawberries"
                  style={styles.productImage}
                  className="product-image"
                />
                <h3 style={styles.productTitle}>FRESH STRAWBERRIES</h3>
                <p style={styles.productDescription}>
                  Hand-picked daily from our organic fields, these juicy strawberries are bursting with natural sweetness and nutrients.
                </p>
              </div>
            </div>
            
            <div style={styles.colMd4}>
              <div 
                style={styles.productCard}
                className="product-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <img 
                  src={mockImages.strawberry2}
                  alt="Strawberry Milk"
                  style={styles.productImage}
                  className="product-image"
                />
                <h3 style={styles.productTitle}>STRAWBERRY FRESH MILK</h3>
                <p style={styles.productDescription}>
                  Creamy, delicious milk infused with the natural flavor of our farm-fresh strawberries. A perfect healthy treat!
                </p>
              </div>
            </div>
            
            <div style={styles.colMd4}>
              <div 
                style={styles.productCard}
                className="product-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <img 
                  src={mockImages.strawberry3}
                  alt="Strawberry Products"
                  style={styles.productImage}
                  className="product-image"
                />
                <h3 style={styles.productTitle}>STRAWBERRY PRODUCTS</h3>
                <p style={styles.productDescription}>
                  From homemade jams to dried strawberries, explore our range of artisanal products made with love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featureSection}>
        <div style={styles.container}>
          <div style={styles.featureRow}>
            <div style={styles.colMd6}>
              <img 
                src={mockImages.strawberryfarm2}
                alt="Organic Farming"
                style={styles.featureImage}
              />
            </div>
            <div style={styles.colMd6}>
              <div style={styles.featureContent}>
                <h2 style={styles.featureTitle}>100% Organic & Natural</h2>
                <p style={styles.featureText}>
                  Our strawberry farm is completely organic, using only natural methods and sustainable practices. 
                  We never use synthetic pesticides or fertilizers, ensuring our strawberries are pure, healthy, 
                  and environmentally friendly. Every berry is a testament to our commitment to quality and nature.
                </p>
              </div>
            </div>
          </div>
          
          <div style={styles.featureRow}>
            <div style={styles.colMd6}>
              <div style={styles.featureContent}>
                <h2 style={styles.featureTitle}>Sustainable Farming</h2>
                <p style={styles.featureText}>
                  We believe in farming methods that protect and nurture the land for future generations. 
                  Our sustainable practices include soil conservation, water management, and biodiversity 
                  preservation, creating a healthy ecosystem that produces the finest strawberries.
                </p>
              </div>
            </div>
            <div style={styles.colMd6}>
              <img 
                src={mockImages.strawberryfarm4}
                alt="Sustainable Farming"
                style={styles.featureImage}
              />
            </div>
          </div>
          
          <div style={styles.featureRow}>
            <div style={styles.colMd6}>
              <img 
                src={mockImages.strawberryfarm5}
                alt="Farm Experience"
                style={styles.featureImage}
              />
            </div>
            <div style={styles.colMd6}>
              <div style={styles.featureContent}>
                <h2 style={styles.featureTitle}>Farm Experience</h2>
                <p style={styles.featureText}>
                  Visit our farm and experience the joy of picking your own strawberries! Our guided tours 
                  offer an educational and fun experience for families, showing you how we grow our berries 
                  and letting you taste the difference that organic farming makes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <h2 style={styles.footerTitle}>Strawberry Paradise Farm</h2>
          <p style={styles.footerText}>
            📍 123/4 Somewhere Bldg., Street Name, District Name, Province, 10400
          </p>
          <p style={styles.footerText}>
            📞 012 345 6789 | ✉️ info@strawberryparadise.com
          </p>
          <p style={styles.footerText}>
            Follow us for daily updates on our fresh strawberry harvest!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;