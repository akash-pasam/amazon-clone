export const initialState={
    basket:[],
    user:null,
};

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            let newbasket=[...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >=0){
                newbasket.splice(index,1);
            }else{
                console.warn(
                    `cant remove product`
                );
            }

            return {...state,basket:newbasket};
            
        default:
            return state;
    }
}

export default reducer;