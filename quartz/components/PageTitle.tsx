import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div className={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  display: flex-row;
  margin: 0;
}
`
export default (() => PageTitle) satisfies QuartzComponentConstructor
