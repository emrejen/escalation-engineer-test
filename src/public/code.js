(() => {
  'use strict';
  const fetchData = async () => {
    try {
      const raw = await fetch('/orders');
      const { data } = await raw.json();
      return data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const createTd = (value, alignment) => {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(value));
    if (alignment === 'alignRight') {
      td.style.textAlign = 'right';
    }
    return td;
  };
  const addToPage = (data) => {
    const tbody = document.querySelector('tbody');
    data.forEach((order, i) => {
      const tr = document.createElement('tr');
      tr.appendChild(createTd(++i), 'alignRight');
      tr.appendChild(createTd(order.customer.name));
      tr.appendChild(createTd(order.orderId, 'alignRight'));
      tr.appendChild(createTd(order.productQuantity, 'alignRight'));
      tbody.appendChild(tr);
    });
  };

  window.onload = async () => {
    addToPage(await fetchData());
  };
})();
