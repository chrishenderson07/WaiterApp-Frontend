import { useState } from 'react'

import { Order } from '../../types/Order'
import { OrderModal } from '../OrderModal'
import { Container, OrdersContainer } from './styles'

interface OrdersBoardProps {
	icon: string
	title: string
	orders: Order[]
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [selectedOrder, setSelectedOrder] = useState<null | Order>(null)

	function handleModalOpen(order: Order) {
		setIsModalVisible(true)
		setSelectedOrder(order)
	}

	function handleModalClose() {
		setIsModalVisible(false)
		setSelectedOrder(null)
	}
	return (
		<Container>
			<OrderModal
				visible={isModalVisible}
				order={selectedOrder}
				onClose={handleModalClose}
			/>
			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>(2)</span>
			</header>

			{orders.length > 0 && (
				<OrdersContainer>
					{orders.map((order) => (
						<button
							type="button"
							key={order._id}
							onClick={() => handleModalOpen(order)}>
							<strong>Mesa {order.table}</strong>
							<span>{order.products.length}</span>
						</button>
					))}
				</OrdersContainer>
			)}
		</Container>
	)
}
