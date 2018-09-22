import ENV from 'phorest-app/config/environment';

export default function() {
  this.urlPrefix = `${ENV.api.host}/${ENV.api.namespace}/business/${ENV.auth.businessId}`;

  this.get('/client', (schema, request) => {
    const { email } = request.queryParams;

    if (email === 'non_existing@example.com') {
      return {
        _embedded: {
          _clients: []
        },
        page : {
          size : 0,
          totalElements : 0,
          totalPages : 0,
        }
      }
    } else {
      return {
        _embedded: {
          _clients: [
            { clientId: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', mobile: '12345678' },
            { clientId: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com', mobile: '87654321' },
            { clientId: 3, firstName: 'Tomasz', lastName: 'Nieżurawski', email: 'tn@example.com', mobile: '4536271' },
          ]
        },
        page : {
          size : 3,
          totalElements : 3,
          totalPages : 1,
        }
      };
    }
  });

  this.post('/voucher', (schema, request) => {
    const body = JSON.parse(request.requestBody);
    return {
      voucherId: 'LkcFDpwy-gDvOKvmKi-d_A',
      serialNumber: '10859',
      issueDate: '2018-09-22T18:40:31.000Z',
      expiryDate: '2018-10-22T18:40:31.000Z',
      clientId: body.clientId,
      creatingBranchId: 'SE-J0emUgQnya14mOGdQSw',
      originalBalance: body.originalBalance,
      remainingBalance: body.originalBalance,
    };
  });
}
