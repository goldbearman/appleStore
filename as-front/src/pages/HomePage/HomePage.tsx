import React from "react";
import {Helmet} from "react-helmet";
import {PageWrapper} from "App.styled";
import {ProductGroup,ProductGroupContainer} from "./styled";
import {dummyProducts} from "../ProductDetailsPage/dummyProducts";
import ProductCard from "../../blocks/ProductCard";
import {useSelector} from "react-redux";
import {selectUserData} from "../../features/UserData/selectors";
import {selectIsLikeArr} from "../../features/LikeReducer/selectors";

const HomePage: React.FC = () => {

    const {isLikeArr}  = useSelector(selectIsLikeArr)
    console.log(isLikeArr)
    console.log(dummyProducts)

    return (
        <>
            <Helmet>
                <title>Главная МП</title>
            </Helmet>

            <PageWrapper>
                <ProductGroup>
                    <h2>Рекомендуемые товары</h2>

                    <ProductGroupContainer>
                        {dummyProducts.map(p=>
                            <ProductCard isLiked={isLikeArr.includes(p.id)} {...p} key={p.id}/>
                        )}
                        {/*{dummyProducts.map(p=> <ProductCard isLiked={true} {...p} key={p.id}/>)}*/}

                    </ProductGroupContainer>

                </ProductGroup>

            </PageWrapper>

        </>
    );
}

export default HomePage;