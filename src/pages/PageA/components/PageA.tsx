import React from 'react';
import { useAccess, Access } from 'umi';
import { useModel } from 'umi';
import { Spin } from 'antd';


const PageA = () => {
  const access = useAccess(); // access 的成员: canReadFoo, canUpdateFoo, canDeleteFoo
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');

  if(access.canQuery ){
    return (
      <>
      {/* <div className={styles.page}>this is a page</div> */}
      <div>
        

        <Access
          accessible={access.canQuery}
          fallback={<div>Can not read foo content.</div>}
        >
          Foo content.
        </Access>
        <Access
          accessible={access.canQuery}
          fallback={<div>Can not update foo.</div>}
        >
          Update foo.
        </Access>
        <Access
          accessible={access.canQuery}
          fallback={<div>Can not delete foo.</div>}
        >
          Delete foo.
        </Access>
        <br></br>
        <Spin />
        <div>{initialState?.currentUser?.name}</div>
      </div>
      </>
      
    );
  }
 
};

export default PageA;