import Taro ,{Component} from '@tarojs/taro';
import {View,Text,Button,Image} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {showDrawer,changeCata,hideDrawer} from '../../actions/menu';
import {AtDrawer} from 'taro-ui';
import './menu.less'


@connect(function(store){
    return{...store.menu}
},function(dispatch){
    return{showMenu(){
        dispatch(showDrawer())
    },hideDrawer() {
        dispatch(hideDrawer())
    },changeCata(cata){
        dispatch(changeCata(cata))
    }}
})
class Menu extends Component {

    showDrawer() {
        this.props.showMenu&&this.props.showMenu();
    }
    getItems(cataData) {
        return cataData.map(item=>item.value);
    }

    //点击分类时触发
    clickCata(index) {
        let {cataData} = this.props
        let clickCata = cataData[index] //获取点击项的数据
        this.props.changeCata&&this.props.changeCata(clickCata);
    }

    //关闭抽屉时触发
    closeDrawer() {
        this.props.hideDrawer&&this.props.hideDrawer();
    }

    render() {
        let {showDrawer,cataData} = this.props;
        let items = this.getItems(cataData); //获取分类列表
        return  (
            <View className='topiclist-menu'>
                  <AtDrawer 
                  onClose={this.closeDrawer.bind(this)}
                  onItemClick={this.clickCata.bind(this)}
                  style='position:absolute;' 
                  show={showDrawer} items={items}/> 
                  <Image onClick={this.showDrawer.bind(this)} className='iamge' src={require('../../assets/img/cata.png')}/>
                  <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                  <Image className='iamge' src={require('../../assets/img/login.png')}/>
            </View>
        )
    }
}

export default Menu;