'use client';
import { RootState, store } from '@/store/store';
import { Welcome } from './components';
import { addToCart } from '@/store/cart';
import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';
import UserCRUD from '@/api/UserCRUD';

const Home = () => {
    const product = useAppSelector((state: RootState) => state.cart);
    return (
        <div>
            <div className='p-12'>
                <p data-testid='cart-length'>
                    Cart Length: {product?.products?.length}{' '}
                </p>
                <button
                    onClick={() =>
                        store.dispatch(
                            addToCart({ name: 'Product 1', quantity: 1 })
                        )
                    }
                >
                    Add Product
                </button>
            </div>

            <div className='p-12'>
                <Link className='text-2xl underline' href='/shop'>
                    Go to Shop Page
                </Link>
            </div>
            <Welcome />
            <UserCRUD />
        </div>
    );
};

export default Home;
