// declare module 'ramda' {
//     export function F(...rest: any[]): any;
//     export function T(...rest: any[]): any;
//     export function __(...rest: any[]): any;
//     export function add(...rest: any[]): any;
//     export function addIndex(...rest: any[]): any;
//     export function adjust(...rest: any[]): any;
//     export function all(...rest: any[]): any;
//     export function allPass(...rest: any[]): any;
//     export function always(...rest: any[]): any;
//     export function and(...rest: any[]): any;
//     export function any(...rest: any[]): any;
//     export function anyPass(...rest: any[]): any;
//     export function ap(...rest: any[]): any;
//     export function aperture(...rest: any[]): any;
//     export function append(...rest: any[]): any;
//     export function apply(...rest: any[]): any;
//     export function applySpec(...rest: any[]): any;
//     export function applyTo(...rest: any[]): any;
//     export function ascend(...rest: any[]): any;
//     export function assoc(...rest: any[]): any;
//     export function assocPath(...rest: any[]): any;
//     export function binary(...rest: any[]): any;
//     export function bind(...rest: any[]): any;
//     export function both(...rest: any[]): any;
//     export function call(...rest: any[]): any;
//     export function chain(...rest: any[]): any;
//     export function clamp(...rest: any[]): any;
//     export function clone(...rest: any[]): any;
//     export function comparator(...rest: any[]): any;
//     export function complement(...rest: any[]): any;
//     export function compose(...rest: any[]): any;
//     export function composeK(...rest: any[]): any;
//     export function composeP(...rest: any[]): any;
//     export function composeWith(...rest: any[]): any;
//     export function concat(...rest: any[]): any;
//     export function cond(...rest: any[]): any;
//     export function construct(...rest: any[]): any;
//     export function constructN(...rest: any[]): any;
//     export function contains(...rest: any[]): any;
//     export function converge(...rest: any[]): any;
//     export function countBy(...rest: any[]): any;
//     export function curry(...rest: any[]): any;
//     export function curryN(...rest: any[]): any;
//     export function dec(...rest: any[]): any;
//     export function defaultTo(...rest: any[]): any;
//     export function descend(...rest: any[]): any;
//     export function difference(...rest: any[]): any;
//     export function differenceWith(...rest: any[]): any;
//     export function dissoc(...rest: any[]): any;
//     export function dissocPath(...rest: any[]): any;
//     export function divide(...rest: any[]): any;
//     export function drop(...rest: any[]): any;
//     export function dropLast(...rest: any[]): any;
//     export function dropLastWhile(...rest: any[]): any;
//     export function dropRepeats(...rest: any[]): any;
//     export function dropRepeatsWith(...rest: any[]): any;
//     export function dropWhile(...rest: any[]): any;
//     export function either(...rest: any[]): any;
//     export function empty(...rest: any[]): any;
//     export function endsWith(...rest: any[]): any;
//     export function eqBy(...rest: any[]): any;
//     export function eqProps(...rest: any[]): any;
//     export function equals(...rest: any[]): any;
//     export function evolve(...rest: any[]): any;
//     export function filter(...rest: any[]): any;
//     export function find(...rest: any[]): any;
//     export function findIndex(...rest: any[]): any;
//     export function findLast(...rest: any[]): any;
//     export function findLastIndex(...rest: any[]): any;
//     export function flatten(...rest: any[]): any;
//     export function flip(...rest: any[]): any;
//     export function forEach(...rest: any[]): any;
//     export function forEachObjIndexed(...rest: any[]): any;
//     export function fromPairs(...rest: any[]): any;
//     export function groupBy(...rest: any[]): any;
//     export function groupWith(...rest: any[]): any;
//     export function gt(...rest: any[]): any;
//     export function gte(...rest: any[]): any;
//     export function has(...rest: any[]): any;
//     export function hasIn(...rest: any[]): any;
//     export function hasPath(...rest: any[]): any;
//     export function head(...rest: any[]): any;
//     export function identical(...rest: any[]): any;
//     export function identity(...rest: any[]): any;
//     export function ifElse(...rest: any[]): any;
//     export function inc(...rest: any[]): any;
//     export function includes(...rest: any[]): any;
//     export function indexBy(...rest: any[]): any;
//     export function indexOf(...rest: any[]): any;
//     export function init(...rest: any[]): any;
//     export function innerJoin(...rest: any[]): any;
//     export function insert(...rest: any[]): any;
//     export function insertAll(...rest: any[]): any;
//     export function intersection(...rest: any[]): any;
//     export function intersperse(...rest: any[]): any;
//     export function into(...rest: any[]): any;
//     export function invert(...rest: any[]): any;
//     export function invertObj(...rest: any[]): any;
//     export function invoker(...rest: any[]): any;
//     export function is(...rest: any[]): any;
//     export function isEmpty(...rest: any[]): any;
//     export function isNil(...rest: any[]): any;
//     export function join(...rest: any[]): any;
//     export function juxt(...rest: any[]): any;
//     export function keys(...rest: any[]): any;
//     export function keysIn(...rest: any[]): any;
//     export function last(...rest: any[]): any;
//     export function lastIndexOf(...rest: any[]): any;
//     export function length(...rest: any[]): any;
//     export function lens(...rest: any[]): any;
//     export function lensIndex(...rest: any[]): any;
//     export function lensPath(...rest: any[]): any;
//     export function lensProp(...rest: any[]): any;
//     export function lift(...rest: any[]): any;
//     export function liftN(...rest: any[]): any;
//     export function lt(...rest: any[]): any;
//     export function lte(...rest: any[]): any;
//     export function map(...rest: any[]): any;
//     export function mapAccum(...rest: any[]): any;
//     export function mapAccumRight(...rest: any[]): any;
//     export function mapObjIndexed(...rest: any[]): any;
//     export function match(...rest: any[]): any;
//     export function mathMod(...rest: any[]): any;
//     export function max(...rest: any[]): any;
//     export function maxBy(...rest: any[]): any;
//     export function mean(...rest: any[]): any;
//     export function median(...rest: any[]): any;
//     export function memoizeWith(...rest: any[]): any;
//     export function merge(...rest: any[]): any;
//     export function mergeAll(...rest: any[]): any;
//     export function mergeDeepLeft(...rest: any[]): any;
//     export function mergeDeepRight(...rest: any[]): any;
//     export function mergeDeepWith(...rest: any[]): any;
//     export function mergeDeepWithKey(...rest: any[]): any;
//     export function mergeLeft(...rest: any[]): any;
//     export function mergeRight(...rest: any[]): any;
//     export function mergeWith(...rest: any[]): any;
//     export function mergeWithKey(...rest: any[]): any;
//     export function min(...rest: any[]): any;
//     export function minBy(...rest: any[]): any;
//     export function modulo(...rest: any[]): any;
//     export function move(...rest: any[]): any;
//     export function multiply(...rest: any[]): any;
//     export function nAry(...rest: any[]): any;
//     export function negate(...rest: any[]): any;
//     export function none(...rest: any[]): any;
//     export function not(...rest: any[]): any;
//     export function nth(...rest: any[]): any;
//     export function nthArg(...rest: any[]): any;
//     export function o(...rest: any[]): any;
//     export function objOf(...rest: any[]): any;
//     export function of(...rest: any[]): any;
//     export function omit(...rest: any[]): any;
//     export function once(...rest: any[]): any;
//     export function or(...rest: any[]): any;
//     export function otherwise(...rest: any[]): any;
//     export function over(...rest: any[]): any;
//     export function pair(...rest: any[]): any;
//     export function partial(...rest: any[]): any;
//     export function partialRight(...rest: any[]): any;
//     export function partition(...rest: any[]): any;
//     export function path(...rest: any[]): any;
//     export function pathEq(...rest: any[]): any;
//     export function pathOr(...rest: any[]): any;
//     export function pathSatisfies(...rest: any[]): any;
//     export function pick(...rest: any[]): any;
//     export function pickAll(...rest: any[]): any;
//     export function pickBy(...rest: any[]): any;
//     export function pipe(...rest: any[]): any;
//     export function pipeK(...rest: any[]): any;
//     export function pipeP(...rest: any[]): any;
//     export function pipeWith(...rest: any[]): any;
//     export function pluck(...rest: any[]): any;
//     export function prepend(...rest: any[]): any;
//     export function product(...rest: any[]): any;
//     export function project(...rest: any[]): any;
//     export function prop(...rest: any[]): any;
//     export function propEq(...rest: any[]): any;
//     export function propIs(...rest: any[]): any;
//     export function propOr(...rest: any[]): any;
//     export function propSatisfies(...rest: any[]): any;
//     export function props(...rest: any[]): any;
//     export function range(...rest: any[]): any;
//     export function reduce(...rest: any[]): any;
//     export function reduceBy(...rest: any[]): any;
//     export function reduceRight(...rest: any[]): any;
//     export function reduceWhile(...rest: any[]): any;
//     export function reduced(...rest: any[]): any;
//     export function reject(...rest: any[]): any;
//     export function remove(...rest: any[]): any;
//     export function repeat(...rest: any[]): any;
//     export function replace(...rest: any[]): any;
//     export function reverse(...rest: any[]): any;
//     export function scan(...rest: any[]): any;
//     export function sequence(...rest: any[]): any;
//     export function set(...rest: any[]): any;
//     export function slice(...rest: any[]): any;
//     export function sort(...rest: any[]): any;
//     export function sortBy(...rest: any[]): any;
//     export function sortWith(...rest: any[]): any;
//     export function split(...rest: any[]): any;
//     export function splitAt(...rest: any[]): any;
//     export function splitEvery(...rest: any[]): any;
//     export function splitWhen(...rest: any[]): any;
//     export function startsWith(...rest: any[]): any;
//     export function subtract(...rest: any[]): any;
//     export function sum(...rest: any[]): any;
//     export function symmetricDifference(...rest: any[]): any;
//     export function tail(...rest: any[]): any;
//     export function take(...rest: any[]): any;
//     export function takeLast(...rest: any[]): any;
//     export function takeLastWhile(...rest: any[]): any;
//     export function takeWhile(...rest: any[]): any;
//     export function tap(...rest: any[]): any;
//     export function test(...rest: any[]): any;
//     export function then(...rest: any[]): any;
//     export function times(...rest: any[]): any;
//     export function toLower(...rest: any[]): any;
//     export function toPairs(...rest: any[]): any;
//     export function toPairsIn(...rest: any[]): any;
//     export function toString(...rest: any[]): any;
//     export function toUpper(...rest: any[]): any;
//     export function transduce(...rest: any[]): any;
//     export function transpose(...rest: any[]): any;
//     export function traverse(...rest: any[]): any;
//     export function trim(...rest: any[]): any;
//     export function tryCatch(...rest: any[]): any;
//     export function type(...rest: any[]): any;
//     export function unapply(...rest: any[]): any;
//     export function unary(...rest: any[]): any;
//     export function uncurryN(...rest: any[]): any;
//     export function unfold(...rest: any[]): any;
//     export function union(...rest: any[]): any;
//     export function unionWith(...rest: any[]): any;
//     export function uniq(...rest: any[]): any;
//     export function uniqBy(...rest: any[]): any;
//     export function uniqWith(...rest: any[]): any;
//     export function unless(...rest: any[]): any;
//     export function unnest(...rest: any[]): any;
//     export function until(...rest: any[]): any;
//     export function update(...rest: any[]): any;
//     export function useWith(...rest: any[]): any;
//     export function values(...rest: any[]): any;
//     export function valuesIn(...rest: any[]): any;
//     export function view(...rest: any[]): any;
//     export function when(...rest: any[]): any;
//     export function where(...rest: any[]): any;
//     export function whereEq(...rest: any[]): any;
//     export function without(...rest: any[]): any;
//     export function xprod(...rest: any[]): any;
//     export function zip(...rest: any[]): any;
//     export function zipObj(...rest: any[]): any;
//     export function zipWith(...rest: any[]): any;
//     export function thunkify(...rest: any[]): any;
// }
