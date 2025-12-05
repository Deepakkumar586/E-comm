import React, { Suspense } from 'react'
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductCard = ({ products, loading }) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.carts);
    const isAdded = cart.find((item) => item.id === products.id);

    const handleAddToCart = (e, product) => {

        e.preventDefault();
        dispatch(addToCart(product));
        toast.success("Product added to cart!");


    }






    return (
        <div className='flex flex-wrap justify-center gap-6'>
            {
                loading ? (<p className="text-center text-xl font-semibold w-full text-gray-900 dark:text-white">Loading...</p>) :
                    products.map((product) => {
                        const isAdded = cart.find((item) => item.id === product.id);
                        return (<div
                            key={product.id}
                            className="flex flex-col gap-3 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-20px)] bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
                            {/* Image with Heart Icon */}
                            <div className="relative mb-4 flex-shrink-0">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-40 object-contain p-3"
                                />
                                {/* Heart Icon */}
                                <button className="absolute top-2 right-2 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors">
                                    <FaHeart className="text-red-600 dark:text-red-400" size={16} />
                                </button>

                                {/* Category Badge */}
                                <span className="absolute bottom-2 left-2 px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                                    {product.category}
                                </span>
                            </div>

                            {/* Product Info - Flex grow to fill space */}
                            <div className="flex flex-col flex-grow space-y-2">
                                {/* Title */}
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2 flex-grow">
                                    {product.title}
                                </h3>

                                {/* Truncated Description */}
                                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                                    {product.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-1">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                size={12}
                                                className={`mr-0.5 ${i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                        {product.rating.rate} ({product.rating.count})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xl font-bold text-red-600 dark:text-red-400">
                                        ${product.price}
                                    </span>
                                </div>
                            </div>

                            {/* Cart Button at bottom */}
                            {
                                isAdded ? (<Link to='/cart'><button className="mt-4 flex items-center justify-center gap-2 px-3 py-2.5 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg transition-all duration-300 group/btn text-sm flex-shrink-0 w-[100%]"




                                >
                                    <span className="font-semibold transition-all duration-300" >
                                        Go to Cart
                                    </span>
                                    <FaShoppingCart className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" size={16} />
                                </button></Link>) : (<button className="mt-4 flex items-center justify-center gap-2 px-3 py-2.5 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white rounded-lg transition-all duration-300 group/btn text-sm flex-shrink-0"

                                    onClick={(e) => handleAddToCart(e, product)}


                                >
                                    <span className="font-semibold transition-all duration-300" >
                                        Add to Cart
                                    </span>
                                    <FaShoppingCart className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" size={16} />
                                </button>)
                            }

                        </div>)
                    })}
        </div>
    )
}

export default ProductCard