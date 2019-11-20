import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';

// addLocaleData([ react-intl 3.0 已經棄用
// ])
import en from './i18n/en.js'
import zh from './i18n/zh.js'
import ja from './i18n/ja.js'

// https://pjchender.blogspot.com/2019/07/react-intl-react-i18n.html
// https://linyencheng.github.io/2017/09/21/react-intl/
// https://ithelp.ithome.com.tw/articles/10207442

const Root = () => {
  const [locale, setLocale] = useState(navigator.language);
  let messages;
  // 根據使用者選擇的語系 locale 切換使用不同的 messages
  if (locale.includes('zh')) {
    messages = zh;
  } else if (locale.includes('ja')) {
    messages = ja;
  } else {
    messages = en;
  }
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      defaultLocale="en"
      messages={messages}
    > 
      <div>{`初始語系: ${navigator.language}`}</div>
      <div>{`當前網站使用語系: ${locale}`}</div>
      <App setLocale={setLocale} />{/* key => 切換語系後重新渲染components */}
    </IntlProvider>
  );
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
