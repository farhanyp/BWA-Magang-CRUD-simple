import { Link } from '@inertiajs/react';

const Navbar = ({auth, laravelVersion, phpVersion}) => {
  return (
    <div className='flex justify-between items-center gap-2 text-gray-400 font-semibold'>
                <div className='text-5xl'>
                    <Link href={route('index')} className='font-semibold text-gray-400 hover:text-gray-900  dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500'>Falah</Link>
                </div>
                <div>
                    {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="font-semibold text-gray-400 hover:text-gray-900  dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Register
                                    </Link>
                                </>
                            )
                    }
                </div>
    </div>
  )
}

export default Navbar
