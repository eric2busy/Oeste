# Prompting guide: asking for Oeste UI

Oeste works best when the agent fetches the contract first and builds from it. These prompts get the right result the first time.

## The pattern

1. Name the skeleton (library + components).
2. Describe the delta (what changes from the stock component).
3. One request at a time.

## Examples

- "Build a pricing page with Topanga. Card plus Button plus Badge. Three tiers, middle one highlighted."
- "Add a settings dialog from Huntington. Dialog with a form inside, dark mode on."
- "Build a data table with Mesa. Table with sorting and row selection, ten rows of sample orders."
- "Give me a Topanga login form. Input plus Button, with error state on the password field."

## What not to ask

- "Build a dashboard" (no library, no components — the agent has to guess).
- "Make it look like Stripe" (Oeste has three looks; name one of them).
- "Use the blue button" (Oeste has no blue button; its colors come from the library's tokens).

## If you do not name a library

The agent picks the best fit and tells you which one. Topanga for warm editorial pages, Huntington for single-column minimal pages, Mesa for data and app UI. Say the library name if you have a preference.
