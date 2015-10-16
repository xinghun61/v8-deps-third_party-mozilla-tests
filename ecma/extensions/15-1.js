/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Mozilla Communicator client code, released
 * March 31, 1998.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

gTestfile = '15-1.js';

/**
   File Name:          15.js
   ECMA Section:       15 Native ECMAScript Objects
   Description:        Every built-in prototype object has the Object prototype
   object, which is the value of the expression
   Object.prototype (15.2.3.1) as the value of its internal
   [[Prototype]] property, except the Object prototype
   object itself.

   Every native object associated with a program-created
   function also has the Object prototype object as the
   value of its internal [[Prototype]] property.

   Author:             christine@netscape.com
   Date:               28 october 1997

*/
var SECTION = "15-1";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Native ECMAScript Objects";

writeHeaderToLog( SECTION + " "+ TITLE);
/*
  new TestCase( SECTION,  "Function.prototype.__proto__", Object.prototype,   Function.prototype.__proto__ );
  new TestCase( SECTION,  "Array.prototype.__proto__",    Object.prototype,   Array.prototype.__proto__ );
  new TestCase( SECTION,  "String.prototype.__proto__",   Object.prototype,   String.prototype.__proto__ );
  new TestCase( SECTION,  "Boolean.prototype.__proto__",  Object.prototype,   Boolean.prototype.__proto__ );
  new TestCase( SECTION,  "Number.prototype.__proto__",   Object.prototype,   Number.prototype.__proto__ );
//    new TestCase( SECTION,  "Math.prototype.__proto__",     Object.prototype,   Math.prototype.__proto__ );
new TestCase( SECTION,  "Date.prototype.__proto__",     Object.prototype,   Date.prototype.__proto__ );
new TestCase( SECTION,  "TestCase.prototype.__proto__", Object.prototype,   TestCase.prototype.__proto__ );

new TestCase( SECTION,  "MyObject.prototype.__proto__", Object.prototype,   MyObject.prototype.__proto__ );
*/
new TestCase( SECTION,  "Function.prototype.__proto__ == Object.prototype", true,   Function.prototype.__proto__ == Object.prototype );
new TestCase( SECTION,  "Array.prototype.__proto__ == Object.prototype",    true,   Array.prototype.__proto__ == Object.prototype );
new TestCase( SECTION,  "String.prototype.__proto__ == Object.prototype",   true,   String.prototype.__proto__ == Object.prototype );
new TestCase( SECTION,  "Boolean.prototype.__proto__ == Object.prototype",  true,   Boolean.prototype.__proto__ == Object.prototype );
new TestCase( SECTION,  "Number.prototype.__proto__ == Object.prototype",   true,   Number.prototype.__proto__ == Object.prototype );
//    new TestCase( SECTION,  "Math.prototype.__proto__ == Object.prototype",     true,   Math.prototype.__proto__ == Object.prototype );
new TestCase( SECTION,  "Date.prototype.__proto__ == Object.prototype",     true,   Date.prototype.__proto__ == Object.prototype );
new TestCase( SECTION,  "TestCase.prototype.__proto__ == Object.prototype", true,   TestCase.prototype.__proto__ == Object.prototype );

new TestCase( SECTION,  "MyObject.prototype.__proto__ == Object.prototype", true,   MyObject.prototype.__proto__ == Object.prototype );


test();


function MyObject( value ) {
  this.value = value;
  this.valueOf = new Function( "return this.value" );
}
