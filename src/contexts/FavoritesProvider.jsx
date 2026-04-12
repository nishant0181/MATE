import { useEffect, useState } from "react"
import { createContext } from 'react';

export const FavoritesContext = createContext(null);
export default function useFavorites({children}) {

    
    const [favorites , setFavorites] = useState(() =>{
        if(localStorage.getItem("MATE_favorites")){
            return JSON.parse(localStorage.getItem("MATE_favorites"))
        }else{
            return []
        }
    })

    useEffect(()=>{
        localStorage.setItem("MATE_favorites", JSON.stringify(favorites))
    },[favorites])

   

    const addFavorite = (note) => {
        setFavorites([...favorites, note])
    }
    const removeFavorite = (note) => {
        setFavorites(favorites.filter((fav) => fav.id !== note.id))
    }
    const toggleFavorite = (note) => {
        if (favorites.some((fav) => fav.id === note.id)) {
            removeFavorite(note)
        } else {
            addFavorite(note)
        }
    }
    const isFavorite = (note) => {
        return favorites.some((fav) => fav.id === note.id)
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite
    }

    
  return (
    <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
  )
}
