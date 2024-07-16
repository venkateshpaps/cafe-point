import ProductCard from "components/ProductCard/ProductCard";
import "./Products.scss";
import productsList from "products";

function Products() {
   
    return (
        <div className="products-page-container">
            <div className="product-list-container">
                {productsList.map((product, index)=> <ProductCard key={`product-card-container-${index}`} product={product} />)}
            </div>
        </div>
    );
}
export default Products;