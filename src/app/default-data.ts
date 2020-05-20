import { Questionnaire } from './QuestionType';

export const DefaultData: Questionnaire[] = [    
    {
        title: "肯耐珂萨招聘服务 客户调研-企业端 客户调研-企业端 客户调研-企业端 客户调研-企业端 客户调研-企业端",
        index: 0,
        describe: '',
        id: 1,
        createDate: new Date(2020, 3, 24),
        isLocked: true,
        isShowGreeting: false,
        isTop: true,
        questionList: [
            {
                id: 1,
                typeId: 1,
                name: '单选题',
                score: 10,
                mustFill: true,
                options: [
                    {
                        optionId: 1,
                        optionContent: '选项1'
                    },
                    {
                        optionId: 2,
                        optionContent: '选项2'
                    }
                ]
            },{
                id: 2,
                typeId: 2,
                name: '多选题',
                score: 10,
                mustFill: false,
                options: [
                    {
                        optionId: 1,
                        optionContent: '选项1'
                    },
                    {
                        optionId: 2,
                        optionContent: '选项2'
                    }
                ]
            }
        ]
    },{
        title: "CRM规则及CECS支持规则分享更新版",
        index: 1,
        describe: '',
        id: 2,
        createDate: new Date(2020, 3, 24),
        isLocked: true,
        isShowGreeting: false,
        isTop: true,
        questionList: [
            {
                id: 1,
                typeId: 1,
                name: '单选题',
                score: 10,
                mustFill: true,
                options: [
                    {
                        optionId: 1,
                        optionContent: '选项1'
                    },
                    {
                        optionId: 2,
                        optionContent: '选项2'
                    }
                ]
            },{
                id: 2,
                typeId: 2,
                name: '多选题',
                score: 10,
                mustFill: false,
                options: [
                    {
                        optionId: 1,
                        optionContent: '选项1'
                    },
                    {
                        optionId: 2,
                        optionContent: '选项2'
                    }
                ]
            }
        ]
    },{
        title: "测试问卷报表",
        index: 2,
        describe: '',
        id: 2,
        createDate: new Date(2020, 3, 24),
        isLocked: true,
        isShowGreeting: false,
        isTop: true,
        questionList: [
            {
                id: 1,
                typeId: 1,
                name: '单选题',
                score: 10,
                mustFill: true,
                options: [
                    {
                        optionId: 1,
                        optionContent: '选项1'
                    },
                    {
                        optionId: 2,
                        optionContent: '选项2'
                    }
                ]
            },{
                id: 2,
                typeId: 2,
                name: '多选题',
                score: 10,
                mustFill: false,
                options: [
                    {
                        optionId: 1,
                        optionContent: '选项1'
                    },
                    {
                        optionId: 2,
                        optionContent: '选项2'
                    }
                ]
            }
        ]
    },
]