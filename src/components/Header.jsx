import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cartIcon from '../assets/cart_icon.svg';
import menuIcon from '../assets/menu_icon.svg';
import closeIcon from '../assets/close_icon.svg';

export default function Header() {
  const cartItems = useSelector(state => state.cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <Link to="/" className="brand-name">Green Thumb Haven</Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <a href="#top" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#products" className="nav-link">Products</a>
      </nav>
      
      {/* Mobile menu button - hidden when menu is open */}
      <button 
        className={`mobile-menu-button ${mobileMenuOpen ? 'hidden' : ''}`}
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <img 
          src={menuIcon} 
          alt="" 
          className="menu-icon" 
          width="24" 
          height="24"
        />
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <button 
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <img 
              src={closeIcon} 
              alt="" 
              className="close-icon" 
              width="24" 
              height="24"
            />
          </button>
          
          <div className="mobile-nav-content">
            <a href="#top" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
            
            <Link to="#cart" className="mobile-cart-link" onClick={() => setMobileMenuOpen(false)}>
              <div className="cart-icon-container">
                <img 
                  src={cartIcon} 
                  alt="Cart" 
                  className="cart-icon" 
                  width="20" 
                  height="20"
                />
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </div>
              <span>View Cart</span>
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Cart icon - properly centered */}
      <div className={`cart-wrapper ${mobileMenuOpen ? 'hidden' : ''}`}>
        <Link to="#cart" className="cart-link">
          <div className="cart-icon-container">
            <img 
              src={cartIcon} 
              alt="Cart" 
              className="cart-icon" 
              width="20" 
              height="20"
            />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}