import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';

import {CategoryTitle, CategoryContainer} from './category.styles';

import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </CategoryContainer>
        </Fragment>
    )
} 

export default Category;