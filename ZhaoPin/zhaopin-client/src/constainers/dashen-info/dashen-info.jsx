import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import HeaderSelector from '../../components/header-selector/header-selector'
import {updateUser} from "../../redux/actions"

class DashenInfo extends Component{
  state={
    header:'', // 头像名称
    post: '', // 职位
    info: '', // 个人或职位简介
  }
  setHeader=(header)=>{
    this.setState({
      header
    })
  }
  handleChange=(name,value)=>{
    this.setState({
      [name]:value
    })
  }
  save=()=>{
    this.props.updateUser(this.state)
  }
  render(){
    const {header,type} = this.props.user
    if(header) {//说明信息已完善
      const path = type === 'dashen' ? '/dashen' : '/laoban'
      return <Redirect to={path}/>
    }
    return(
      <div>
        <NavBar>用户信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <InputItem placeholder='请输入姓名' onChange={val=>{this.handleChange('post',val)}}>姓名:</InputItem>
        <TextareaItem placeholder='请输入个人介绍' title='个人介绍:' rows={3} onChange={val=>{this.handleChange('info',val)}}/>
        <Button onClick={this.save} type="primary">保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存</Button>
      </div>
    )
  }
}

export default connect(
  state=>({user:state.user}),
  {updateUser}
)(DashenInfo)