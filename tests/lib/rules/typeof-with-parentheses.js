/**
 * @fileoverview typeof should be function-like
 * @author Vlad Dziuba
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/typeof-with-parentheses"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("typeof-with-parentheses", rule, {

    valid: [
      { code: "typeof(4)" },
    ],

    invalid: [
        {
            code: "typeof 4",
            errors: [{
                message: "typeof should be used as function, with parentheses",
                type: "UnaryExpression"
            }]
        }
    ]
});
