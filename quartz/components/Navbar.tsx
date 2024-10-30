// quartz/components/Navbar.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Navbar: QuartzComponentConstructor = () => {
  function NavbarComponent() {
    return (
      <nav class="navbar">
        <div class="navbar-content">
          <a href="/" class="navbar-title">Home</a>
          <div class="navbar-links">
            <a href="/blog">Blog</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
          </div>
        </div>
      </nav>
    )
  }

  NavbarComponent.css = `
    .navbar {
      padding: 1rem;
      background: var(--light);
      border-bottom: 1px solid var(--lightgray);
    }

    .navbar-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--dark);
      text-decoration: none;
    }

    .navbar-links {
      display: flex;
      gap: 1.5rem;
    }

    .navbar-links a {
      color: var(--darkgray);
      text-decoration: none;
    }

    .navbar-links a:hover {
      color: var(--secondary);
    }
  `

  return NavbarComponent
}

export default Navbar