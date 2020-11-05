import React from 'react';
import {connect} from 'dva'
const Example = ({dispatch,example}) => {
  return (
    <div>
      Example
    </div>
  );
};

Example.propTypes = {
};

export default connect(({example})=>{
  example
})(Example);
