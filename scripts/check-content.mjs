import assert from 'node:assert/strict';
import { QUESTIONS } from '../questions.js';
assert.equal(QUESTIONS.length,48);
assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,48);
for(const q of QUESTIONS){
 assert.ok(['length','weight','distance','mix'].includes(q.course),q.id);
 assert.ok([1,2].includes(q.level),q.id);
 assert.ok(q.percent>=0&&q.percent<=100&&q.percent%5===0,q.id);
 assert.equal(q.result,q.total*q.percent/100,`${q.id}: remaining quantity`);
 const factor=q.baseUnit==='cm'&&q.convertUnit==='m'?100:1000;
 assert.equal(q.convertValue,q.result/factor,`${q.id}: unit conversion`);
 assert.equal(q.choices.length,3,q.id);
 assert.equal(new Set(q.choices).size,3,q.id);
 const normalized=q.choices[q.answer].replaceAll(/[,\s]/g,'');
 assert.equal(normalized,`${q.result}${q.baseUnit}·${q.convertValue}${q.convertUnit}`,`${q.id}: correct choice`);
 assert.ok(q.explain.length>=2,q.id);
}
for(const course of ['length','weight','distance','mix'])for(const level of [1,2])assert.equal(QUESTIONS.filter(q=>q.course===course&&q.level===level).length,6,`${course}/${level}: five-question rounds`);
console.log('PASS: 48 story questions, all quantities, conversions, answers and 8 pools');
