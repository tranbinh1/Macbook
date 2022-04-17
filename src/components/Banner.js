import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Banner() {
    
    return (
      <div className="relative slideshow__wrap">
        <Swiper 
            modules={[Navigation]}
            spaceBetween={50} 
            slidesPerView={4}
            navigation
        >
          <SwiperSlide>
            <div
              className="product__item tns-item"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
                className="product__item tns-item"
                aria-hidden="true"
                tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="product__item tns-item"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="product__item tns-item"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="product__item tns-item"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="product__item tns-item"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="product__item tns-item"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="product__item tns-item"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="product__item tns-item"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="relative">
                <a
                  className="block thumbc"
                  href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb"
                >
                  <div className="absolute saleoff salesmall white">
                    -16<sup>%</sup>
                  </div>
                  <img
                    className="loading ls-is-cached lazyloaded"
                    data-src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                    alt="MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72"
                    src="https://www.hnmac.vn/media/cache/data/P20201-350x265.jpg"
                  />
                </a>
              </div>
              <div className="red t--c h5 font__brand strong">
                <span>Từ</span> 33.600.000 VND
              </div>
              <div className="old-price grey t--c">
                Giá gốc: <s>39.900.000 VND</s>
              </div>
              <h3 className="n--m h5 relative name-p">
                <a href="https://www.hnmac.vn/macbook-pro-13-inch-2020-512gb-4tdb">
                  MacBook Pro 13 inch 2020 512GB - 4 Thunderbolt - MWP42 / MWP72
                </a>
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
}
