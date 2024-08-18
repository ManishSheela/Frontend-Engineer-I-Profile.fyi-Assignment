import React from "react";
import ProductCard from "./ui/ProductCard";
import { Product } from "@/types";

interface ProductListProps {
	title: string;
	items: Product[]; // Assuming 'items' is an array of product objects
}
const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
	return (
		<div className="space-y-4">
			<h3 className="font-bold text-3xl">{title}</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{items?.map((product) => (
					<ProductCard key={product?.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
