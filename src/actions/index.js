import * as Types from "../constants/ActionTypes";
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) =>{
    return{
        type: Types.FETCH_PRODUCTS,
        products: products,
    }
}

export const actDeleteProductsRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id));
        });
    };
}

export const actDeleteProducts = (id) =>{
    return{
        type: Types.DELETE_PRODUCTS,
        id: id,
    }
}


export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi(`products`, 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    };
}

export const actAddProduct = (product) =>{
    return{
        type: Types.ADD_PRODUCTS,
        product: product,
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, "GET", null).then( res => {
            dispatch(actGetProduct(res.data));
        });
    };
}

export const actGetProduct = (product) =>{
    return{
        type: Types.EDIT_PRODUCTS,
        product: product,
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, "PUT", product).then( res => {
            dispatch(actUpdateProduct(res.data));
        });
    };
}

export const actUpdateProduct = (product) =>{
    return{
        type: Types.UPDATE_PRODUCTS,
        product: product,
    }
}