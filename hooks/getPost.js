import { useQuery, gql } from "@apollo/client";

const GET_POST = gql`
query GetPost {
    

  }
`

export const getPost = () => {
    const { error, data, loading } = useQuery(GET_POST);

    return {
        error,
        data,
        loading
    }
}