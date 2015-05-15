This module helps you classify days in fixed days cycles.

Suppose you work three days and rest two, there is a cycle of five days, to
know if you work today do something as:

~~~javascript
var dma = require('dma');

// set initial date and the number of days on each cycle.
var cycle = dma('2015-05-14', 5);

function doWork (date) {
  return [0,1,2].indexOf(cycle(date)) !== -1;
}

console.log(doWork('2015-06-20')); // => true
console.log(doWork('2015-06-21')); // => false
~~~

# Time zones

In node dates are always UTC, but in the browser it will depend on the locale
of the client, so it is better to specify the full date in the initial field
like: `var cycle = dma('2015-05-14T00:00-0300', 5);`. Then you can query with
`cycle()` to get the actual (on the client locale time) congruence class.

# License

Copyright (C) 2015  Eloy Espinaco

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
