## Things I would have done given more time:
1. Implement a client side filter. I had initially built this with a client side filter but decided to try to filter using drizzle ORM since I had not used it before.
2. More styling. I spent most of my cleaning up the code and breaking things out into smaller, consumable chunks.  I toyed around with Tailwind a bit to clean up the UI (since I'd never used Tailwind before) but did the bare minimum. 
3. Got filtering by specialites working. I'm unfamiliar with drizzle ORM and its filtering and tried arrayContains but I know I need to query the JSON and didn't have time to research.
4. Phone numbers do not filter.  The field is a bigInt and comparing it to the searchTerm was causing me issues so I decided to figure it out after submission.
5. Implemented a debounce. I usually use underscores debounce for debouncing network calls.  The onChange hits the server too often.
6. Spent more time seeing if I can utilize useMemo and useCallback to optimize.
7. Add a unit testing framework.
8. Adding some state management (redux etc)
9. Implement something like RTKQuery if useful (not sure how this would work with NextJS so may not be relevant)

I haven't used NextJS in some time so I'm sure there are a million different optimizations I could do given time to read through the docs. 