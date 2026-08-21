import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../App';

function ProdDet() {
    // 1. Get the ID from the URL
    const { id } = useParams();
    
    // 2. Get the user and products from Context
    const { user, products } = useContext(userContext);
    
    // 3. Find the specific product
    const prod = products.find(p => p.id === Number(id));

    if (!prod) {
        return <h2>Product not found!</h2>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <p>Product Name: {prod.name}</p>
            <p>Viewed by User: {user.name}</p>
        </div>
    );
}

export default ProdDet;