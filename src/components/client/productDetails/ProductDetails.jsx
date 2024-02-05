import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
	const [product, setProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios.get(`https://dummyjson.com/products/${id}`).then(res => {
			setProduct(res.data);
		});
	}, [id]);
	return <div>{product?.title}</div>;
}

export default ProductDetails;
