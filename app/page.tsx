"use client";
import Product from "./components/Product";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/client";

export default function Home() {
  return (
    <>
      <ApolloProvider client={client}>
      
        <Product />

      </ApolloProvider>
    </>
  );
}
