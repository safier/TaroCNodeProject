import Taro ,{Component} from '@tarojs/taro';
import {View,Text,Button,Image} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {showDrawer} from '../../actions/menu';
import {AtDrawer} from 'taro-ui';
 import './menu.less'

@connect(function(store){
    return{...store.menu}
},function(dispatch){
    return{showMenu(){
        dispatch(showDrawer())
    }}
})
class Menu extends Component {

    showDrawer() {
        this.props.showMenu&this.props.showMenu();
    }
    getItems(cataData) {
        return cataData.map(item=>item.value);
    }
    render() {
        let {showDrawer,cataData} = this.props;
        let items = this.getItems(cataData); //获取分类列表
        return  (
            <View className='topiclist-menu'>
                  <AtDrawer style='position:absolute;' show={true} items={items}/> 
                  <Image onClick={this.showDrawer.bind(this)} className='iamge' src={require('../../assets/img/cata.png')}/>
                  <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                  <Image className='iamge' src={require('../../assets/img/login.png')}/>
            </View>
        )
    }
}

export default Menu;