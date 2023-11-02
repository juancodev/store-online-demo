import React, { useContext } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import OrderItem from '@/components/OrderItem';
import AppContext from '@/context/AppContext';
import styles from '@/styles/Checkout.module.scss';

const Checkout = () => {
  const { state }: any = useContext(AppContext);
  console.log(state);
  if (state.cart.length === 0) {
    return (
      <>
        <Head>
          <title>React Shop Checkout</title>
        </Head>
        <Header />
        <div className={styles.Checkout}>
          <div className={styles['Checkout-container']}>
            <h1 className={styles.title}>My order</h1>
            <p className={styles.title}>There are not orders</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>React Shop Checkout</title>
        </Head>
        <Header />
        <div className={styles.Checkout}>
          <div className={styles['Checkout-container']}>
            <h1 className={styles.title}>My order</h1>
            {state.cart.map((product: any) => {
              let date: string = product.creationAt.slice(0, 10);
              return (
                <>
                  <OrderItem product={product} indexValue={product?.id} />
                  <div className={styles['Checkout-content']}>
                    <div className={styles.order}>
                      <p>
                        <span>{date}</span>
                        <span>6 articles</span>
                      </p>
                      <p>${product?.price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Checkout;
