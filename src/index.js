import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(React.createElement('h1', {}, 'hello, world'), document.getElementById('root'))
// ReactはSPA(シングルページアプリケーション)
// 一つのHTMLを読み込んで、コンテンツの入れ替えとかページ遷移を全てjsで処理していく