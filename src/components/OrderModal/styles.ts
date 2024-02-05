import styled from 'styled-components'

export const Overlay = styled.div`
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ModalBody = styled.div`
	background: #fff;
	width: 48rem;
	max-width: 576px;
	padding: 24px;
	border-radius: 8px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

	display: flex;
	flex-direction: column;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong {
			font-size: 2.4rem;
		}

		button {
			line-height: 0;
			border: 0;
			background: transparent;
		}
	}

	.status-container {
		margin-top: 3.2rem;

		small {
			font-size: 1.4rem;
			opacity: 0.8;
		}

		div {
			margin-top: 8px;
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}
`

export const OrderDetails = styled.div`
	margin-top: 3.2rem;

	> strong {
		font-weight: 500;
		font-size: 1.4rem;
		opacity: 0.8;
	}

	.order-items {
		margin-top: 1.6rem;

		.item {
			display: flex;

			& + .item {
				margin-top: 1.6rem;
			}

			img {
				border-radius: 6px;
			}

			.quantity {
				color: #666;
				font-size: 1.4rem;
				display: block;
				min-width: 2rem;
				margin-left: 1.2rem;
			}

			.product-details {
				strong {
					display: block;
					margin-bottom: 4px;
				}

				span {
					font-size: 1.4rem;
					color: #666;
				}
			}
		}
	}

	.total {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 24px;

		span {
			font-weight: 500;
			font-size: 1.4rem;
			opacity: 0.8;
		}
	}
`

export const Actions = styled.footer`
	margin-top: 3.2rem;
	display: flex;
	flex-direction: column;

	.primary {
		background-color: #333;
		border-radius: 48px;
		border: 0;
		color: #fff;
		padding: 12px 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.secondary {
		background-color: transparent;
		padding: 12px 24px;
		color: #d73035;
		font-weight: bold;
		border: 0;
		margin-top: 1.2rem;
	}
`
