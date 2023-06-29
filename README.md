<h2>Online Resume Template</h2>

<pre>
⭐ Easy to use online resume application to showcase your resume details of introduction, interests, work history and projects.
</pre>

 <img src="https://img.shields.io/badge/-mobile friendly-blue" alt="mobile friendly"/> &nbsp; &nbsp; <img src="https://img.shields.io/badge/-json fetched data-blue" alt="json fetched data"/> &nbsp; <img src="https://img.shields.io/badge/-minimalistic-blue" alt="minimalistic"/> &nbsp; <img src="https://img.shields.io/badge/-expandable-blue" alt="expandable"/>

<br/>

Live <a href="https://gayathrirajendran.github.io/resume/"><strong>here</strong></a>

<h3>How to use the application to have your own resume website hosted on Github</h3>

1. Clone or fork project.
2. Replace values in resume.json (public\resume.json)
3. Install required dependencies with `npm install`.
4. Remove `homepage` entirely from `package.json` or set it to single dot. 

```
// package.json
{
  "name": "resume",
  "homepage": "https://gayathrirajendran.github.io/resume/",   <-- replace this
  "version": "0.1.0",
  "private": true,
  "dependencies": {
  ...
}
```

5. `npm start` project and customize it.
6. Deploy on github-pages using `npm run deploy` command.

<!-- Objective -->
<!-- 
[
1. Create form
2. Lazy loading
3. Code splitting, web pack
4. PWA
5. routing
6. Suspense
7. publish as npm library
8. module federation
10. a usable profile
11. redux, signals
12. styled components

Requirements

A simple resume on the lines of https://bold.pro/my/gayathri-rajendran-230430032221 and linked in profile
] -->