#Mission Control
An application that maps people to missions, innovations, and project objectives. Inspired by actual enterprise applications and their shortcomings from my experience as a management consultant. Built with Angular 2 and TypeScript. Uses sample data from NASA and other space agencies. Content sourced from Wikipedia. 

## Modules in progress
* Feature
  * Personnel

##Modules for future
* Feature
  * Projects
    * Available Talent
    * Organizational Units
    * Vendors
    * External Organizations
  * Estimation
  * Requirements
  * Business Analysis

##UI
Using Bootstrap 3. Sucked it up and installed jQuery so that I can use the Bootstrap JavaScript Plugins.

##DevNotes

###Routing
The `NavbarComponent` loads `app.routing.ts` from the `/app` root dir in order to gain access to `routerLink`. 

How do I get the navbar module to handle root level navigation without making it the parent for everything else?

How to I coordinate between routes handled by the server and routes handled by NG.
