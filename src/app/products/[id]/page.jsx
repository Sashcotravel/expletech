import {ProductWrapper} from "@/app/product/[id]/ProductItemStyled";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from "next/image";


const ProductDetails = () => {

    const router = useRouter();
    const { id } = router.query;

    const product = useSelector((state) =>
        state.products.products.find((p) => p.id.toString() === id)
    );

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <ProductWrapper>
            <Image src={product.image} alt={product.name} width={500} height={500} />
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </ProductWrapper>
    );
};