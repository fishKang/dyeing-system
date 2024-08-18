import { useModel } from 'umi';
import PageA from './components/PageA';
import Page from './components/Page';

export default () => {
  const message = useModel('demo');
  const { add, minus } = useModel('counter', (ret) => ({
    add: ret.increment,
    minus: ret.decrement,
  }));
  const { count } = useModel('counter', (ret) => ({
    count: ret.counter,
  }));
  
  return (
    <>
      <div>{message}</div>
      <div>{count}</div>
      <button onClick={add}>add by 1</button>
      <br></br>
      <button onClick={minus}>minus by 1</button>
      <br></br>
      <PageA></PageA>
      <Page></Page>
    </>
  
  );
};