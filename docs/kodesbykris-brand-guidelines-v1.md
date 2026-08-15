# kodesbykris --- Brand Guidelines v1.0

> **Software Engineering & Web Development**
>
> **Build • Solve • Deliver**

------------------------------------------------------------------------

## 1. Brand Overview

### Brand Name

**kodesbykris**

### Brand Meaning

-   **kodes** --- represents coding, software, engineering, and digital
    products.
-   **by Kris** --- emphasizes the personal nature of the service:
    clients work directly with Kris.

### Brand Positioning

**kodesbykris** is a personal software engineering and web development
brand focused on building practical, modern, and maintainable digital
products for businesses and individuals.

The brand should feel like a **personal engineering studio**, not a
large anonymous agency.

### Core Idea

> **Code crafted by Kris.**

### Brand Personality

-   Technical
-   Modern
-   Reliable
-   Personal
-   Precise
-   Approachable

### Avoid

-   Overly corporate language
-   Generic SaaS/startup aesthetics
-   Excessive gradients
-   Overly playful visual styles
-   Excessive hacker/terminal aesthetics
-   Pretending to be a large agency

------------------------------------------------------------------------

# 2. Logo System

The logo system consists of three primary components:

1.  **Primary Logo**
2.  **Wordmark**
3.  **Symbol / Mark**

## 2.1 Primary Logo

The primary logo combines:

-   Coding-inspired `< / >` symbols
-   A geometric **K** monogram
-   The `kodesbykris` wordmark
-   The tagline `BUILD • SOLVE • DELIVER`

The primary logo should be used whenever sufficient horizontal space is
available.

## 2.2 Symbol / Mark

The standalone mark consists of the geometric **K** surrounded by coding
syntax.

Conceptually:

``` text
< K />
```

Use the symbol when:

-   Space is limited
-   Creating a favicon
-   Creating an app icon
-   Social profile imagery
-   Small UI placements
-   Decorative brand elements

## 2.3 Wordmark

The wordmark is:

``` text
kodesbykris
```

The `by` portion is highlighted using the brand accent color.

## 2.4 Tagline

``` text
BUILD • SOLVE • DELIVER
```

The tagline communicates the brand's approach:

-   **BUILD** --- create useful digital products
-   **SOLVE** --- address real business problems
-   **DELIVER** --- ship reliable, usable results

------------------------------------------------------------------------

# 3. Logo Color Variations

## Light Theme

Use the dark K and wordmark on light backgrounds.

-   K / primary text: `#111111`
-   Accent syntax and `by`: `#B8F23D`

## Dark Theme

Use the white K and wordmark on dark backgrounds.

-   K / primary text: `#FFFFFF`
-   Accent syntax and `by`: `#B8F23D`

## Monochrome

For situations where brand colors cannot be reproduced:

### Light Background

-   Logo: `#111111`

### Dark Background

-   Logo: `#FFFFFF`

Do not introduce additional colors into the logo.

------------------------------------------------------------------------

# 4. Color System

## 4.1 Primary Brand Colors

  Token    Hex         Usage
  -------- ----------- ---------------------------------------
  Ink      `#111111`   Primary text, logo, dark surfaces
  Canvas   `#F7F7F5`   Main light background
  Lime     `#B8F23D`   Brand accent, CTA accents, highlights

The primary visual identity is based on **charcoal + warm white +
electric lime**.

The lime accent should be used intentionally rather than covering large
areas of the interface.

------------------------------------------------------------------------

## 4.2 Brand Color Scale

``` css
--color-brand-50:  #F5FBE8;
--color-brand-100: #EAF7C7;
--color-brand-200: #D9F29A;
--color-brand-300: #C8EF67;
--color-brand-400: #B8F23D;
--color-brand-500: #A5D92F;
--color-brand-600: #82AE20;
--color-brand-700: #617F18;
--color-brand-800: #405510;
--color-brand-900: #28370A;
```

**Primary brand accent:** `#B8F23D`

------------------------------------------------------------------------

## 4.3 Neutral Color Scale

