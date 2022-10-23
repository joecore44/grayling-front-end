import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import { getPost } from 'hooks/getPost';
import { useRouter } from 'next/router'



const BlogDetailsContent = () => {
  const router = useRouter()
  const slug = router.query
  const key = slug['slug'];
  //const key = "how-to-develop-your-brands-organic-social-media-content-strategy"
  const {error, loading, data } = getPost(key);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="blog-img">
                <img src={data.post.featuredImage.node.sourceUrl} 
                title={data.post.featuredImage.node.title}
                alt={data.post.featuredImage.node.altText}
                description={data.post.featuredImage.node.description}  />
                </div>

                <ul className="meta-tag">
                  <li>Posted: {data.post.date}</li> 
                </ul>
                 
                <div className="article-content">
                 <h1>{data.post.title}</h1>

                  <div dangerouslySetInnerHTML={{ __html: data.post.content }} />

                </div>

                <div className="article-tags">
                  <Link href="/tags">
                    <a>Commercial</a>
                  </Link>
                  <Link href="/tags">
                    <a>Business</a>
                  </Link>
                </div>
                
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

export default BlogDetailsContent;
