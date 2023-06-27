import { faker } from '@faker-js/faker'

export default class Example {
    generateGroupOrdersDataFile(numberOfOrders: number, approvedBankAccount: string): void {
		const data: Array<object> = []

		for (let i = 0; i < numberOfOrders; i++) {
			data.push({
				'basis': faker.string.alphanumeric(10),
				'code': 123,
				'amount': Number(faker.finance.amount()),
				'debtorAccount': `840-${approvedBankAccount}-52`,
				'codeModelDebtor': 123,
				'debtorCode': faker.string.numeric(18),
				'nameOfCreditor': `${faker.string.alphanumeric(7)}`,
				'addressOfCreditor': 'address',
				'bankAccountCreditor': faker.string.numeric(18),
				'codeCreditor': '26-14060-3104-021415',
				'urgent': true,
				'expectedPayment': '2024-01-01',
				'tags': [
					faker.string.alphanumeric(5),
					faker.string.alphanumeric(5)
				]
			})

			cy.writeFile('cypress/support/data/paymentOrders/groupOrders.json', data)
		}
	}
}