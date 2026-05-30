import { generateStaticParamsFor, importPage } from "nextra/pages";
import { notFound } from "next/navigation";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

type PageProps = Readonly<{
  params: Promise<{ mdxPath?: string[] }>;
}>;

function isStaticAssetPath(mdxPath?: string[]) {
  return mdxPath?.some((segment) => segment.includes(".")) ?? false;
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  if (isStaticAssetPath(params.mdxPath)) {
    return {};
  }

  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper!;

export default async function Page(props: PageProps) {
  const params = await props.params;
  if (isStaticAssetPath(params.mdxPath)) {
    notFound();
  }

  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata, sourceCode } = result;
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
