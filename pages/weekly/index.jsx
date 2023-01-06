import PageHead from '../../common/PageHead';
import Banner from '../../common/Banner';
import { getWeeklyList } from '../../lib/api';
import ContentItem from '../../common/ContentItem';

export default function WeeklyIndex({ list }) {
  return (
    <>
      <PageHead title={`Aspirin's Weekly`} />
      <Banner>
        <h1 className="text-2xl font-medium">周刊</h1>
      </Banner>
      <div className="max-w-2xl mx-auto mt-12">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const list = getWeeklyList();
  return {
    props: { list: list.map(({ tags, ...rest }) => rest) },
  };
}
