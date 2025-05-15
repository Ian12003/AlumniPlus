import React from "react";
import image1 from '../../assets/success.jpg'
import image2 from '../../assets/meetup.jpg'
import image3 from '../../assets/network.jpg'
import { Link } from "react-router-dom";
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Alumni Success Stories",
      author: "John Doe",
      date: "March 25, 2025",
      excerpt: "Discover inspiring stories from our alumni who have made a difference in their fields...",
      image: image1,
    },
    {
      id: 2,
      title: "Networking Tips for Alumni",
      author: "Jane Smith",
      date: "March 20, 2025",
      excerpt: "Learn how to build and maintain strong professional connections as an alumnus...",
      image: image2,
    },
    {
      id: 3,
      title: "Upcoming Alumni Meetups",
      author: "Admin",
      date: "March 15, 2025",
      excerpt: "Stay updated on upcoming alumni events and gatherings in your city...",
      image: image3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto ">
      <div className="flex flex-col items-center pb-2">
      <h2 className="bg-indigo-400 text-white text-lg font-semibold py-2 px-6 rounded-lg mb-3">
        ALUMNI BLOG
      </h2>
      </div>       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-500 text-sm">By {post.author} | {post.date}</p>
                <p className="mt-2 text-gray-700">{post.excerpt}</p>
               <Link to = {`/blog/${post.id}`}> <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Read More</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
