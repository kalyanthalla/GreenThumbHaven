import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import ProductCard from '../components/ProductCard';
import monstera from '../assets/monstera.jpg';
import snakePlant from '../assets/snake-plant.jpg';
import fiddleLeaf from '../assets/fiddle-leaf.jpg';
import pothos from '../assets/pothos.jpg';
import zzPlant from '../assets/zz-plant.jpg';
import peaceLily from '../assets/peace-lily.jpg';

const plantCategories = [
  {
    id: 'all',
    name: "All Plants",
    plants: [
      { id: 1, name: "Monstera", price: 29.99, image: monstera },
      { id: 6, name: "Peace Lily", price: 19.99, image: peaceLily },
      { id: 2, name: "Snake Plant", price: 19.99, image: snakePlant },
      { id: 4, name: "Pothos", price: 14.99, image: pothos },
      { id: 5, name: "ZZ Plant", price: 24.99, image: zzPlant },
      { id: 3, name: "Fiddle Leaf Fig", price: 39.99, image: fiddleLeaf }
    ]
  },
  {
    id: 'popular',
    name: "Popular Picks",
    plants: [
      { id: 1, name: "Monstera", price: 29.99, image: monstera },
      { id: 6, name: "Peace Lily", price: 19.99, image: peaceLily }
    ]
  },
  {
    id: 'low-maintenance',
    name: "Low Maintenance",
    plants: [
      { id: 2, name: "Snake Plant", price: 19.99, image: snakePlant },
      { id: 4, name: "Pothos", price: 14.99, image: pothos },
      { id: 5, name: "ZZ Plant", price: 24.99, image: zzPlant }
    ]
  },
  {
    id: 'trending',
    name: "Trending Now",
    plants: [
      { id: 3, name: "Fiddle Leaf Fig", price: 39.99, image: fiddleLeaf }
    ]
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState(plantCategories[0].id);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const activeCategory = plantCategories.find(category => category.id === activeTab);

  return (
    <div id="products" className="products-page">
      <div className="products-header">
        <h1 className="page-title">Shop Houseplants</h1>
        <p className="page-subtitle">Bring nature indoors with our curated collection</p>
        
        <div className="category-tabs-container">
          <h2 className="category-heading">Browse by Category</h2>
          <div className="category-tabs">
            {plantCategories.map((category) => (
              <button
                key={category.id}
                className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
                <span className="active-indicator"></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="category-header">
          <h3 className="active-category-title">{activeCategory.name}</h3>
          <p className="active-category-description">
            {activeCategory.plants.length} {activeCategory.plants.length === 1 ? 'item' : 'items'} available
          </p>
        </div>
        
        <div className="products-grid">
          {activeCategory.plants.map(plant => (
            <ProductCard 
              key={plant.id}
              plant={plant}
              onAddToCart={() => dispatch(addToCart(plant))}
              isInCart={cart.some(item => item.id === plant.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}