import React from 'react';
import {
  buyProduct,
} from '../redux/actions';

class BasketComplect extends React.Component {
  static defaultProps = {
    top: 0,
    left: 0,
    products: [],
  }
  buyProduct = (product, e) => {
    e.preventDefault();
    this.props.dispatch(buyProduct(product));
  }
  render() {
    if (!this.props.products.length) {
      return false;
    }
    return (
      <div id="bzu" style={{ position: 'absolute', right: 0, top: this.props.top, width: '30%' }}>
        <div className="b-prod-recomendation">
          <div className="b-prod-recomendation__title">
            Рекомендуем c этим товаром
          </div>
          <section className="b-prod-recomendation__collection">
            {this.props.products.map((product, i) =>
              <div key={i} className="b-prod-recomendation__el">
                <div className="b-prod-rec">
                  <div className="b-prod-rec__box-1">
                    <div className="b-prod-rec__pic-box">
                      <a className href={product.href}>
                        <img className="b-prod-rec__img" src={product.pic} alt />
                      </a>
                    </div>
                  </div>
                  <div className="b-prod-rec__box-2">
                    <div className="b-prod-rec__name">
                      <a className="b-prod-rec__lnk" href={product.href}>
                        {product.brand} {product.model} {product.modification}
                      </a>
                    </div>
                    <div className="b-prod-rec__price">
                      <b>{product.price}</b> руб.
                    </div>
                    <div>
                      <a onClick={this.buyProduct.bind(this,product)}
                        className="b-prod__in-basket b-prod-spec__in-basket" href=""
                      >
                        в корзину
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
          {/*{false && <footer className="b-prod-recomendation__footer">
            <div className="b-prod-recomendation__buy-box">
              <a className="b-button b-button_basket-mini" href>В корзину </a>
            </div>
            <div className="b-prod-recomendation__price-box">
              <div className="b-prod-recomendation__old-price">11 902 руб.</div>
              <div className="b-prod-recomendation__price">
                <span className="b-prod-recomendation__total-price">17 680</span>
                руб.
              </div>
            </div>
          </footer>}*/}
        </div>
      </div>
    );
  }
}

export default BasketComplect;
