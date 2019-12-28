---
title: "Catching up with the past wisdom 11th Feb '16"
date: 2016-02-11
tags:
  - javascript
  - joomla
  - js
  - lessons learnt the hard way
  - mysql
  - php
  - virtuemart
layout: layouts/post.njk
---
Continued from the previous part.

Just then, I learnt, `<code></code>` does not escape html tags. Instead, one must use `&lt;div&gt;`. (In fact, the exercise of typing the last line is more fun indeed.

> edit 2018-1-7: now that I have migrated to _ghost_, backticks escapes special characters.

But I digress. Continuing on from the last part.

29thJan16, Here’s what I wrote:

*   Problems as soon as I loaded xampp and loaded the font page. Flex box is broken. After much trouble shooting, it seems `flex-basis` is not exactly the same as `width`. The problem is that without setting `width` (or perhaps `max-width`), the browser automatically sets the width to be 2000px, thus stretching out the entire div. (original design had 3 child-divs in a parent div).
*   Second problem: I changed the PHP file, and now, the update and delete button in virtuemart cart no longer works.

> Firstly, I stumbled across this thread: [VM Forum](http://forum.virtuemart.net/index.php?topic=111410.0), and the solution (try a different theme) works. This narrowed the problem. So I was sure it was one of the modification I did to the PHP that ruined it. The problem is, I made so many modifications, and every one of them seems plausible. and I was not willing to undo my hours of work.Then, when I was comparing the directory and file differences between the theme that works and the one that does not work, I found this line of code:

    <a class="vmicon vm2-remove_from_cart"
    title=">?php echo JText::_ ('COM_VIRTUEMART_CART_DELETE') ?>" align="middle"
    href=">?php echo JRoute::_ ('index.php?
    option=com_virtuemart&view=cart&task=delete&cart_virtuemart_product_id=' . $prow->cart_item_id) ?>">
    </a>
    

> which led me to `joomla/components/com_virtuemart/assets/js/dynupdate.js`, which was included in the header. I felt at the time, on line 165 was the key, as it described a function `Virtuemart.updDynFormListener`. I inserted a `console.log` to try to catch the activation of the codes, and it seems for the theme that works, it is triggered twice and for one that does not work, it is triggered once.  
> And so, the mystery continues. Checked the source codes for the theme that worked and theme that does not work, they are identical.  
> Ok, false alarm, the `find('[*data-dynamic-update="1"]')` finds only 2 items, the checkout button and the shipping/billing address button. This is why on the one that works, it triggers twice.  
> at long last, `vmsite.js`, let’s hope it’s not another false alarm.  
> hmm… bizarre. The console.log seems to trigger on page load…

Ok, I am an idiot… When I was changing the PHP codes around, I moved the `<form>` to AFTER the update/delete button. So the update/delete buttons. I could only imagine the event listener was attached via the `<form>` tag. I moved it to a better place, and it is working as intended.

*   1stFeb16, played around with Akeeba. Successfully moved the site from localhost to its new home online. This can allow my client to see the final product. Somehow forgot the username and password for the old MySql database. After several unsuccessful attempts, I decided to create a new one. The old db had nothing in it. I should drop it when I get a chance.
