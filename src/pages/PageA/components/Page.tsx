import styles from './index.less'; // 告诉 umi 编译这个 less

const Page = () => {
    // 附加样式到 className 中
    return (
      <div className={styles.page}>
        <text className={styles.myLink}>this is a page</text>
      </div>
    );
  };

export default Page;