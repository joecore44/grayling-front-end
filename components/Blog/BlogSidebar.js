import React from "react";
import Link from "next/link";
import { getTopPosts } from 'hooks/getTopPosts';

const BlogSidebar = () => {
  const {error, loading, data } = getTopPosts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  console.log(data);
  return (
    <>
      <aside className="widget-area">
        <div className="widget widget_search">
          <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
            <button type="submit">
              <i className="ri-search-line"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>
          {data.posts.nodes.map(post => { 
            return <article className="item">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="thumb">
                      <span className="fullimage cover bg1" role="img"></span>
                    </a>
                  </Link>
                  <div className="info">
                    <h4 className="title usmall">
                    <Link href={`/blog/${post.slug}`}>
                        <a>
                          {post.title}
                        </a>
                      </Link>
                    </h4>
                    <span>{post.date}</span>
                  </div>
                </article>
          })}
        </div>

        <div className="widget widget_explore_topics">
          <h3 className="widget-title">Explore Topics</h3>

          <ul className="topics-list">
          {data.categories.nodes.map(category => {
            if(category.name !== "Uncategorized")
            return <li>
                <div className="d-flex justify-content-between align-items-center">
                  <Link href="/blog">
                    <a>
                      <i className="ri-arrow-right-s-line"></i> {category.name}  
                    </a>
                  </Link>
                  <span>
                    <a href="#">({category.count})</a>
                  </span>
                </div>
              </li>
        })}
           
          </ul>
        </div>

        
      </aside>
    </>
  );
};

export default BlogSidebar;
