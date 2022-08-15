import React from 'react';
import { Layout } from 'antd';
import '../../index.css';
const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer className='footer-distributed'
            // style={{
            //     textAlign: 'center',
            // }}
        >
           
        <div class="footer-left">

            <h3 class="wow  fadeInLeft">Web <span>Bán Hàng</span></h3>
            <p class="footer-links">
                <a href="#" class="link-1">Home</a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
                <a href="#">About</a>
                <a href="#">Faq</a>
                <a href="#">Contact</a>
            </p>
            <p class="footer-company-name">BanHang© 2022</p>
        </div>
        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Tan Son - Tan Phu</span>Phu Tho, Viet Nam</p>
            </div>
            <div>
                <i class="fa fa-phone"></i>
                <p>0335629878</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">duongatun19@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About Us</span>
                Website bán hàng Online Update nhanh nhất với đầy đủ các truyện hot , truyện hay và mới nhất như truyện
                cười,truyện teen,vv. được cập nhật liên tục . Chúc các bạn mê đọc truyện có 1 phút giây thư giãn tuyệt
                vời .


            </p>
            <div class="footer-icons">
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-twitter"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-github"></i></a>
            </div>
        </div>
   
        </Footer>
    )
}
export default React.memo(FooterComponent)