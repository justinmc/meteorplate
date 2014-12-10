# Meteorplate

<table>
    <tr>
        <td>
            Technologies
        </td>
        <td>
            <a href="http://www.meteor.com">Meteor</a> 1.0, <a href="http://www.html5boilerplate.com/">HTML5 Boilerplate</a>, and <a href="https://github.com/EventedMind/iron-router">Iron Router</a>
        </td>
    </tr>
    <tr>
        <td>
            Meteor Packages Used
        </td>
        <td>
            meteor-platform, accounts-ui, accounts-password, iron:router
        </td>
    </tr>
    <tr>
        <td>
            Live Demo
        </td>
        <td>
            <a href="http://meteorplate.meteor.com/">meteorplate.meteor.com</a>
        </td>
    </tr>
</table>

This project aims to create a solid starting point for Meteor projects that want to use a routing system and pages.  Iron Router is used to swap page templates in and out of a container div.  Everything works reactively with Meteor's data binding.

This is a fork from an older project [Meteor Boilerplate](https://github.com/justinmc/meteor-boilerplate).

## Features

Sub-templates render things like the page structure and navbar reactively while routing handles the main page content.  Meteor's account system is used reactively in the navbar, and permissions are used to only allow access to certain pages for users that are logged in.

All of these features are demostrated in the demo, so check it out live at <a href="http://meteorplate.meteor.com/">meteorplate.meteor.com</a> or dive into the code to see how it all works.

### Google Analytics

Google Analytics support is also built in and ready to go.  Checkout the routes at `client/scripts/routes/routes.js` to see the implementation and enter your Analytics code.

## Usage

Just clone the repository, run `meteor` in the root directory, and start hacking in your own project like normal.  All that's provided is a starting point for your projects and a basic demo.

