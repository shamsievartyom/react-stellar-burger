export type TIngredientType = "bun" | "main" | "sauce"

export type TIngredient = {
    "_id": string,
    "name": string,
    "type": TIngredientType,
    "proteins": number,
    "fat": number,
    "carbohydrates": number,
    "calories": number,
    "price": number,
    "image": string,
    "image_mobile": string,
    "image_large": string,
    "__v": number,
    "count": number,
}

export type TBurgerConstructor = {
    bun: null | (TIngredient & { listId: string }),
    ingredients: (TIngredient & { listId: string })[],
}

export type TOrderDetails = {
    success: boolean,
    name?: string,
    order?: {
        number: number,
    }
}

export type TUserUser = {
    email: string,
    name: string,
}