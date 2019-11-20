import React, { Component } from 'react';
import './App.css';
import {
  FormattedMessage, // 轉換不同語系字串
  FormattedNumber, // 數值多語系
  FormattedPlural, // 格式化的量詞 // https://smithjson.github.io/2018/12/15/i18n%E5%9C%A8react%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8/
  //　plural: 國際規範: http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
  FormattedDate,　// ex: 2019年11月20日 星期三
  FormattedTime, // ex: 上午10:34
  FormattedRelativeTime, // 顯示距今或一段的時間長度 回傳距今的時間
  // <FormattedRelative></FormattedRelative>  version: 2.xx, version 3.xx is <FormattedRelativeTime>
} from 'react-intl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: 'Eric',
      // unreadCount: 1000,
    };
  }

  render() {
    // const {name, unreadCount} = this.state;
    const { setLocale } = this.props;
    return (
      <div>
          <div>
            <button onClick={() => setLocale('en')}>英文</button>
            <button onClick={() => setLocale('zh-Hant')}>中文</button>
            <button onClick={() => setLocale('ja')}>日文</button>
          </div>
          <FormattedMessage
            id="home" // 抓個語系的key(home)的value
            // defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
            //             one {message}
            //             other {messages}
            //           }`}
            // values={
            //   {
            //     name: <b>{name}</b>,
            //     unreadCount
            //   }
            // }
          />
          <br />
          <FormattedDate
            value={new Date()}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
          {/* <!-- 使用多語系的時間格式 --> */}
          <br />

          <FormattedTime value={new Date()} />
          <br />

          <FormattedNumber
            value={1000000}
            style="unit"
            unit="kilobyte"
            unitDisplay="long"
          />
          {/* FormattedNumber 格式化量詞 https://smithjson.github.io/2018/12/15/i18n%E5%9C%A8react%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8/ */}
          <br />
          <FormattedRelativeTime value={new Date() - 60 * 10}/>

          <br />
          <FormattedPlural
            value={1} // 一個通常就不會量化 輸出就會是 one='message'
            style='ordinal'
            zero='zero' // 代表value=0 輸出'zero'
            one='message'
            // two="two"
            few="few" // value不超過一個固定區間 輸出'few'
            many="many" // value超過一個固定區間 輸出'few'
            other='messagessss' // 其他情況下
          />
          {/* FormattedPlural用法: https://www.jianshu.com/p/c57e000c2bbf  (中文語系較少用到 沒有英文量詞的量化 ex: apple => apples  ))) */}
      </div>
    );
  }
}

export default App;
