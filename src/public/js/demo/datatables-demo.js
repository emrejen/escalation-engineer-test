const fetchOrders = async () => {
  try {
    const raw = await fetch('/orders');
    return await raw.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

const createTd = (value, align = 'left') => {
  const td = document.createElement('td');
  td.appendChild(document.createTextNode(value));
  td.style.textAlign = align;
  return td;
};

const addToTable = (orders) => {
  let { data } = orders;
  const tbody = document.querySelector('table.table-bordered tbody');
  [...data, ...data].forEach((order) => {
    const tr = document.createElement('tr');
    const { customer, product, productQuantity, orderId } = order;
    tr.appendChild(createTd(orderId, 'right'));
    tr.appendChild(createTd(`${customer.name} (${customer.email})`));
    tr.appendChild(createTd(product.name));
    tr.appendChild(createTd(product.description));
    tr.appendChild(createTd(`${product.price}$`, 'right'));
    tr.appendChild(createTd(productQuantity, 'right'));
    tbody.appendChild(tr);
  });
};

$(document).ready(async function () {
  addToTable(await fetchOrders());
  $('#dataTable').DataTable();
});
