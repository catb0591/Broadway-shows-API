Broadway Shows

You will be building a working API and front-end. This is part 1 of 2.

Create a new repo in GitHub for your project, make your instructor a collaborator, and clone it locally. Remember to work in and part-one-answer branch, not master

In this part of your project you will be building the front-end for your API site. The design and content of your front-end is up to you, the only requirements are that it provide documentation for using the API you will be building and that it be built using Pug

{
    theater:
    title: 
    type:
    runtime:
    awards:
    rating:

}
Get
/shows - all shows
/shows/findByTitle/:title
/shows/findByTheater/:theater
/shows/findByType/:type
/shows/findByAwards/:awards
/shows/findByRating/:rating

Post
/shows - Add a whole new show

Patch
/shows- update information for a show

Delete
/shows/:title - delete a show
