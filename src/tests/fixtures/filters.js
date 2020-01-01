import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    endDate: undefined,
    startDate: undefined,
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    endDate: moment(0),
    startDate: moment(0).add(3, 'days'),
};

export {filters, altFilters};