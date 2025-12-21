import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links?: Record<string, string>
  showCredit?: boolean
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}
    const showCredit = opts?.showCredit ?? true

    const icons: Record<string, JSX.Element> = {
      linkedin: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.941v5.664H9.357V9h3.413v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.37 4.266 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.451H3.56V9h3.554v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      github: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.21-.02-2.19-3.2.69-3.88-1.37-3.88-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.45.11-3.03 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.49 3.19-1.18 3.19-1.18.63 1.58.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.08 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.17 0 1.57-.02 2.84-.02 3.22 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      ),
    }

    const getIcon = (text: string) => icons[text.toLowerCase()]
    return (
      <footer class={`${displayClass ?? ""}`}>
        {showCredit && (
          <p>
            {i18n(cfg.locale).components.footer.createdWith}{" "}
            <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
          </p>
        )}
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>
                {getIcon(text)}
                <span class="footer-link-text">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
