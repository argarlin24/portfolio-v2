---
title: "SoCal Tides"
date: "2019-09-17"
position: 1
---

SoCal Tides uses data from the NOAA CO-OPS API to display daily and monthly tide data for three Southern California regions. Data is shown for San Diego, Los Angeles, and Santa Barbara. The motivation for this website stemmed from the lack of easy to access and free/ad-free tide information.

This site was built using JAM (JavaScript, APIs, Markup) Stack architecture. JAM Stack architecture creates fast and secure sites and dynamic apps served without web servers. The tools used are React, and Gatsby for front end structure, Styled Components for styling, the CO-OPS API for tide data, IndexDB/Dexie.js for caching data.

One of the early issues I ran into with this project was that I did not have control of the CO-OPS API. Requests to the API could take up to 20 seconds because it used simutaneously by many other NOAA applications. In order to avoid making requests to the API every time a page was loaded I used IndexDB with a wrapper called Dexie.js to cache the data returned from the API. Now the daily tide data only needs to be requested once per day, and the monthly tide data once per month. This greatly improved usability of the site, especially when chaning between regions and pages.

Finally, due to the production version of the website being static HTML, CSS, and JavaScript pages that are built out by Gatsby, the site is incredibly fast. As of, the time writing, the website scores a 100 on Google Lighthouse. Gatsby also provides the necessary framework for making the website a Progressive Web App that is downloadable and has offline capapilities.

Check it out [HERE](https://socaltides.netlify.com/).
