import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'
import generatePicker from 'antd/es/date-picker/generatePicker'
import 'antd/es/date-picker/style/index'
import styled from 'styled-components/macro'

const DatePickerFns = generatePicker<Date>(dateFnsGenerateConfig)

export const RdDatePicker = styled(DatePickerFns)`
    padding: 8px 4px;

    width: 280px;

    input {
        font-size: 16px;
    }

    &:disabled {
        border: 1px solid transparent;
        cursor: default;
        color: #475569; //slate-600
    }
`
