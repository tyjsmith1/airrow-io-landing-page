import ArrowWIcon from '../assets/icons/arrow-w.svg';

export const HeroCTAButton = () => {
	return (
		<div className='flex items-center justify-center'>
			<a
				href='#'
				className='inline-flex gap-2 border py-1 px-2 rounded-lg border-[var(--color-deep-blue)]'>
				<span className='bg-[linear-gradient(to_right,var(--color-deep-blue),var(--color-success),var(--color-sky-blue),var(--color-success),var(--color-deep-blue))] text-transparent bg-clip-text [-webkit-background-clip:text]'>
					Job searching reimagined
				</span>
				<span className='inline-flex items-center gap-1'>
					<span>Read More</span>
					<ArrowWIcon />
				</span>
			</a>
		</div>
	);
};
