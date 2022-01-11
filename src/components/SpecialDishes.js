import React from 'react'

function SpecialDishes(props) {

 console.log(props.specialMenu)


 let specialMenu = props.specialMenu.map((menuItems) => {
     return (
         <ul>
             <li>
                <img src={menuItems.strMealThumb}/> 
             </li>
         </ul>
     )
 })


    return (
        <div className="special-dishes">
            <div className="container">
                <h2>Our Special Dishes</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
            </div>
            <div className="special-dishes">
              Special Menus will come here
              {specialMenu}
            </div>
        </div>
    )
}

export default SpecialDishes
