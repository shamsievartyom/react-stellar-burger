import { forwardRef, Ref } from 'react'
import IngredientsList from '../IngredientsList/IngredientsList'
import PropTypes from 'prop-types';
import { TIngredientType } from '../../redux/types';

interface TIngredientsArticleProps {
    title: string;
    type: TIngredientType;
}

const IngredientsArticle = forwardRef<HTMLElement, TIngredientsArticleProps>(
    function IngredientsArticle({ title, type }, ref: Ref<HTMLElement>) {

        return (
            <article ref={ref} className='mt-10'>
                <h2 className='text text_type_main-medium' children={title} />
                <IngredientsList type={type} />
            </article>
        )
    })

export default IngredientsArticle