
export const VIEW_PROFILE = "VIEW_PROFILE";

// Synchronous action
function viewProfile (username) {
  return {
    type: VIEW_PROFILE,
    username,
    isViewing: true
  };
};

export default viewProfile


