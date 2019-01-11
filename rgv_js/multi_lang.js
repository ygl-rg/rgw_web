/**
 * Created by mathgl on 11/25/14.
 */

define([], function() {
    return {
        "labels": {
            "name": {"eng": "Name", "kh": "ឈ្មោះរបស់", "zho": "名字", "vn": "tên"},
            "name1": {"eng": "Alias", "kh": "ឈ្មោះក្លែងក្លាយ", "zho": "別名", "vn": "tên giả"},
            "speed": {"eng": "Speed", "kh": "ល្បឿន", "zho": "時速", "vn": "tốc độ"},
            "time": {"eng": "Time", "kh": "ពេលវេលា", "zho": "時間", "vn": "thời gian"},
            "today_engine_on": {"eng": "Today Engine On", "zho": "今日引擎", "kh": "ម៉ាស៊ីនថ្ងៃនេះ", "vn": "động cơ"},
            "usd": {"eng": "USD", "zho": "美金"},
            "start": {"eng": "start", "zho": "开始"},
            "stop": {"eng": "stop", "zho": "结束"},
            "change_pwd": {"eng": "change password", "zho": "更改密码"},
            "new_pwd": {"eng": "new password", "zho": "新密码"},
            "join_group": {"eng": "join/quit group", "zho": "加入/退出 组"},
            "reset_client_expiry": {"eng": "reset client expiry", "zho": "重设租户到期"},
            "send_sms": {"eng": "send sms", "zho": "发送短信"},
            "view_log": {"eng": "data log", "zho": "历史数据"},
            "view_trend": {"eng": "trend", "zho": "历史趋势"},
            "view_recent_hours": {"eng": "view recent hours", "zho": "最近小时数据"},
            "hour_minute": {"eng": "hour:minute", "zho": "时:分"},
            "timezone": {"eng": "timezone", "zho": "时区"},
            "working_duration": {"eng": "working duration", "zho": "工作时长"},
            "mins": {"eng": "mins", "zho": "分"},
            "secs": {"eng": "secs", "zho": "秒"}
        },

        "tooltips": {
            "select_all_cars_btn": {"eng": "select/deselect all cars", "zho": "全选/取消 所有车辆",
                                    "kh": "ជ្រើសទាំងអស់", "vn": "chọn tất cả"},
            "set_car_names_btn": {"eng": "change car names", "zho": "更改车名",
                                  "kh": "ឈ្មោះរបស់ការផ្លាស់ប្តូរ", "vn": "thay đổi tên"},
            "change_pwd_btn": {"eng": "change user password", "zho": "更改密码",
                               "kh": "ផ្លាស់ប្តូរពាក្យសម្ងាត់របស់", "vn": "đổi mật khẩu"}
        },

        "msgs": {
            "change_tracker_names_confirm": {"eng": "change names confirm !", "zho": "确认更改名字",
                                             "kh": "បញ្ជាក់ការផ្លាស់ប្តូរឈ្មោះរបស់", "vn": "thay đổi tên xác nhận"},
            "change_password_confirm": {"eng": "change password confirm !", "zho": "确认更改密码",
                                        "kh": "បញ្ជាក់ការផ្លាស់ប្តូរពាក្យសម្ងាត់របស់!", "vn": "thay đổi mật khẩu xác nhận"},
            "please_select_relay_switch": {"eng": "please select relay switch", "zho": "请选择开关"},
            "please_select_serial_device": {"eng": "please select a device", "zho": "请选择设备"},
            "please_input_time": {"eng": "please input time", "zho": "請輸入時間"},
            "op_ok": {"eng": "ok", "zho": "操作成功"},
            "must_number": {"eng": "must be number", "zho": "必须为数字"},
            "incorrect_email_format": {"eng": "email address incorrect", "zho": "邮件格式不正确"},
            "select_email": {"eng": "please select emails", "zho": "请先选择邮件"},
            "incorrect_mobile_no_format": {"eng": " mobile no incorrect", "zho": "手机号码格式不正确"},
            "select_mobile_no": {"eng": "please select mobile no.", "zho": "请先选择手机号码"},
            "shooting_fail": {"eng": "shooting fail", "zho": "拍照失败"},
            "tracker_offline": {"eng": "tracker offline", "zho": "车机离线"},
            "camera_busy": {"eng": "camera is busy", "zho": "相机正在工作，请等待"},
            "please_login": {"eng": "please login", "zho": "请登入"},
            "select_vehicle": {"eng": "select vehicle", "zho": "请先选择车辆"},
            "select_entry": {"eng": "select entry", "zho": "请先选择记录"},
            "no_camera": {"eng": "no camera", "zho": "没有安装相机"},
            "empty_input": {"eng": "empty is not allowed", "zho": "输入不能为空"},
            "group_exist": {"eng": "group existed", "zho": "该组已经存在"},
            "user_exist": {"eng": "user existed", "zho": "该用户已经存在"},
            "tracker_exist": {"eng": "tracker existed", "zho": "该车机已经存在"},
            "incorrect_name_format": {"eng": "incorrect naming", "zho": "名字不符要求"},
            "invalid_id": {"eng": "invalid id", "zho": "无效id"},
            "invalid_input": {"eng": "invalid input", "zho": "无效输入"},
            "invalid_pwd": {"eng": "invalid password", "zho": "密码无效"},
            "invalid_dt": {"eng": "invalid date", "zho": "日期无效"}
        },

        "errs" : {
            "server_error": {"eng": "server error", "zho": "服务错误"},
            "number_format": {"eng": "number incorrect", "zho": "输入数字不正确"},
            "timeout": {"eng": "time out, please try again later", "zho": "超时,请稍后再试"},
            "no_valid_tracker_conn": {"eng": "tracker disconnected, try again later", "zho": "无法连接车机, 请稍后再试"},
            "no_right": {"eng": "permission denied", "zho": "没有权限"}
        },
        
        "dialog_title_tbl": {
            "shooting": {"eng": "Shooting", "zho": "拍照"},
            "shooting_conf": {"eng": "Shooting Conf", "zho": "拍照设置"}
        }
    };
});