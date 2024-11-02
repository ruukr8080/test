import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

//
// export const mainPageLayout: PageLayout = {
//   beforeBody: [
//     Component.Breadcrumbs(),
//   ],
//   left: [
//     Component.PageTitle(),
//     Component.Nav(undefined),
//     Component.Search(),
//     Component.Darkmode(),
//   ],
//   right: [], // 오른쪽 사이드바 비우기
// }


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ruukr8080",
      "KakaoTalk Message": "https://open.kakao.com/o/sCay2dXg",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.RecentNotes({ title: "Recent post" }),
    // Component.RecentProjects({ title: "Projects" }),
    // Component.RecentNotes({ title: "giscus" }),
    Component.Breadcrumbs(),
    // Component.ArticleTitle(),
    // Component.ContentMeta(),
    // Component.TagList(),
  ],
  left: [
    Component.Darkmode(),
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Nav(undefined),
    // Component.Search(),
    Component.DesktopOnly(Component.Explorer({

      // 추가 옵션
      useSavedState: false  // 이전 상태를 저장하지 않음
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()],
  left: [
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    Component.Darkmode(),
    Component.Nav(undefined),
    Component.DesktopOnly(Component.Explorer({
      // 추가 옵션
      useSavedState: false  // 이전 상태를 저장하지 않음
    })),
  ],
  right: [

  ],
}
