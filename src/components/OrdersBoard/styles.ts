import styled from 'styled-components'

export const Container = styled.div`
	padding: 1.6rem;
	border: 1px solid rgba(204, 204, 204, 0.4);
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	> header {
		padding: 0.8rem;
		font-size: 1.4rem;
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}
`

export const OrdersContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 2.4rem;
	button {
		background-color: #fff;
		border: 1px solid rgba(204, 204, 204, 0.4);
		height: 12.8rem;
		border-radius: 8px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4px;

		strong {
			font-weight: 500;
		}
		span {
			font-size: 1.4rem;
			color: #666;
		}

		& + button {
			margin-top: 2.4rem;
		}
	}
`
