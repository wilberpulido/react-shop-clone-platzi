import React,{useContext,useState} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@contexts/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const {state} = useContext(AppContext);
	//const [aggregatedProducts,setAggregatedProducts] = useState([]);
	//const aggregatedProducts=[];

  // const addToTemporaryCart = (payload) => {
  //   setTemporaryCart({
  //     ...temporaryCart,
  //     cart:[...state.cart,payload]
  //   })
  // }
	// let aggregatedProducts = [];

	// state.cart.map( function (product) {
	// 	let quantity = state.cart.filter((filteredProduct)=>{
	// 		return filteredProduct.id === product.id;
	// 	}).length;

	// 	if (!aggregatedProducts.includes(product.id)) {
	// 		aggregatedProducts.push(product.id);
	// 	}

	// });

	// console.log(aggregatedProducts)

	//let temporaryCart = []
	const sumTotal = () => {
		const reducer = (accumalator,currentValue) => accumalator + currentValue.item.price;
		return state.cart.reduce(reducer,0);
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map( (orden) => {
					return <OrderItem quantity={orden.quantity} product={orden.item} key={`orderItem-${orden.item.id}`} />;
				})}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
