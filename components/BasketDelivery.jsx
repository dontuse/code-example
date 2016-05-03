import React from 'react';
import BasketСourierDeliveryTab from './BasketCourierDeliveryTab.jsx';
import Control_type_transport from './Control_type_transport.jsx';
import BasketTKDeliveryTab from './BasketTKDeliveryTab.jsx';
import {
  changeDelivery,
  changeDeliveryStore,
} from '../redux/actions';

class BasketDelivery extends React.Component {
  selectTab1 = (e) => {
    e.preventDefault();
    this.props.dispatch(changeDelivery('Доставка курьером'));
  }
  selectTab2 = (e) => {
    e.preventDefault();
    this.props.dispatch(changeDelivery('Самовывоз'));
  }
  selectTab3 = (e) => {
    e.preventDefault();
    this.props.dispatch(changeDelivery('Отправка транспортной компанией'));
  }
  changeStore = (store) => {
    this.props.dispatch(changeDeliveryStore(store));
  }
  render() {
    let tab1;
    let tab2;
    let tab3;
    let tabBox1;
    let tabBox2;
    let tabBox3;

    if (this.props.delivery['Доставка курьером']) {
      const active = this.props.delivery['Доставка курьером'].selected;
      tab1 =
      (<a onClick={this.selectTab1}
        data-data={this.props.delivery['Доставка курьером']}
        className={
          !active ?
          'b-delivery__lnk b-delivery__lnk_t-1' : 'b-delivery__lnk b-delivery__lnk_t-1 active'
        }
        href=""
      >
        <span className="b-delivery__txt-1">Доставка курьером</span>
        <span className="b-delivery__txt-2">По тарифам курьерской компании</span>
      </a>);
      if (active) {
        tabBox1 = (
          <BasketСourierDeliveryTab
            dispatch = {this.props.dispatch}
            {...this.props.delivery['Доставка курьером']}
            addressComplete={this.props.streets}
            streets = {this.props.streets}
          />
        );
      }
    }
    if (this.props.delivery['Самовывоз']) {
      const active = this.props.delivery['Самовывоз'].selected;
      tab2 = (<a onClick={this.selectTab2} className={
          !active ?
          'b-delivery__lnk b-delivery__lnk_t-2' : 'b-delivery__lnk b-delivery__lnk_t-2 active'
        } href="#"
      >
        <span className="b-delivery__txt-1">Самовывоз в {this.props.city.name_where}</span>
        <span className="b-delivery__txt-2">В пунктах выдачи</span>
      </a>);
      if (active) {
        tabBox2 =
        (<section className="b-delivery__tab active">
          <div className="b-delivery__box">
            {this.props.delivery['Самовывоз'].store.map((val, index) =>
                <div key={index} className="b-radio">
                  <input onChange={this.changeStore.bind(this, val.name)}
                    checked={val.selected}
                    className="b-radio__inp" name="sdsladsad" id={val.name} type="radio"
                  />
                  <label htmlFor={val.name} className="b-radio__lab">
                    {val.address}
                  </label>
                </div>
            )
          }
          </div>
        </section>);
      }
    }
    if (this.props.delivery['Отправка транспортной компанией']) {
      const active = this.props.delivery['Отправка транспортной компанией'].selected;
      tab3 = (<a onClick={this.selectTab3} className={
          !active ?
          'b-delivery__lnk b-delivery__lnk_t-2' : 'b-delivery__lnk b-delivery__lnk_t-2 active'
        } href="#"
      >
        <span className="b-delivery__txt-1">Отправка транспортной компанией</span>
        <span className="b-delivery__txt-2">По тарифам транспортной компании</span>
      </a>);
      tabBox3 =
      (<section className="b-delivery__tab active">
        <Control_type_transport
          company={this.props.delivery['Отправка транспортной компанией'].transport_company}
          changeDeliveryCompany={this.props.changeDeliveryCompany}
          dispatch = {this.props.dispatch}
        />
        <BasketTKDeliveryTab
          {...this.props.delivery['Отправка транспортной компанией']}
          deliveryInfo={this.props.deliveryInfo}
          addressComplete={this.props.streets}
          dispatch = {this.props.dispatch}
          deliveryTkIsFetching = {this.props.deliveryTkIsFetching}
        />
      </section>);
    }
    return (
      <div className="b-delivery">
        <nav className="b-delivery__nav">
          {tab2}
          {tab1}
          {tab3}
        </nav>
        <div className="b-delivery__tabs">
          {tabBox2}
          {tabBox1}
          {tabBox3}
        </div>
      </div>
    );
  }
}

export default BasketDelivery;
