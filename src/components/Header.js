import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../Style/base.css";

export default function Header() {
  return (
    <div id="header" className="fixed">
      <div className="container">
        <a className="logo left white-logo" href="https://www.hnmac.vn/">
          <img
            className="block"
            src="https://www.hnmac.vn/media/data/logo/logo-hnmac.png"
            title="HNMAC - CHUYÊN MACBOOK CŨ MỚI"
            alt="HNMAC - CHUYÊN MACBOOK CŨ MỚI"
          />
        </a>
        <span
          className="show-mobile hide-tablet absolute right "
          onclick="toggleMenuMobile();"
          id="menubutton"
        ></span>
        <div className="right cart-total-right">
          <a
            href="javascript:;"
            id="search-button"
            className="white block circle right"
          >
            <FontAwesomeIcon icon={faSearch} className="icn i-magnifier" />
          </a>
          <a
            href="checkout/cart"
            id="cart"
            className="white circle relative block right"
          >
            <FontAwesomeIcon icon={faCartShopping} className='i-cart' />
            <span id="cart-total" className="round circle absolute strong">
              0
            </span>
            <div id="comment_cart" className="absolute"></div>
          </a>
        </div>
        <div id="menu-topmenu" className="show-tablet hide-mobile">
          <ul className="list-unstyled">
            <li className="megamenu megamenu433">
              <a href="https://www.hnmac.vn/khuyen-mai">Khuyến mại</a>
            </li>
            <li className="megamenu megamenu400">
              <a href="https://www.hnmac.vn/macbook">MACBOOK</a>
              <ul className="subtopmenu n--m catid400">
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/macbook-m1">
                    MACBOOK M1
                  </a>
                  <ul className="children2 list-unstyled">
                    <li>
                      <a href="https://www.hnmac.vn/macbook-m1-pro-m1-max">
                        Macbook 14 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-16-inch-m1">
                        Macbook 16 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-air-m1">
                        MacBook Air 13 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-pro-m1">
                        MacBook Pro 13 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/imac-m1">iMac 24 inch</a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/mac-mini-m1">Mac Mini M1</a>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/macbook-cu">
                    KHO MACBOOK CŨ
                  </a>
                  <ul className="children2 list-unstyled">
                    <li>
                      <a href="https://www.hnmac.vn/macbook-16-inch">
                        Macbook 16 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-15-inch">
                        Macbook 15 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-14-inch">
                        Macbook 14 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-pro-13-inch">
                        Macbook Pro 13 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-air-13-inch">
                        MacBook Air 13 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-12-inch">
                        Macbook 12 inch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-11-inch">
                        Macbook 11 inch
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <a
                    className="block"
                    href="https://www.hnmac.vn/macbook-air-cu"
                  >
                    MACBOOK AIR
                  </a>
                  <ul className="children2 list-unstyled">
                    <li>
                      <a href="https://www.hnmac.vn/macbook-air-2020-cu">
                        Macbook Air 2020
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-air-2019-cu">
                        Macbook Air 2019
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-air-2018-cu">
                        MacBook Air 2018
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-air-2017">
                        Macbook Air 2017
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-air-2016">
                        Macbook Air 2016
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-air-2015">
                        Macbook Air 2015
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <a
                    className="block"
                    href="https://www.hnmac.vn/macbook-pro-cu"
                  >
                    MACBOOK PRO
                  </a>
                  <ul className="children2 list-unstyled">
                    <li>
                      <a href="https://www.hnmac.vn/macbook-pro-2021">
                        Macbook Pro 2021
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-pro-2020">
                        Macbook Pro 2020
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-pro-2019">
                        Macbook Pro 2019
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-pro-2018-cu-moi">
                        Macbook Pro 2018
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-pro-2017">
                        Macbook Pro 2017
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/ban-macbook-pro-retina-2016-moi-cu-gia-re">
                        Macbook Pro 2016
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/macbook-pro-2015">
                        Macbook Pro 2015
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="megamenu megamenu505">
              <a href="https://www.hnmac.vn/imac-macbook-mini-pro">
                Mac Desktop
              </a>
              <ul className="subtopmenu n--m catid505">
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/imac-27-inch">
                    iMac 27 inch
                  </a>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/imac-24-inch">
                    iMac 24 inch
                  </a>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/imac-21-inch">
                    iMac 21 inch
                  </a>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/mac-mini">
                    Mac Mini
                  </a>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/mac-studio">
                    Mac Studio
                  </a>
                </li>
              </ul>
            </li>
            <li className="megamenu megamenu508">
              <a href="https://www.hnmac.vn/iphone-ipad">IPAD - IPHONE</a>
              <ul className="subtopmenu n--m catid508">
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/apple-iphone">
                    Apple iPhone
                  </a>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/ipad">
                    Apple iPad
                  </a>
                </li>
              </ul>
            </li>
            <li className="megamenu megamenu518">
              <a href="https://www.hnmac.vn/phu-kien">PHỤ KIỆN</a>
              <ul className="subtopmenu n--m catid518">
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/apple-watch">
                    Apple Watch
                  </a>
                  <ul className="children2 list-unstyled">
                    <li>
                      <a href="https://www.hnmac.vn/apple-watch-series-7">
                        Apple Watch Series 7
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <a
                    className="block"
                    href="https://www.hnmac.vn/phu-kien-macbook"
                  >
                    Phụ kiện MacBook
                  </a>
                  <ul className="children2 list-unstyled">
                    <li>
                      <a href="https://www.hnmac.vn/tui-chong-soc-macbook">
                        Túi chống sốc
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/cap-hub-chuyen-doi-macbook">
                        Cáp chuyển đổi
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/ban-phim-chuot-trackpad-apple">
                        Phím - Chuột - Trackpad
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/tai-nghe-apple">Tai nghe</a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/o-cung-macbook">
                        Ổ cứng MacBook
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/airpods">
                    Airpods
                  </a>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/airtags">
                    Airtags
                  </a>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/man-hinh">
                    Màn hình
                  </a>
                </li>
                <li className="block">
                  <a
                    className="block"
                    href="https://www.hnmac.vn/phu-kien-apple-watch"
                  >
                    Phụ kiện Apple Watch
                  </a>
                  <ul className="children2 list-unstyled">
                    <li>
                      <a href="https://www.hnmac.vn/cap-sac-apple-watch">
                        Cáp sạc Apple Watch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/day-deo-apple-watch">
                        Dây đeo Apple Watch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/gia-do-apple-watch">
                        Giá đỡ Apple Watch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/mieng-dan-apple-watch">
                        Miếng dán Apple Watch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hnmac.vn/op-bao-ve-apple-watch">
                        Ốp bảo vệ Apple Watch
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <a
                    className="block"
                    href="https://www.hnmac.vn/phu-kien-ipad"
                  >
                    Phụ kiện iPad
                  </a>
                </li>
              </ul>
            </li>
            <li className="megamenu megamenu459">
              <a href="https://www.hnmac.vn/dich-vu">DỊCH VỤ</a>
              <ul className="subtopmenu n--m catid459">
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/apple-care">
                    Apple Care
                  </a>
                </li>
                <li className="block">
                  <a
                    className="block"
                    href="https://www.hnmac.vn/bao-hanh-macbook-xach-tay"
                  >
                    Bảo Hành Macbook Xách Tay
                  </a>
                </li>
                <li className="block">
                  <a
                    className="block"
                    href="https://www.hnmac.vn/sua-loa-macbook"
                  >
                    Sửa chữa - Loa
                  </a>
                </li>
                <li className="block">
                  <a className="block" href="https://www.hnmac.vn/sua-chua-pin">
                    Sửa chữa - Pin
                  </a>
                </li>
              </ul>
            </li>
            <li className="">
              <a href="tra-gop">Trả góp</a>
            </li>
            <li>
              <a href="news/blog">Blog</a>
            </li>
            <li>
              <a href="bao-hanh">Bảo hành</a>
            </li>
          </ul>
        </div>
        <div className="hide">
          <i className="icn i-user"></i>{" "}
          <a href="/#login" id="login-but">
            Đăng nhập
          </a>
          /
          <a id="register-but" href="/#register">
            Đăng ký
          </a>
          <span className="hotline main-color">
            <i className="icn i-call-end"></i>
            0977728880
          </span>
          <span className="emailline main-color">
            <i className="icn i-envelope-open"></i>
            admin@hnmac.com
          </span>
        </div>
      </div>
    </div>
  );
}