``` css
--color-neutral-50:  #FAFAF9;
--color-neutral-100: #F5F5F3;
--color-neutral-200: #E5E5E2;
--color-neutral-300: #D4D4D0;
--color-neutral-400: #A3A39D;
--color-neutral-500: #73736D;
--color-neutral-600: #52524D;
--color-neutral-700: #383835;
--color-neutral-800: #242422;
--color-neutral-900: #111111;
```

------------------------------------------------------------------------

## 4.4 Semantic Colors

Semantic colors are for UI states and are not part of the core visual
identity.

``` css
--color-success: #35A853;
--color-warning: #F59E0B;
--color-error:   #EF4444;
--color-info:    #3B82F6;
```

------------------------------------------------------------------------

# 5. Typography

The typography system combines a modern geometric display typeface, a
highly readable body typeface, and a monospace typeface for technical
details.

## 5.1 Display / Headings

**Space Grotesk**

Use for:

-   Hero headings
-   Section headings
-   Large statements
-   Important brand messaging

Example:

``` text
BUILD SOMETHING
THAT MATTERS.
```

## 5.2 Body

**Inter**

Use for:

-   Paragraphs
-   Navigation
-   Buttons
-   Forms
-   Descriptions
-   General UI text

## 5.3 Monospace

**JetBrains Mono**

Use sparingly for:

-   Technical metadata
-   Project information
-   Status labels
-   Code-related visual accents
-   Small section identifiers

Example:

``` text
01 / SERVICES
AVAILABLE_FOR_WORK
STATUS: ONLINE
```

### Typography Tokens

``` css
--font-display: "Space Grotesk";
--font-body: "Inter";
--font-mono: "JetBrains Mono";
```

------------------------------------------------------------------------

# 6. Typography Scale

Recommended desktop scale:

  Token           Size Usage
  --------- ---------- ------------------------
  Display     72--96px Hero / major statement
  H1          56--72px Main page heading
  H2          40--48px Section heading
  H3          28--32px Subsection
  Body        16--18px Paragraph
  Small           14px Supporting information
  Mono        12--14px Technical metadata

Typography should scale responsively on smaller screens.

------------------------------------------------------------------------

# 7. Visual Language

## Editorial + Engineering

The visual language combines the feeling of an editorial design system
with the precision of software engineering.

The website should communicate:

> **Designed with intention. Built with precision.**

### Recommended Characteristics

-   Strong typography
-   Generous whitespace
-   Structured grid
-   Thin divider lines
-   Technical metadata
-   Clear hierarchy
-   Minimal decoration
-   Intentional lime accents

Example:

``` text
01
────────────────────────

SERVICES

Software isn't
just code.

It's a solution
to a problem.
```

Technical metadata can be presented like:

``` text
PROJECT
JEPANGKU

TYPE
LEARNING PLATFORM

STACK
REACT · GO · POSTGRESQL

STATUS
● COMPLETED
```

------------------------------------------------------------------------

# 8. Layout & Grid

## Grid

Use a **12-column grid** for desktop layouts.

``` text
| 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
```

Layouts should use consistent horizontal margins and alignment.

## Spacing System

Use a consistent spacing scale:

``` text
4
8
12
16
24
32
48
64
96
128
```

Avoid arbitrary spacing values unless there is a clear design reason.

------------------------------------------------------------------------

# 9. Border Radius

The visual style should feel precise and engineered rather than overly
soft.

Recommended tokens:

