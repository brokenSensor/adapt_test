import React, { useState } from 'react'
import { CardProps } from '../types'

const Card = ({ item }: CardProps) => {
	const [liked, setLiked] = useState(false)
	const likeButtonHandler = () => {
		setLiked(!liked)
	}
	return (
		<div className='cart'>
			<div className='attributes'>
				<h4 className='title'>{item.attributes.title}</h4>
				<div className='rooms'>Комнаты: {item.attributes.rooms}</div>
				<div className='address'>
					Адрес: г. {item.attributes.address.city}, ул.{' '}
					{item.attributes.address.street}, дом {item.attributes.address.house},
					кв. {item.attributes.address.room}
				</div>
				<div className='area'>
					Площадь: {item.attributes.area} {item.attributes.unit}
				</div>
			</div>
			<div className='relationships'>
				<div>
					Продавец: {item.relationships.attributes.first_name}{' '}
					{item.relationships.attributes.middle_name}{' '}
					{item.relationships.attributes.last_name}
				</div>
				<div>
					<button
						className={`like-button ${liked ? 'liked' : ''}`}
						onClick={likeButtonHandler}
					>
						{liked ? (
							<i className='fas fa-heart'></i>
						) : (
							<i className='far fa-heart'></i>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
