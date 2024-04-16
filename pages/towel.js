import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import NumberRange from "@/components/NumberInput";
import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react";
import ProductCard from "@/components/products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pb = new PocketBase("https://golf-groovy.pockethost.io")

  const [product, setProduct] = useState(null)
  useEffect(() => {
    async function getProduct() {
      const result = await pb.collection("products").getOne('yhc7xjvj345i4hb')
      setProduct(result);
      console.log(result)
    }

    getProduct();
  }, []);

  return (
    <>
      <Head>
        <title>Golf groovy towel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <b>Golf groovy</b>
      <main style={{
        display: "flex",
        width: "100%",
        alignproducts: "center",
      }}>
        {product ? (
          <>
            <ProductCard product={product} />
          </>
        ) : (
          <p style={{ fontWeight: 700, fontSize: "2rem" }}>Loading...</p>
        )}
      </main>
    </>
  );
}