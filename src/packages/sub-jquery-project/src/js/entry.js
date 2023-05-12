const render = ($, isSub=false) => {
  $('#sub-jquery-project').append(`And, I am mount in ${isSub ? 'sub' : 'self'}`);
  return Promise.resolve();
};

if(!window.__POWERED_BY_QIANKUN__) {
  render($)
}

((global) => {
  global['sub-jquery-project'] = {
    bootstrap: () => {
      return Promise.resolve();
    },
    mount: () => {
      return render($, true);
    },
    unmount: () => {
      return Promise.resolve();
    },
  };
})(window);