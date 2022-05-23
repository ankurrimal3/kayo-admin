import { publicRequest, userRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess, deleteProductStart, deleteProductSuccess, deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure,
    addProductStart,addProductSuccess,addProductFailure } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login=async(dispatch,user)=> {
    dispatch(loginStart());
    try{
       const res=await publicRequest.post("/auth/login",user)
       dispatch(loginSuccess(res.data))
    } catch(err){
        dispatch(loginFailure());
    }
}

export const getProducts=async(dispatch)=> {
    dispatch(getProductStart());
    try{
       const res=await publicRequest.get("/product")
       dispatch(getProductSuccess(res.data))
    } catch(err){
        dispatch(getProductFailure());
    }
}

export const deleteProduct=async(id,dispatch)=> {
    dispatch(deleteProductStart());
    try{
    //    const res=await userRequest.delete(`/product/${id}`)
       dispatch(deleteProductSuccess(id))
    } catch(err){
        dispatch(deleteProductFailure());
    }
}
export const updateProduct=async(id,product,dispatch)=> {
    dispatch(updateProductStart());
    try{
        //update
    //    const res=await userRequest.update(`/product/${id}`)
       dispatch(updateProductSuccess({id,product}))
    } catch(err){
        dispatch(updateProductFailure());
    }
}
export const addProduct=async(product,dispatch)=> {
    dispatch(addProductStart());
    try{
       const res=await userRequest.post(`/product`, product)
       dispatch(addProductSuccess(res.data))
    } catch(err){
        dispatch(addProductFailure());
    }
}

export default login;