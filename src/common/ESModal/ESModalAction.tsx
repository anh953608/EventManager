import TypeAction from "./type";
class ESModalAction {
  handleCloseEModal = (data: any) => {
    return {
      type: TypeAction.CLOSE_MODAL_ERROR,
      data: data,
    };
  };
  handleOpenEModal = (data: any) => {
    return {
      type: TypeAction.OPEN_MODAL_ERROR,
      data: data,
    };
  };
  handleOpenSModal = (data: any) => {
    return {
      type: TypeAction.OPEN_MODAL_SUCCESS,
      data: data,
    };
  };
  handleCloseSModal = (data: any) => {
    return {
      type: TypeAction.OPEN_MODAL_SUCCESS,
      data: data,
    };
  };
}
export default ESModalAction;
