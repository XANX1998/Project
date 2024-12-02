const OurFood = () => {
  const topPicks = [
    {
        _id: "5eee651f739f8c674fd736ee",
        name: "Tofu Bao",
        image: "https://photo2.foodgawker.com/wp-content/uploads/2020/12/3673283.jpg",
        price: 250,
        description: "crispy, fried tofu bites mixed in a spicy, topped Sausage"
    },
    {
        _id: "5eee6671a27a66807cf2bea2",
        name: "Tacos De alambre", 
        image: "https://photo.foodgawker.com/wp-content/uploads/2020/10/3652339.jpg",
        price: 300,
        description: "chicken cooked with bacon, topped with Oaxaca cheese"
    },
    {
        _id: "5eee6692a27a66807cf2bea3",
        name: "Tacos Al Pastor",
        image: "https://photo2.foodgawker.com/wp-content/uploads/2020/11/3666680.jpg",
        price: 200,
        description: "warmth from spices and sweetness from pineapple"
    },
    {
        _id: "5eee66a5a27a66807cf2bea4",
        name: "Chicken Bruschetta",
        image: "https://photo.foodgawker.com/wp-content/uploads/2020/10/3655673.jpg",
        price: 500,
        description: "crunch, succulent juicy chicken and a glaze drizzle"
    },
    {
        _id: "5eee66c4a27a66807cf2bea5",
        name: "Vegetarian Frito Pie",
        image: "https://photo2.foodgawker.com/wp-content/uploads/2020/10/3650127.jpg",
        price: 350,
        description: "Kick off the week than with this Vegetarian Frito Pie"
    },
    {
        _id: "5eee66cfa27a66807cf2bea6",
        name: "Kafta Kebabs",
        image: "https://photo2.foodgawker.com/wp-content/uploads/2020/09/3647666.jpg",
        price: 200,
        description: "beautifully flavored with spices and fresh parsley"
    },
    {
        _id: "5eee66eea27a66807cf2bea7",
        name: "Balik Ekmek",
        image: "https://photo2.foodgawker.com/wp-content/uploads/2020/09/3642459.jpeg",
        price: 600,
        description: "BALIK EKMEK / ISTANBUL STREET FLAVOR, FISH SANDWICH"
    },
    {
        _id: "5eee6717a27a66807cf2bea8",
        name: "Kielbasa Quesadillas",
        image: "https://photo2.foodgawker.com/wp-content/uploads/2020/07/3625674.jpg",
        price: 500,
        description: "Sausage, peppers, and onions with a twist: Kielbasa Quesadillas"
    },
    {
        _id: "5eee6717a27a66807cf2bea9",
        name: "Ground Tacos",
        image: "https://photo.foodgawker.com/wp-content/uploads/2020/08/3631018.jpg",
        price: 400,
        description: "Sandwiches have eggs, bacon, cheese, avocado, spinach, and tomato"
    }
  ];
  return (
    <div className="mt-[100px]">
    <div className="w-[90%] mx-auto">
      <div> <h2 className="text-center text-yellow-300 text-3xl font-bold py-5">Our Menu</h2></div>
      <div className= "grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 py-6 gap-2">
        { topPicks.map((item)=>(
          <div className="flex justify-center flex-col items-center" key={item._id}>
          <div>  <img src={item.image} alt="foodImg"  className="w-[200px] h-[200px] rounded-lg object-cover" /> </div>
            <div className="flex justify-center py-2 px-4 flex-col items-center">
              <p className="text-xl font-semibold uppercase">{item.name}</p>
              <p className="text-xl font-semibold">₹{item.price}</p>
            <button className="bg-black w-[150px] text-white rounded-md py-[15px] my-6 text-[20px] hover:text-yellow-400 font-semibold">Add to Cart</button>
            </div>
          </div>
))}
        </div>
    </div>
    </div>
  )
}

export default OurFood