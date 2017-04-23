const ObjectId = require('mongoose').Types.ObjectId

const person1 = {
  _id: new ObjectId('57ce56f35a6fe8ba8baf03cd'),
  organization: new ObjectId('57ad47e540ae419411780bbf'),
  name: 'Nicolas Del Valle',
  age: 24,
  gender: 'M',
  lastSeenAt: new Date(),
  isBrowsable: true,
  isMissing: true,
  description: { clothing: 'Blue jeans', appearance: 'long beard' },
  contacts: [{ name: 'John Doe', phone: '1234567', email: 'johndoe@email.com' }],
  photos: [
    { order: 0, url: 'http://www.casinoefbet.com/wp-content/uploads/2015/02/bill-gates-wealthiest-person.jpg' },
    { order: 1, url: 'http://www.casinoefbet.com/wp-content/uploads/2015/02/bill-gates-wealthiest-person.jpg' }
  ],
  geo: {
    loc: [-58.381276, -34.604703],
    address: 'Av. 9 de Julio 1000',
    city: 'Ciudad Autónoma de Buenos Aires',
    postalCode: '1043',
    countryCode: 'AR',
    country: 'Argentina'
  }
}

module.exports = person1
