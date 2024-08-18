"use client";
import Image from "next/image";
import React from "react";
import { LuExpand, LuShoppingCart } from "react-icons/lu";
import IconButton from "./IconButton";
import Currency from "./Currency";
import { Product } from "@/types";
import useCart from "@/hooks/useCart";

const ProductCard = ({ product }: { product: Product }) => {
	const { addItem } = useCart();
	return (
		<div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
			{/* images and actions  */}

			<div className="aspect-square rounded-xlbg-gray-100 relative">
				<Image
					src={product?.image}
					fill
					alt={product?.name}
					className="aspect-square object-contain rounded-md"
				/>

				<div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className="flex gap-x-6 justify-center">
						<IconButton
							onClick={() => {}}
							icon={<LuExpand size={20} />}
							className="text-gray-600"
						/>

						<IconButton
							onClick={() => addItem(product)}
							icon={<LuShoppingCart size={20} />}
							className="text-gray-600"
						/>
					</div>
				</div>
			</div>
			{/* product description  */}
			<div>
				<p className="font-semibold text-lg text-ellipsis whitespace-nowrap overflow-hidden">
					{product?.name}
				</p>
				<p className="text-sm text-gray-500">{product?.category}</p>
			</div>
			{/* price  */}
			<div className="flex items-center justify-between">
				{/* pass currency e.g. "USD", "INR", "EUR", etc. */}
				<Currency value={product?.price} />
			</div>
		</div>
	);
};

export default ProductCard;
