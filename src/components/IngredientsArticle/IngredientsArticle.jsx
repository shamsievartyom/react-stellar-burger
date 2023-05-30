import { forwardRef } from 'react'
import IngredientsList from '../IngredientsList/IngredientsList'
import PropTypes from 'prop-types';

const IngredientsArticle = forwardRef(function IngredientsArticle({ title, type }, ref) {

    IngredientsArticle.propTypes = {
        title: PropTypes.string,
        type: PropTypes.string,
    };

    return (
        <article ref={ref} className='mt-10'>
            <h2 className='text text_type_main-medium' children={title} />
            <IngredientsList type={type} />
        </article>
    )
})

export default IngredientsArticle