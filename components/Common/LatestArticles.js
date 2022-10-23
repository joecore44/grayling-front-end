import React from 'react';
import Link from 'next/link';
import { getTopPosts } from 'hooks/getTopPosts';

const LatestArticles = () => {  
    const {error, loading, data } = getTopPosts();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
		<>
			<div className="blog-area">
                <div className="container">
                    <div className="section-title">
                        <span>Read Our Latest Articles</span>
                        <h2>Latest From Our Blog Post For Business Technology </h2>
                    </div>

                    <div className="row justify-content-center">
                    {data.posts.nodes.map(post => { 
                        return <div className="col-lg-4 col-md-6">
                                    <div className="single-blog-card">
                                        <div className="blog-image">
                                            <Link href={`/blog/${post.slug}`}>
                                                <a><img src={post.featuredImage.node.sourceUrl} 
                                                title={post.featuredImage.node.title} 
                                                alt={post.featuredImage.node.altText}/></a>
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <span>By <Link href="/author"><a>{ post.author.node.name }</a></Link></span>
                                            <h3>
                                                <Link href={`/blog/${post.slug}`}>
                                                    <a>{ post.title }</a>
                                                </Link>
                                            </h3>
                                            <ul className="entry-meta">
                                                <li><i className="ri-calendar-line"></i> { post.date }</li>
                                                <li><i className="ri-price-tag-3-line"></i> <Link href="/tags"><a>Commercial</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        })}                       
                    </div>
                    <div className="view-more-btn">
                        <Link href="/blog">
                            <a className="default-btn">View More</a>
                        </Link>
                    </div>
                </div>
            </div>
		</>
    );
}

export default LatestArticles;