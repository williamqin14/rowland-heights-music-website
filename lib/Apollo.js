// import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

// const httpLink = createHttpLink({
//     uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
//     headers: {
//         Authorization: process.env.NEXT_PUBLIC_WP_PASS,
//     },
//     credentials: 'include',
// })

// export const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: httpLink,
// })