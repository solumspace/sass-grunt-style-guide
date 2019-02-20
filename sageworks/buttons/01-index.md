---
layout: component-category
group: sageworks-components
subgroup: sw-buttons
permalink: /sageworks/components/buttons/

title: Buttons
description:
---
<br>
Use buttons to trigger actions and links. Buttons contain a label indicating the action that will be performed when clicked; icons are not included in buttons.

****
## Writing Labels
Button labels are written in all uppercase:

&nbsp;&nbsp;&nbsp;&nbsp;**Do**  
&nbsp;&nbsp;&nbsp;&nbsp;![A correct uppercase button](/abrigo-patterns/images/button-uppercase.svg)

&nbsp;&nbsp;&nbsp;&nbsp;**Don't**  
&nbsp;&nbsp;&nbsp;&nbsp;![An incorrect camelcase button](/abrigo-patterns/images/button-lowercase.svg)

Button labels are as concise as possible while clearly describing the action that will occur:

&nbsp;&nbsp;&nbsp;&nbsp;**Do**  
&nbsp;&nbsp;&nbsp;&nbsp;![A correctly labeled button](/abrigo-patterns/images/button-runcreditanalysis.svg)

&nbsp;&nbsp;&nbsp;&nbsp;**Don't**  
&nbsp;&nbsp;&nbsp;&nbsp;![An incorrectly labeled button](/abrigo-patterns/images/button-export.svg)

****
## Button order
If multiple buttons are in the same row on a page, the primary action should normally be on the left. Ordering multiple buttons by primary and secondary actions becomes even more important when overlays are used.

Generally, buttons should order buttons from left-to-right as follows:
1. Affirmative action, e.g. Yes, Save, ‘Do this action’
2. Negative action, e.g. No, Cancel, Close, ‘Don’t do this action’

**Note:** If a button is indicates a direction in the flow of navigation, then the primary action may not always be to the left. For example, a `Back` button could be on the left and a `Next` button on the right, as in Loan Application's borrower-view.

****
## Mixing buttons and links
Buttons and links may be used jointly to show primary and secondary actions.

1. In the same row: primary actions, the buttons, would be placed to the left of the secondary actions, the links
2. If not in the same row, but closely related: primary actions, the buttons, would be placed above the secondary actions, the links

****
## Types of Buttons

![Types of Sageworks buttons](/abrigo-patterns/images/button-types.svg)


<!--
****

This is a demo of all styled elements in Jekyll Now.

[View the markdown used to create this post](https://raw.githubusercontent.com/barryclark/www.jekyllnow.com/gh-pages/_posts/2014-6-19-Markdown-Style-Guide.md).

This is a paragraph, it's surrounded by whitespace. Next up are some headers, they're heavily influenced by GitHub's markdown style.

## Header 2 (H1 is reserved for post titles)##

### Header 3

#### Header 4

A link to [Jekyll Now](http://github.com/barryclark/jekyll-now/). A big ass literal link <http://github.com/barryclark/jekyll-now/>

An image, located within /images

![an image alt text]({{ site.baseurl }}/images/jekyll-logo.png "an image title")

* A bulletted list
- alternative syntax 1
+ alternative syntax 2
  - an indented list item

1. An
2. ordered
3. list

Inline markup styles:

- _italics_
- **bold**
- `code()`

> Blockquote
>> Nested Blockquote

Syntax highlighting can be used by wrapping your code in a liquid tag like so:

{{ "{% highlight javascript " }}%}  
/* Some pointless Javascript */
var rawr = ["r", "a", "w", "r"];
{{ "{% endhighlight " }}%}  

creates...

{% highlight javascript %}
/* Some pointless Javascript */
var rawr = ["r", "a", "w", "r"];
{% endhighlight %}

Use two trailing spaces  
on the right  
to create linebreak tags  

Finally, horizontal lines

----
**** -->
