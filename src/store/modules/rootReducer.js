import { combineReducers } from 'redux';

import reserve from './reserve/reducer';

export default combineReducers({
  reserve,
  // os demais reducer, devem ser importado e listado aqui !!!
})