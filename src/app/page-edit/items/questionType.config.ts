import { TypeInfo, Option, MatrixOption } from 'src/app/QuestionType';

export const QuestionType: TypeInfo[] =  [
    {
        name: '单选题',
        id: 1
    },
    {
        name: '多选题',
        id: 2
    },
    {
        name: '单行问答题',
        id: 3
    },
    {
        name: '多行问答题',
        id: 4
    },
    {
        name: '描述说明',
        id: 5
    },
    {
        name: '排序题',
        id: 6
    },
    {
        name: '评分题',
        id: 7
    },
    {
        name: '矩阵题',
        id: 8
    },
    {
        name: '图片题',
        id: 9
    },
    {
        name: '文件上传',
        id: 10
    },
    {
        name: '下拉框',
        id: 11
    },
    {
        name: '日期',
        id: 12
    },
    {
        name: '多级下拉',
        id: 13
    },
    {
        name: '比重题',
        id: 14
    },
    {
        name: '分行填空题',
        id: 16
    }
]

export const defaultOptions: Option[] = [
    {
        optionId: 1,
        optionContent: '选项1'
    },
    {
        optionId: 2,
        optionContent: '选项2'
    }
]

export const defaultMatrixOptions: MatrixOption[] = [
    {
        matrixId: 1,
        matrixContent: '题目1'
    },
    {
        matrixId: 2,
        matrixContent: '题目2'
    }
]