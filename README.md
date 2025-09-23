# Personal Portfolio Website

A modern, responsive personal portfolio website designed to showcase frontend development skills and projects for Computer Science graduate program applications.

## Features

- **Modern Design**: Clean, professional layout with contemporary UI/UX principles
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and interactive elements
- **Performance Optimized**: Fast loading with optimized assets and code
- **Accessible**: Built with accessibility best practices
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Vanilla JS for interactions and animations
- **Google Fonts**: Inter font family for typography
- **GitHub Pages**: Free hosting solution

## Quick Start

### 1. Fork and Clone

1. Fork this repository to your GitHub account
2. Clone your forked repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
cd YOUR_USERNAME.github.io
```

### 2. Customize Content

Edit the following files to personalize your portfolio:

#### `index.html`
- Replace "Your Name" with your actual name
- Update the title, description, and content in each section
- Add your actual project information
- Update contact information and social links

#### `styles.css`
- Modify CSS variables in `:root` to change colors and styling
- Adjust any styling to match your preferences

#### `script.js`
- Update the typewriter effect text with your name
- Modify any animations or interactions as needed

### 3. Deploy to GitHub Pages

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

2. **Access Your Site**:
   - Your site will be available at `https://YOUR_USERNAME.github.io`
   - It may take a few minutes for the site to become available

## Customization Guide

### Colors and Branding

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker variant */
    --primary-light: #3b82f6;      /* Lighter variant */
    --accent-color: #f59e0b;       /* Accent color */
    /* ... other variables */
}
```

### Content Sections

#### Hero Section
- Update your name and title
- Modify the description to reflect your background
- Change the floating tech cards to your preferred technologies

#### About Section
- Write your personal story and background
- Update education and experience information
- Modify the highlight items

#### Projects Section
- Replace example projects with your actual work
- Add project images, descriptions, and links
- Update technology stacks for each project

#### Skills Section
- Modify skill categories and items
- Adjust skill levels (percentages)
- Add or remove skills as needed

#### Contact Section
- Update contact information
- Modify social media links
- Customize the contact form

### Adding Your Resume

1. Add your resume PDF to the repository
2. Create a link in the navigation or hero section:
```html
<a href="resume.pdf" class="btn btn-secondary" target="_blank">Download Resume</a>
```

### Adding Project Images

1. Create an `images` folder in your repository
2. Add your project screenshots
3. Update the project cards with actual images:
```html
<div class="project-image">
    <img src="images/project1.jpg" alt="Project Name">
    <!-- ... overlay content ... -->
</div>
```

### Custom Domain (Optional)

To use a custom domain:

1. Purchase a domain from any registrar
2. Create a `CNAME` file in your repository root with your domain:
```
yourdomain.com
```
3. Configure DNS settings with your registrar to point to GitHub Pages

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── CNAME              # Custom domain (optional)
└── images/            # Project images and assets
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

- Minified CSS and JavaScript for production
- Optimized images (WebP format recommended)
- Lazy loading for images
- Efficient animations using CSS transforms

## SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- Proper color contrast
- Focus indicators
- Semantic markup

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions about this template, feel free to reach out through the contact form on the website or open an issue in this repository.

---

**Good luck with your Computer Science graduate program applications!** 