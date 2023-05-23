import React from 'react'
import IngredientsList from '../IngredientsList/IngredientsList'
import PropTypes from 'prop-types';

function IngredientsArticle({ title, type }) {

    IngredientsArticle.propTypes = {
        title: PropTypes.string,
        type: PropTypes.string,
    };

    return (
        <article className='mt-10'>
            <h2 className='text text_type_main-medium' children={title} />
            <IngredientsList type={type} />
        </article>
    )
}

export default IngredientsArticle