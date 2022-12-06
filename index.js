const cart = ['shoes', 'kurta', 'pajama'];

const promise = createOrder(cart);
console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
  })
  .then(function () {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err);
  });

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    //createOrde
    //validateCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart is emplty');
      reject(err);
    }
    const orderId = '12345';
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  //proceedToPayment
  return new Promise((resolve, reject) => {
    resolve('payment successfull');
  });
}

function validateCart(cart) {
  return false;
}
