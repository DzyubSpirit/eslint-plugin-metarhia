/**
 * @fileoverview Chaining syntax for api.module.method1().method2()
 * @author Vlad Dziuba
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/chaining"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("chaining", rule, {

    valid: [
        `
        api.module
          .method1()
          .method2();
        `
    ],

    invalid: [
        {
            code: "api.module.submodule.method1().method2();",
            errors: [{
                message: "Expected line break before `.method1`.",
                type: "Identifier"
            }]
        }
    ]
});
