// LICENSE : MIT
"use strict";
import {getTokenizer} from "kuromojin";
export default function (context) {
    let { Syntax, getSource, report } = context;
    let tasks = [];
    let resultMap = {};
    return {
        [Syntax.Str](node){
            let task = getTokenizer().then(tokenizer => {
                let text = getSource(node);
                var tokens = tokenizer.tokenize(text);
                tokens.filter(token => {
                    return token.pos === "名詞" &&
                        token.pos_detail_1 !== "数" &&
                        token.pos_detail_1 !== "サ変接続";
                }).forEach(token => {
                    let meishi = token.surface_form;
                    if (!resultMap[meishi]) {
                        resultMap[meishi] = 0;
                    }
                    resultMap[meishi]++;
                });
            });
            tasks.push(task);
            return task;
        },
        [Syntax.Document + ":exit"](node){
            return Promise.all(tasks).then(()=> {
                let keysSorted = Object.keys(resultMap).sort(function (a, b) {
                    return resultMap[b] - resultMap[a];
                });
                let results = keysSorted.map(key => {
                    let value = resultMap[key];
                    return `${key}: ${value}`;
                });
                report(node, {
                    "名詞 Top 10": results.filter((key, index) => {
                        return index < 10;
                    }).join(", ")
                });
            });
        }
    }
}