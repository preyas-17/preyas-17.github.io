import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { getDate } from "./Date"
import style from "./styles/lastUpdated.scss"
import { execSync } from "child_process"

function formatLongDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function tryGetGitHeadDate(): Date | undefined {
  try {
    // %cs is committer date (YYYY-MM-DD). Using date-only avoids timezone-related
    // day shifts (e.g. commits near midnight showing the previous day in UTC).
    const dateOnly = execSync("git log -1 --format=%cs", {
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    })
      .trim()
      .split(/\r?\n/)[0]

    if (!dateOnly) return undefined
    const d = new Date(`${dateOnly}T00:00:00`)
    return Number.isNaN(d.getTime()) ? undefined : d
  } catch {
    return undefined
  }
}

export default (() => {
  function LastUpdated({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const locale = cfg.locale ?? "en-US"

    // Prefer site-wide “last push” date (git HEAD).
    // Fallback to the page's modified date if git isn't available.
    const date = tryGetGitHeadDate() ?? getDate(cfg, fileData)
    if (!date) return null

    return (
      <p class={classNames(displayClass, "last-updated")}
        aria-label="Last updated">
        <span>Last updated: </span>
        <time datetime={date.toISOString()}>{formatLongDate(date, locale)}</time>
      </p>
    )
  }

  LastUpdated.css = style
  return LastUpdated
}) satisfies QuartzComponentConstructor
