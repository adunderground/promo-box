import React from 'react'

const PromoCard = ({ item }) => {
    const { category, image, description, link } = item;
    return (

        <a className='promo-card' href={link} target="_blank">
            <p className='promo-card__title'>{category}</p>
            <div className="promo-card__image">
                <img src={image} alt={description} />
            </div>
            <div className="promo-card__description">
                <p>{description}</p>
            </div>
        </a>
    )
}


export default PromoCard;