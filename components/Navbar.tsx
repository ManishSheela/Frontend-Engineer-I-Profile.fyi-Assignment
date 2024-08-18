"use client";
import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import MainNav from "@/components/MainNav";
import getCategories from "@/actions/get-categories";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const categories = getCategories();
	const router = useRouter();
	const { items } = useCart(); // get the cart products from the global store
	const itemCount = items?.length;

	return (
		<div className="border-b sticky top-0 z-40 bg-white">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
					{/* store name  */}
					<Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
						<p className="font-bold text-xl text-black">Profile.fyi Store</p>
					</Link>
					{/* list all categories  */}
					<MainNav data={categories} />
					{/* <div className="flex-1 mx-6">
						<input
							type="text"
							placeholder="Search for Products..."
							className="w-[400px] px-4 py-2 border rounded-md"
						/>
					</div> */}
					{/* shopping cart button  */}
					<div
						className="ml-auto relative"
						onClick={() => router.push("/cart")}
					>
						<FaShoppingCart className="text-xl cursor-pointer text-black" />
						{itemCount > 0 && (
							<div className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
								{itemCount}
							</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
