"use client";

import {Filters, ProductCard, ProductGrid} from "@/app/product/ProductListStyled";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import {setProducts, filterByCategory, sortByPrice, setOneProduct} from '@/redux/productSlice';
import {useEffect} from "react";
import productData from "@/products.json";
import {useRouter} from "next/navigation";

export function getData() {
    // const res = await fetch('/products.json');
    // const products = await res.json();
    const products = productData;

    return products
}

const Page = () => {

    const products = getData()

    const dispatch = useDispatch();
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const router = useRouter()

    useEffect(() => {
        dispatch(setProducts(products));
    }, [products, dispatch]);

    const handleCategoryChange = (e) => {
        dispatch(filterByCategory(e.target.value));
    };

    const handlePriceSortChange = (e) => {
        dispatch(sortByPrice(e.target.value));
    };

    const setItem = (product) => {
        dispatch(setOneProduct(products));
        router.push(`/products/${product.id}`)
    }


    return (
        <div>
            <Filters>
                <select onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                </select>
                <select onChange={handlePriceSortChange}>
                    <option value="">Sort by Price</option>
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                </select>
            </Filters>

            <ProductGrid>
                {products?.map((product) => (
                    <ProductCard key={product.id} onClick={() => setItem(product)}>
                        <Image src={product.image} alt={product.name} width={150} height={150} />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                    </ProductCard>
                ))}
            </ProductGrid>
        </div>
    );
};

export default Page;