import React from 'react'

function Cart({qty,title}) {
    // let {qty,title} = props;
  return (
    <div>
      <h2>My Cart</h2>
        <h3>
            Item:{title}
            <br />
            Total:{1200*qty}
        </h3>
    </div>
  )
}

export default Cart