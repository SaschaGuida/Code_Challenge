# React Mid Level

## Scenario: You have to realize a website to list some movies, being able to filter them, and add some to a favorites list. The website must adhere to the designs provided to you by the design team, and must include a notification system.

### Problem: The webapp:

- must use NextJS 13

- must be responsive, but the design team didn’t give you specifications and the deadline is tight, so you have to put it together yourself
    cannot use a UI library/framework (no material UI, chakra and so on)

- expose two pages: one for listing movies (on the root path) where the user can choose their favorites (which should be saved locally), one for listing favorites and
    optionally remove them

- when the user clicks on the favorite icon, a notification must be shown on the page. This notification will automatically disappear after 5 seconds. If the user changes page 
    during this time, the notification should be persisted across navigation.

- the notification system must allow multiple notifications to be shown at the same time


# Resources:

- Figma UI: https://www.figma.com/file/fZFTBrIvWKGhAljjOBXKVg/Movies-list-exercise

- API endpoint: https://mttlioitimpeuzlwsgql.supabase.co/rest/v1/movies

- Auth custom header:

- { "apiKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dGxpb2l0aW1wZXV6bHdzZ3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MjM3MDAsImV4cCI6MjAwNjk5OTcwMH0.yEpNXeO-cwzp_tBNeITxr2RRytwbcVnMlarJs0cpNYY" }
Pagination example: https://mttlioitimpeuzlwsgql.supabase.co/rest/v1/movies?limit=10&offset=20



GraphQL endpoint: https://mttlioitimpeuzlwsgql.supabase.co/graphql/v1
Example query:

{
  moviesCollection {
    edges {
      node {
        id
        title
        year
        runtime
        genres
        director
        actors
        plot
        posterUrl
      }
    }
  }
}