import PageHead from '../common/PageHead';
import Banner from '../common/Banner';
import { getAllList } from '../lib/api';
import ContentItem from '../common/ContentItem';

const Home = ({ list }) => {
  return (
    <>
      <PageHead title="Aspirin" />
      <Banner>
        <h1>Stay Hungry, Stay Foolish</h1>
      </Banner>
      <div className="max-w-2xl mx-auto mt-12">
        {list?.map((content) => (
          <ContentItem key={content.slug} content={content} showBadge />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const list = getAllList();
  return {
    props: { list: list.map(({ tags, ...rest }) => rest) },
  };
}

export default Home;
