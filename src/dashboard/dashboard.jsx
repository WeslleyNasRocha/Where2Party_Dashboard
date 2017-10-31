import React, { Component } from 'react';

import { connect } from 'react-redux';

import ContentHeader from '../common/templates/contentHeader';
import Content from '../common/templates/content';

import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

class Dashboard extends Component {
  render() {
    const { credit, debt } = this.props.summary;
    return (
      <div>
        <ContentHeader title='Dashboard' small='Vesion 1.0' />
        <Content>
          <Row>
            <ValueBox
              cols='12 4'
              color='green'
              icon='fa fa-bank'
              value={`R$ ${credit}`}
              text='Total de Creditos'
            />
            <ValueBox
              cols='12 4'
              color='red'
              icon='fa fa-credit-card'
              value={`R$ ${debt}`}
              text='Total de Debitos'
            />
            <ValueBox
              cols='12 4'
              color='blue'
              icon='fa fa-money'
              value={`R$ ${credit - debt}`}
              text='Valor Consolidado'
            />
          </Row>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.dashboard.summary,
});

export default connect(mapStateToProps)(Dashboard);
