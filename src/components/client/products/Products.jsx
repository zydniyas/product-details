import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("https://dummyjson.com/products")
			.then(res => setProducts(res.data.products));
	}, []);

	return (
		<div>
			<div className="grid grid-cols-4">
				{products.map((produt, i) => {
					return (
						<div key={i}>
							<h1>{produt.title}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Products;
