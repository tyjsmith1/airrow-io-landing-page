export const Banner = () => {
	return (
		<div className='py-3 text-center bg-[linear-gradient(to_right,var(--color-light-purple),var(--color-soft-coral),var(--color-light-blue),var(--color-alert-light))]'>
			<div className='container'>
				<p className='font-medium'>
					<span className='hidden sm:inline'>
						Level up your job search experience -{' '}
					</span>
					<a
						href='#join-waitlist'
						className='underline underline-offset-4 font-medium'>
						Try the beta
					</a>
				</p>
			</div>
		</div>
	);
};
