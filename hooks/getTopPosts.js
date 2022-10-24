import { useQuery, gql } from "@apollo/client";

const GET_TOP_POSTS = gql`
query GetTopPosts {
  posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          altText
          date
          sourceUrl
          title(format: RAW)
          description(format: RAW)
        }
      }
      link
      title
      date
      uri
      slug
    }
  }
  categories(first: 5) {
    nodes {
      name
      count
    }
  }
}
`

export const getTopPosts = () => {
    const { error, data, loading } = useQuery(GET_TOP_POSTS);

    return {
        error,
        data,
        loading
    }
}