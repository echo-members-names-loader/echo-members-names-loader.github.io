//  Copyright (c) 2020 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

/* eslint-disable no-eval */
const tape = require('tape')
const loader = require('../lib/index')

tape('should return the name of any member requested', (test) => {
  const someModule = eval(loader())

  test.equal(someModule.field1, 'field1')
  test.equal(someModule.fieldN, 'fieldN')
  test.end()
})

tape('should return false when member "__esModule" is requested', (test) => {
  const someModule = eval(loader())

  test.equal(someModule.__esModule, false)
  test.end()
})
