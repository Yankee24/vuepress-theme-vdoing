(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{739:function(t,a,s){"use strict";s.r(a);var r=s(21),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("文末附下载方式")])]),t._v(" "),s("h3",{attrs:{id:"_1-什么是flink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是flink"}},[t._v("#")]),t._v(" 1. 什么是Flink")]),t._v(" "),s("p",[t._v("Flink是为分布式、高性能、随时可用以及准确的流处理应用程序打造的开源流处理框架。")]),t._v(" "),s("h3",{attrs:{id:"_2-flink的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-flink的特点"}},[t._v("#")]),t._v(" 2. Flink的特点")]),t._v(" "),s("h4",{attrs:{id:"_2-1-事件驱动型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-事件驱动型"}},[t._v("#")]),t._v(" 2.1 事件驱动型")]),t._v(" "),s("p",[t._v("事件驱动型应用是一类具有状态的应用，它从一个或者多个事件流提取数据，并根据到来的事件触发计算、状态更新或其他外部动作。")]),t._v(" "),s("h4",{attrs:{id:"_2-2-流与批的世界观"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-流与批的世界观"}},[t._v("#")]),t._v(" 2.2 流与批的世界观")]),t._v(" "),s("p",[t._v("批处理的特点是有界、持久、大量，非常适合需要访问全套记录才能完成的计算工作，一般用于离线计算。\n流处理的特点是无界、实时，无需针对整个数据集执行操作，而是对通过系统传输的每个数据项执行操作，一般用于实时统计。")]),t._v(" "),s("p",[t._v("有界数据流和无界数据流：")]),t._v(" "),s("ul",[s("li",[t._v("无界数据流有一个开始但是没有结束，它们不会在生成时终止并提供数据，必须连续处理无界流，也就是说必须在获取后立即处理event。对于无界数据流我们无法等待所有的数据都到达，因为输入是无界的，并且在任何时间点都不会完成。处理无界数据通常要求以特定顺序（例如事件发生的顺序）获取event，以便能够推断结果完整性。")]),t._v(" "),s("li",[t._v("有界数据流有明确定义的开始和结束，可以在执行任何计算之前通过获取所有数据来处理有界流，处理有界流不需要有序获取，因为可以始终对有界数据集进行排序，有界流的处理也被称为批处理。")])]),t._v(" "),s("h4",{attrs:{id:"_2-3-分层api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-分层api"}},[t._v("#")]),t._v(" 2.3 分层API")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://yanko.test.upcdn.net/images/Flink%20API.jpg",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"_3-flink和spark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-flink和spark"}},[t._v("#")]),t._v(" 3. Flink和Spark")]),t._v(" "),s("p",[t._v("Spark和Flink一开始都有同一个梦想，都希望可以使用一个技术把流处理和批处理统一起来。Spark是以批处理为根本，并尝试在批处理之上支持流计算；Flink是以流处理为根本，在流处理上支持批处理。Spark和Flink的主要区别就是计算模型不同，Spark采用了微批处理模型，而Flink采用了基于操作符的连续流模型。")]),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("font",{attrs:{color:"red",size:"4"}},[t._v("关注微信公众号《零基础学大数据》回复【Flink】领取全部PDF")])],1)])}),[],!1,null,null,null);a.default=i.exports}}]);