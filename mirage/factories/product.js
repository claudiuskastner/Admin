import {Factory} from 'ember-cli-mirage';

export default Factory.extend({
    name(i) { return `Product ${i}`; },
    description(i) { return `Description for product ${i}`; },
    active: true,
    slug(i) { return `product-${i}`;},
    type: 'paid',
    monthly_price() {
        return {
            interval: 'month',
            nickname: 'Monthly',
            currency: 'usd',
            amount: 500
        };
    },
    yearly_price() {
        return {
            interval: 'year',
            nickname: 'Yearly',
            currency: 'usd',
            amount: 5000
        };
    }
});
