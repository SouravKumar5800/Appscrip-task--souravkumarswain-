import "./index.css"

const ProductSection = props => {
    const {eachProduct,toggleLikeButton} = props
    const{productId,productImg,productName,isLiked} = eachProduct

    const onClickLikedButton = () => {
        toggleLikeButton(productId)
    }

    const likeHeart = isLiked ? "/navbar/redheart.png" :  "/navbar/heart.png"
    

    return(
        <li className= "product-card-container">
        <div className = "product-container">
            <div className = "img-container"><img src = {productImg} alt = "productImg" className = "product-img-property"/></div>
            <h3 className = "product-name">{productName}</h3>
            <div className=" product-details-container">
                <p className = "signin-msg" >Sign in or Create an account to see pricing</p>
                <button className = "like-button-property" type = "button" onClick = {onClickLikedButton}><img src = {likeHeart} alt = "likeImg"/></button>
            </div>
        </div>
        </li>
        
    )
}

export default ProductSection