``` css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

Recommended usage:

-   Buttons: `6px`
-   Small UI elements: `4px`
-   Cards: `8–10px`
-   Large containers: `12px`

Avoid excessive pill-shaped components.

------------------------------------------------------------------------

# 10. Iconography

Use simple, line-based, geometric icons.

Recommended icon library:

**Lucide Icons**

Icons should support the content rather than decorate every section.

Use icons primarily for:

-   Services
-   Navigation
-   UI interactions
-   Technical metadata
-   Status indicators

Avoid excessive icon usage.

------------------------------------------------------------------------

# 11. Brand Voice

The brand voice should be:

**Confident • Direct • Human**

## Preferred

> I build software that solves real problems.

> Got an idea? Let's turn it into something people can use.

> Here's what I can build for you.

## Avoid

> We provide cutting-edge digital transformation solutions for
> businesses.

> Our innovative team delivers world-class next-generation digital
> experiences.

The brand should communicate as **Kris speaking directly to the
client**, not as a corporate marketing department.

------------------------------------------------------------------------

# 12. Messaging Principles

## 12.1 Lead With Value

Focus on what the client gets rather than only the technologies used.

Instead of:

> React + Go + PostgreSQL development

Prefer:

> Custom web applications built around your business workflow.

## 12.2 Be Specific

Instead of:

> We create digital solutions.

Prefer:

> I build websites, dashboards, web applications, and custom software.

## 12.3 Be Human

Use first-person language when appropriate:

-   I build
-   I design
-   I work
-   Let's build
-   Your project

Avoid unnecessary corporate language such as:

-   We leverage
-   Our ecosystem
-   Our organization
-   Digital transformation solutions

------------------------------------------------------------------------

# 13. Brand Architecture

The brand ecosystem can be structured as follows:

``` text
                    KRIS ADIWINATA
                          │
                  Personal Portfolio
               krisadiwinata.online
                          │
                          │
                     KODESBYKRIS
                          │
                  Freelance Services
                          │
          ┌───────────────┼───────────────┐
          │               │               │
       Websites        Web Apps        Software
          │               │               │
       Landing         Dashboard       Custom
       Company         LMS             System
       Profile         SaaS            Internal Tool
```

## Personal Portfolio

**krisadiwinata.online**

Purpose:

> "Who is Kris and what has he done?"

Audience:

-   Recruiters
-   Employers
-   Professional connections

## kodesbykris

Purpose:

> "Why should I hire Kris?"

Audience:

-   Business owners
-   Potential clients
-   Individuals needing software/web development

The two brands should share visual DNA but serve different purposes.

------------------------------------------------------------------------

# 14. Commercial Website Direction

The kodesbykris website should function as a **conversion-focused
service landing page**, not as another CV.

Primary goal:

> Convert visitors into potential clients.

The website should prioritize:

1.  Clear value proposition
2.  Services
3.  Examples of work
4.  Why work with Kris
5.  Development process
6.  Strong call-to-action

Avoid making the homepage feel like a resume.

------------------------------------------------------------------------

# 15. Recommended Website Tone

The commercial website should feel:

``` text
Professional
      +
Technical
      +
Personal
      +
Modern
```

Not:

``` text
Corporate
      +
Generic SaaS
      +
Overly playful
```

------------------------------------------------------------------------

# 16. Do / Don't

## DO

-   Use charcoal, warm white, and lime as the primary palette.
-   Maintain strong typography hierarchy.
-   Use whitespace generously.
-   Use technical details as visual accents.
-   Communicate directly and confidently.
-   Highlight client outcomes.
-   Keep the UI precise and structured.
-   Use the logo consistently.

## DON'T

-   Add random colors to the core visual identity.
-   Overuse gradients.
-   Make every component rounded.
-   Use terminal/hacker visuals everywhere.
-   Fill every section with icons.
-   Use excessive animations.
-   Pretend kodesbykris is a large agency.
-   Overload the visitor with technical jargon.

------------------------------------------------------------------------

# 17. Core Brand Reference

For quick implementation:

``` css
/* Brand */
--color-ink: #111111;
--color-canvas: #F7F7F5;
--color-lime: #B8F23D;

/* Typography */
--font-display: "Space Grotesk";
--font-body: "Inter";
--font-mono: "JetBrains Mono";

/* Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

### Brand Keywords

``` text
TECHNICAL
MODERN
PERSONAL
PRECISE
RELIABLE
APPROACHABLE
```

### Brand Statement

> **kodesbykris --- Software crafted with purpose.**

### Tagline

> **BUILD • SOLVE • DELIVER**
