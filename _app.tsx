/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
// import { ApolloClient, InMemoryCache, concat } from '@apollo/client/core';
// import { ApolloProvider } from '@apollo/client';
// import { WebSocketLink } from '@apollo/client/link/ws';
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { SiteLayout } from '../components/common';
import { queryClient } from '../lib/queryClient';
// import { setContext } from '@apollo/client/link/context';

// const getAccessToken = async () => {
//   const response = await fetch('/api/token');
//   const { accessToken } = await response.json();
//   return await accessToken.accessToken;
// };

// const authLink = setContext((_, { headers }) => {
//   const token = getAccessToken();
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const URL = 'https://aadppmth1-meditichhealth-pre.hasura.app/v1/graphql';

// const HASURA_SECRET = '';

// const httpLink = process.browser
//   ? new WebSocketLink({
//       uri: `wss://${URL}`,
//       options: {
//         // reconnect: true,
//         connectionParams: {
//           headers: {
//             Authorization: `Bearer ${HASURA_SECRET}`,
//           },
//         },
//       },
//     })
//   : undefined;
// const HASURA_SECRET = '';

// const createApolloClient = (): any => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: authLink.concat(httpLink),
//   });
// };

// const apolloClient = createApolloClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [showNavBar] = useState(true);
  if (showNavBar) {
    return (
      <UserProvider>
        {/* <ApolloProvider client={apolloClient}> */}
        <QueryClientProvider client={queryClient}>
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </QueryClientProvider>
        {/* </ApolloProvider> */}
      </UserProvider>
    );
  }

  return (
    <UserProvider>
      {/* <ApolloProvider client={apolloClient}> */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      {/* </ApolloProvider> */}
    </UserProvider>
  );
}

export default MyApp;
