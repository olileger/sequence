/**
 * Goal: help to define the class diagram to build
 * low code control structure according to how it works
 * as a real JavaScript instructions.
 */


// UnaryCondition
// <operator><rightValue>
// - rightValue: variable, inline variable (input value)
// - operator: !
//
// ex: if (!true)


// BinaryCondition
// <leftValue> <operator> <rightValue>
// - leftValue: variable, inline variable (input value)
// - rightValue: variable, inline variable (input value)
// - operator: == | != | < | <= | > | >=
//
// ex: if (true == true)
// ex: if (true != false)
// ex: if (0 < 1)
// ex: if (0 <= 1)
// ex: if (0 > 1)
// ex: if (0 >= 1)


let lval = true;
let rval = false;
if (((lval == true) && (rval != false)) || (rval == false))
{
 
}
// MultipleCondition
// <leftCond> <operator> <rightCond>
// - leftCond: UnaryCondition | BinaryCondition | MultipleCondition
// - rightCond: UnaryCondition | BinaryCondition | MultipleCondition
// - operator: AND | OR
//
// ex: if ((left cond) && (right cond))
// ex: if ((left cond) || (right cond))
// ex: if ((left cond aggregator) && (right cond))
// ex: if ((left cond aggregator) || (right cond))
// ex: if ((left cond aggregator) && (right cond aggregator))
// ex: if ((left cond aggregator) || (right cond aggregator))
// ex: if ((left cond) && (right cond aggregator))
// ex: if ((left cond) || (right cond aggregator))