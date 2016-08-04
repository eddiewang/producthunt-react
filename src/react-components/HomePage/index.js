import React from 'react';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {
          id: 1,
          name: 'Codecademy',
          link: 'https://codecademy.com',
          media: '/img/codecademy.jpeg',
          upvote: 169,
          description: 'Code for anyone',
          maker: {
            name: 'hieu',
            avatar: '/img/hieu.jpeg'
          }
        },
        {
          id: 1,
          name: 'Code4Startup',
          link: 'https://code4startup.com',
          media: '/img/code4startup.jpeg',
          upvote: 356,
          description: 'Code for startups',
          maker: {
            name: 'leo',
            avatar: '/img/leo.jpeg'
          }
        }
      ]
    }
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className="container">

            <ul className="product-list">
              <li className="product-item">
                <a href="#" className="upvote-button">
                  <span>
                    <i className="fa fa-sort-asc"></i>
                  </span>
                  {this.state.productList[0].upvote}
                </a>
                <img src={this.state.productList[0].media} alt="" className="product-item-media"/>
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.productList[0].name}</h2>
                  </a>
                  <p>{this.state.productList[0].description}</p>
                  <a href="#">
                    <img src={this.state.productList[0].maker.avatar} alt="" className="small-avatar"/>
                  </a>
                </section>
                <a href={this.state.productList[0].link} className="product-item-link">
                  <span>
                    <i className="fa fa-external-link"></i>
                  </span>
                </a>
              </li>
            </ul>

          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
