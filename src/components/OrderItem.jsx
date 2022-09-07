import React,{useContext} from 'react';
import AppContext from '@contexts/AppContext';
import '@styles/OrderItem.scss';
import closeImage from '@icons/icon_close.png';

const OrderItem = ({product,quantity}) => {
	const { removeFromCart } = useContext(AppContext);
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={closeImage} onClick={()=>removeFromCart(product) } alt="close" />
			<p>{quantity}</p>
		</div>
	);
}

export default OrderItem;
