/**
 * @fileoverview Chaining syntax for api.module.method1().method2()
 * @author Vlad Dziuba
 */
'use strict';

const astUtils = require('eslint/lib/ast-utils');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'Chaining syntax for api.module.method1().method2()',
            category: 'Chaining',
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        const options = context.options[0] || {};
        const ignoreChainWithDepth = options.ignoreChainWithDepth || 2;

        const sourceCode = context.getSourceCode();

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        /**
         * Gets the property text of a given MemberExpression node.
         * If the text is multiline, this returns only the first line.
         *
         * @param {ASTNode} node - A MemberExpression node to get.
         * @returns {string} The property text of the node.
         */
        const getPropertyText = (node) => {
            const prefix = node.computed ? "[" : ".";
            const lines = sourceCode.getText(node.property).split(astUtils.LINEBREAK_MATCHER);
            const suffix = node.computed && lines.length === 1 ? "]" : "";

            return prefix + lines[0] + suffix;
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "CallExpression:exit"(node) {
                const { callee, parent } = node;
                if (!parent || !parent.parent) return;

                if (parent.type === 'MemberExpression') {
                    const parentParent = parent.parent;
                    if (parentParent.type === 'CallExpression') {
                      if (callee.property.loc.start.line === parent.property.loc.end.line) {
                        context.report({
                            node: callee.property,
                            loc: callee.property.loc.start,
                            message: "Expected line break before `{{callee}}`.",
                            data: {
                                callee: getPropertyText(callee)
                            }
                        });

                      }
                    }
                  }
                //if (callee) {
                  //while (callee.object.type === 'CallExpression') {
                    //if (callee.property.loc.start.line === callee.object.loc.end.line) {
                      //context.report({
                          //node: callee.property,
                          //loc: callee.property.loc.start,
                          //message: "Expected line break before `{{callee}}`.",
                          //data: {
                              //callee: getPropertyText(callee)
                          //}
                      //});
                    //}
                    //callee = callee.callee;
                  //}
                //}

              //console.log(node.callee);
                //const callee = node.callee;
                //let parent = callee.object;
                //let depth = 1;
              //console.log(node.callee.type);
              //console.log(node.callee.loc);

                //while (parent && parent.callee) {
                    //depth += 1;
                    //parent = parent.callee.object;
                //}
                //called = false;


                //if (depth > ignoreChainWithDepth && callee.property.loc.start.line === callee.object.loc.end.line) {
                    //context.report({
                        //node: callee.property,
                        //loc: callee.property.loc.start,
                        //message: "Expected line break before `{{callee}}`.",
                        //data: {
                            //callee: getPropertyText(callee)
                        //}
                    //});
                //}
            }
        };
    }
};
