import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";

function RelatedProducts({ category, id }) {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					`https://dummyjson.com/products/category/${category}`
				);
				setProducts(data.products.filter(ele => ele.id != id));
			} catch (error) {
				console.log(error);
			}
		})();
	}, [category, id]);

	return (
		<div className="flex flex-wrap justify-center gap-10 p-10 bg-gray-100 dark:bg-gray-800">
			{products.map((product, i) => (
				<ProductCard key={i} product={product} />
			))}
		</div>
	);
}

export default RelatedProducts;
