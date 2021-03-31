import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
const { RangePicker } = DatePicker;

export default class App extends Component {
	render() {
		return (
			<div>
				App....
				<button>Click me </button>
				<Button type="primary">But 1</Button>
				<Button >But 2</Button>
				<Button type="link">But3</Button>
				<Button type="primary" icon={<SearchOutlined />}>
					Search
				</Button>
				<WechatOutlined />
				<WeiboOutlined />
				<DatePicker/>
				<RangePicker/>
			</div>
		)
	}
}
