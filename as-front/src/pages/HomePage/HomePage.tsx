import React from "react";
import {Helmet} from "react-helmet";
import {PageWrapper} from "App.styled";
import {ProductGroup,ProductGroupContainer} from "./styled";
import {dummyProducts} from "../ProductDetailsPage/dummyProducts";
import ProductCard from "../../blocks/ProductCard";

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Главная МП</title>
            </Helmet>

            <PageWrapper>
                <ProductGroup>
                    <h2>Рекомендуемые товары</h2>

                    <ProductGroupContainer>
                        {dummyProducts.map(p=> <ProductCard {...p} key={p.id}/>)}

                    </ProductGroupContainer>

                </ProductGroup>

            </PageWrapper>

        </>
    );
}

export default HomePage;