import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.LastUpdated()],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://linkedin.com/in/preyas17",
      GitHub: "https://github.com/preyas-17",
    },
    showCredit: false,
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const aIsAbout = !a.isFolder && a.displayName.toLowerCase() === "about me"
        const bIsAbout = !b.isFolder && b.displayName.toLowerCase() === "about me"

        if (aIsAbout && !bIsAbout) return -1
        if (!aIsAbout && bIsAbout) return 1

        // Default behavior: folders first, then files; alphabetical within each group
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) return 1
        return -1
      },
    }),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const aIsAbout = !a.isFolder && a.displayName.toLowerCase() === "about me"
        const bIsAbout = !b.isFolder && b.displayName.toLowerCase() === "about me"

        if (aIsAbout && !bIsAbout) return -1
        if (!aIsAbout && bIsAbout) return 1

        // Default behavior: folders first, then files; alphabetical within each group
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) return 1
        return -1
      },
    }),
  ],
  right: [],
}
