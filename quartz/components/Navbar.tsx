// quartz/components/Navbar.tsx
import { QuartzComponentConstructor } from "./types"

const Navbar: QuartzComponentConstructor = () => {
  function NavbarComponent() {
    return (
      <nav className="Navbar">
        <ul>
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>

          <li>
            <a href="/study">Study</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    )
  }

  NavbarComponent.css = `
    .mini-nav {
      width: 100%;
      margin-bottom: 1.5rem;
    }

    .mini-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .mini-nav a {
      color: var(--darkgray);
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.2s ease;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }

    .mini-nav a:hover {
      color: var(--secondary);
      background-color: var(--lightgray);
    }
  `

  return NavbarComponent
}

export default Navbar
