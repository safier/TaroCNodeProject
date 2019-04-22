//显示抽屉
export function showDrawer() {
    return (dispatch) => {
        dispatch({type:'showDrawer'})
    }
}

export function hideDrawer() {
    return dispatch => {
        dispatch({type:'hideDrawer'})
    }
}

//切换当前分类
export function changeCata(cata) {
    return dispatch=>{
        dispatch({type:'changeCata',currentCata:cata})
    }
}

