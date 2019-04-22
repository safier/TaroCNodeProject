//显示抽屉
export function showDrawer() {
    return function(dispatch) {
        dispatch({type:'showDrawer'})
    }
}