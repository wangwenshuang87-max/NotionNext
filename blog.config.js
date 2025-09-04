// 注: process.env.XX 是 Vercel 的环境变量
// 配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Notion 数据库 ID（博客文章）
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '你的博客数据库ID',

  // Notion 数据库 ID（案例展示）
  NOTION_CASES_ID:
    process.env.NOTION_CASES_ID ||
    '你的案例数据库ID',

  // 主题与语言
  THEME: process.env.NEXT_PUBLIC_THEME || 'simple', // 简洁主题
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025,

  // 外观
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // light / dark / auto
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  // 基础信息
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '你的团队名',
  BIO: process.env.NEXT_PUBLIC_BIO || '聚焦具身智能的创新研究与应用',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://yourcompany.com/blog',
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '具身智能, 机器人, AI, 技术博客',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',

  // RSS
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  // 文章与列表配置（精简）
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 允许复制
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,

  // 自定义菜单（首页 / 博客 / 案例 / 联系我们）
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,

  // 关闭不必要的功能（保持简洁）
  ...require('./conf/contact.config'), // 联系方式
  ...require('./conf/post.config'), // 文章配置
  ...require('./conf/font.config'), // 字体
  ...require('./conf/code.config'), // 代码块样式
}

module.exports = BLOG
