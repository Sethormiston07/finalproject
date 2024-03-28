import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import NumberRange from "@/components/NumberInput";
import { useEffect, useState} from 'react';
import PocketBase from 'pocketbase';
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react";
import {setProducts} from "@chakra-ui/react";




const inter = Inter({ subsets: ["latin"] });
const pb = new PocketBase("https://golf-groovy.pockethost.io");

const [products, setProducts] = useState([]);
useEffect(() => {
    async function getProducts() {
        const results = await pb.collections("products").getFullList();
        setProducts(results);l
    }

    getProducts();

});
export default function Home() {
  const pb = new PocketBase("https://golf-groovy.pockethost.io")
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getProducts() {
      const results = await pb.collection("products").getFullList();
      setProducts(results);
      console.log(results)
    }

    getProducts();
  }, []);
  return (
    <>
      <Head>
        <title>Golf groovy</title>#
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <b>Golf groovy</b>
      <main style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}>
       <NumberRange />
            <Button style={{
                color: "black"
            }} colorScheme='whatsapp'><b>
                    Add to cart
                </b>
            </Button>
            {products.map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        ))}
        {products.length >= 1 ? (
          <>
            {products.map((item) => {
              return (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <h5 style={{ fontSize: "2rem", fontWeight: 700 }}>{item.name}</h5>
                  <img width={400} height={400} src={`https://golf-groovy.pockethost.io/api/files/${item.collectionId}/${item.id}/${item.image[0]}`} />
                  <NumberRange />
                  <Button style={{
                    color: "black"
                  }} colorScheme='whatsapp'><b>
                      Add to cart
                    </b>
                  </Button>
                  <Button colorScheme='blue'>Buy with shop pay</Button>
                  <Text style={{
                    styles: "underline"
                  }}>
                      More payment options
                  </Text>
                </div>
              )
              
            })}
          </>
        ) : (
          <p style={{ fontWeight: 700, fontSize: "2rem"}}>Loading...</p>
        )}
      </main>
    </>
  );
}
