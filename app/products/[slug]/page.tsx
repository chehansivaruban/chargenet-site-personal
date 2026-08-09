import ProductDetailClient from './ProductDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'l2-home-commercial' },
    { slug: 'l2-3phase' },
    { slug: 'cd-80kw' },
    { slug: 'fast-single' },
    { slug: 'fast-dual' },
    { slug: 'low-voltage' },
    { slug: 'voltmotive-gbt-l2' },
    { slug: 'next-gen' },
  ];
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductDetailClient slug={resolvedParams.slug} />;
}
