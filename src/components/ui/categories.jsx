import React from 'react';
import '@/assets/css/categories.scss';

const items = [
  {
    name: 'Spongjpg Image 1',
    url: 'https://ik.imagekit.io/wgp1xe3yu/Home/spongjpg.jpg?updatedAt=1723117767057'
  },
  {
    name: 'Spongjpg Image 2',
    url: 'https://ik.imagekit.io/wgp1xe3yu/Home/spongjpg.jpg?updatedAt=1723117767057'
  },
  {
    name: 'Fresh Lemons',
    url: 'https://images.pexels.com/photos/3303/water-drink-fresh-lemons.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    name: 'Pexels Photo 635537',
    url: 'https://images.pexels.com/photos/635537/pexels-photo-635537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    name: 'Tree Lemon Fruit',
    url: 'https://images.pexels.com/photos/6478/tree-lemon-fruit.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    name: 'Pexels Photo 709816',
    url: 'https://ik.imagekit.io/wgp1xe3yu/Home/pexels-vanmalidate-769289.jpg?updatedAt=1723218643195'
  }
];


const Categories = () => (
    <>
<div className='flex justify-center items-center font-serif font-bold text-3xl mt-10 mb-10'>
    Select By Categories
</div>
  <div className="container-categories">
    {items.map((item, index) => (
      <div key={index} className="wrapper">
        <div className="card-categories">
          <i className="fal fa-arrow-right"></i>
          <div className="fal"></div>
          <div className="w-48"></div>
        </div>
      </div>
    ))}
  </div>
    </>
);

export default Categories;
