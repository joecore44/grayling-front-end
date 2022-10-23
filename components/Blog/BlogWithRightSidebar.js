import React from "react";
import Link from "next/link";
import BlogSidebar from './BlogSidebar';
import { getPosts } from 'hooks/getPosts';
 
const BlogWithRightSidebar = () => {
  const {error, loading, data } = getPosts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center">
              {data.posts.nodes.map(post => { 
                  return  <div className="col-lg-6 col-md-6">
                            <div className="single-blog-card">
                              <div className="blog-image">
                                <Link href={`/blog/${post.slug}`}>
                                <a>
                                  <img src={post.featuredImage.node.sourceUrl} 
                                      title={post.featuredImage.node.title} 
                                      alt={post.featuredImage.node.altText}/></a>
                                </Link>
                              </div>
                              <div className="blog-content with-padding">
                                <span>
                                  By{" "}
                                  <Link href="/author">
                                    <a>{post.author.node.name}</a>
                                  </Link>
                                </span>
                                <h3>
                                  <Link href="/blog-details">
                                    <a>
                                      How Developers Are Taking The Guesswork Out Of
                                      Animation
                                    </a>
                                  </Link>
                                </h3>
                                <ul className="entry-meta">
                                  <li>
                                    <i className="ri-calendar-line"></i> October 14, 2022
                                  </li>
                                  <li>
                                    <i className="ri-price-tag-3-line"></i>{" "}
                                    <Link href="/tags">
                                      <a>Commercial</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                    </div>
                })} 
              </div>

              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="ri-arrow-left-s-line"></i>
                </a>
                <span className="page-numbers current" aria-current="page">
                  1
                </span>
                <a href="#" className="page-numbers">
                  2
                </a>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="next page-numbers">
                  <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWithRightSidebar;
