import Head from 'next/head';

export default function PageHead({title}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='author' content='米海博' />
      <meta name='description' content='米海博的个人站点，分享关于技术和生活。关于前端、JavaScript、读书笔记、生活琐碎等' />
      <meta name='keywords' content='米海博,mihaibo,Aspirin,HTML,CSS,JavaScript,React' />
    </Head>
  )
}
