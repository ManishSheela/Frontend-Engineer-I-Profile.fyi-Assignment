export interface Billboard {
	id: string;
	label: string;
	imageUrl: string;
}

export interface Category {
	id: string;
	name: string;
	billboard?: Billboard;
}
export interface Product {
	id: number;
	name: string;
	price: number;
	category?: string;
	size?: string;
	color?: string;
	image: string;
	description?: string;
	quantity: number;
	stock: number;
}

export interface Image {
	id: string;
	url: string;
}
