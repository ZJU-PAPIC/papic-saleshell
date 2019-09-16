import React from "react";
import ReactDOM from "react-dom";
import Router from './Router';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(<Router/>, document.getElementById('root'))
