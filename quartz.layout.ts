import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  left: [
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Nav(undefined),
    Component.DesktopOnly(Component.Explorer()),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ruukr8080",
      "KakaoTalk Message": "https://open.kakao.com/o/sCay2dXg",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// 단일 페이지 컴포넌트 (노트 페이지)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.RecentNotes({ title: "최근 포스트" }),
    Component.Breadcrumbs(),
    Component.ArticleTitle(), // 글 제목 추가
    Component.ContentMeta(), // 메타 정보 추가
  ],
  right: [
    Component.TableOfContents(), // 목차 추가
    Component.Backlinks(), // 백링크 추가
  ],
}

// 리스트 페이지 컴포넌트
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}