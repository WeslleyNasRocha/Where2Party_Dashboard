import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#' icon='fa fa-dashboard' label='Dashboard' />
    <MenuTree label='Cadastro' icon='fa fa-edit'>
      <MenuItem path='#billingCycles' label='Ciclos de Pagamento' icon='fa fa-usd' />
    </MenuTree>
  </ul>
);
