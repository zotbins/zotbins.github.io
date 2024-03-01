Landing page for Zotbins project (https://zotbins.github.io/)

# Includes
  - About us for the student team (ZerO Waste Anteaters or ZOWA)
  - Links to our blog and social media (YouTube, Instagram, etc)
  - Who our current team members are
  - Who our research advisors are
  - Who our project mentors are
  - Who our alumni are
  - Miscellaneous photos from Instagram
  - Our project partners

<br />

# How to Update Team Members, Mentors, and Research Advisors
- To update the ZotBins members shown in the Team page, go to `js/populateAlumni.js`, `js/populateMentors.js`, `js/populateResearchAdvistors.js`, and `js/populateTeamMembers.js`
    - To add a team member, go to `js/populateTeamMembers.js`
    - If a team member is no longer affiliated with ZotBins, move their data from `js/populateTeamMembers.js` to `js/populateAlumni.js`
- Inside those files, you will find an array of objects where each object corresponds to one member. The object adheres to a schema specified in the top of the file.

<br />

# Notes
  - I recommend running a prettify script to make sure the code is tidy and neat
    - In particular, if you are using the Sublime text editor, download and run the HTML-CSS-JS prettify script
    - Link here - https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify
    - Once it's installed, press "Ctrl+Shift+H" to prettify the HTML files!
