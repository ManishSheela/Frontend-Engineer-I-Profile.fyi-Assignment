import getProducts from "@/actions/get-products";
import BillboardSlider from "@/components/BillboardSlider";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export default function HomePage() {
	const prodcuts = getProducts();
	return (
		<Container>
			<div className="space-y-10 pb-10">
				<BillboardSlider />

				<div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
					<ProductList title="Featured Products" items={prodcuts} />
				</div>
			</div>
		</Container>
	);
}
