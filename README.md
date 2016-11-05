# Pseudo Select Drop Downs
These look like select elements but they are actually a collection of spans and uls that are styled to look like selects.
The advantage to this method is that they can be styled, unlike selects.

Each pseudo drop down consists of a set of spans and an unordered list wrapped in a div.  When an option on the pseudo select drop down list is clicked, the data in the 'data-option' attribute is copied to the value attribute of the corrisponding select element in the original form.  Whe n the form is submitted, it will submit the choice from the pseudo drop down.

These are minimully styled so that they can be inserted into an existing web page without a lot of hassle.