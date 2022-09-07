import React, {useState,useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg'
import shoppingCar from "@icons/icon_shopping_cart.svg"
import logo from '@logos/logo_yard_sale.svg'
import AppContext from '@contexts/AppContext';
import MyOrder from '@containers/MyOrder';

const Header = () => {
	const [toggle,setToggle] = useState(false);
	const [toggleOrders,setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	const sumTotal = () => {
		const reducer = (accumalator,currentValue) => accumalator + currentValue.quantity;
		return state.cart.reduce(reducer,0);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={ handleToggle }>
						platzi@example.com
						</li>
					<li
						className="navbar-shopping-cart" 
						onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src={shoppingCar} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{sumTotal()}</div> : null}
						{/* <div>{state.cart.length > 0 ? state.cart.length : null }</div> */}
					</li>
				</ul>
			</div>
			{toggle && < Menu/>}
			{toggleOrders && < MyOrder/>}
		</nav>
	);
}

export default Header;
