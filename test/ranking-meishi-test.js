// LICENSE : MIT
"use strict";
import {TextLintCore} from "textlint";
import rule from "../src/rules/ranking-meishi";
import assert from "power-assert"
describe("ranking-meishi", function () {
    it("should data", function () {
        let textlint = new TextLintCore();
        textlint.setupRules({
            "share-of-char-type": rule
        });
        return textlint.lintText("名前").then(results => {
            assert(results.messages.length == 1);
            var message = results.messages[0];
            assert.deepEqual(message.data, {
                '名詞 Top 10': '名前: 1'
            });
        });
    });
});