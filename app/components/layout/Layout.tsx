import Head from 'next/head';
import Script from 'next/script';
import React, { FC, useState } from 'react'
import Loader from '../ui/Loader';


interface ILayout {
	title:string
}

const Layout:FC<ILayout> = ({children, title}) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
	<div>
		<Head>
			<title>
				{title} | Yand Taxi
			</title>
			<meta name='description' content='Taxi app'/>
		</Head>
		<Script
			strategy='beforeInteractive'
			src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
		/>
		<div style={{maxWidth: 480}} className='mx-auto relative overflow-hidden'>
			{isLoading ? <Loader/> : children}
		</div>

	</div>
  )
}

export default Layout;