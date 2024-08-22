# Store on Next.js

This project presents a simple online store created with Next.js 14, using `styled-components`
for styling. The site has a start page with a "Go to shop" button that redirects users to a list
of products. The store also implements filtering, sorting and pagination for convenient viewing
of products.

## Installation

### Repository cloning

git clone https://github.com/Sashcotravel/expletech.git
cd expletech

Getting Started
First, run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.

The structure of the project

/app
  └── api
      └── products
  │       ├── route.js           # API to get a list of products
  └── products
      └── [id]
  │       ├── page.jsx           # Page one product
  │       ├── ProductItemStyled.jsx
  │   ├── page.jsx               # Page products
  │   ├── ProductListStyled.jsx
  └── global.css                 # Global styles
  └── layout.js                  # A component for displaying products
  └── page.jsx                   # Entry point to the start page
/components
  └── Loading
  │   ├── Loading.jsx            # Spinner for loading page
  │   ├── Loading.css
  └── Filter.jsx                 # Product filtering component
  └── FiltersAndSortStyled.jsx
  └── MainPage.jsx               # Component for main page
  └── MainStyled.jsx
  └── Pagination.jsx             # Product pagination component
  └── Product.js                 # A component for displaying products
  └── ProductOne.jsx             # A component for displaying one product
/redux
  └── productSlice.js            # Redux Slice for product state management
  └── store.js
  └── StoreProvider.jsx          # Store Provider for provider your store to layout.js

This README.md will help users quickly understand your project, configure it, and get started.