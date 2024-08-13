import React from 'react';

const BlogPosts = () => {
  return (
    <div className="container mx-auto pt-16">
      <div className="mb-10">
        <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-foreground text-center font-extrabold mb-4">
          Our Gym Posts
        </h1>
        <p className="text-xl text-foreground text-center xl:w-3/5 mx-auto w-11/12">
        State-of-the-art equipment such as treadmills, ellipticals, and resistance machines allows you to target various muscle groups and achieve diverse fitness goals. Dedicated areas for strength training, cardiovascular exercises, and flexibility routines ensure that you have the space and tools needed for a balanced workout.
        </p>
      </div>
      <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
        <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div className="shadow h-64 rounded z-10">
            <img
              src="https://ik.imagekit.io/wgp1xe3yu/Home/personal?updatedAt=1723216384714"
              alt="Blog Post 1"
              className="h-full w-full object-cover overflow-hidden rounded"
            />
          </div>
          <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-indigo-700 text-center pb-3">WORKOUT</p>
            <p className="text-lg text-gray-800 text-center pb-3">
            The way I approach my workouts and handle my training routine is an expression of my inner drive and personal commitment.
            </p>
            <p className="text-sm text-gray-800 text-center">
              May 13, 2019 by{' '}
              <a href="javascript:void(0)">
                <span className="text-indigo-700 cursor-pointer">Silene Cox</span>
              </a>
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div className="shadow h-64 rounded">
            <img
              src="https://ik.imagekit.io/wgp1xe3yu/Home/yoga"
              alt="Blog Post 2"
              className="h-full w-full object-cover overflow-hidden rounded"
            />
          </div>
          <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-indigo-700 text-center pb-3">YOGA</p>
            <p className="text-lg text-gray-800 text-center pb-3">
            I'm a greater believer in the benefits of consistent practice, and I find that the more diligently I engage in my yoga practice, the more I experience its positive effects on my well-being.
            </p>
            <p className="text-sm text-gray-800 text-center">
              May 13, 2019 by{' '}
              <a href="javascript:void(0)">
                <span className="text-indigo-700 cursor-pointer">Sansa Rollins</span>
              </a>
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div className="shadow h-64 rounded">
            <img
              src="https://ik.imagekit.io/wgp1xe3yu/Home/Equipment?updatedAt=1723531123664"
              alt="Blog Post 3"
              className="h-full w-full object-cover overflow-hidden rounded"
            />
          </div>
          <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-indigo-700 text-center pb-3">EQUIPMENT</p>
            <p className="text-lg text-gray-800 text-center pb-3">
            Productivity with gym equipment is the ability to achieve fitness goals and perform exercises you couldn't do before.
            </p>
            <p className="text-sm text-gray-800 text-center">
              May 13, 2019 by{' '}
              <a href="javascript:void(0)">
                <span className="text-indigo-700 cursor-pointer">Ashley Wilson</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
