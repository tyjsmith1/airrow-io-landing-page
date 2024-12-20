import Image from 'next/image';
import MenuIcon from '../assets/icons/menu.svg';
import logoImage from '../assets/images/airrow.io-logo-icon-1-light.png';

export const Navbar = () => {
	return (
		<div>
			<div className='px-4'>
				<div className='py-4 flex items-center justify-between'>
					<div className='relative'>
						<div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(45deg,#6B4DE6,#FF9B9B,#FFB46A)] blur-md'></div>
						<nav>
							<a href='/'>
								<Image
									src={logoImage}
									alt='logo'
									className='h-12 w-12 relative'
								/>
							</a>
						</nav>
					</div>
					<div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
						<MenuIcon className='text-[var(--color-deep-blue)]' />
					</div>
					<nav className='gap-6 items-center hidden sm:flex'>
						<a
							href='/how-it-works'
							className='text-opacity-60 text-[var(--color-deep-blue)] hover:text-opacity-100 transition'>
							How It Works
						</a>
						<a
							href='/features'
							className='text-opacity-60 text-[var(--color-deep-blue)] hover:text-opacity-100 transition'>
							Features
						</a>
						<a
							href='/blog'
							className='text-opacity-60 text-[var(--color-deep-blue)] hover:text-opacity-100 transition'>
							Blog
						</a>
						<a
							href='/about'
							className='text-opacity-60 text-[var(--color-deep-blue)] hover:text-opacity-100 transition'>
							About Us
						</a>
						<a
							href='/join-waitlist'
							className='text-opacity-60 text-[var(--color-deep-blue)] hover:text-opacity-100 transition'>
							<button className='bg-[var(--color-deep-blue)] text-[var(--color-cloud-white)] py-2 px-4 rounded-lg'>
								Join Waitlist
							</button>
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};
