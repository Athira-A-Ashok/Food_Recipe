import React, {useState,useEffect} from 'react'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'


function Menus() {

    const [menu, setMenu] = useState([])

    async function getAllMenus() {
        const URL = "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
        const response = await fetch(URL)
        const data = await response.json()
        setMenu(data.meals)
    }

 useEffect (() => {
    getAllMenus();
 },[])

 console.log("The Menus are :", menu)



    return (
      <div>
          <Hero/>
          <SpecialDishes specialMenu={menu}/>
      </div>
        
    )}


export default Menus