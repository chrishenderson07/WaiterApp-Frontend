import { Order } from '../../types/Order'
import { Container, OrdersContainer } from './styles'

interface OrdersBoardProps {
	icon: string
	title: string
	orders: Order[]
}

export function OrdersBoard({ icon, title }: OrdersBoardProps) {
	return (
		<Container>
			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>(2)</span>
			</header>
			<OrdersContainer>
				<button type="button">
					<strong></strong>
					<span>2 Itens</span>
				</button>
				<button type="button">
					<strong>Mesa 2</strong>
					<span>2 Itens</span>
				</button>
			</OrdersContainer>
		</Container>
	)
}
