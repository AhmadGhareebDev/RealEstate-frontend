the structure follow it exacly the same: 

1. The Header (Navigation Bar)
Located at the very top, the header is minimalist and transparent to allow the hero image to bleed through.

Logo: On the far left, "LUXE CURATOR" is written in a clean, sans-serif, all-caps typeface.

Nav Links: Centered links include "Listings," "Concierge," "Advisory," and "Journal." Note the subtle underline on "Listings," indicating the active page.

Actions: On the right, there is a "Search" icon, a "Sign In" button, and a high-contrast "List Property" CTA (Call to Action) button.

2. The Hero Section (Above the Fold)
This is the most impactful part of the page, designed to establish the brand's "vibe" immediately.

Background: A large, high-resolution architectural shot of a modern, dark-grey building against a matching sky.

Headline: The words "CURATED ARCHITECTURE" are centered in a bold, white, sans-serif font.

Search Bar: A sleek, pill-shaped input field sits in the center. It contains a location pin icon, placeholder text ("Address, city, or neighborhood"), and a blue "Go" arrow button on the right.

3. The Introduction & Services Section
Below the hero, the page transitions into a solid dark background.

Copy: On the left, a small label reads "THE COLLECTION" above a larger heading, "Discover Modern Luxury." To the right, a brief paragraph defines their mission: "Redefining the residential experience..."

The Three Service Cards:

Buy: Features a "key" icon. It contains a 3D abstract render of a building, the title "Buy," a description of their off-market portfolio, and a "Browse Listings" text link with a plus sign.

Rent: Features a "calendar" icon. The graphic is a 3D laptop/screen showing a house interior. It includes the description "Immerse yourself..." and a link to "Explore Retreats."

Sell: Features a "price tag" icon. The graphic depicts 3D typography of the word "SELL." It talks about positioning masterpieces before a global network and has a link for "Consult Advisory."

4. Featured Property: "The Obsidian Pavilion"
This section highlights a specific "Curator's Choice" listing.

Visuals: An asymmetrical layout featuring two images. One is a classic, light-colored Victorian-style mansion surrounded by green trees (creating a sharp contrast with the rest of the dark site). Overlapping it is a smaller, dark, stylized image of a leaf/texture.

Details: On the right, the title "The Obsidian Pavilion" is followed by a sophisticated description.

Stats: Key data points are called out: Price ($18,400,000) and Square Feet (12,500).

CTA: A "View Full Dossier" button with a thin border.

5. The Footer
The bottom of the page provides structural links and contact info.

Brand Statement: A repeat of the logo and a short "About" blurb on the left.

Navigation Columns: Organized lists for "Connect" (Socials), "Global Offices" (NY, London, Dubai), and "Newsletter" (which includes an email signup field).

Copyright & Legal: At the very bottom, it shows the copyright year (2024), "Architectural Excellence Defined," and links for Privacy, Terms, and Accessibility.






the theme :::: follow this : 
# High-End Real Estate Design System: Editorial Excellence

## 1. Overview & Creative North Star
**Creative North Star: The Digital Curator**

This design system is engineered to move real estate away from the "commodity marketplace" (like Zillow) and toward the "curated gallery." We treat architectural listings as pieces of fine art. The experience is defined by **Tonal Depth** and **Breathtaking White Space**.

By breaking the traditional "grid-of-boxes" layout, we use intentional asymmetry and overlapping elements to guide the user’s eye. Instead of a cluttered interface, we use high-contrast typography scales and deep, ink-like surfaces to make high-quality architectural photography the undisputed protagonist of the screen.

---

