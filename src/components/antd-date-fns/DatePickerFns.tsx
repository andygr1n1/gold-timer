import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'
import generatePicker from 'antd/es/date-picker/generatePicker'
import 'antd/es/date-picker/style/index'

const DatePickerFns = generatePicker<Date>(dateFnsGenerateConfig)

export default DatePickerFns
