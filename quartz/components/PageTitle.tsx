import { resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const homeHref = resolveRelative(fileData.slug!, "About-Me")
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={homeHref} class="page-title__link">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="page-title__icon">
          <path d="M12 3.1 3 10v10h6.25v-6.25h5.5V20H21V10l-9-6.9Zm0-1.85L22 9v12h-7.25v-6.25h-5.5V21H2V9l10-7.75Z" />
        </svg>
        <span>{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.page-title__icon {
  width: 1.2em;
  height: 1.2em;
  fill: currentColor;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