## 2. Colors & Surface Philosophy
The palette is rooted in an ultra-dark spectrum, utilizing the **Primary (#b8c4ff)** electric blue as a precise surgical tool for orientation and action.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. To separate content, designers must use **Background Color Shifts**. For example, a property detail section using `surface-container-low` should sit directly against a `background` (#131318) area. The transition is felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of obsidian or frosted glass.
* **Base:** `surface` (#131318) for the main viewport.
* **Secondary Sections:** `surface-container-low` (#1b1b20) to define distinct content blocks.
* **Interactive Cards:** `surface-container-highest` (#35343a) to pull the most important information toward the user.

### The Glass & Gradient Rule
To achieve a "signature" feel, floating navigation elements and property labels should utilize **Glassmorphism**. Apply a semi-transparent `surface-variant` with a 20px backdrop-blur.
* **Signature Texture:** Main CTAs should not be flat. Use a subtle linear gradient from `primary_container` (#0041d9) to `primary` (#b8c4ff) at a 135-degree angle to provide a "liquid electric" polish.

---

## 3. Typography
We use a high-contrast pairing of **Manrope** (Display/Headline) and **Inter** (Title/Body) to convey an authoritative, editorial tone.

* **Display & Headlines (Manrope):** Large, airy, and bold. These are used sparingly to "anchor" a page. `display-lg` (3.5rem) should be used for hero property titles, creating a sense of luxury and scale.
* **Titles & Body (Inter):** Highly legible and utilitarian. Use `body-lg` (1rem) with generous line-height (1.6) for property descriptions to ensure an easy reading experience against the dark background.
* **Label Scale:** `label-md` and `label-sm` are reserved for metadata (e.g., "SQ FT," "BUILT IN"). Use `on-surface-variant` (#c4c5d8) to keep these secondary to the main narrative.

---

## 4. Elevation & Depth
In this system, depth is a product of light and tone, not shadows.

* **The Layering Principle:** Stacking tiers (e.g., `surface-container-lowest` on `surface-container-low`) creates a soft, natural lift. This mimics architectural shadows rather than "web" shadows.
* **Ambient Shadows:** If a card must float (e.g., a map overlay), use a shadow with a 40px blur and 6% opacity. The shadow color should be a tinted version of the background (#0e0e13) to ensure it looks like a natural occlusion of light.
* **The "Ghost Border" Fallback:** If accessibility requires a container edge, use a "Ghost Border": the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Buttons
* **Primary:** Gradient fill (`primary_container` to `primary`). `sm` (0.125rem) or `md` (0.375rem) corner radius. No border.
* **Secondary:** Ghost style. `outline` (#8e90a1) ghost border at 20% opacity. Text in `primary_fixed`.
* **Tertiary:** Text-only with a `primary` underline that expands on hover.

### Cards & Property Listings
Forbid the use of divider lines. Separate property details (Beds, Baths, Price) using the **Spacing Scale** (e.g., `spacing-4` / 1.4rem gap) or by placing text on a subtly lighter `surface-container-high` chip.

### Input Fields
* **Style:** Minimalist underline or "soft well" using `surface-container-lowest`.
* **State:** On focus, the bottom border glows with the `primary` color, accompanied by a subtle 4px outer glow.

### Architectural Gallery Component (Custom)
Instead of a standard carousel, use an **Asymmetric Mosaic**. Larger images for hero shots, smaller "detail" crops (kitchen finishes, textures) overlapping the main image slightly to create depth.

---

## 6. Do’s and Don’ts

### Do
* **DO** use whitespace as a functional element. If in doubt, add more `spacing-12` (4rem).
* **DO** use high-quality architectural photography with a consistent color grade.
* **DO** utilize the `surface-bright` token for hover states on dark containers to create a "lit from within" effect.

### Don’t
* **DON'T** use 1px dividers between list items. Use vertical rhythm and `spacing-6` to define boundaries.
* **DON'T** use pure white (#FFFFFF) for body text. Use `on-surface` (#e4e1e9) to prevent eye strain on dark themes.
* **DON'T** use "Standard" blue. Only use the specific `primary` (#b8c4ff) and `primary_container` (#0041d9) tokens to maintain the electric, high-end feel.