import GoogleMapReact from 'google-map-react'
import React from 'react'

const Map = () => {
	return (
		<div className='h-screen w-full'>
			<GoogleMapReact 
				bootstrapURLKeys={{key: String(process.env.MAP_KEY)}}
				defaultCenter={{
					lat: 55.333146,
					lng: 37.224384,
				}}
				defaultZoom={13}
				options={{
					fullscreenControl:false,
					keyboardShortcuts:false,
					clickableIcons:false,
					scrollwheel:false
				}}
				/>
		</div>
	)
}

export default Map