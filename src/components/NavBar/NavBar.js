import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] = useState(true);

    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Courses', path: '/courses' },
        { id: 3, name: 'Teachers', path: '/teachers' },
        { id: 4, name: 'Pages', path: '/pages' },
        { id: 5, name: 'Blog', path: '/blog' },
        { id: 6, name: 'Contact', path: '/contact' }
    ];
    return (
        <nav className='w-full bg-purple-200'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {
                    open ?
                        <Bars3Icon />
                        :
                        <XMarkIcon />
                }
            </div>
            <ul className={`bg-purple-200 w-full md:flex justify-center gap-5 absolute md:static duration-500 ease-in ${open ? 'top-[-200px]' : 'top-6'}`}>
                {
                    routes.map((route /* , idx */) => <Link
                        key={route.id}
                        // key={idx}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;