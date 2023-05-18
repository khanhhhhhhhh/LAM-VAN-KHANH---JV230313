import React from 'react'

function Cart() {
    const handleSumit=(e)=>{
        e.preventDefault();
        

    }

  return (
    <div>
         <section className="cart">
          <i className="fa-solid fa-circle-xmark" />
          <h2>GIỎ HÀNG</h2>
          <form action>
            <table onSubmit={handleSumit}>
              <thead>
                <tr>
                  <th>SẢN PHẨM</th>
                  <th>GIÁ</th>
                  <th>SỐ LƯỢNG</th>
                  <th>THAO TÁC</th>
                </tr>
                <tr>
                    <td>IPHONE 11</td>
                    <td><span>320.000</span><sup>đ</sup> </td>
                    <td><input type="number" max={10} min={1} /> </td>
                    <td><button>xoá</button></td>
                       
                </tr>
              </thead>
              
            </table>
            <div style={{textAlign: 'right'}} className="price-total">
              <p style={{fontWeight: 'bold'}}>TỔNG TIỀN :<span>0</span><sup>đ</sup></p>
            </div>
            <button> <a href="./thongtin lh.html">ĐẶT HÀNG</a> </button>
          </form>
        </section>
    </div>
  )
}

export default Cart