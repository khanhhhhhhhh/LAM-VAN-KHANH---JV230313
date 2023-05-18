import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'antd';

function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const img = e.target.imageUrl.value;
    const name = e.target.name.value;
    const price = e.target.price.value;
    console.log(img, name, price);
    
  };

  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="product-items">
            <div className="product-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073"
                alt=""
              />
              <div className="product-item-text">
                <p>
                  <span>320.000</span>
                  <sup>đ</sup>
                </p>
                <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>IPHONE 11</h1>
              </div>
              <button onClick={handleChange}>THÊM GIỎ HÀNG</button>
              <Button type="primary" onClick={showModal}>
                CHI TIẾT SẢN PHẨM
              </Button>
              <Modal title="IPHONE 11" visible={isModalOpen} onOk={handleOk}>
                <p>
                  Một con chip đáng kinh ngạc giúp tăng gấp đôi khả năng học máy và vượt qua ranh giới của những gì
                  điện thoại thông minh có thể làm. Chào mừng bạn đến với chiếc iPhone đầu tiên đủ mạnh để được gọi là
                  Pro.
                </p>
              </Modal>
            </div>
            <div className="product-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073"
                alt=""
              />
              <div className="product-item-text">
                <p>
                  <span>320.000</span>
                  <sup>đ</sup>
                </p>
                <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>IPHONE 11</h1>
              </div>
              <button onClick={handleChange}>THÊM GIỎ HÀNG</button>
              <Button type="primary" onClick={showModal}>
                CHI TIẾT SẢN PHẨM
              </Button>
              <Modal title="IPHONE 11" visible={isModalOpen} onOk={handleOk}>
                <p>
                  Một con chip đáng kinh ngạc giúp tăng gấp đôi khả năng học máy và vượt qua ranh giới của những gì
                  điện thoại thông minh có thể làm. Chào mừng bạn đến với chiếc iPhone đầu tiên đủ mạnh để được gọi là
                  Pro.
                </p>
              </Modal>
            </div>
            <div className="product-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073"
                alt=""
              />
              <div className="product-item-text">
                <p>
                  <span>320.000</span>
                  <sup>đ</sup>
                </p>
                <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>IPHONE 11</h1>
              </div>
              <button onClick={handleChange}>THÊM GIỎ HÀNG</button>
              <Button type="primary" onClick={showModal}>
                CHI TIẾT SẢN PHẨM
              </Button>
              <Modal title="IPHONE 11" visible={isModalOpen} onOk={handleOk}>
                <p>
                  Một con chip đáng kinh ngạc giúp tăng gấp đôi khả năng học máy và vượt qua ranh giới của những gì
                  điện thoại thông minh có thể làm. Chào mừng bạn đến với chiếc iPhone đầu tiên đủ mạnh để được gọi là
                  Pro.
                </p>
              </Modal>
            </div>
            <div className="product-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073"
                alt=""
              />
              <div className="product-item-text">
                <p>
                  <span>320.000</span>
                  <sup>đ</sup>
                </p>
                <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>IPHONE 11</h1>
              </div>
              <button onClick={handleChange}>THÊM GIỎ HÀNG</button>
              <Button type="primary" onClick={showModal}>
                CHI TIẾT SẢN PHẨM
              </Button>
              <Modal title="IPHONE 11" visible={isModalOpen} onOk={handleOk}>
                <p>
                  Một con chip đáng kinh ngạc giúp tăng gấp đôi khả năng học máy và vượt qua ranh giới của những gì
                  điện thoại thông minh có thể làm. Chào mừng bạn đến với chiếc iPhone đầu tiên đủ mạnh để được gọi là
                  Pro.
                </p>
              </Modal>
            </div>
            <div className="product-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073"
                alt=""
              />
              <div className="product-item-text">
                <p>
                  <span>320.000</span>
                  <sup>đ</sup>
                </p>
                <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>IPHONE 11</h1>
              </div>
              <button onClick={handleChange}>THÊM GIỎ HÀNG</button>
              <Button type="primary" onClick={showModal}>
                CHI TIẾT SẢN PHẨM
              </Button>
              <Modal title="IPHONE 11" visible={isModalOpen} onOk={handleOk}>
                <p>
                  Một con chip đáng kinh ngạc giúp tăng gấp đôi khả năng học máy và vượt qua ranh giới của những gì
                  điện thoại thông minh có thể làm. Chào mừng bạn đến với chiếc iPhone đầu tiên đủ mạnh để được gọi là
                  Pro.
                </p>
              </Modal>
            </div>

          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
