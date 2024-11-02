import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    // const year = new Date().getFullYear()
    // const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div>
        {/*{i18n(cfg.locale).components.footer.}{" "}*/}
          <a href="https://ruukr8080.github.io/">글지대 v{version}</a>
        </div>

        {/*<p>*/}
        {/*  {i18n(cfg.locale).components.footer.createdWith}{" "}*/}
        {/*  <a href="https://github.com/ruukr8080/">글지대 v{version}</a> © {year}*/}
        {/*</p>*/}
        {/*<ul>*/}
        {/*  {Object.entries(links).map(([text, link]) => (*/}
        {/*    <li>*/}
        {/*      <a href={link}>{text}</a>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
