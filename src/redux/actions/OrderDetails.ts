export const ADD_DATA_TO_ORDER_DETAILS: 'ADD_DATA_TO_ORDER_DETAILS' = 'ADD_DATA_TO_ORDER_DETAILS'

export type TOrderDetails = {
    success: boolean,
    name: string,
    order: {
        number: number,
    }
}

export interface IAddDataToOrderDetailsAction {
    readonly type: typeof ADD_DATA_TO_ORDER_DETAILS;
    readonly data: TOrderDetails,
}

export type TOrderDetailsActions = IAddDataToOrderDetailsAction