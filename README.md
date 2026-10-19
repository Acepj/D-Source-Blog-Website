# 📝 D'Source Blog

A clean and responsive blog website designed to help users browse articles about technology, design, business, productivity, health, and other topics. The interface includes search, category filters, sorting options, notifications, bookmarks, and pagination controls.

## 📌 About the Project

**D'Source Blog** is a blog interface built with HTML, CSS, JavaScript, and Tailwind CSS. It provides an organized layout for browsing articles, searching for content, and accessing features such as notifications and saved bookmarks.

The design uses a minimalist style with a light background, blue accent colors, and interactive hover effects.

## ✨ Features

- **Article Search** – Search field for finding articles.
- **Category Filters** – Filter posts by category.
- **Sorting Options** – Choose Latest, Most Popular, or Oldest.
- **Notifications Panel** – Displays sample notifications for comments, likes, and new followers.
- **Bookmarks Panel** – Provides an area for saved articles.
- **Article Grid** – Displays blog articles in a responsive grid layout.
- **Loading State** – Includes animated skeleton placeholders.
- **No Results Message** – Displays a message when no matching posts are found.
- **Pagination Controls** – Includes page navigation buttons.
- **Articles Per Page** – Offers options to show 5, 10, or 15 articles per page.
- **Newsletter Subscription UI** – Includes an email field and subscription button.
- **Social Media Links** – Includes icons for X, Instagram, LinkedIn, and Facebook.
- **Responsive Layout** – Uses Tailwind CSS responsive classes for different screen sizes.
- **Hover Animations** – Adds transitions to article cards and images.

## 🛠️ Technologies Used

- **HTML5** – Structures the webpage and its content.
- **CSS3** – Provides custom styling, transitions, and animations.
- **JavaScript** – Supports interactive features through `script.js`.
- **Tailwind CSS 3.4.16** – Provides utility classes for layout and styling.
- **Google Fonts** – Uses Inter and Pacifico fonts.
- **Remix Icon 4.6.0** – Supplies icons for search, notifications, bookmarks, and other interface elements.

## 📁 Project Structure

```text
DSource-Blog/
│
├── index.html
├── style.css
└── script.js
```

### File Description

- **`index.html`** – Contains the blog layout, search bar, category filters, notification panel, bookmark panel, article grid, and footer.
- **`style.css`** – Contains the external CSS styling for the website.
- **`script.js`** – Intended to handle interactive behavior, including search, filtering, sorting, bookmarks, and pagination.

## 🗂️ Article Categories

The category filter section includes:

- All Posts
- Technology
- Design
- Business
- Productivity
- Health

## 🔔 Notifications

The notifications panel contains sample activity, including:

- A comment on an article titled *Designing for Accessibility*
- A like on a post titled *The Future of AI*
- A new follower notification

A **Mark all as read** button is also included in the interface.

## 🔖 Bookmarks

The bookmarks panel provides a dedicated area for saved articles. When there are no saved articles, it displays a message encouraging users to browse articles.

## 🔍 Search and Sorting

The page includes a search field with a clear button. It also provides sorting options for organizing articles by:

- Latest
- Most Popular
- Oldest

## 📄 Pagination

The footer includes pagination controls with numbered pages and previous/next arrow buttons. Users can also select how many articles to display per page:

- 5 per page
- 10 per page
- 15 per page

## 📬 Newsletter Subscription

The footer contains an email input and a subscription button for the newsletter interface.

## ▶️ How to Run

1. Download or clone the project files.
2. Place `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a web browser.
4. Explore the search bar, category filters, notifications, bookmarks, and other available interface elements.

An internet connection is required to load the external Tailwind CSS, Google Fonts, and Remix Icon resources from their CDNs.

## 🎨 Design Highlights

- Minimalist, light-themed interface
- Blue accent color (`#034f84`)
- Inter font for general text
- Pacifico font for the blog logo
- Responsive article grid
- Subtle card shadows and hover effects
- Animated loading skeletons
- Sticky header with a translucent background

## 📌 Notes

- The HTML includes the structure for several interactive features, but their actual behavior depends on the implementation in `script.js`.
- The article grid is initially empty in the HTML and is intended to be populated dynamically.
- The notification content is sample data.
- The social media links and policy links currently use placeholder `#` destinations.
- The newsletter interface is present, but actual subscription processing requires additional functionality.
- The footer currently displays **© 2025 Minimal Blog**, which can be updated to match the D'Source Blog branding.

## 🚀 Possible Improvements

- Connect the blog to a database or content management system.
- Add individual article pages.
- Implement functional search, category filtering, and sorting.
- Save bookmarks using local storage or a database.
- Add working pagination.
- Connect the newsletter form to an email subscription service.
- Replace placeholder social media and policy links with actual destinations.
- Add user authentication and profile management.
- Improve accessibility with keyboard navigation and clear focus indicators.

## 🎯 Purpose

This project demonstrates how to structure a modern blog interface using HTML, CSS, Tailwind CSS, and JavaScript. It is suitable for practicing responsive web design, DOM manipulation, UI components, and basic front-end development.


