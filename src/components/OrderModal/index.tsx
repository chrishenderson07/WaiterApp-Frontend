import { Order } from '../../types/Order'
import { Actions, ModalBody, OrderDetails, Overlay } from './styles'
import closeIcon from '../../assets/images/close-icon.svg'
import { formatCurrency } from '../../utils/formatCurrency'
import { useEffect } from 'react'

interface OrderModalProps {
	visible: boolean
	order: Order | null
	onClose: () => void
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
	if (!visible || !order) {
		return null
	}

	const total = order.products.reduce(
		(total, { product, quantity }) => total + product.price * quantity,
		0,
	)

	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') onClose()
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [onClose])
	return (
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa {order.table}</strong>
					<button
						type="button"
						onClick={onClose}>
						<img
							src={closeIcon}
							alt="Fechar modal"
						/>
					</button>
				</header>

				<div className="status-container">
					<small>Status do pedido</small>
					<div>
						<span>
							{order.status === 'WAITING' && '🕧'}
							{order.status === 'IN_PRODUCTION' && '👨‍🍳'}
							{order.status === 'DONE' && '✅'}
						</span>
						<strong>
							{order.status === 'WAITING' && 'Fila de espera'}
							{order.status === 'IN_PRODUCTION' && 'Em preparação'}
							{order.status === 'DONE' && 'Pronto!'}
						</strong>
					</div>
				</div>

				<OrderDetails>
					<strong>Itens</strong>

					<div className="order-items">
						{order.products.map(({ _id, product, quantity }) => (
							<div
								className="item"
								key={_id}>
								<img
									width="48"
									height="28.51"
									src={`http://localhost:3001/${product.imagePath}`}
									alt={product.name}
								/>

								<span className="quantity">{quantity}x</span>
								<div className="product-details">
									<strong>{product.name}</strong>
									<span>{formatCurrency(product.price)}</span>
								</div>
							</div>
						))}
					</div>
					<div className="total">
						<span>Total</span>
						<strong>{formatCurrency(total)}</strong>
					</div>
				</OrderDetails>

				<Actions>
					<button className="primary">
						<span>👨‍🍳</span>
						<span>Iniciar Produção</span>
					</button>
					<button className="secondary">
						<span>Cancelar Pedido</span>
					</button>
				</Actions>
			</ModalBody>
		</Overlay>
	)
}
