import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopPicks = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
    <div className="w-[90%] mx-auto">
      <h2 className="font-bold text-3xl pl-10">What is in your mind?</h2>
      <div className="py-20">
      <Slider {...settings}>
      {topPicks.map((item) => (
        <div key={item._id} className="bg-white rounded-md">
          <div className="flex items-center justify-center rounded-t-xl">
            <img src={item.image} alt={item.name} className="w-[200px] rounded-full h-[200px] object-cover" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <p className="text-xl font-semibold uppercase">{item.name}</p>
            <p className="text-xl font-semibold">₹{item.price}</p>
            <button className="bg-black w-[150px] text-white rounded-md py-[15px] my-6 text-[20px] hover:text-yellow-400 font-semibold">Add to Cart</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    </div>
  );
};

export default TopPicks;
