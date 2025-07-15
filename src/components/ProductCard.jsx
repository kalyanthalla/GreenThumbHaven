export default function ProductCard({ plant, onAddToCart, isInCart }) {
  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} className="product-image" />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button 
        onClick={onAddToCart}
        disabled={isInCart}
        className={isInCart ? "add-to-cart disabled" : "add-to-cart"}
      >
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  )
}