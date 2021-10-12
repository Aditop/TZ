import React, { useState } from 'react'
import Styles from './Main.module.css'
import { pokemons } from './../../pokemon'
import { NavLink } from 'react-router-dom'
import Fuse from 'fuse.js'

export const Main = () => {


    const [search, setSearch] = useState('')

    const changeHandler = (event) => {
        setSearch(event.target.value)
    }


    const fuse = new Fuse(pokemons, {
        keys: ['name']
    })

    const results = fuse.search(search, { limit: 3 })
    const pokemonsFiltered = search ? results.map((result) => result.item) : Array.isArray(pokemons) ? pokemons : []
    return (
        
        <div className={Styles.main}>
            <div className="container">
            <form className={Styles.form}>
                    <input type="text" placeholder="Search..." name="title" onChange={ changeHandler } />
                </form>
                <div className={Styles.block}>
                    {
                        pokemonsFiltered.map(({ name, img }, i)=>{
                            return (
                                <NavLink key={i} className={Styles.item} to = { `pokemon/${name }` }>
                                    <img src={img} alt={name} />
                                  
                                       <h3>{name} </h3> 
                                    
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </div>  
    )
}
