import InstaIcon from '../assets/icons/insta.svg';
import TiktokIcon from '../assets/icons/tiktok.svg';
import XSocial from '../assets/icons/x-social.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';

export const Footer = () => {
	return (
		<footer className='py-5 bg-[var(--color-cloud-white)] text-[var(--color-deep-blue-70)] border-t border-white/20'>
			<div className='container'>
				<div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
					<div className='text-center'>
						© 2024 airrow.io All rights reserved
					</div>
					<ul className='flex justify-center gap-2.5'>
						<li>
							<XSocial />
						</li>
						<li>
							<InstaIcon />
						</li>
						<li>
							<TiktokIcon />
						</li>
						<li>
							<YoutubeIcon />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
