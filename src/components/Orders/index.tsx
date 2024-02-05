import { Order } from '../../types/Order'
import { OrdersBoard } from '../OrdersBoard'

import { Container } from './styles'

const orders: Order[] = [
	{
		_id: '65c0b684a22391f7ca98a14a',
		table: 'XXXXXX',
		status: 'WAITING',
		products: [
			{
				product: {
					name: 'XXXXXXX',
					imagePath: 'XXXXXXX',
					price: 1,
				},
				quantity: 1,
				_id: 'XXXXXXXXXXXXXXXXXXXXXXXX',
			},
		],
	},
]

export function Orders() {
	return (
		<Container>
			<OrdersBoard
				icon="🕧"
				title="Fila de Espera"
				orders={orders}
			/>
			<OrdersBoard
				icon="👨‍🍳"
				title="Em preparação"
				orders={[]}
			/>
			<OrdersBoard
				icon="✅"
				title="Pronto!"
				orders={[]}
			/>
		</Container>
	)
}
