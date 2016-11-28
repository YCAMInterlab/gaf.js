## WebGL Application Framework

## Synopsis
gaf.jsは、ProcessingやOpenFrameworks、Cinderといった環境を作るための、Appクラスから構成されるミニマルなWebGLアプリケーション フレームワーク（ES6）です。HTMLキャンバスや有効なWebGLコンテキストの設定、requestAnimationFrame（gaf.js内で使用使用）でのドローループの設定などをあまり気にせず、設定やドロー方法を無効にし、そのまま取りかかることができます。

## Code Example
このライブラリには、無視するべき一つのkeyクラスが含まれています:  
```js
import App from 'gaf';

class MyApp extends App {
  constructor( props ) {
    super( props );
    // runs before setup   
  }
  setup  = () => { /* setup app  */ };
  update = () => { /* update app */ };
  render = () => { /* render app */ };    
};
```

アプリケーションを実行するには、以下のようい新しいインスタンスを作成してください:  
```js
// continuing from the example above
var myApp;
if( myApp == undefined ) {
  myApp = new myApp();
}
```

WebGLコンテキスト、またはHTMLキャンバスにアクセスする必要がある場合は、以下の方法をとってください:
```js
// continuing from the example above
var gl = myApp.getContext();
var canvas = myApp.getCanvas();
```        

## Motivation
このライブラリは、コンピュテーショナル デザイン、及びパラメトリック デザインをウェブに広めようとする、大きなライブラリのプロジェクト/シリーズの一部です。
高度なコンピューテーショナル デザインや3Dモデルの出力、Gコード生成、CNCフライス加工ツール用のパスや、レーザー切断用のパスの生成、ロボット運動計画などを可能にする、全ての複雑な形態機能を備えた数学的頭脳になることを目的としています。

## Build Requirements
node.js (4.4.0+) & npm

gaf.js は ES6 でビルドされています。なのでそのままでは、ES5 上では動きません。 ES5 を使用する場合は、以下の操作を行って下さい:
```json
"browserify": {
  "transform": [ [ "babelify", { "presets": [ "es2015", "stage-0" ] } ] ]
}
```

## Installation
このライブラリをプロジェクトに追加するためには、以下の操作を行って下さい:
```
npm install --save https://github.com/YCAMInterlab/gaf.js.git
```

もしく以下の方法でも追加できます:  
```
npm install --save gaf
```

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
