import React from 'react'
import { useState, useEffect } from 'react'
import PromoCard from './PromoCard'
import './style.scss'


const PromoBox = ({ data }) => {
    return (
        <div className="promo-box">
            {data.map((item, index) =>
                <PromoCard item={item} key={index} />
            )}
        </div>
    )
}


export default PromoBox;

