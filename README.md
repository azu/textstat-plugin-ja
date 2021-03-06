# textstat-plugin-ja

A japanese plugin for [azu/textstat](https://github.com/azu/textstat "azu/textstat").

[textstat](https://github.com/azu/textstat "azu/textstat")で使える日本語向けの統計ツール集。

## Installation

    $ npm install textstat-plugin-ja textstat -g

## Usage

    $ textstat --plugin ja README.md
    
`--plugin ja` と指定する事で読み込まれます。


または、`.textstatrc` の `"plugins"` で指定することで、コマンドラインオプションを省略できます。

```
{
    "plugins":[
        "ja"
    ]
}
```

    $ textstat README.md

Output:

![image](https://monosnap.com/file/OLdBK9v5YjwL4tjb0f8gvQZy5LKBCt.png)

## Rules

- `share-of-char-type`: ひらがな、カタカナ、漢字、アルファベットの利用率を表示
- `tateishi-level`: [日本文の読みやすさの評価式](https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=37773&item_no=1&page_id=13&block_id=8 "日本文の読みやすさの評価式")を使った文章の読みやすさのレベル表示
    - 平均が50、標準偏差が10が元となる値で高いほど読みやすい傾向
    - 文章の量が少ないと正しい値が出ないことがあります
    - [読みやすさの評価指標（2） - 読書的な何か。](http://doksyo-tek.hatenablog.com/entry/2015/05/19/104050 "読みやすさの評価指標（2） - 読書的な何か。")
- `ranking-meishi`: 利用されている名詞TOP 10

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
