import React from 'react';
import { Carousel } from 'react-bootstrap';

export const CarouselContainer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 m-auto">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.cdn.turner.com%2Fmoney%2Fdam%2Fassets%2F130725143257-choosing-money-manager-1024x576.jpg&f=1&nofb=1"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="bg-dark text-light">
                    The Smart Way to Manage Personal Finances
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://moneymanagerapp.com/wp-content/uploads/2019/07/notebook.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3 className="bg-dark text-light">
                    Track all your expenditures
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.becu.org%2F-%2Fmedia%2FImages%2Fheroes-page-promos%2F660x371%2Feveryday-banking%2FMoneyManager_Hero.jpg%3Fh%3D371%26w%3D660%26rev%3Dd2c3d9aba4aa4cbbb3caf72109d67539%26hash%3DA8758C53D58EF8BDCCE4CF1D5707C953&f=1&nofb=1"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 className="bg-dark text-light">
                    All in a Single Place.Get tracked of your money easily!
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
