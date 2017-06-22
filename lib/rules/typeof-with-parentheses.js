/**
 * @fileoverview typeof should be function-like
 * @author Vlad Dziuba
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "typeof should be function-like",
            category: "syntax",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here
        const sourceCode = context.getSourceCode();

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
          "UnaryExpression"(node) {
            const operator = 'typeof';
            if (node.operator !== operator) return;
            const typeofText = sourceCode.getText(node);
            const argIndex = node.argument.range[0] - node.range[0];
            const between = typeofText.slice(operator.length, argIndex);
            if (between.indexOf('(') === -1) {
              const message = 'typeof should be used as function, with parentheses';
                context.report({ message, node });
            }
          },
          // give me methods

        };
    }
};
