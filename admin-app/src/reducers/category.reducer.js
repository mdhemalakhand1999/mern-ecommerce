import { categoryConstants } from "../actions/constants"

const initState = {
    categories: [],
    loading: false,
    error: null
}
const buildNewCategories = (parentID, categories, category) => {
    let myCategories = [];
    for(let cat of categories) {
        if(cat._id == parentID) {
            myCategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories(parentID, [...cat.children, {
                    id: category.id,
                    name: category.name,
                    slug: category.slug,
                    parentID: category.parentID,
                    children: category.children
                }], category): []
            })
        } else {
            myCategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories(parentID, cat.children, category): []
            })
        }
    }
    return myCategories;
}
export default (state = initState, action) => {
    switch(action.type) {
        case categoryConstants.GET_AL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload && action.payload.categories
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: false
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category
            const updatedCategories =  buildNewCategories(category.parentID, state.categories, category);
            state = {
                ...state,
                categories: updatedCategories,
                loading: false
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;

    }

    return state;
}