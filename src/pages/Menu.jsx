import React, { useContext } from 'react'; // Ensure you import useContext
import { Link } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext'; // Ensure OrderContext is imported
import './Menu.css';

function Menu() {
  const { addItemToOrder } = useContext(OrderContext); // Use the context for adding items
  
  const menuSections = [
    {
      category: 'Hot Coffee',
      items: [
        { name: 'Espresso', price: '$3.00', image: 'https://i0.wp.com/coffeeculture.asia/wp-content/uploads/2022/05/Espresso-coffee-Coffee-Culture-Thailand.jpg?fit=512%2C512&ssl=1' },
        { name: 'Americano', price: '$3.50', image: 'https://www.luxcafeclub.com/cdn/shop/articles/Americano_Coffee_1200x1200.png?v=1713411608' },
        { name: 'Cappuccino', price: '$4.00', image: 'https://coffeeconnection.com.au/cdn/shop/articles/Health-Benefits-Of-Cappuccino-Coffee.jpg?v=1667752802' },
        { name: 'Latte', price: '$4.50', image: 'https://static.tildacdn.one/tild3534-3735-4536-b333-383730623731/Cafe_Latte.jpg' },
        { name: 'Mocha', price: '$4.75', image: 'https://static.vecteezy.com/system/resources/previews/029/467/009/large_2x/generative-ai-hot-cappuccino-with-latte-art-on-wooden-table-with-coffee-beans-free-photo.jpg' },
        { name: 'Flat White', price: '$4.25', image: 'https://www.starbucks.com.hk/media/catalog/product/c/a/caramel_macchiato_hot_2.jpg' },
        { name: 'Macchiato', price: '$3.75', image: 'https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1.jpg' },
        { name: 'Irish Coffee', price: '$5.00', image: 'https://joyfullymad.com/wp-content/uploads/2023/02/irish-coffee-15.jpg' },
      ],
    },
    {
      category: 'Cold Coffee',
      items: [
        { name: 'Iced Coffee', price: '$3.50', image: 'https://www.cookingclassy.com/wp-content/uploads/2022/07/iced-coffee-05.jpg' },
        { name: 'Cold Brew', price: '$4.00', image: 'https://www.thelittleepicurean.com/wp-content/uploads/2013/08/IMG_4432.jpg' },
        { name: 'Iced Americano', price: '$3.75', image: 'https://littlebitrecipes.com/wp-content/uploads/2023/07/iced-americano-sq.jpg' },
        { name: 'Iced Latte', price: '$4.50', image: 'https://buildyourbite.com/wp-content/uploads/2024/04/iced-latte-recipe-featured-500x500.jpg' },
        { name: 'Iced Mocha', price: '$4.75', image: 'https://bakingmischief.com/wp-content/uploads/2019/05/iced-mocha-image-square.jpg' },
        { name: 'Iced Caramel Macchiato', price: '$4.75', image: 'https://www.allrecipes.com/thmb/LgtetzzQWH3GMxFISSii84XEAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg' },
        { name: 'Matcha Latte', price: '$4.25', image: 'https://milkandpop.com/wp-content/uploads/2020/11/mocha-latte-13.jpg' },
      ],
    },
    {
      category: 'Smoothies',
      items: [
        { name: 'Strawberry Banana Smoothie', price: '$5.00', image: 'https://tastythriftytimely.com/wp-content/uploads/2023/01/Dairy-Free-Strawberry-Banana-Smoothie-Featured.jpg' },
        { name: 'Mango Pineapple Smoothie', price: '$5.50', image: 'https://smallfarmbiglife.com/wp-content/uploads/2022/07/Mango-Pineapple-Smoothie-1549-scaled.jpg' },
        { name: 'Mixed Berry Smoothie', price: '$5.50', image: 'https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg' },
        { name: 'Green Smoothie', price: '$6.00', image: 'https://www.veggiessavetheday.com/wp-content/uploads/2024/02/Pineapple-Green-Smoothie-FI-1200.jpg' },
        { name: 'Chocolate Protein Smoothie', price: '$6.25', image: 'https://ohsnapmacros.com/wp-content/uploads/2023/12/chocolateproteinsmoothie.jpg' },
        { name: 'Peach Smoothie', price: '$5.75', image: 'https://www.ourhappymess.com/wp-content/uploads/2022/09/Banana-Peach-Smoothie-featured.jpg' },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Hot Chocolate', price: '$3.75', image: 'https://feelgoodfoodie.net/wp-content/uploads/2021/11/how-to-make-hot-chocolate-7.jpg' },
        { name: 'Iced Tea', price: '$3.50', image: 'https://www.thespruceeats.com/thmb/qZHEIJ6CQIgYPUW4w1MCoOS8DGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oolong-iced-tea-recipe-766389-hero-07-1cc310d9aa8f497b8f78bb7021fd0e5c.jpg' },
        { name: 'Lemonade', price: '$3.50', image: 'https://www.texanerin.com/content/uploads/2014/08/honey-lemonade-2-650x975.jpg' },
        { name: 'Chai Latte', price: '$4.00', image: 'https://bakingmischief.com/wp-content/uploads/2022/10/dirty-chai-latte-image-square.jpg' },
        { name: 'Arnold Palmer', price: '$3.75', image: 'https://www.peanutbutterandfitness.com/wp-content/uploads/2019/09/IMG_0433.jpg' },
        { name: 'Coconut Water', price: '$3.00', image: 'https://media.post.rvohealth.io/wp-content/uploads/2021/08/coconut-water-1200x628-facebook-1200x628.jpg' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Chocolate Cake', price: '$6.00', image: 'https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3-500x500.jpg' },
        { name: 'Tiramisu', price: '$5.50', image: 'https://www.veganricha.com/wp-content/uploads/2022/08/Tiramisu-Sheet-Cake-6029.jpg' },
        { name: 'Cheesecake', price: '$5.75', image: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4-500x375.jpg' },
        { name: 'Croissant', price: '$2.50', image: 'https://sarahsvegankitchen.b-cdn.net/wp-content/uploads/2024/05/Vegan-Croissants-1.jpg' },
        { name: 'Blueberry Muffin', price: '$3.25', image: 'https://stressbaking.com/wp-content/uploads/2022/07/blueberry-muffins-06.jpg' },
        { name: 'Cinnamon Roll', price: '$3.50', image: 'https://easyweeknightrecipes.com/wp-content/uploads/2022/06/Cinnamon-Rolls31791.jpg' },
        { name: 'Chocolate Chip Cookie', price: '$2.50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNC0Vxb-4dDg6p-59VERcG5dEX-SfiblnHg&s' },
      ],
    },
  ];

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      {menuSections.map((section, index) => (
        <div key={index} className="menu-section">
          <h2>{section.category}</h2>
          <div className="menu-grid">
            {section.items.map((item, i) => (
              <div key={i} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-item-image" />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button 
                  className="add-to-order-button" 
                  onClick={() => addItemToOrder(item)}
                >
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link to="/" className="back-home-button">Back to Home</Link>
    </div>
  );
}

export default Menu;
