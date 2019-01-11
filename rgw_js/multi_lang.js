/**
 * Created by mathgl on 11/25/14.
 */

define([], function() {
    return {
        "labels": {
            "name": {"en": "Name", "kh": "ឈ្មោះរបស់", "zho": "名字", "vn": "tên"},
            "name1": {"en": "Alias", "kh": "ឈ្មោះក្លែងក្លាយ", "zho": "別名", "vn": "tên giả"},
            "time": {"en": "Time", "kh": "ពេលវេលា", "zh-tw": "時間", "vn": "thời gian"},
            "start": {"en": "start", "zh-cn": "开始", "zh-tw": "開始"},
            "stop": {"en": "stop", "zh-cn": "结束", "zh-tw": "結束"},
            "change_pwd": {"en": "change password", "zh-cn": "更改密码"},
            "new_pwd": {"en": "new password", "zh-cn": "新密码"},
            "join_group": {"en": "join/quit group", "zh-cn": "加入/退出 组"},
            "send_sms": {"en": "send sms", "zh-cn": "发送短信"},
            "view_log": {"en": "data log", "zh-cn": "历史数据"},
            "view_trend": {"en": "trend", "zh-cn": "历史趋势"},
            "view_recent_hours": {"en": "view recent hours", "zh-cn": "最近小时数据"},
            "hour_minute": {"en": "hour:minute", "zh-cn": "时:分", "zh-tw": "時:分"},
            "timezone": {"en": "timezone", "zh-cn": "时区"},
            "working_duration": {"en": "working duration", "zh-cn": "工作时长", "zh-tw": "工作時長"},
            "mins": {"en": "mins", "zh-cn": "分", "zh-tw": "分"},
            "secs": {"en": "secs", "zh-cn": "秒", "zh-tw": "秒"}
        },

        "tooltips": {
            "change_pwd_btn": {"en": "change user password", "zh-cn": "更改密码",
                               "kh": "ផ្លាស់ប្តូរពាក្យសម្ងាត់របស់", "vn": "đổi mật khẩu"}
        },

        "msgs": {
            "change_tracker_names_confirm": {"eng": "change names confirm !", "zho": "确认更改名字",
                                             "kh": "បញ្ជាក់ការផ្លាស់ប្តូរឈ្មោះរបស់", "vn": "thay đổi tên xác nhận"},
            "change_password_confirm": {"eng": "change password confirm !", "zho": "确认更改密码",
                                        "kh": "បញ្ជាក់ការផ្លាស់ប្តូរពាក្យសម្ងាត់របស់!", "vn": "thay đổi mật khẩu xác nhận"},
            "please_select_switch": {"en": "please select switch", "zh-cn": "请选择开关", "zh-tw": "請選擇開關"},
            "please_input_time": {"en": "please input time", "zh-cn": "請輸入时间", "zh-tw": "請輸入時間"},
            "op_ok": {"en": "ok", "zh-cn": "操作成功", "zh-tw": "操作成功"},
            "must_number": {"eng": "must be number", "zho": "必须为数字"},
            "incorrect_email_format": {"eng": "email address incorrect", "zho": "邮件格式不正确"},
            "select_email": {"eng": "please select emails", "zho": "请先选择邮件"},
            "incorrect_mobile_no_format": {"eng": " mobile no incorrect", "zho": "手机号码格式不正确"},
            "select_mobile_no": {"eng": "please select mobile no.", "zho": "请先选择手机号码"},
            "please_login": {"eng": "please login", "zho": "请登入"},
            "select_vehicle": {"eng": "select vehicle", "zho": "请先选择车辆"},
            "select_entry": {"eng": "select entry", "zho": "请先选择记录"},
            "empty_input": {"en": "empty is not allowed", "zh-cn": "输入不能为空", "zh-tw": "輸入不能為空"},
            "incorrect_name_format": {"eng": "incorrect naming", "zho": "名字不符要求"},
            "invalid_id": {"eng": "invalid id", "zho": "无效id"},
            "invalid_input": {"en": "invalid input", "zh-cn": "无效输入"},
            "invalid_pwd": {"en": "invalid password", "zh-cn": "密码无效"},
            "invalid_dt": {"en": "invalid date", "zh-cn": "日期无效"}
        },

        "errs" : {
            "server_error": {"en": "server error", "zh-cn": "系统错误", "zh-tw": "系統錯誤"},
            "number_format": {"en": "number incorrect", "zh-cn": "输入数字不正确", "zh-tw": "輸入數字不正確"},
            "timeout": {"en": "time out, please try again later", "zh-cn": "超时,请稍后再试", "zh-tw": "超時,請稍後再試"},
            "no_right": {"eng": "permission denied", "zh-cn": "没有权限", "zh-tw": "沒有權限"}
        }
    };
});