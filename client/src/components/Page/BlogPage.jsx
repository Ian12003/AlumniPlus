import React from "react";
import { useParams, Link } from "react-router-dom";
import image1 from '../../assets/success.jpg';
import image2 from '../../assets/meetup.jpg';
import image3 from '../../assets/network.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Alumni Success Stories",
    author: "John Doe",
    date: "March 25, 2025",
    content: "Every graduate carries the torch of their alma mater, lighting the path with their accomplishments and contributions to society. Alumni success stories are more than just tales of individual achievements; they are reflections of the institution's values, quality of education, and the nurturing of ambition.Take the story of Priya, who graduated from a small-town college in India and went on to lead transformative projects in renewable energy. Or Aman, an alumnus who turned his love for coding into a tech startup that now empowers thousands. Each journey underscores the diversity of success—be it in entrepreneurship, research, social causes, or creative endeavors.",
    image: image1,
  },
  {
    id: 2,
    title: "Networking Tips for Alumni",
    author: "Jane Smith",
    date: "March 20, 2025",
    content: "Every graduate carries the torch of their alma mater, lighting the path with their accomplishments and contributions to society. Alumni success stories are more than just tales of individual achievements; they are reflections of the institution's values, quality of education, and the nurturing of ambition.Take the story of Priya, who graduated from a small-town college in India and went on to lead transformative projects in renewable energy. Or Aman, an alumnus who turned his love for coding into a tech startup that now empowers thousands. Each journey underscores the diversity of success—be it in entrepreneurship, research, social causes, or creative endeavors.",
    image: image2,
  },
  {
    id: 3,
    title: "Upcoming Alumni Meetups",
    author: "Admin",
    date: "March 15, 2025",
    content: "Every graduate carries the torch of their alma mater, lighting the path with their accomplishments and contributions to society. Alumni success stories are more than just tales of individual achievements; they are reflections of the institution's values, quality of education, and the nurturing of ambition.Take the story of Priya, who graduated from a small-town college in India and went on to lead transformative projects in renewable energy. Or Aman, an alumnus who turned his love for coding into a tech startup that now empowers thousands. Each journey underscores the diversity of success—be it in entrepreneurship, research, social causes, or creative endeavors.",
    image: image3,
  },
];

const BlogPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div className="text-center text-red-500 text-xl mt-10">Blog post not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">By {post.author} | {post.date}</p>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
        <Link to="/blog" className="mt-6 inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
