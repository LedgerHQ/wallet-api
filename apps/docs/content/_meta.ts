import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  index: {
    display: "hidden",
    title: "Home",
    theme: {
      layout: "full",
      sidebar: false,
      toc: false,
      breadcrumb: false,
      pagination: false,
      timestamp: false,
    },
  },
  docs: {
    type: "page",
    title: "Documentation",
  },
};

export default meta;
