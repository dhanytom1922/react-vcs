import React, { useContext, useEffect, useRef, useState } from "react";

// import { Button } from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
import { Button } from "../components/Elements/Button/Index";
import { getProducts, getUsername } from "../Services/product.service";
import useLogin from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

// const products = [
//   {
//     id: 1,
//     name: "Tas Baru",
//     price: 1000000,
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias",
//     image:
//       "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww",
//   },
//   {
//     id: 2,
//     name: "Tas KW",
//     price: 100000,
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias",
//     image:
//       "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww",
//   },
//   {
//     id: 3,
//     name: "Tas Lama",
//     price: 50000,
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias",
//     image:
//       "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww",
//   },
// ];

// const email = localStorage.getItem("email");
// const token = localStorage.getItem("token");
// ---

const ProductsPage = () => {

  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  // ganti redux
  // const [cart, setCart] = useState([
  //   // {
  //   //   id: 1,
  //   //   qty: 1,
  //   // },
  // ]);
  // const [totalPrice, setTotalPrice] = useState(0);
  //------

  // state products API
  const [products, setProducts] = useState([]);

  // state username product custom hooks
  useLogin();
  // const username = useLogin();

  // // pengganti komponen didmount
  // useEffect(() => {
  //   // setCart([{ id: 1, qty: 1 }]);
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);
  //ganti redux

  // API------->

  //menampilkan console log
  // useEffect(() => {
  //   getProducts();
  // },[])

  //menangkap data menggunakan callback
  useEffect(() => {
    getProducts((data) => {
      // console.log(data);
      setProducts(data);
    });
  }, []);

  //ganti Redux
  // // penerapan useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // //handle
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };
  //---

  //ganti redux -------
  // const handleToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  //   // setCart([...cart, { id, qty: 1 }]);
  // };
  //----

  return (
    <>
      <Navbar />

      <div className={`flex justify-center py-5 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="w4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w2/6">
          <h1 className="font-bold text-3xl text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
          {/* <ul>
            {cart.map((item) => (
              <li key={item}>{item.id}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
