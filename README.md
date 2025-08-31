# Bet365-Clone Next.js – Locale Layout Briefing
# همه کد ها روی برنچ master بار گذاری شده


## Overview
Implemented dynamic locale routing (`/[locale]`) in Next.js 15 with client-side active state and multi-language support (`en`, `de`).  

---

## Key Changes
1. **Server Layout (`[locale]/layout.tsx`)**  
   - Async function fetching translations via `getDictionary`.  
   - Passes `locale` and `dict` to client wrapper.

2. **Client Wrapper (`LocaleLayoutClientWrapper.tsx`)**  
   - Handles state (`active`) and context (`ActiveContext`).  
   - Wraps `Header`, `SideBar`, `Banner`, `Footer`.  
   - Uses Redux for global state.

3. **Header Component**  
   - Added `currentLocale` prop for TypeScript compliance.

---

## Issues & Fixes
| Issue | Fix |
|-------|-----|
| `params.locale` not awaited | Used `async` layout + `await getDictionary(params.locale)` |
| `useActive must be used within ActiveContext.Provider` | Wrap all children in `ActiveContext.Provider` |
| TypeScript `currentLocale` error | Added typed prop to Header |
| Build fails with LayoutConfig | Async layout delegates client logic to wrapper |

---

## File Structure (Relevant)

src/
├─ app/[locale]/layout.tsx
├─ app/[locale]/LocaleLayoutClientWrapper.tsx
├─ component/layout/Header.tsx
├─ component/layout/SideBar.tsx
├─ component/layout/Footer.tsx
├─ ReduxStore.ts
├─ lib/LanguageHelper.ts
├─ locales/en.json
└─ locales/de.json


---

## Takeaways
- Server layouts handle async data.  
- Client wrappers handle state, hooks, and context.  
- Props and context must be properly typed to avoid build errors.  
- Locale management is centralized and easily extendable.
