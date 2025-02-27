# to_do_list
I'm creating a to do list for The Odin Project. However because there's lots of creative freedom, I want to create one that I'm going to use myself. In particular I want to see how I would improve the product after contiinued used.
Like what if I say, hmm this is okay but I want this. I this is good practice as a startup non-engineer.

The purpose of the assignment is to tie various skills from The Odin Project javascript course together.
Skills like webpack. SOLID coding. Classes, modules, factory functions etc.

## Context
I need a temporary minimlaist to do list. Super easy to make, minimal editing. No image support. just a quick to do list 
that I could spin up when i'm coding or in a work mood. Instead of using gmail all of the time.

## Actual specs
Have projects. two=> stuff to do today, stuff to do later
To do list item
* title-done
* description-done
* Due Date-done
* priority-done
* Handle dates-I'm guessing for manipulating it-done
* write somewhat SOLID code i.e. different files and import/export maanagement
* border when i select today or tmr(optional) 

-Also we're trying to avoid feature creep 
-While on TOP it says users should create new projects and choose where it goes to. I don't need that. And in fact
I think it's annoying because I would never want to use this as my project management software. For complex projects
I would rather use notion or an actual dashboard. So I'm skipping this.

### psuedo code
#### Home page
HTML
* Side bar
* add task button
#### Javascript
* Array[][] with object detail(title, desc, prior, etc)-console for 1,2 items-done
* js file to create new items and put it in an array -done
* Connect dom js file- be able to create new items -done
* logic file that connects array.js and item_creating.js-done
* js file that removes the items in the dom
* js file that upload new details in the dom

#### Client/server stuff
* local storage
* webpack
* add git ignore file

#### CSS
* grid pattern

#### More js stuff later
* add complete and delete button(which is probably a get all element script)
-we're goint to deal with date later
-add the div for the top part later
-Note that the "+" button, id has to be changed when it's clicked on today or tmr
	-Then all items will have class of "today/later", unless we want to do another array
	-i.e. array for today, array for tmr. Like the if statement
#### optional
* automatically have templates=> to do list which we'll do later after this is entirely done
* change priority by clicking the color
--technically a delete a =nd a complete button are two sides of the same coin. and it's not like we can cross them out and delete them later. eh we're keeping it,becaues we can mess with the transparency
