import React from 'react'
import Styles from './Pokemon.module.css'

export const Pokemon = ({pokemon}) => {
    const {name, description, category,  img, type} = pokemon
    return (
        <div className={Styles.pokemon}>
            <div className="container">
                <div className={Styles.block}>
                    <div className={Styles.avatar}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={Styles.info}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className={Styles.category}>
                            <span>{category}</span>
                        </div>
                        <div className={Styles.type}>
                            {
                                type.map ((type,i )=>{
                                    return <span key ={ i } style={
                                        type === 'electric' ?{background:'#ffff00'}:
                                        type ==='grass' ?{background:'#00e600' , color:'#fff'}:
                                        type==='poison' ?{background:'#9900ff'}:
                                        type=== 'water' ? {background: '#3399ff'}:
                                        type=== 'fire' ? {background:'#ff6600'}:
                                        type=== 'normal'? {background:'#000', color:'#fff'}:
                                        type=== 'psychic'?{background:'#ff3399'}: {}
                                    }>{type}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
