<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElNotification } from 'element-plus'
import { handleSDKErrorNotifi } from '@/utils/handleSomeData'
import { registerUser } from '@/api/register'
import { EaseChatClient } from '@/IM/initwebsdk'

/* emits */
const emits = defineEmits(['changeToLogin'])
const registerFormEl = ref(null)
const registerValue = reactive({
    username: '',
    password: '',
})
const rules = reactive({
    username: [
        { required: true, message: '请输入注册ID', trigger: 'blur' },
        { min: 1, max: 20, message: '注册ID应>1,<20', trigger: ['blur', 'change'] },
        { pattern: /^\w+$/, message: '由数字、26个英文字母或者下划线组成的注册ID', trigger: ['blur', 'change'] }
    ],
    password: [
        { required: true, message: '请输入注册密码', trigger: ['blur', 'change'] },
    ],
})


/* 发起注册 */
const registerIM = async (formEl) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
        if (valid) {
            try {
                await EaseChatClient.registerUser({
                    username: registerValue.username.toLowerCase(),
                    password: registerValue.password.toLowerCase(),
                })
                ElNotification({
                    title: 'Easemob',
                    message: '注册成功！',
                    center: true,
                    type: 'success',
                })
                //通知改变为登陆模式
                emits('changeToLogin')
            } catch (error) {
                if (error.response.data) {
                    const { code, errorInfo } = error.response.data
                    handleSDKErrorNotifi(code, errorInfo)
                }
            }

        }
    })
}
</script>

<template>
    <el-form ref="registerFormEl" :model="registerValue" :rules="rules">
        <el-form-item prop="username">
            <el-input class="login_input_style" v-model="registerValue.username" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item prop="password">
            <el-input class="login_input_style" type="password" v-model="registerValue.password" placeholder="请输入注册密码"
                show-password />
        </el-form-item>
        <el-form-item>
            <div class="function_button_box">
                <el-button @click="registerIM(registerFormEl)">注册</el-button>
            </div>
        </el-form-item>
    </el-form>

</template>

<style lang="scss" scoped>
.function_button_box {
    margin-top: 10px;
    width: 400px;

    button {
        margin: 10px;
        width: 380px;
        height: 50px;
        border-radius: 57px;
        background: linear-gradient(90deg, #04aef0 0%, #5a5dd0 100%);
        border: none;
        font-weight: 300;
        font-size: 17px;
        color: #F4F4F4;

        &:active {
            background: linear-gradient(90deg, #0b83b2 0%, #363df4 100%);
        }
    }
}

.login_input_style {
    margin: 3px 0;
    width: 400px;
    height: 50px;
    padding: 0 16px;
}

::v-deep .el-input__inner {
    padding: 0 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1.75px;
    color: #3A3A3A;

    &::placeholder {
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height */

        letter-spacing: 1.75px;
        text-transform: uppercase;

        color: #CCCCCC;
    }
}

::v-deep .el-form-item__error {
    margin-left: 16px;
}

::v-deep .el-input__suffix-inner {
    font-size: 20px;
    margin-right: 15px;
}

.login_text {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    text-align: right;

    .login_text_isuserid {
        display: inline-block;
        // width: 100px;
        color: #F9F9F9;
    }

    .login_text_tologin {
        margin-right: 20px;
        width: 80px;
        color: #05B5F1;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
}

.auth_code {
    width: 80px;
    height: 40px;
}
</style>