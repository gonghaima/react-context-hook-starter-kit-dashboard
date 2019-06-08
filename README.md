# a start point for context api & hook

<http://localhost:3000/>

Routing
Unit test
E2E test
pre commit check
linting check

TODO:

- [x] label on sub Header should display current filter
- [x] Dark mode - based on css mix-blend-mode
- [x] Hover on side menu, cover all area, instead of just text field
- [x] Smooth the font when in dark mode
- [x] Set up github pages
- [x] Nav and Main section display consistency in dark mode
- [x] The current item should be selected in nav
- [x] Fix font issue when toggle mix-blend-mode, using css font smooth
- [x] Evaluate useMemo
- [x] Main content and sidebar alignment need to be the same
- [x] Responsive - hide side nav
- [x] Routing
- [x] Try "sticky instead of fixed", check differences.
- [x] Unit test
- [x] Routing fix
- [ ] Layout abstraction
- [x] E2E test
- [x] pre commit check
- [x] linting check

useMemo - performance improvement

```javascript
const [count, setCount] = React.useState(0);
//const value = React.useMemo(() => [count, setCount], [count])
const value = React.useState(0);
return <CountContext.Provider value={value} {...props} />;
```
