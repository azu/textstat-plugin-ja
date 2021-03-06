// LICENSE : MIT
"use strict";
import {TextLintCore} from "textlint";
import rule from "../src/rules/share-of-char-type";
import assert from "power-assert"
describe("share-of-char-type", function () {
    it("should data", function () {
        let textlint = new TextLintCore();
        textlint.setupRules({
            "share-of-char-type": rule
        });
        return textlint.lintText("あaア亜あaア亜").then(results => {
            assert(results.messages.length == 1);
            var message = results.messages[0];
            assert.deepEqual(message.data, {
                "title": "文字種",
                "ひらがな": "25%",
                "カタカナ": "25%",
                "漢字": "25%",
                "アルファベット": "25%"
            });
        });
    });
});